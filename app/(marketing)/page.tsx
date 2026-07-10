import { AudienceStrip } from "@/components/sections/AudienceStrip";
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
import { siteConfig } from "@/lib/seo/site-config";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Plâtrerie, peinture et rénovation en Suisse romande",
  description:
    "Markaj Renting SA — entreprise familiale de plâtrerie, peinture, faux-plafonds, isolation et rénovation à Fribourg. 20 ans d'expérience, 20 collaborateurs.",
  path: "/",
});

const homeFaq = generalFaq.slice(0, 4);

export default function HomePage() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <>
      <Hero
        title="Plâtrerie, peinture et finitions de bâtiment en Suisse romande"
        subtitle="Entreprise familiale basée à Fribourg, Markaj Renting SA réalise vos travaux de plâtrerie, peinture, faux-plafonds, isolation, rénovation et façades — en neuf comme en rénovation. Plus de 20 ans d'expérience, 20 collaborateurs, finitions conformes aux normes suisses."
        primaryCta={{ label: "Demander un devis", href: "/contact" }}
        secondaryCta={{ label: `Appeler ${siteConfig.contact.phoneDisplay}`, href: phoneHref }}
        image={{
          src: "/realisations/plateau-tertiaire-livraison.webp",
          alt: "Plateau de bureaux livré par Markaj Renting SA — plâtrerie et peinture",
        }}
      />
      <ProofStrip />
      <ExpertisesGrid />
      <MethodSteps />
      <RealisationsTeaser />
      <WhyMarkaj />
      <AudienceStrip />
      <ZonesTeaser />
      <FaqSection
        title="Questions fréquentes"
        index="07"
        intro="Devis, délais, zones et garanties : les réponses essentielles avant de nous contacter."
        items={homeFaq}
        background="white"
      />
      <CtaBanner />
    </>
  );
}
