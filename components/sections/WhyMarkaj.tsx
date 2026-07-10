import Image from "next/image";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Normes suisses respectées",
    description: "Travaux exécutés selon les normes SIA et les exigences des cahiers des charges.",
  },
  {
    title: "20 ans d'expérience",
    description: "Entreprise familiale basée à Fribourg, active dans toute la Suisse romande.",
  },
  {
    title: "20 collaborateurs qualifiés",
    description: "Une équipe stable formée aux techniques actuelles de plâtrerie, peinture et isolation.",
  },
  {
    title: "Finitions Q3 et Q4",
    description: "Matériaux professionnels et contrôle qualité systématique avant réception.",
  },
  {
    title: "Respect des délais",
    description: "Planning établi en amont, communication régulière et dates tenues.",
  },
  {
    title: "Un seul interlocuteur",
    description: "Plâtrerie, peinture, isolation et faux-plafonds coordonnés par la même entreprise.",
  },
];

export function WhyMarkaj() {
  return (
    <Section background="crepi" texture="crepi">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <AnimateIn>
            <SectionHeading
              subtitle="Pourquoi Markaj Renting SA"
              index="04"
              title="Le sérieux et la qualité au service de votre chantier"
              intro="Expérience familiale, savoir-faire artisanal et organisation de chantier pour des projets exigeants — du logement individuel au bâtiment commercial."
              className="mb-8"
            />
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <AnimateIn key={reason.title} delay={index * 40}>
                <div className="border-l-2 border-markaj-primary/20 pl-4 sm:pl-5">
                  <h3 className="font-heading text-heading-4 text-markaj-primary">{reason.title}</h3>
                  <p className="mt-2 font-body text-body-sm text-markaj-mineral-dark">{reason.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200} className="mt-8">
            <Button href="/qualite-normes" variant="secondary" className="w-full sm:w-auto">
              Qualité & normes
            </Button>
          </AnimateIn>
        </div>

        <AnimateIn delay={100}>
          <figure className="relative aspect-[4/5] w-full overflow-hidden border border-markaj-primary/15 sm:aspect-[3/4] lg:sticky lg:top-28">
            <Image
              src="/equipe/preparation-chantier.webp"
              alt="Équipe Markaj Renting SA en préparation de chantier"
              fill
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-markaj-primary/85 px-4 py-3 font-body text-body-sm text-markaj-white">
              Équipe Markaj Renting SA — préparation de chantier
            </figcaption>
          </figure>
        </AnimateIn>
      </div>
    </Section>
  );
}
