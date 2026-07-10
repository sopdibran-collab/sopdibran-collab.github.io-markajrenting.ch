import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Prise de contact",
    description:
      "Vous nous décrivez votre projet par téléphone ou via le formulaire. Nous vous répondons sous 5 jours ouvrés.",
  },
  {
    step: "02",
    title: "Visite et devis",
    description:
      "Nous visitons le chantier si besoin, relevons les contraintes et établissons un devis gratuit, détaillé et sans engagement.",
  },
  {
    step: "03",
    title: "Exécution",
    description:
      "Planning convenu, équipe dédiée, coordination des lots plâtrerie, peinture, isolation et faux-plafonds.",
  },
  {
    step: "04",
    title: "Réception",
    description:
      "Contrôle qualité, nettoyage du chantier et réception avec vous. Garanties légales suisses appliquées.",
  },
];

export function MethodSteps() {
  return (
    <Section background="white" texture="paint">
      <AnimateIn>
        <SectionHeading
          subtitle="Notre méthode"
          index="02"
          title="De la demande de devis à la réception du chantier"
          intro="Un processus clair pour les particuliers comme pour les professionnels : transparence, délais annoncés et un interlocuteur unique."
        />
      </AnimateIn>
      <ol className="grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((item, index) => (
          <li key={item.step}>
            <AnimateIn delay={index * 60}>
              <div className="h-full border-t-2 border-markaj-primary/20 pt-5">
                <span className="font-mono text-caption font-semibold uppercase tracking-[0.14em] text-markaj-crepi-dark">
                  {item.step}
                </span>
                <h3 className="mt-2 font-heading text-heading-4 text-markaj-primary">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-body-sm text-markaj-mineral-dark">
                  {item.description}
                </p>
              </div>
            </AnimateIn>
          </li>
        ))}
      </ol>
    </Section>
  );
}
