import { AnimateIn } from "@/components/ui/AnimateIn";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content/services";
import Link from "next/link";

export function ExpertisesGrid() {
  return (
    <Section background="surface" texture="paint">
      <AnimateIn>
        <SectionHeading
          subtitle="Nos expertises"
          index="01"
          title="Plâtrerie, peinture et finition de bâtiment"
          intro="Six domaines d'intervention pour couvrir l'ensemble de vos besoins en neuf et en rénovation, avec un seul interlocuteur qualifié."
        />
      </AnimateIn>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <AnimateIn key={service.slug} delay={index * 60}>
            <Link href={`/services/${service.slug}`} className="group block h-full">
              <Card hover className="h-full">
                <Badge className="mb-3">{service.shortTitle}</Badge>
                <h3 className="font-heading text-heading-4 text-markaj-primary transition-colors group-hover:text-markaj-primary-light">
                  {service.title}
                </h3>
                <p className="mt-2 font-body text-body-sm text-markaj-mineral">
                  {service.intro.slice(0, 120)}…
                </p>
                <span className="btn-niveau mt-4">En savoir plus</span>
              </Card>
            </Link>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}
