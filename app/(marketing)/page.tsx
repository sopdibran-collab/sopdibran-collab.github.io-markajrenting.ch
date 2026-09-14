import { AudienceStrip } from "@/components/sections/AudienceStrip";
import { AvisGoogle } from "@/components/sections/AvisGoogle";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ExpertisesGrid } from "@/components/sections/ExpertisesGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { MethodSteps } from "@/components/sections/MethodSteps";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { RealisationsTeaser } from "@/components/sections/RealisationsTeaser";
import { WhyMarkaj } from "@/components/sections/WhyMarkaj";
import { ZonesTeaser } from "@/components/sections/ZonesTeaser";
import { generalFaq } from "@/lib/content/faq";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata = createPageMetadata({
  title: "Plâtrerie, peinture et rénovation à Fribourg",
  description:
    "Entreprise familiale à Fribourg. Plâtrerie, peinture, isolation et rénovation en Suisse romande. Devis gratuit sous 5 jours.",
  path: "/",
});

const homeFaq = generalFaq.slice(0, 4);

/**
 * Mid-page rhythm (layout B + avis) :
 * navy proof → expertises (white) → pourquoi (sand) → avis (sand) → …
 * → navy CTA. SEO blocks (réalisations, méthode, zones, FAQ) retained.
 */
export default function HomePage() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <>
      <Hero
        eyebrow="Fribourg · Suisse romande"
        addressLine={`${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`}
        title="Plâtrerie, peinture et rénovation à Fribourg"
        subtitle="Entreprise familiale basée à Fribourg. Travaux soignés en neuf et rénovation en Suisse romande — devis gratuit sous 5 jours."
        primaryCta={{ label: "Demander un devis", href: "/contact" }}
        secondaryCta={{
          label: `Appeler ${siteConfig.contact.phoneDisplay}`,
          href: phoneHref,
        }}
        image={{
          src: "/realisations/plateau-tertiaire-livraison.webp",
          alt: "Rénovation de plateau de bureaux à l'OMS Genève — plafonds peints et plâtrerie Markaj Renting SA",
        }}
      />
      <ProofStrip />
      <ExpertisesGrid />
      <WhyMarkaj />
      <AvisGoogle />
      <RealisationsTeaser />
      <MethodSteps />
      <AudienceStrip />
      <ZonesTeaser />
      <FaqSection
        title="Questions fréquentes"
        intro="Devis, délais, zones et garanties : les réponses essentielles avant de nous contacter."
        items={homeFaq}
        background="white"
        className="!py-8 sm:!py-10 md:!py-12"
      />
      <CtaBanner />
    </>
  );
}
