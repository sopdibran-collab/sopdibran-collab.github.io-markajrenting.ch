import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  fribourgAreaServed,
  fribourgDistricts,
  fribourgDistrictsIntro,
  fribourgFaq,
  fribourgHeroSubtitle,
  fribourgSections,
  textOf,
  type TextPart,
} from "@/lib/content/fribourg-zone";
import { getZoneBySlug } from "@/lib/content/zones";
import { buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site-config";
import { notFound } from "next/navigation";
import { Fragment } from "react";

const zone = getZoneBySlug("fribourg");

export function generateMetadata() {
  if (!zone) return {};
  return createPageMetadata({
    title: zone.metaTitle,
    description: zone.metaDescription,
    path: "/zones/fribourg",
  });
}

function Rich({ parts, className }: { parts: TextPart[]; className?: string }) {
  return (
    <p className={className ?? "font-body text-body-lg text-markaj-primary/90"}>
      {parts.map((part, index) =>
        typeof part === "string" ? (
          <Fragment key={index}>{part}</Fragment>
        ) : (
          <a
            key={index}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-markaj-primary underline underline-offset-4 hover:text-markaj-primary-light"
          >
            {part.label}
          </a>
        ),
      )}
    </p>
  );
}

export default function FribourgZonePage() {
  if (!zone) notFound();

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { label: "Zones d'intervention", href: "/zones" },
            { label: zone.shortName },
          ]),
          buildFaqPageSchema(
            fribourgFaq.map((item) => ({
              question: item.question,
              answer: textOf(item.answer),
            })),
          ),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: zone.h1,
            description: zone.metaDescription,
            url: `${siteConfig.url}/zones/fribourg`,
            provider: { "@id": `${siteConfig.url}/#localbusiness` },
            areaServed: fribourgAreaServed.map((name) => ({
              "@type": "City",
              name,
            })),
            serviceType: [
              "Plâtrerie",
              "Peinture",
              "Isolation",
              "Faux-plafonds",
              "Rénovation",
              "Façades",
            ],
          },
        ]}
      />
      <div className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Zones d'intervention", href: "/zones" },
            { label: zone.shortName },
          ]}
        />
      </div>

      <Hero
        title={zone.h1}
        subtitle={fribourgHeroSubtitle}
        primaryCta={{ label: "Devis gratuit", href: "/contact#formulaire" }}
        secondaryCta={{
          label: `Appeler ${siteConfig.contact.phoneDisplay}`,
          href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
        }}
      />

      {fribourgSections.map((section) => (
        <Section key={section.id} background={section.background}>
          <SectionHeading subtitle={section.subtitle} title={section.title} />
          <div className="max-w-prose space-y-4">
            {section.paragraphs.map((paragraph) => (
              <Rich key={textOf(paragraph).slice(0, 48)} parts={paragraph} />
            ))}
          </div>
        </Section>
      ))}

      <Section background="sand">
        <SectionHeading
          subtitle="Rayon"
          title="Sept districts desservis depuis le siège"
        />
        <div className="max-w-prose space-y-4">
          {fribourgDistrictsIntro.map((paragraph) => (
            <Rich key={textOf(paragraph).slice(0, 48)} parts={paragraph} />
          ))}
        </div>
        <ul className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          {fribourgDistricts.map((entry) => (
            <li key={entry.district} className="border border-markaj-primary/15 bg-markaj-white p-5">
              <h3 className="font-heading text-heading-4 text-markaj-primary">
                {entry.district}
              </h3>
              <p className="mt-2 font-body text-body-sm text-markaj-primary/80">
                Chef-lieu : {entry.chefLieu}
              </p>
              <p className="mt-2 font-body text-body text-markaj-primary/90">
                {entry.communes.join(", ")}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section background="white">
        <SectionHeading subtitle="FAQ" title="Questions fréquentes — Fribourg" />
        <div className="max-w-3xl divide-y divide-markaj-mineral/15 border-y border-markaj-mineral/15">
          {fribourgFaq.map((item, index) => (
            <details key={item.question} open={index === 0} className="group">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-body text-body font-medium text-markaj-primary marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-primary focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span className="shrink-0 transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="pb-5">
                <Rich parts={item.answer} className="font-body text-body text-markaj-primary" />
              </div>
            </details>
          ))}
        </div>
      </Section>

      <CtaBanner
        title={`Un projet ${zone.locative} ?`}
        description="Décrivez votre chantier : devis gratuit, réponse sous 5 jours ouvrés."
      />
    </>
  );
}
