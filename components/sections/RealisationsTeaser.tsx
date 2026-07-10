import { RealisationCard } from "@/components/sections/RealisationCard";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { realisations } from "@/lib/content/realisations";

interface RealisationsTeaserProps {
  /** Nombre de projets à afficher (défaut : 3) */
  limit?: number;
}

export function RealisationsTeaser({ limit = 3 }: RealisationsTeaserProps) {
  const projects = realisations.slice(0, limit);

  return (
    <Section background="surface" texture="paint">
      <AnimateIn>
        <SectionHeading
          subtitle="Réalisations"
          index="03"
          title="Des chantiers concrets en Suisse romande"
          intro="Plateaux de bureaux, rénovation d'immeuble et finitions haut de gamme : des projets livrés pour des clients exigeants."
        />
      </AnimateIn>
      <div className="grid gap-8 md:grid-cols-2 md:gap-10">
        {projects.map((project, index) => (
          <RealisationCard
            key={project.id}
            project={project}
            index={index}
            featured={index === 0}
          />
        ))}
      </div>
      <AnimateIn delay={200} className="mt-8">
        <Button href="/realisations" variant="secondary" className="w-full sm:w-auto">
          Voir toutes les réalisations
        </Button>
      </AnimateIn>
    </Section>
  );
}
