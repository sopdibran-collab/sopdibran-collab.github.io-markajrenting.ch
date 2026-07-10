import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { zones } from "@/lib/content/zones";
import Link from "next/link";

export function ZonesTeaser() {
  return (
    <Section background="white">
      <AnimateIn>
        <SectionHeading
          subtitle="Zones d'intervention"
          index="03"
          title="Actifs dans toute la Suisse romande"
          intro="Basés à Fribourg, nous intervenons dans les sept cantons francophones de Suisse, pour les particuliers comme pour les professionnels."
        />
      </AnimateIn>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {zones.map((zone, index) => (
          <AnimateIn key={zone.slug} delay={index * 60}>
            <Link
              href={`/zones#${zone.slug}`}
              className="group flex h-full min-h-24 items-center border border-markaj-primary/15 bg-markaj-white p-5 transition-all duration-200 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-markaj-primary/40 hover:shadow-card-hover"
            >
              <div>
                <p className="marque-cote">{zone.canton}</p>
                <h3 className="mt-1 font-heading text-heading-4 text-markaj-primary transition-colors group-hover:text-markaj-primary-light">
                  {zone.name}
                </h3>
              </div>
            </Link>
          </AnimateIn>
        ))}
      </div>
      <AnimateIn delay={200} className="mt-8">
        <Button href="/zones" variant="secondary" className="w-full sm:w-auto">
          Voir toutes les zones
        </Button>
      </AnimateIn>
    </Section>
  );
}
