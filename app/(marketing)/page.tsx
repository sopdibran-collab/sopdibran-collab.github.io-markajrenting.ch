import { AudienceStrip } from "@/components/sections/AudienceStrip";
import { AvisGoogle } from "@/components/sections/AvisGoogle";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ExpertisesGrid } from "@/components/sections/ExpertisesGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { MethodSteps } from "@/components/sections/MethodSteps";
import { RealisationsTeaser } from "@/components/sections/RealisationsTeaser";
import { WhyMarkaj } from "@/components/sections/WhyMarkaj";
import { ZonesTeaser } from "@/components/sections/ZonesTeaser";
import { generalFaq } from "@/lib/content/faq";
import { siteConfig } from "@/lib/seo/site-config";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Plâtrerie, peinture et rénovation à Fribourg",
  description:
    "Entreprise familiale à Fribourg. Plâtrerie, peinture, isolation et rénovation en Suisse romande. Devis gratuit sous 5 jours.",
  path: "/",
});

const homeFaq = generalFaq.slice(0, 4);

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
      <ExpertisesGrid />
      <MethodSteps />
      <RealisationsTeaser />
      <WhyMarkaj />
      <AvisGoogle />
      <AudienceStrip />
      <ZonesTeaser />
      <FaqSection
        title="Questions fréquentes"
        intro="Devis, délais, zones et garanties : les réponses essentielles avant de nous contacter."
        items={homeFaq}
        background="white"
      />
      <CtaBanner />
    </>
  );
}
