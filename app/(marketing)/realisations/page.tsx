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
  title: "Nos réalisations",
  description:
    "Découvrez les réalisations Markaj Renting SA : plateaux de bureaux, surélévation d'immeuble à la rue de Lausanne, Credit Suisse à la rue du Rhône. Plâtrerie, peinture et rénovation.",
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
        title="Nos réalisations"
        subtitle="Une sélection de chantiers menés par Markaj Renting SA : aménagements de bureaux, surélévation d'immeuble et intérieurs bancaires de haut standing."
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
            <RealisationCard
              key={project.id}
              project={project}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
        <p className="mt-10 max-w-prose font-body text-caption text-markaj-mineral">
          Les photos de chantier sont prises par nos équipes. Certaines images de projets livrés
          proviennent de sources externes ; le crédit est précisé sur chaque fiche.
        </p>
      </Section>

      <CtaBanner />
    </>
  );
}
