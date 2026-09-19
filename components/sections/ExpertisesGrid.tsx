import Image from "next/image";
import Link from "next/link";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content/services";
import { cn } from "@/lib/utils";

/** Visuels chantier réels — légendes FR sous / à côté de la photo. */
const serviceVisuals: Record<
  string,
  | { kind: "photo"; src: string; legend: string; alt: string; aspect: string }
  | { kind: "typo"; note: string }
> = {
  platrerie: {
    kind: "photo",
    src: "/images/chantier/joints-ba13.webp",
    legend: "Joints BA13",
    alt: "Cloison en plaques de plâtre BA13, joints en cours sur chantier Markaj",
    aspect: "aspect-[4/3]",
  },
  peinture: {
    kind: "photo",
    src: "/images/chantier/peinture-reseaux.webp",
    legend: "Peinture réseaux",
    alt: "Peinture technique des réseaux et plafonds en bleu nuit sur chantier",
    aspect: "aspect-[3/4] sm:aspect-[4/5]",
  },
  "faux-plafonds": {
    kind: "photo",
    src: "/images/chantier/plafond-fibre-de-bois.webp",
    legend: "Plafond fibre de bois",
    alt: "Faux-plafond acoustique en fibre de bois et claire-voie sur chantier",
    aspect: "aspect-[3/4]",
  },
  isolation: {
    kind: "photo",
    src: "/images/chantier/isolation-packs.webp",
    legend: "Isolation",
    alt: "Paquets d'isolant et peinture technique sur plateau en rénovation",
    aspect: "aspect-[3/4]",
  },
  renovation: {
    kind: "photo",
    src: "/images/chantier/ossatures.webp",
    legend: "Ossatures",
    alt: "Ossatures métalliques et réseaux techniques en cloisonnement",
    aspect: "aspect-[4/3]",
  },
  facades: {
    kind: "typo",
    note: "Façades",
  },
};

export function ExpertisesGrid() {
  return (
    <Section background="white">
      <AnimateIn>
        <SectionHeading
          subtitle="Nos expertises"
          title="Plâtrerie, peinture et finition de bâtiment"
          intro="Des savoir-faire complets pour des réalisations durables et soignées — illustrés par de vrais chantiers, avec un seul interlocuteur qualifié."
        />
      </AnimateIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
        {services.map((service, index) => {
          const visual = serviceVisuals[service.slug];
          const isTypo = visual?.kind === "typo";

          return (
            <AnimateIn key={service.slug} delay={index * 45}>
              <article
                className={cn(
                  "group flex h-full flex-col overflow-hidden border border-markaj-primary/15 bg-markaj-white",
                  isTypo && "bg-markaj-crepi-light"
                )}
              >
                {visual?.kind === "photo" ? (
                  <figure className="relative">
                    <div className={cn("relative w-full overflow-hidden", visual.aspect)}>
                      <Image
                        src={visual.src}
                        alt={visual.alt}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <figcaption className="flex items-baseline justify-between gap-3 border-b border-markaj-primary/10 px-4 py-2.5 sm:px-5">
                      <span className="font-mono text-caption font-semibold uppercase tracking-[0.14em] text-markaj-primary">
                        {visual.legend}
                      </span>
                      <span className="font-body text-caption text-markaj-mineral" aria-hidden>
                        Chantier réel
                      </span>
                    </figcaption>
                  </figure>
                ) : (
                  <div className="relative flex min-h-[14rem] flex-col justify-end border-b border-markaj-primary/15 bg-markaj-primary px-5 py-6 sm:min-h-[16rem]">
                    <p className="font-mono text-caption font-semibold uppercase tracking-[0.14em] text-markaj-crepi">
                      {visual?.note ?? service.title}
                    </p>
                    <p className="mt-3 font-heading text-3xl leading-none text-markaj-white sm:text-4xl">
                      {service.title}
                    </p>
                    <p className="mt-3 max-w-[16rem] font-body text-body-sm text-markaj-white/75">
                      Crépis, enduits et peinture de façade adaptés au climat suisse.
                    </p>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {!isTypo && (
                    <h3 className="font-heading text-heading-4 text-markaj-primary">
                      <Link
                        href={`/services/${service.slug}`}
                        className="transition-colors hover:text-markaj-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-markaj-primary"
                      >
                        {service.title}
                      </Link>
                    </h3>
                  )}
                  <p
                    className={cn(
                      "font-body text-body-sm font-medium text-markaj-primary/80",
                      isTypo ? "mt-0" : "mt-2"
                    )}
                  >
                    {service.benefit}
                  </p>
                  <p className="mt-2 font-body text-caption text-markaj-mineral">
                    {service.projectTypes.join(" · ")}
                  </p>
                  <div className="mt-auto pt-5">
                    <Link href={`/services/${service.slug}`} className="btn-niveau">
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </article>
            </AnimateIn>
          );
        })}
      </div>

      <AnimateIn delay={200} className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <Button href="/contact" variant="primary" className="w-full sm:w-auto">
          Demander un devis
        </Button>
        <Button href="/services" variant="secondary" className="w-full sm:w-auto">
          Tous les services
        </Button>
      </AnimateIn>
    </Section>
  );
}
