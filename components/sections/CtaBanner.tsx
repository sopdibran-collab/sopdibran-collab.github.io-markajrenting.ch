import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({
  title = "Un projet de rénovation ou de finition ?",
  description = "Contactez Markaj Renting SA pour un devis gratuit et personnalisé. Nous intervenons dans toute la Suisse romande.",
}: CtaBannerProps) {
  return (
    <Section background="primary" texture="concrete-dark">
      <AnimateIn>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-heading text-xl text-markaj-white sm:text-heading-2 md:text-heading-1">{title}</h2>
            <p className="mt-3 font-body text-body sm:text-body-lg text-markaj-white/80">{description}</p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <Button
              href="/contact"
              variant="primary"
              tone="dark"
              size="lg"
              className="w-full sm:w-auto"
            >
              Demander un devis
            </Button>
            <Button
              href="tel:+41794301813"
              variant="secondary"
              tone="dark"
              size="lg"
              className="w-full sm:w-auto"
            >
              079 430 18 13
            </Button>
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
}
