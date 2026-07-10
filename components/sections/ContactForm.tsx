"use client";

import { submitContactRequest, type ContactFormState } from "@/app/(marketing)/contact/actions";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/content/services";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

const initialState: ContactFormState = { status: "idle" };

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
}

export function ContactForm({ defaultService = "" }: ContactFormProps) {
  const [state, formAction] = useFormState(submitContactRequest, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="border border-markaj-primary/20 bg-markaj-surface p-6 sm:p-8"
      >
        <p className="font-heading text-heading-4 text-markaj-primary">
          Merci, votre demande a bien été envoyée.
        </p>
        <p className="mt-3 font-body text-body text-markaj-mineral-dark">
          Nous vous recontactons sous 5 jours ouvrés pour préciser votre besoin et
          planifier une visite sur site si nécessaire. Pour toute urgence, appelez-nous au{" "}
          <a href="tel:+41794301813" className="font-medium text-markaj-primary underline underline-offset-4">
            079 430 18 13
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-5" action={formAction} noValidate={false}>
      <p className="font-body text-body-sm text-markaj-mineral">
        Devis gratuit · Sans engagement · Réponse sous 5 jours ouvrés
      </p>

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
        <label htmlFor="societe" className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary">
          Société <span className="font-normal text-markaj-mineral">(optionnel)</span>
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
          <p className="mt-1.5 font-body text-caption text-markaj-mineral">
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
            Commune / chantier <span className="font-normal text-markaj-mineral">(optionnel)</span>
          </label>
          <input
            type="text"
            id="commune"
            name="commune"
            autoComplete="address-level2"
            className="form-input"
            placeholder="Fribourg, Lausanne, Genève…"
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
        <p className="mt-1.5 font-body text-caption text-markaj-mineral">
          Plus votre description est précise, plus notre devis sera pertinent.
        </p>
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
        <p role="alert" className="border border-red-200 bg-red-50 p-4 font-body text-body-sm text-red-800">
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
