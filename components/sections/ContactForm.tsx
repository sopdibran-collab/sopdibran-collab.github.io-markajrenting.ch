"use client";

import { submitContactRequest, type ContactFormState } from "@/app/(marketing)/contact/actions";
import { Button } from "@/components/ui/Button";
import { HONEYPOT_FIELDS } from "@/lib/contact/honeypot";
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
    <Button type="submit" variant="primary" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Envoi en cours…" : "Envoyer la demande"}
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
  const widgetRef = useRef<HTMLDivElement>(null);

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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
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

  const errorMessage = securityError || (state.status === "error" ? state.message : "");

  return (
    <form className="relative space-y-5" action={formAction} onSubmit={handleSubmit}>
      {siteKey ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
        />
      ) : null}

      <p className="font-body text-body-sm text-markaj-primary">
        Devis gratuit · Sans engagement · Réponse sous 5 jours ouvrés
      </p>

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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="prenom" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
            Prénom *
          </label>
          <input type="text" id="prenom" name="prenom" required autoComplete="given-name" className="form-input" />
        </div>
        <div>
          <label htmlFor="nom" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
            Nom *
          </label>
          <input type="text" id="nom" name="nom" required autoComplete="family-name" className="form-input" />
        </div>
      </div>

      <div>
        <label htmlFor="societe" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
          Société <span className="font-normal text-markaj-primary">(optionnel)</span>
        </label>
        <input
          type="text"
          id="societe"
          name="societe"
          autoComplete="organization"
          className="form-input"
          placeholder="Régie, entreprise, bureau d'architectes…"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
            E-mail *
          </label>
          <input type="email" id="email" name="email" required autoComplete="email" className="form-input" />
        </div>
        <div>
          <label htmlFor="telephone" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
            Téléphone
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            autoComplete="tel"
            className="form-input"
            placeholder="079 000 00 00"
          />
          <p className="mt-1.5 font-body text-caption text-markaj-primary">
            Recommandé pour un rappel plus rapide
          </p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
            Type de travaux
          </label>
          <select id="service" name="service" className="form-input" defaultValue={defaultService}>
            <option value="">Sélectionnez un service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="commune" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
            Commune / chantier <span className="font-normal text-markaj-primary">(optionnel)</span>
          </label>
          <input
            type="text"
            id="commune"
            name="commune"
            autoComplete="address-level2"
            className="form-input"
            placeholder="Votre commune"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
          Décrivez votre projet *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="form-input"
          placeholder="Surface approximative, type de local, délais souhaités, contraintes particulières…"
        />
        <p className="mt-1.5 font-body text-caption text-markaj-primary">
          Plus votre description est précise, plus notre devis sera pertinent.
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center">
          <input
            type="checkbox"
            id="consentement"
            name="consentement"
            required
            className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
          />
          <span
            aria-hidden="true"
            className="mk-check pointer-events-none h-6 w-6 border-2 border-markaj-primary bg-markaj-white"
          />
        </span>
        <label htmlFor="consentement" className="font-body text-body-sm text-markaj-primary">
          J&apos;accepte que mes données soient utilisées pour traiter ma demande de
          devis, conformément à la{" "}
          <Link href="/politique-confidentialite" className="text-markaj-primary underline underline-offset-4">
            politique de confidentialité
          </Link>
          . *
        </label>
      </div>

      <div ref={widgetRef} />

      {errorMessage ? (
        <p role="alert" className="border border-red-200 bg-red-50 p-4 font-body text-body-sm text-red-800">
          {errorMessage}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}
