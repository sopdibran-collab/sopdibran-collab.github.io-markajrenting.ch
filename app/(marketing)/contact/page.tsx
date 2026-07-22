import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/sections/ContactForm";
import { Hero } from "@/components/sections/Hero";
import { TrustPanel } from "@/components/sections/TrustPanel";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceSlugs } from "@/lib/content/services";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Contact et demande de devis",
  description:
    "Demandez un devis gratuit pour vos travaux de plâtrerie, peinture ou rénovation en Suisse romande. Réponse sous 5 jours ouvrés.",
  path: "/contact",
});

interface ContactPageProps {
  searchParams?: { service?: string };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const requestedService = searchParams?.service ?? "";
  const defaultService = (serviceSlugs as readonly string[]).includes(requestedService)
    ? requestedService
    : "";

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ label: "Contact" }])} />
      <div className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      <Hero
        title="Demande de devis"
        subtitle="Décrivez votre projet de plâtrerie, peinture, isolation ou rénovation. Devis gratuit, sans engagement — nous vous recontactons sous 5 jours ouvrés."
        primaryCta={{ label: "079 430 18 13", href: "tel:+41794301813" }}
      />

      <Section background="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              subtitle="Formulaire"
              index="01"
              title="Parlez-nous de votre chantier"
              intro="Indiquez le type de travaux et la localisation : nous préparons une réponse concrète et, si besoin, une visite sur site."
            />
            <ContactForm defaultService={defaultService} />
          </div>

          <div>
            <SectionHeading subtitle="Coordonnées" index="02" title="Nous joindre" />
            <TrustPanel />
          </div>
        </div>
      </Section>
    </>
  );
}
