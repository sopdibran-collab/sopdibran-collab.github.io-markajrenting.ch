import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { FaqItem } from "@/lib/content/services";

interface FaqSectionProps {
  title?: string;
  intro?: string;
  items: FaqItem[];
  background?: "white" | "surface" | "crepi" | "sand" | "primary";
  className?: string;
}

export function FaqSection({
  title = "Questions fréquentes",
  intro,
  items,
  background = "sand",
  className,
}: FaqSectionProps) {
  return (
    <Section background={background} className={className}>
      <SectionHeading subtitle="FAQ" title={title} intro={intro} />
      <div className="max-w-3xl">
        <Accordion items={items} />
      </div>
    </Section>
  );
}
