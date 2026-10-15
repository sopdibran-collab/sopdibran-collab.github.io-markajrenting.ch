import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { CtaPair } from "@/components/sections/CtaPair";
import { FribourgDistrictList } from "@/components/sections/FribourgDistrictList";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  fribourgAreaServed,
  fribourgDistricts,
  fribourgDistrictsIntro,
  fribourgDistrictSources,
  fribourgFaq,
  fribourgFaqSources,
  fribourgHeroSubtitle,
  fribourgSections,
  fribourgToc,
  textOf,
  type SourceLink,
  type TextPart,
} from "@/lib/content/fribourg-zone";
import { getZoneBySlug } from "@/lib/content/zones";
import { buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site-config";
import { notFound } from "next/navigation";
import { Fragment } from "react";

const zone = getZoneBySlug("fribourg");

/** Même dégagement que #formulaire : le header sticky ne couvre pas l'ancre. */
const ANCHOR = "scroll-mt-[85px] sm:scroll-mt-[97px]";

/**
 * Même filet que les liens de paragraphe (PR #42) : souligné, pas en gras.
 * Le sélecteur global ne couvre que `p a` ; les listes et le sommaire le reprennent ici.
 */
const LINK =
  "text-markaj-primary underline underline-offset-4 decoration-markaj-primary/40 hover:decoration-markaj-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-markaj-primary";

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
            className={LINK}
          >
            {part.label}
          </a>
        ),
      )}
    </p>
  );
}

function Paragraphs({ paragraphs }: { paragraphs: TextPart[][] }) {
  if (paragraphs.length === 0) return null;
  return (
    <div className="mt-6 space-y-4">
      {paragraphs.map((paragraph) => (
        <Rich key={textOf(paragraph).slice(0, 48)} parts={paragraph} />
      ))}
    </div>
  );
}

function Sources({ links }: { links: SourceLink[] }) {
  return (
    <p className="mt-8 font-body text-caption text-markaj-primary">
      Sources :{" "}
      {links.map((link, index) => (
        <Fragment key={link.href}>
          {index > 0 ? " · " : null}
          <a href={link.href} target="_blank" rel="noopener noreferrer" className={LINK}>
            {link.label}
          </a>
        </Fragment>
      ))}
    </p>
  );
}

export default function FribourgZonePage() {
  if (!zone) notFound();

  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

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
              "Faux-plafonds",
              "Isolation",
              "Rénovation",
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
          href: phoneHref,
        }}
      />

      <nav
        aria-label="Sur cette page"
        className="mx-auto max-w-content px-4 pb-2 pt-8 sm:px-6 lg:px-8"
      >
        <ul className="flex flex-wrap gap-x-6 gap-y-1">
          {fribourgToc.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={`inline-flex min-h-11 items-center font-body text-body ${LINK}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {fribourgSections.map((section) => (
        <Fragment key={section.id}>
          <Section id={section.id} background={section.background} className={ANCHOR}>
            <SectionHeading subtitle={section.subtitle} title={section.title} />
            <div className="max-w-prose">
              <Rich parts={section.lead} />
              <ul className="mt-6 list-disc space-y-3 pl-5 font-body text-body text-markaj-primary/90 marker:text-markaj-primary">
                {section.bullets.map((bullet) => (
                  <li key={textOf(bullet).slice(0, 48)}>
                    {bullet.map((part, index) =>
                      typeof part === "string" ? (
                        <Fragment key={index}>{part}</Fragment>
                      ) : (
                        <a
                          key={index}
                          href={part.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={LINK}
                        >
                          {part.label}
                        </a>
                      ),
                    )}
                  </li>
                ))}
              </ul>
              <Paragraphs
                paragraphs={section.figure ? section.details.slice(0, -1) : section.details}
              />
              {section.figure && (
                <figure className="mt-8">
                  <p className="font-heading text-display text-markaj-primary">{section.figure.value}</p>
                  <figcaption className="mt-3">
                    <p className="font-body text-caption text-markaj-primary">{section.figure.caption}</p>
                    <p className="mt-1 font-body text-caption text-markaj-primary">
                      Source :{" "}
                      <a
                        href={section.figure.source.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={LINK}
                      >
                        {section.figure.source.label}
                      </a>{" "}
                      {section.figure.sourceNote}
                    </p>
                  </figcaption>
                </figure>
              )}
              {section.figure && (
                <Paragraphs paragraphs={section.details.slice(-1)} />
              )}
              <Sources links={section.sources} />
            </div>
          </Section>

          {section.id === "amiante" && (
            <Section background="primary" className="py-8 sm:py-10 md:py-12">
              <div className="flex min-w-0 flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl font-body text-body text-markaj-white">
                  Une question sur l&apos;amiante ou le permis avant vos travaux ? Parlons-en au moment du devis.
                </p>
                <CtaPair
                  className="w-full min-w-0 shrink-0 sm:w-auto"
                  tone="dark"
                  secondaryToneDark
                  location="milieu"
                  primary={{
                    label: "Devis gratuit",
                    href: "/contact#formulaire",
                    size: "md",
                    className: "w-full max-w-full sm:w-auto",
                  }}
                  secondary={{
                    label: `Appeler ${siteConfig.contact.phoneDisplay}`,
                    href: phoneHref,
                    size: "md",
                    className: "w-full max-w-full sm:w-auto",
                  }}
                />
              </div>
            </Section>
          )}
        </Fragment>
      ))}

      <Section id="districts" background="sand" className={ANCHOR}>
        <SectionHeading subtitle="Rayon" title="Les sept districts que nous desservons" />
        <div className="max-w-prose space-y-4">
          {fribourgDistrictsIntro.map((paragraph) => (
            <Rich key={textOf(paragraph).slice(0, 48)} parts={paragraph} />
          ))}
        </div>
        <FribourgDistrictList districts={fribourgDistricts} />
        <div className="max-w-prose">
          <Sources links={fribourgDistrictSources} />
        </div>
      </Section>

      <Section id="faq" background="white" className={ANCHOR}>
        <SectionHeading subtitle="FAQ" title="Questions fréquentes à Fribourg" />
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
        <div className="max-w-3xl">
          <Sources links={fribourgFaqSources} />
        </div>
      </Section>

      <CtaBanner
        title={`Un projet ${zone.locative} ?`}
        description="Décrivez-nous votre projet, nous établissons un devis gratuit."
      />
    </>
  );
}
