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
      <div className="mx-auto max-w-content px-6 pt-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Politique de confidentialité" }]} />
      </div>

      <Section background="white" className="py-12">
        <div className="mx-auto max-w-prose">
          <h1 className="font-heading text-heading-1 text-markaj-primary">
            Politique de confidentialité
          </h1>

          <p className="mt-6 font-body text-body text-markaj-mineral-dark">
            {siteConfig.legalName} accorde une grande importance à la protection de vos données
            personnelles. La présente politique décrit comment nous collectons, utilisons et protégeons
            vos informations conformément à la loi fédérale suisse sur la protection des données (LPD).
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">
            Données collectées
          </h2>
          <p className="mt-3 font-body text-body text-markaj-mineral-dark">
            Via le formulaire de contact, nous collectons les données que vous nous communiquez
            volontairement : nom, prénom, adresse e-mail, numéro de téléphone et description de votre
            projet. Des données de navigation anonymisées peuvent être collectées à des fins statistiques.
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">
            Utilisation des données
          </h2>
          <p className="mt-3 font-body text-body text-markaj-mineral-dark">
            Vos données sont utilisées exclusivement pour répondre à vos demandes de devis, vous
            recontacter dans le cadre de votre projet et assurer le suivi commercial. Elles ne sont
            ni vendues ni transmises à des tiers à des fins marketing.
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">
            Vos droits
          </h2>
          <p className="mt-3 font-body text-body text-markaj-mineral-dark">
            Conformément à la LPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de
            suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à{" "}
            <a href={`mailto:${siteConfig.contact.email}`} className="text-markaj-primary hover:underline">
              {siteConfig.contact.email}
            </a>.
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">
            Cookies
          </h2>
          <p className="mt-3 font-body text-body text-markaj-mineral-dark">
            Ce site peut utiliser des cookies techniques nécessaires à son fonctionnement. Aucun cookie
            publicitaire n&apos;est déposé sans votre consentement préalable.
          </p>
        </div>
      </Section>
    </>
  );
}
