import { AudienceStrip } from "@/components/sections/AudienceStrip";
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
  title: "Plâtrerie, peinture et rénovation Fribourg, Lausanne, Genève",
  description:
    "Entreprise familiale à Fribourg. Plâtrerie, peinture, isolation et rénovation à Fribourg, Lausanne, Genève et en Suisse romande. Devis gratuit sous 5 jours.",
  path: "/",
});

const homeFaq = generalFaq.slice(0, 4);

export default function HomePage() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <>
      <Hero
        eyebrow="Fribourg · Suisse romande"
        title="Plâtrerie, peinture et finitions de bâtiment"
        subtitle="Entreprise familiale à Fribourg. Travaux soignés en neuf et rénovation — devis gratuit sous 5 jours."
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
