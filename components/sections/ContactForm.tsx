"use client";

import { submitContactRequest, type ContactFormState } from "@/app/(marketing)/contact/actions";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" variant="primary" size="lg" disabled={pending}>
      {pending ? "Envoi en cours…" : "Envoyer la demande"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactRequest, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-markaj border border-markaj-primary/20 bg-markaj-surface p-8"
      >
        <p className="font-heading text-heading-4 text-markaj-primary">
          Merci, votre demande a bien été envoyée.
        </p>
        <p className="mt-3 font-body text-body text-markaj-mineral-dark">
          Nous vous recontactons dans les meilleurs délais pour planifier une visite
          sur site. Pour toute urgence, appelez-nous au{" "}
          <a href="tel:+41794301813" className="font-medium text-markaj-primary underline underline-offset-4">
            079 430 18 13
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" action={formAction}>
      {/* Honeypot anti-spam : caché aux humains, rempli par les bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="entreprise_web">Ne pas remplir ce champ</label>
        <input type="text" id="entreprise_web" name="entreprise_web" tabIndex={-1} autoComplete="off" />
      </div>

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
        <label htmlFor="email" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
          E-mail *
        </label>
        <input type="email" id="email" name="email" required autoComplete="email" className="form-input" />
      </div>
      <div>
        <label htmlFor="telephone" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
          Téléphone
        </label>
        <input type="tel" id="telephone" name="telephone" autoComplete="tel" className="form-input" />
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
          Type de travaux
        </label>
        <select id="service" name="service" className="form-input">
          <option value="">Sélectionnez un service</option>
          <option value="platrerie">Plâtrerie</option>
          <option value="peinture">Peinture</option>
          <option value="faux-plafonds">Faux-plafonds</option>
          <option value="isolation">Isolation</option>
          <option value="renovation">Rénovation</option>
          <option value="facades">Façades</option>
          <option value="autre">Autre</option>
        </select>
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
          placeholder="Surface approximative, localisation, délais souhaités…"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consentement"
          name="consentement"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-markaj-primary"
        />
        <label htmlFor="consentement" className="font-body text-body-sm text-markaj-mineral-dark">
          J&apos;accepte que mes données soient utilisées pour traiter ma demande de
          devis, conformément à la{" "}
          <Link href="/politique-confidentialite" className="text-markaj-primary underline underline-offset-4">
            politique de confidentialité
          </Link>
          . *
        </label>
      </div>

      {state.status === "error" && (
        <p role="alert" className="rounded-markaj border border-red-200 bg-red-50 p-4 font-body text-body-sm text-red-800">
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
