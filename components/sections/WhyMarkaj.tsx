import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Normes suisses respectées",
    description: "Tous nos travaux sont exécutés conformément aux normes SIA et aux exigences des cahiers des charges.",
  },
  {
    title: "20 ans d'expérience",
    description: "Entreprise familiale fondée il y a plus de 20 ans, avec une expertise éprouvée en Suisse romande.",
  },
  {
    title: "20 collaborateurs qualifiés",
    description: "Une équipe stable de professionnels formés aux techniques actuelles de plâtrerie, peinture et isolation.",
  },
  {
    title: "Qualité des finitions",
    description: "Finitions Q3 et Q4, matériaux professionnels et contrôle qualité systématique en fin de chantier.",
  },
  {
    title: "Respect des délais",
    description: "Planning établi en amont, communication régulière et engagement sur les dates convenues.",
  },
  {
    title: "Un seul interlocuteur",
    description: "Plâtrerie, peinture, isolation et faux-plafonds coordonnés par une même entreprise de confiance.",
  },
];

export function WhyMarkaj() {
  return (
    <Section background="crepi" texture="crepi">
      <AnimateIn>
        <SectionHeading
          subtitle="Pourquoi Markaj Renting SA"
          title="Le sérieux et la qualité au service de votre chantier"
          intro="Nous mettons notre expérience familiale et notre savoir-faire artisanal au service de projets exigeants, du logement individuel au bâtiment commercial."
        />
      </AnimateIn>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason, index) => (
          <AnimateIn key={reason.title} delay={index * 50}>
            <div className="border-l-2 border-markaj-primary/20 pl-5 sm:pl-6">
              <h3 className="font-heading text-heading-4 text-markaj-primary">{reason.title}</h3>
              <p className="mt-2 font-body text-body-sm text-markaj-mineral-dark">{reason.description}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}
