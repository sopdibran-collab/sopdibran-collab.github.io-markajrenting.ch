import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem } from "@/lib/content/services";

interface FaqSectionProps {
  title?: string;
  intro?: string;
  index?: string;
  items: FaqItem[];
}

export function FaqSection({
  title = "Questions fréquentes",
  intro,
  index,
  items,
}: FaqSectionProps) {
  return (
    <Section background="surface">
      <SectionHeading subtitle="FAQ" index={index} title={title} intro={intro} />
      <div className="max-w-3xl">
        <Accordion items={items} />
      </div>
    </Section>
  );
}
