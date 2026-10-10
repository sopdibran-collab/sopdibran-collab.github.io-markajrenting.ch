"use client";

import { submitContactRequest, type ContactFormState } from "@/app/(marketing)/contact/actions";
import { Button } from "@/components/ui/Button";
import { HONEYPOT_FIELDS } from "@/lib/contact/honeypot";
import {
  CONTACT_GROUP_MESSAGE,
  EMAIL_FORMAT_MESSAGE,
  EMAIL_PATTERN,
} from "@/lib/contact/quote-request";
import { resolveTurnstileSiteKey } from "@/lib/contact/turnstile-public";
import { services } from "@/lib/content/services";
import { siteConfig } from "@/lib/seo/site-config";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const initialState: ContactFormState = { status: "idle" };
const siteKey = resolveTurnstileSiteKey();

type TurnstileRenderOptions = {
  sitekey: string;
  execution?: "render" | "execute";
  appearance?: "always" | "execute" | "interaction-only";
  theme?: "light" | "dark" | "auto";
  language?: string;
  action?: string;
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="primary" size="lg" disabled={pending} className="w-full">
      {pending ? "Envoi en cours…" : "Demander mon devis gratuit"}
    </Button>
  );
}

interface ContactFormProps {
  defaultService?: string;
  formToken: string;
}

export function ContactForm({ defaultService = "", formToken }: ContactFormProps) {
  const [state, formAction] = useFormState(submitContactRequest, initialState);
  const [securityError, setSecurityError] = useState("");
  const [contactError, setContactError] = useState("");
  const [emailError, setEmailError] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!siteKey) return;
    const container = widgetRef.current;
    if (!container) return;

    let widgetId: string | null = null;
    let stopped = false;

    const renderWidget = () => {
      if (stopped || widgetId || !window.turnstile) return false;
      widgetId = window.turnstile.render(container, {
        sitekey: siteKey,
        appearance: "interaction-only",
        theme: "light",
        language: "fr",
        action: "contact",
        "error-callback": () => {
          setSecurityError(
            `La vérification de sécurité n'a pas abouti. Rechargez la page ou appelez-nous au ${siteConfig.contact.phoneDisplay}.`
          );
        },
        "expired-callback": () => {
          if (widgetId && window.turnstile) window.turnstile.reset(widgetId);
        },
      });
      return true;
    };

    if (renderWidget()) {
      return () => {
        stopped = true;
        if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
      };
    }

    const timer = window.setInterval(() => {
      if (renderWidget()) window.clearInterval(timer);
    }, 200);
    const giveUp = window.setTimeout(() => window.clearInterval(timer), 10_000);

    return () => {
      stopped = true;
      window.clearInterval(timer);
      window.clearTimeout(giveUp);
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, []);

  useEffect(() => {
    if (state.status !== "error" || !state.message) return;
    if (state.field === "contact") {
      setContactError(state.message);
      setEmailError("");
      phoneRef.current?.focus();
      return;
    }
    if (state.field === "email") {
      setEmailError(state.message);
      setContactError("");
      emailRef.current?.focus();
    }
  }, [state]);

  function clearGroupIfReachable(telephone: string, email: string) {
    if (telephone.trim() || email.trim()) setContactError("");
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const telephone = phoneRef.current?.value.trim() ?? "";
    const email = emailRef.current?.value.trim() ?? "";

    if (!telephone && !email) {
      event.preventDefault();
      setEmailError("");
      setContactError(CONTACT_GROUP_MESSAGE);
      phoneRef.current?.focus();
      return;
    }

    if (email && !EMAIL_PATTERN.test(email)) {
      event.preventDefault();
      setContactError("");
      setEmailError(EMAIL_FORMAT_MESSAGE);
      emailRef.current?.focus();
      return;
    }

    setContactError("");
    setEmailError("");

    if (!siteKey) return;

    const token = new FormData(event.currentTarget).get("cf-turnstile-response");
    if (typeof token === "string" && token.length > 0) {
      setSecurityError("");
      return;
    }

    event.preventDefault();
    setSecurityError(
      `La vérification de sécurité n'a pas abouti. Rechargez la page ou appelez-nous au ${siteConfig.contact.phoneDisplay}.`
    );
  }

  function handleEmailInvalid(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    setContactError("");
    setEmailError(EMAIL_FORMAT_MESSAGE);
    event.currentTarget.focus();
  }

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="border border-markaj-primary/20 bg-markaj-surface p-6 sm:p-8"
      >
        <p className="font-heading text-heading-4 text-markaj-primary">
          Merci, votre demande a bien été envoyée.
        </p>
        <p className="mt-3 font-body text-body text-markaj-primary">
          <Link href="/merci" className="font-medium text-markaj-primary underline underline-offset-4">
            Continuer
          </Link>
        </p>
      </div>
    );
  }

  const formError =
    securityError ||
    (state.status === "error" && state.field !== "contact" && state.field !== "email"
      ? state.message
      : "");
  const nomError = state.status === "error" && state.field === "nom" ? state.message : "";
  const serviceError = state.status === "error" && state.field === "service" ? state.message : "";
  const communeError = state.status === "error" && state.field === "commune" ? state.message : "";
  const phoneDescribedBy = contactError ? "contact-joignable" : undefined;
  const emailDescribedBy = [contactError ? "contact-joignable" : null, emailError ? "email-erreur" : null]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <form
      id="formulaire"
      className="relative scroll-mt-[69px] space-y-5 sm:scroll-mt-[81px]"
      action={formAction}
      onSubmit={handleSubmit}
    >
      {siteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
        />
      ) : null}

      <div className="mk-hp" aria-hidden="true">
        {HONEYPOT_FIELDS.map((field) => (
          <p key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type="text"
              id={field.name}
              name={field.name}
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
              data-1p-ignore="true"
              data-lpignore="true"
            />
          </p>
        ))}
      </div>

      <input type="hidden" name="form_token" value={formToken} />

      <div>
        <label htmlFor="nom" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
          Nom et prénom
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          required
          autoComplete="name"
          aria-invalid={nomError ? true : undefined}
          aria-describedby={nomError ? "nom-erreur" : undefined}
          className="form-input"
        />
        {nomError ? (
          <p id="nom-erreur" role="alert" className="mt-1.5 font-body text-body-sm text-red-800">
            {nomError}
          </p>
        ) : null}
      </div>

      <fieldset className="min-w-0 border-0 p-0">
        <legend className="mb-1.5 font-body text-body-sm text-markaj-primary">
          <span className="font-medium">Comment vous joindre ?</span> Indiquez au moins un téléphone ou un e-mail.
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="telephone" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
              Téléphone
            </label>
            <input
              ref={phoneRef}
              type="tel"
              id="telephone"
              name="telephone"
              inputMode="tel"
              autoComplete="tel"
              aria-invalid={contactError ? true : undefined}
              aria-describedby={phoneDescribedBy}
              className="form-input"
              placeholder="079 000 00 00"
              onChange={(event) => clearGroupIfReachable(event.target.value, emailRef.current?.value ?? "")}
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
              E-mail
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              inputMode="email"
              autoComplete="email"
              aria-invalid={contactError || emailError ? true : undefined}
              aria-describedby={emailDescribedBy}
              className="form-input"
              onInvalid={handleEmailInvalid}
              onChange={(event) => {
                clearGroupIfReachable(phoneRef.current?.value ?? "", event.target.value);
                const email = event.target.value.trim();
                if (!email || EMAIL_PATTERN.test(email)) setEmailError("");
              }}
            />
            {emailError ? (
              <p id="email-erreur" role="alert" className="mt-1.5 font-body text-body-sm text-red-800">
                {emailError}
              </p>
            ) : null}
          </div>
        </div>
        {contactError ? (
          <p id="contact-joignable" role="alert" className="mt-2 font-body text-body-sm text-red-800">
            {contactError}
          </p>
        ) : null}
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
            Type de travaux
          </label>
          <select
            id="service"
            name="service"
            required
            className="form-input"
            defaultValue={defaultService}
            aria-invalid={serviceError ? true : undefined}
            aria-describedby={serviceError ? "service-erreur" : undefined}
          >
            <option value="">Choisissez un type de travaux</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="autre">Autre</option>
          </select>
          {serviceError ? (
            <p id="service-erreur" role="alert" className="mt-1.5 font-body text-body-sm text-red-800">
              {serviceError}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="commune" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
            Commune du chantier
          </label>
          <input
            type="text"
            id="commune"
            name="commune"
            required
            autoComplete="address-level2"
            aria-invalid={communeError ? true : undefined}
            aria-describedby={communeError ? "commune-erreur" : undefined}
            className="form-input"
            placeholder="Par ex. Fribourg, Bulle"
          />
          {communeError ? (
            <p id="commune-erreur" role="alert" className="mt-1.5 font-body text-body-sm text-red-800">
              {communeError}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
          Votre projet <span className="font-normal">(facultatif)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="form-input !h-24 !min-h-24 resize-y"
          placeholder="Surface, délais, contraintes…"
        />
      </div>

      <div ref={widgetRef} />

      {formError ? (
        <p role="alert" className="border border-red-200 bg-red-50 p-4 font-body text-body-sm text-red-800">
          {formError}
        </p>
      ) : null}

      <div>
        <p className="mb-3 font-body text-sm text-markaj-primary">
          Vos données servent uniquement à traiter votre demande.{" "}
          <Link href="/politique-confidentialite" className="text-markaj-primary underline underline-offset-4">
            Politique de confidentialité
          </Link>
        </p>
        <SubmitButton />
        <p className="mt-3 font-body text-sm text-markaj-primary">
          Sans engagement · réponse sous 5 jours ouvrés
        </p>
      </div>
    </form>
  );
}
