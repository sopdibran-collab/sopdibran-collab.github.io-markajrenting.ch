import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem } from "@/lib/content/services";

interface FaqSectionProps {
  title?: string;
  intro?: string;
  index?: string;
  items: FaqItem[];
  background?: "white" | "surface" | "crepi" | "primary";
}

export function FaqSection({
  title = "Questions fréquentes",
  intro,
  index,
  items,
  background = "surface",
}: FaqSectionProps) {
  return (
    <Section background={background}>
      <SectionHeading subtitle="FAQ" index={index} title={title} intro={intro} />
      <div className="max-w-3xl">
        <Accordion items={items} />
      </div>
    </Section>
  );
}
