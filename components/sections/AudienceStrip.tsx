import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const audiences = [
  {
    title: "Particuliers",
    description: "Rénovation d'appartement, peinture, isolation ou façades — devis clair et chantier soigné.",
  },
  {
    title: "Régies & gérances",
    description: "Interventions planifiées, reporting simple et respect des délais pour immeubles et lots locatifs.",
  },
  {
    title: "Architectes",
    description: "Exécution fidèle au cahier des charges, finitions Q3/Q4 et coordination de second œuvre.",
  },
  {
    title: "Entreprises",
    description: "Plateaux tertiaires, commerces et bâtiments neufs : une équipe stable et un interlocuteur unique.",
  },
];

export function AudienceStrip() {
  return (
    <Section background="white">
      <AnimateIn>
        <SectionHeading
          subtitle="Pour qui"
          title="Un interlocuteur pour chaque type de projet"
          intro="Nous adaptons notre organisation aux exigences des particuliers, des professionnels de l'immobilier et des maîtres d'œuvre."
        />
      </AnimateIn>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((item, index) => (
          <AnimateIn key={item.title} delay={index * 50}>
            <div className="h-full border border-markaj-primary/15 bg-markaj-surface p-5 sm:p-6">
              <h3 className="font-heading text-heading-4 text-markaj-primary">{item.title}</h3>
              <p className="mt-2 font-body text-body-sm text-markaj-mineral-dark">{item.description}</p>
            </div>
          </AnimateIn>
        ))}
      </div>
    </Section>
  );
}
