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
  title: "Second œuvre en Suisse romande",
  description:
    "Markaj Renting SA, créée en 2018 à Fribourg, compte 20 collaborateurs. Plâtrerie, peinture, faux-plafonds, isolation, rénovation et façades en Suisse romande.",
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
        subtitle="Entreprise de second œuvre créée en 2018 à Fribourg, 20 collaborateurs. Interventions en Suisse romande — devis gratuit sous 5 jours."
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
