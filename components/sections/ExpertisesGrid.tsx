import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceVisuals } from "@/lib/content/service-visuals";
import { services } from "@/lib/content/services";
import { cn } from "@/lib/utils";

/**
 * Une bande par métier : fond blanc / sable, image et texte alternés.
 * Pas de cartes. La façade réutilise la seule photo extérieure du repo.
 */
export function ExpertisesGrid() {
  return (
    <>
      <Section background="white" className="!pb-2 !pt-8 sm:!pb-4 sm:!pt-12 md:!pt-16">
        <SectionHeading
          subtitle="Nos expertises"
          title="Plâtrerie, peinture et finition de bâtiment"
          intro="Des savoir-faire complets pour des réalisations durables et soignées — illustrés par de vrais chantiers, avec un seul interlocuteur qualifié."
          className="mb-0 sm:mb-2"
        />
      </Section>

      {services.map((service, index) => {
        const visual = serviceVisuals[service.slug];
        const sand = index % 2 === 0;

        return (
          <section
            key={service.slug}
            className={sand ? "bg-markaj-crepi-light" : "bg-markaj-white"}
          >
            <div className="mx-auto grid max-w-content items-center gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-14">
              {visual && (
                <figure className={cn("min-w-0", index % 2 === 1 && "lg:order-2")}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              )}

              <div className="min-w-0">
                {visual && <p className="marque-cote">{visual.legend}</p>}
                <h3 className="mt-3 font-heading text-heading-3 text-markaj-primary sm:text-heading-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-markaj-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-markaj-primary"
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className="mt-3 font-body text-body text-markaj-primary">{service.benefit}</p>
                <p className="mt-2 font-body text-body-sm text-markaj-primary">
                  {service.projectTypes.join(" · ")}
                </p>
                <Link href={`/services/${service.slug}`} className="btn-niveau mt-4">
                  En savoir plus
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <Section background="sand" className="!py-8 sm:!py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Button href="/contact" variant="primary" className="w-full sm:w-auto">
            Demander un devis
          </Button>
          <Button href="/services" variant="secondary" className="w-full sm:w-auto">
            Tous les services
          </Button>
        </div>
      </Section>
    </>
  );
}
