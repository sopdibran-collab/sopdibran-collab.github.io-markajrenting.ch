import { Section } from "@/components/ui/Section";

const defaultProofs = [
  { value: "+20 ans", label: "d'expérience" },
  { value: "20", label: "collaborateurs" },
  { value: "Neuf & rénovation", label: "tous types de chantiers" },
  { value: "Normes SIA", label: "qualité contrôlée" },
  { value: "Suisse romande", label: "depuis Fribourg" },
];

interface ProofStripProps {
  items?: { value: string; label: string }[];
}

export function ProofStrip({ items = defaultProofs }: ProofStripProps) {
  return (
    <Section background="crepi" texture="crepi" className="py-8 sm:py-10 md:py-12">
      <ul className="grid grid-cols-2 gap-5 min-[400px]:gap-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
        {items.map((item) => (
          <li key={item.value} className="min-w-0 border-l-2 border-markaj-primary/25 pl-3 sm:pl-4">
            <p className="break-words font-heading text-lg leading-tight text-markaj-primary sm:text-heading-4 md:text-heading-3">
              {item.value}
            </p>
            <p className="mt-1 break-words font-body text-caption text-markaj-mineral-dark sm:text-body-sm">
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
