import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RealisationCard } from "@/components/sections/RealisationCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { realisations } from "@/lib/content/realisations";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Réalisations avant / après",
  description:
    "Découvrez les réalisations Markaj Renting SA : rénovations, plâtrerie, peinture, façades et isolation en Suisse romande.",
  path: "/realisations",
});

export default function RealisationsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ label: "Réalisations" }])} />
      <div className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Réalisations" }]} />
      </div>

      <Hero
        title="Nos réalisations avant / après"
        subtitle="Découvrez une sélection de chantiers réalisés par Markaj Renting SA en Suisse romande : rénovations, finitions et transformations d'espaces."
      />

      <Section background="white" texture="paint">
        <AnimateIn>
          <SectionHeading
            subtitle="Portfolio"
            index="01"
            title="Des chantiers concrets, des résultats visibles"
            intro="Chaque projet est mené avec le même souci de qualité : préparation soignée, matériaux professionnels et finitions impeccables."
          />
        </AnimateIn>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {realisations.map((project, index) => (
            <RealisationCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
