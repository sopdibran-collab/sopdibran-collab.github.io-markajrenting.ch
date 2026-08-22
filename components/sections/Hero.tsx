import Image from "next/image";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/seo/site-config";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  /** Nom de marque affiché en signal hero (pages avec image plein cadre). */
  brand?: string;
  eyebrow?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: {
    src: string;
    alt: string;
  };
  /** `bleed` = photo edge-to-edge (défaut si image). `split` = legacy inset. */
  variant?: "bleed" | "split";
  children?: ReactNode;
}

/*
 * No AnimateIn on the H1: LCP must be visible in the initial HTML.
 */
export function Hero({
  title,
  subtitle,
  brand = siteConfig.name,
  eyebrow,
  primaryCta,
  secondaryCta,
  image,
  variant,
  children,
}: HeroProps) {
  const layout = variant ?? (image ? "bleed" : "split");

  if (image && layout === "bleed") {
    return (
      <section className="relative isolate min-h-[min(88vh,44rem)] overflow-hidden bg-markaj-primary">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-markaj-primary/80" aria-hidden="true" />
        <div className="relative z-10 mx-auto flex min-h-[min(88vh,44rem)] max-w-content flex-col justify-end px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20">
          <div className="max-w-2xl animate-hero-in">
            <p className="font-heading text-[1.65rem] leading-tight text-markaj-white sm:text-heading-1 md:text-display">
              {brand}
            </p>
            {eyebrow && (
              <p className="marque-cote marque-cote--light mt-4">{eyebrow}</p>
            )}
            <h1 className="mt-3 font-heading text-xl leading-snug text-balance text-markaj-crepi sm:text-heading-2 md:text-[1.85rem]">
              {title}
            </h1>
            <p className="mt-4 max-w-xl font-body text-body text-markaj-white/85 sm:text-body-lg">
              {subtitle}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 md:flex-row md:flex-wrap md:gap-4">
                {primaryCta && (
                  <Button
                    href={primaryCta.href}
                    variant="primary"
                    tone="dark"
                    size="lg"
                    className="w-full max-w-full md:w-auto"
                  >
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button
                    href={secondaryCta.href}
                    variant="secondary"
                    tone="dark"
                    size="lg"
                    className="w-full max-w-full md:w-auto"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <Section
      background="white"
      texture="paint"
      className="bg-grid-chantier py-14 sm:py-20 md:py-24"
    >
      <div
        className={cn(
          "grid min-w-0 items-center gap-10",
          image && "lg:grid-cols-2 lg:gap-14"
        )}
      >
        <div className={cn("min-w-0", !image && "max-w-3xl")}>
          {eyebrow && <p className="marque-cote mb-4">{eyebrow}</p>}
          <h1 className="font-heading text-[1.75rem] leading-tight text-balance text-markaj-primary sm:text-heading-1 md:text-display">
            {title}
          </h1>
          <p className="mt-5 font-body text-body text-markaj-mineral-dark sm:text-body-lg">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 md:flex-row md:flex-wrap md:gap-4">
              {primaryCta && (
                <Button
                  href={primaryCta.href}
                  variant="primary"
                  size="lg"
                  className="w-full max-w-full md:w-auto"
                >
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="secondary"
                  size="lg"
                  className="w-full max-w-full md:w-auto"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
          {children}
        </div>

        {image && (
          <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden border border-markaj-primary/15 lg:aspect-[5/4]">
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
