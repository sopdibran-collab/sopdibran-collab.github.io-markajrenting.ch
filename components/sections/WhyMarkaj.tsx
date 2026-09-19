import Image from "next/image";
import { Check } from "lucide-react";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Checklist — faits Markaj existants. */
const reasons = [
  {
    title: "Entreprise suisse locale, responsable et à taille humaine",
    description: "Basés à Fribourg, actifs en Suisse romande — un interlocuteur unique du devis à la réception.",
  },
  {
    title: "Équipes qualifiées, soucieuses du détail et de la qualité",
    description: "20 collaborateurs formés aux techniques actuelles de plâtrerie, peinture et isolation.",
  },
  {
    title: "Matériaux durables et respectueux des normes en vigueur",
    description: "Travaux selon les normes SIA, finitions Q3/Q4 et contrôle avant réception.",
  },
  {
    title: "Devis clairs, respect des délais et suivi personnalisé",
    description: "Planning annoncé, communication régulière et devis gratuit sous 5 jours ouvrés.",
  },
];

export function WhyMarkaj() {
  return (
    <Section background="crepi" className="!pb-10 sm:!pb-12 md:!pb-14">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <AnimateIn>
            <SectionHeading
              subtitle="Pourquoi Markaj"
              title="Le sérieux et la qualité au service de votre chantier"
              intro="Expérience familiale, savoir-faire artisanal et organisation de chantier pour des projets exigeants — du logement individuel au bâtiment commercial."
              className="mb-8"
            />
          </AnimateIn>
          <ul className="divide-y divide-markaj-primary/15 border-y border-markaj-primary/15">
            {reasons.map((reason, index) => (
              <li key={reason.title}>
                <AnimateIn delay={index * 40}>
                  <div className="flex gap-3 py-4 sm:gap-4 sm:py-5">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-markaj-primary text-markaj-white"
                      aria-hidden
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-heading text-heading-4 text-markaj-primary">
                        {reason.title}
                      </h3>
                      <p className="mt-1.5 font-body text-body-sm text-markaj-mineral-dark">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              </li>
            ))}
          </ul>
          <AnimateIn delay={200} className="mt-8">
            <Button href="/qualite-normes" variant="secondary" className="w-full sm:w-auto">
              Qualité & normes
            </Button>
          </AnimateIn>
        </div>

        <AnimateIn delay={100}>
          <figure className="relative aspect-[4/5] w-full overflow-hidden border border-markaj-primary/15 sm:aspect-[3/4] lg:sticky lg:top-28">
            <Image
              src="/images/chantier/pourquoi-chantier-collage.webp"
              alt="Chantiers Markaj : peinture technique des réseaux, ossatures métalliques et joints BA13"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-markaj-primary/85 px-4 py-3 font-body text-body-sm text-markaj-white">
              Sur chantier — ossatures, joints BA13 et peinture réseaux
            </figcaption>
          </figure>
        </AnimateIn>
      </div>
    </Section>
  );
}
