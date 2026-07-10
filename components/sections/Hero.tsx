import Image from "next/image";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  eyebrow?: string;
  eyebrowIndex?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: {
    src: string;
    alt: string;
  };
  children?: ReactNode;
}

/*
 * No AnimateIn here on purpose: the H1 is the LCP element and must be
 * visible in the initial HTML, before any JavaScript runs.
 */
export function Hero({
  title,
  subtitle,
  eyebrow = "Markaj Renting SA — Fribourg",
  eyebrowIndex,
  primaryCta,
  secondaryCta,
  image,
  children,
}: HeroProps) {
  return (
    <Section
      background="white"
      texture="paint"
      className="bg-grid-chantier py-14 sm:py-20 md:py-24"
    >
      <div
        className={cn(
          "grid items-center gap-10",
          image && "lg:grid-cols-2 lg:gap-14"
        )}
      >
        <div className={cn(!image && "max-w-3xl")}>
          {eyebrow && (
            <p className="marque-cote mb-4" data-index={eyebrowIndex}>
              {eyebrow}
            </p>
          )}
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
          {children}
        </div>

        {image && (
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-markaj-primary/15 lg:aspect-[5/4]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </Section>
  );
}
