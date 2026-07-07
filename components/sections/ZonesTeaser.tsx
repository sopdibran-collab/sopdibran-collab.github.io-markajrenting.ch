import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { zones } from "@/lib/content/zones";
import Link from "next/link";

export function ZonesTeaser() {
  const featured = zones.slice(0, 4);

  return (
    <Section background="white">
      <AnimateIn>
        <SectionHeading
          subtitle="Zones d'intervention"
          title="Actifs en Suisse romande, priorité Fribourg"
          intro="Basés à Fribourg, nous intervenons régulièrement dans le canton et les régions voisines du canton de Vaud."
        />
      </AnimateIn>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((zone, index) => (
          <AnimateIn key={zone.slug} delay={index * 60}>
            <Link
              href="/zones"
              className="group flex min-h-24 items-center rounded-markaj border border-markaj-mineral/15 bg-markaj-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <div>
                <p className="font-body text-caption uppercase tracking-wider text-markaj-mineral">
                  {zone.canton}
                </p>
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
