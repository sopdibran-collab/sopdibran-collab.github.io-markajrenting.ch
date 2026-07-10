import { AnimateIn } from "@/components/ui/AnimateIn";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
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
          intro="Six domaines d'intervention pour le neuf et la rénovation, avec un seul interlocuteur qualifié."
        />
      </AnimateIn>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {services.map((service, index) => (
          <AnimateIn key={service.slug} delay={index * 50}>
            <Card hover className="flex h-full flex-col">
              <Badge className="mb-3 w-fit">{service.shortTitle}</Badge>
              <h3 className="font-heading text-heading-4 text-markaj-primary">
                <Link
                  href={`/services/${service.slug}`}
                  className="transition-colors hover:text-markaj-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-markaj-primary"
                >
                  {service.title}
                </Link>
              </h3>
              <p className="mt-2 font-body text-body-sm font-medium text-markaj-primary/80">
                {service.benefit}
              </p>
              <p className="mt-2 font-body text-caption text-markaj-mineral">
                {service.projectTypes.join(" · ")}
              </p>
              <p className="mt-1 font-body text-caption text-markaj-mineral-dark">
                Pour : {service.audience.slice(0, 3).join(", ")}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-5">
                <Link
                  href={`/services/${service.slug}`}
                  className="btn-niveau"
                >
                  En savoir plus
                </Link>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="font-mono text-caption font-semibold uppercase tracking-[0.12em] text-markaj-mineral-dark underline underline-offset-4 transition-colors hover:text-markaj-primary"
                >
                  Devis
                </Link>
              </div>
            </Card>
          </AnimateIn>
        ))}
      </div>
      <AnimateIn delay={200} className="mt-8">
        <Button href="/services" variant="secondary" className="w-full sm:w-auto">
          Tous les services
        </Button>
      </AnimateIn>
    </Section>
  );
}
