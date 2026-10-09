import Image from "next/image";
import type { ReactNode } from "react";

import { CtaPair } from "@/components/sections/CtaPair";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/seo/site-config";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  /** Nom de marque affiché en signal secondaire (pages avec image plein cadre). */
  brand?: string;
  eyebrow?: string;
  /** Adresse affichée près de la zone Fribourg / téléphone (fold bleed). */
  addressLine?: string;
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
  addressLine,
  primaryCta,
  secondaryCta,
  image,
  variant,
  children,
}: HeroProps) {
  const layout = variant ?? (image ? "bleed" : "split");
  const onPhoto = Boolean(image && layout === "bleed");
  const phonePair = Boolean(primaryCta && secondaryCta?.href.startsWith("tel:"));

  const actions = phonePair ? (
    <CtaPair
      className="mt-8 sm:mt-10"
      tone={onPhoto ? "dark" : "light"}
      phoneLine
      preserveMobileStack={onPhoto}
      primary={{
        label: primaryCta!.label,
        href: primaryCta!.href,
        size: "lg",
        className: "w-full max-w-full md:w-auto",
      }}
      secondary={{
        label: secondaryCta!.label,
        href: secondaryCta!.href,
        size: "md",
        className: "w-full max-w-full min-h-11 md:w-auto md:min-h-12 md:px-8",
      }}
    />
  ) : (
    (primaryCta || secondaryCta) && (
      <div className="mt-8 flex flex-col gap-3 sm:mt-10 md:flex-row md:flex-wrap md:items-center md:gap-4">
        {primaryCta && (
          <Button
            href={primaryCta.href}
            variant="primary"
            tone={onPhoto ? "dark" : "default"}
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
            size="md"
            className="w-full max-w-full min-h-11 md:w-auto md:min-h-12 md:px-8"
          >
            {secondaryCta.label}
          </Button>
        )}
      </div>
    )
  );

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
        {/*
          Voile directionnel : navy ≥ 88 % derrière le texte (crépi AA sur photo claire),
          photo lisible en haut sur mobile et à droite sur desktop.
        */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(10_43_94/0.94)_0%,rgb(10_43_94/0.9)_46%,rgb(10_43_94/0.32)_74%,rgb(10_43_94/0.08)_100%)] lg:bg-[linear-gradient(90deg,rgb(10_43_94/0.92)_0%,rgb(10_43_94/0.88)_40rem,rgb(10_43_94/0.36)_60rem,rgb(10_43_94/0.08)_100%)]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex min-h-[min(88vh,44rem)] max-w-content flex-col justify-end px-4 pb-14 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20">
          <div className="max-w-2xl">
            <p className="font-heading text-base leading-snug text-markaj-white sm:text-lg md:text-xl">
              {brand}
            </p>
            {(eyebrow || addressLine) && (
              <div className="mt-4 flex flex-col gap-1.5 sm:gap-2">
                {eyebrow && (
                  <p className="marque-cote marque-cote--light">{eyebrow}</p>
                )}
                {addressLine && (
                  <p className="font-body text-caption leading-relaxed text-markaj-white sm:text-body-sm">
                    {addressLine}
                  </p>
                )}
              </div>
            )}
            <h1 className="mt-4 font-heading text-[1.75rem] leading-tight text-balance text-markaj-crepi sm:mt-5 sm:text-heading-1 md:text-display">
              {title}
            </h1>
            <p className="mt-4 max-w-xl font-body text-body text-markaj-white sm:text-body-lg">
              {subtitle}
            </p>
            {actions}
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
          {addressLine && (
            <p className="mb-4 font-body text-caption text-markaj-primary sm:text-body-sm">
              {addressLine}
            </p>
          )}
          <h1 className="font-heading text-[1.75rem] leading-tight text-balance text-markaj-primary sm:text-heading-1 md:text-display">
            {title}
          </h1>
          <p className="mt-5 font-body text-body text-markaj-primary sm:text-body-lg">
            {subtitle}
          </p>
          {actions}
          {children}
        </div>

        {image && (
          <div className="relative order-first aspect-[4/3] w-full min-w-0 overflow-hidden border border-markaj-primary/15 lg:order-none lg:aspect-[5/4]">
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
