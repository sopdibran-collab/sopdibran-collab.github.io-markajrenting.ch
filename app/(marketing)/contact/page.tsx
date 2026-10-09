import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/sections/ContactForm";
import { CtaPair } from "@/components/sections/CtaPair";
import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/Button";
import { TrustPanel } from "@/components/sections/TrustPanel";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceSlugs } from "@/lib/content/services";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { issueFormToken } from "@/lib/contact/form-token";
import { siteConfig } from "@/lib/seo/site-config";

export const dynamic = "force-dynamic";

export const metadata = createPageMetadata({
  title: "Devis gratuit plâtrerie-peinture",
  description:
    "Demande de devis pour plâtrerie, peinture, faux-plafonds, isolation, rénovation ou façades en Suisse romande. Réponse sous 5 jours ouvrés.",
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
  const formToken = issueFormToken();
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <>
      <link rel="preconnect" href="https://challenges.cloudflare.com" />
      <JsonLd data={buildBreadcrumbSchema([{ label: "Contact" }])} />
      <div className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      <Hero
        title="Demande de devis"
        subtitle="Décrivez votre projet de second œuvre : plâtrerie, peinture, faux-plafonds, isolation, rénovation ou façades. Devis gratuit, sans engagement — réponse sous 5 jours ouvrés."
      >
        <div className="mt-8 sm:mt-10 md:hidden">
          <CtaPair
            tone="light"
            phoneLine
            primary={{ label: "Devis gratuit", href: "#demande", size: "lg" }}
            secondary={{
              label: `Appeler ${siteConfig.contact.phoneDisplay}`,
              href: phoneHref,
              size: "lg",
            }}
          />
        </div>
        <div className="mt-8 hidden sm:mt-10 md:block">
          <Button href={phoneHref} variant="primary" size="lg" className="w-auto">
            Appeler {siteConfig.contact.phoneDisplay}
          </Button>
        </div>
      </Hero>

      <Section id="demande" background="white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              subtitle="Formulaire"
              title="Parlez-nous de votre chantier"
              intro="Indiquez le type de travaux et la localisation : nous préparons une réponse concrète et, si besoin, une visite sur site."
            />
            <ContactForm defaultService={defaultService} formToken={formToken} />
          </div>

          <div>
            <SectionHeading subtitle="Coordonnées" title="Nous joindre" />
            <TrustPanel />
          </div>
        </div>
      </Section>
    </>
  );
}
