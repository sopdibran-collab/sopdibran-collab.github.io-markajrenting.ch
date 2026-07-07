import { AnimateIn } from "@/components/ui/AnimateIn";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <Section background="white" texture="concrete" className="py-14 sm:py-20 md:py-30">
      <AnimateIn className="max-w-3xl">
        <h1 className="font-heading text-[1.75rem] leading-tight text-balance text-markaj-primary sm:text-heading-1 md:text-display">
          {title}
        </h1>
        <p className="mt-5 font-body text-body sm:text-body-lg text-markaj-mineral-dark">
          {subtitle}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            {primaryCta && (
              <Button href={primaryCta.href} variant="primary" size="lg" className="w-full sm:w-auto">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary" size="lg" className="w-full sm:w-auto">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </AnimateIn>
    </Section>
  );
}
