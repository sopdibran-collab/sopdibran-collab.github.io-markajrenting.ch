import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { RealisationCard } from "@/components/sections/RealisationCard";
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
    "Portfolio de chantiers réalisés en Suisse romande. Plateaux de bureaux, rénovation d'immeubles, finitions haut de gamme.",
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
        subtitle="Chantiers menés par Markaj Renting SA : plateaux de bureaux (ossatures → livraison), circulations tertiaires, surélévation d'immeuble et intérieurs bancaires."
        primaryCta={{ label: "Demander un devis", href: "/contact" }}
        secondaryCta={{ label: "Nos services", href: "/services" }}
        image={{
          src: "/equipe/preparation-chantier.webp",
          alt: "Équipe Markaj Renting SA en préparation de chantier",
        }}
      />

      <Section background="white" texture="paint">
        <AnimateIn>
          <SectionHeading
            subtitle="Portfolio"
            title="Des chantiers concrets, des résultats visibles"
            intro="Photos de nos chantiers en Suisse romande."
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
          Les photos de chantier sont prises par nos équipes. Lorsqu&apos;une image de projet livré
          provient d&apos;une source externe, le crédit figure sur la fiche.
        </p>
      </Section>

      <CtaBanner
        title="Un projet similaire au vôtre ?"
        description="Décrivez votre chantier : nous vous recontactons sous 5 jours ouvrés pour un devis gratuit et une visite sur site si besoin."
      />
    </>
  );
}
