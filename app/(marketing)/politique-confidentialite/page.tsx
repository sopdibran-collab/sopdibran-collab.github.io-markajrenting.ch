import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de Markaj Renting SA. Protection de vos données personnelles conformément au RGPD et à la LPD suisse.",
  path: "/politique-confidentialite",
});

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ label: "Politique de confidentialité" }])} />
      <div className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Politique de confidentialité" }]} />
      </div>

      <Section background="white" className="py-12">
        <div className="mx-auto max-w-prose">
          <h1 className="font-heading text-heading-1 text-markaj-primary">
            Politique de confidentialité
          </h1>

          <p className="mt-6 font-body text-body text-markaj-primary">
            {siteConfig.legalName} accorde une grande importance à la protection de vos données
            personnelles. La présente politique décrit comment nous collectons, utilisons et protégeons
            vos informations conformément à la loi fédérale suisse sur la protection des données (LPD).
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">
            Données collectées
          </h2>
          <p className="mt-3 font-body text-body text-markaj-primary">
            Via le formulaire de contact, nous collectons les données que vous nous communiquez
            volontairement : nom, prénom, adresse e-mail, numéro de téléphone et description de votre
            projet. Des statistiques de visite ne sont collectées que si vous acceptez Google
            Analytics, comme décrit ci-dessous.
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">
            Utilisation des données
          </h2>
          <p className="mt-3 font-body text-body text-markaj-primary">
            Les données du formulaire sont utilisées exclusivement pour répondre à vos demandes de
            devis, vous recontacter dans le cadre de votre projet et assurer le suivi commercial.
            Elles ne sont ni vendues ni transmises à des tiers à des fins marketing.
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">
            Vos droits
          </h2>
          <p className="mt-3 font-body text-body text-markaj-primary">
            Conformément à la LPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
            suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-markaj-primary hover:underline">
              {siteConfig.contact.email}
            </a>.
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">
            Protection du formulaire
          </h2>
          <p className="mt-3 font-body text-body text-markaj-primary">
            Pour limiter les envois automatisés, le formulaire de contact utilise un contrôle
            technique fourni par Cloudflare (Turnstile). Cette vérification peut traiter
            l&apos;adresse IP et des caractéristiques du navigateur, uniquement pour distinguer
            une personne d&apos;un robot. Ces informations ne sont pas utilisées à des fins
            publicitaires et ne sont pas vendues.
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">
            Mesure d&apos;audience (Google Analytics 4)
          </h2>
          <p className="mt-3 font-body text-body text-markaj-primary">
            Si vous l&apos;acceptez, {siteConfig.legalName} mesure la fréquentation de ce site avec
            Google Analytics 4.
          </p>
          <p className="mt-3 font-body text-body text-markaj-primary">
            <span className="font-semibold">Finalité.</span> Produire des statistiques de visite :
            pages consultées, parcours approximatif sur le site, type d&apos;appareil. Cette mesure
            ne sert pas à afficher de la publicité personnalisée.
          </p>
          <p className="mt-3 font-body text-body text-markaj-primary">
            <span className="font-semibold">Destinataire.</span> Google (Google LLC et Google Ireland
            Limited).
          </p>
          <p className="mt-3 font-body text-body text-markaj-primary">
            <span className="font-semibold">Transfert vers les États-Unis.</span> Les données traitées
            par Google Analytics peuvent être transférées et traitées aux États-Unis.
          </p>
          <p className="mt-3 font-body text-body text-markaj-primary">
            <span className="font-semibold">Consentement.</span> Le bandeau en bas de page demande
            votre accord avant le chargement du script Google et avant le dépôt des cookies de mesure.
            « Refuser » et « Accepter » ont le même effet, en un clic. Sans choix, ou après un refus,
            Google Analytics reste bloqué.
          </p>
          <p className="mt-3 font-body text-body text-markaj-primary">
            Votre choix est enregistré dans la mémoire locale de ce navigateur pendant 12 mois, ou
            jusqu&apos;à un changement de version du bandeau. Le lien « Gérer les cookies », dans le
            pied de page, rouvre le bandeau. Si vous refusez après avoir accepté, les cookies dont le
            nom commence par « _ga » sont supprimés.
          </p>
          <p className="mt-3 font-body text-body text-markaj-primary">
            <span className="font-semibold">Durée de conservation des données chez Google.</span>{" "}
            [À COMPLÉTER — durée de conservation configurée dans Google Analytics 4. Elle n&apos;est
            pas connue au moment de la rédaction et ne doit pas être inventée.]
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">
            Cookies
          </h2>
          <p className="mt-3 font-body text-body text-markaj-primary">
            Ce site peut déposer des cookies techniques nécessaires à son fonctionnement, par exemple
            pour la protection du formulaire de contact. Les cookies de mesure Google Analytics
            (_ga, _ga_…) ne sont déposés qu&apos;après votre accord. Aucun cookie publicitaire
            n&apos;est déposé.
          </p>
        </div>
      </Section>
    </>
  );
}
