import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export function CtaBanner({
  title = "Un projet de rénovation ou de finition ?",
  description = "Contactez Markaj Renting SA pour un devis gratuit et personnalisé. Nous intervenons en Suisse romande, avec priorité sur Fribourg et environs.",
}: CtaBannerProps) {
  return (
    <Section background="primary" texture="concrete-dark">
      <AnimateIn>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-heading text-xl text-markaj-white sm:text-heading-2 md:text-heading-1">{title}</h2>
            <p className="mt-3 font-body text-body sm:text-body-lg text-markaj-white/80">{description}</p>
          </div>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="w-full border-markaj-white text-markaj-white hover:bg-markaj-white hover:text-markaj-primary sm:w-auto"
            >
              Demander un devis
            </Button>
            <Button
              href="tel:+41794301813"
              variant="ghost"
              size="lg"
              className="w-full text-markaj-white hover:bg-markaj-white/10 hover:text-markaj-white sm:w-auto"
            >
              079 430 18 13
            </Button>
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
}
