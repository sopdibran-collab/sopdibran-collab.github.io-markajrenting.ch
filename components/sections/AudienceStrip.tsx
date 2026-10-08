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
    <Section background="sand">
      <SectionHeading
        subtitle="Pour qui"
        title="Un interlocuteur pour chaque type de projet"
        intro="Nous adaptons notre organisation aux exigences des particuliers, des professionnels de l'immobilier et des maîtres d'œuvre."
        className="mb-6 sm:mb-8"
      />
      <ul className="divide-y divide-markaj-primary/15 border-y border-markaj-primary/15">
        {audiences.map((item) => (
          <li key={item.title} className="py-4 sm:py-5">
            <h3 className="font-heading text-heading-4 text-markaj-primary">{item.title}</h3>
            <p className="mt-1.5 max-w-prose font-body text-body-sm text-markaj-primary">{item.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
