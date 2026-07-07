import { CtaBanner } from "@/components/sections/CtaBanner";
import { ExpertisesGrid } from "@/components/sections/ExpertisesGrid";
import { Hero } from "@/components/sections/Hero";
import { WhyMarkaj } from "@/components/sections/WhyMarkaj";
import { ZonesTeaser } from "@/components/sections/ZonesTeaser";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Plâtrerie, peinture et rénovation en Suisse romande",
  description:
    "Markaj Renting SA — entreprise familiale de plâtrerie, peinture, faux-plafonds, isolation et rénovation à Fribourg. 20 ans d'expérience, 20 collaborateurs.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero
        title="Plâtrerie, peinture et rénovation d'excellence en Suisse romande"
        subtitle="Markaj Renting SA est une entreprise familiale active depuis plus de 20 ans à Fribourg. Avec 20 collaborateurs qualifiés, nous réalisons vos travaux de plâtrerie, peinture, faux-plafonds, isolation et rénovation conformes aux normes suisses."
        primaryCta={{ label: "Demander un devis", href: "/contact" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
      />
      <ExpertisesGrid />
      <WhyMarkaj />
      <ZonesTeaser />
      <CtaBanner />
    </>
  );
}
