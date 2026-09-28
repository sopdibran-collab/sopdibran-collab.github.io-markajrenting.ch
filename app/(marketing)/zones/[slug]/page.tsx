import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { realisations } from "@/lib/content/realisations";
import { services } from "@/lib/content/services";
import { getZoneBySlug, zoneSlugs, zones } from "@/lib/content/zones";
import { buildZonePageSchemas } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site-config";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return zoneSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps) {
  const zone = getZoneBySlug(params.slug);
  if (!zone) return {};
  return createPageMetadata({
    title: zone.metaTitle.replace(" | Markaj Renting SA", ""),
    description: zone.metaDescription,
    path: `/zones/${zone.slug}`,
  });
}

export default function ZoneDetailPage({ params }: PageProps) {
  const zone = getZoneBySlug(params.slug);
  if (!zone) notFound();

  const otherZones = zones.filter((z) => z.slug !== zone.slug);
  const published = realisations.filter((project) => project.location === zone.shortName);

  return (
    <>
      <JsonLd data={buildZonePageSchemas(zone)} />
      <div className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Zones d'intervention", href: "/zones" },
            { label: zone.shortName },
          ]}
        />
      </div>

      <Hero
        title={`Second œuvre — ${zone.shortName}`}
        subtitle={zone.intro}
        primaryCta={{ label: "Demander un devis", href: "/contact" }}
        secondaryCta={{
          label: `Appeler ${siteConfig.contact.phoneDisplay}`,
          href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`,
        }}
      />

      <Section background="white">
        <AnimateIn className="max-w-prose space-y-4">
          {zone.contexteLocal.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="font-body text-body-lg text-markaj-primary/90">
              {paragraph}
            </p>
          ))}
        </AnimateIn>
      </Section>

      <Section background="surface" texture="paint">
        <AnimateIn>
          <SectionHeading
            subtitle="Communes"
            title={`Communes desservies — ${zone.shortName}`}
            intro="Liste non exhaustive : nous intervenons aussi dans les communes environnantes sur devis."
          />
        </AnimateIn>
        <p className="max-w-prose font-body text-body tracking-wide text-markaj-primary/90">
          {zone.villes.join(" · ")}
        </p>
        <p className="mt-4 max-w-prose font-body text-body-sm text-markaj-primary/80">
          Une commune citée ici est une zone d&apos;intervention. Ce n&apos;est pas la preuve d&apos;un chantier photographié.
        </p>
      </Section>

      <Section background="white">
        <AnimateIn>
          <SectionHeading
            subtitle="Chantiers"
            title="Types de projets pris en charge"
            intro="Catégories de travaux proposés dans cette zone. Ce n'est pas une liste de chantiers réalisés."
          />
        </AnimateIn>
        <ul className="grid max-w-2xl gap-3">
          {zone.chantiers.map((chantier) => (
            <li key={chantier} className="flex items-start gap-3 font-body text-body text-markaj-primary/90">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-markaj-primary" />
              {chantier}
            </li>
          ))}
        </ul>
      </Section>

      <Section background="surface">
        <SectionHeading
          subtitle="Preuves"
          title="Chantiers publiés dans cette zone"
          intro="Seuls les projets déjà documentés avec un lieu confirmé apparaissent ici."
        />
        {published.length > 0 ? (
          <ul className="grid max-w-2xl gap-3">
            {published.map((project) => (
              <li key={project.id}>
                <Link
                  href={`/realisations#${project.id}`}
                  className="font-body text-body text-markaj-primary underline-offset-4 hover:underline"
                >
                  {project.title}
                </Link>
                <span className="font-body text-body text-markaj-primary/80">
                  {" "}
                  — {project.service}
                  {project.periode ? `, ${project.periode}` : project.year ? `, ${project.year}` : ""}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="max-w-prose font-body text-body text-markaj-primary/90">
            Aucun chantier publié n&apos;est localisé dans cette zone. Markaj intervient dans toute la Suisse romande.
            Les preuves disponibles sont sur la page{" "}
            <Link href="/realisations" className="underline-offset-4 hover:underline">
              Réalisations
            </Link>
            .
          </p>
        )}
      </Section>

      <Section background="crepi" texture="crepi">
        <AnimateIn>
          <SectionHeading
            subtitle="Services"
            title={`Prestations disponibles à ${zone.shortName}`}
            intro="L'ensemble de nos expertises est disponible dans cette zone."
          />
        </AnimateIn>
        <div className="flex flex-wrap gap-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="border border-markaj-primary/20 bg-markaj-white px-4 py-2 font-body text-body-sm font-medium text-markaj-primary transition-colors hover:border-markaj-primary/50"
            >
              {service.title}
            </Link>
          ))}
        </div>
      </Section>

      <FaqSection
        title={`Questions fréquentes — ${zone.shortName}`}
        items={zone.faqLocal}
        background="surface"
      />

      <Section background="white">
        <SectionHeading
          subtitle="Autres zones"
          title="Aussi actifs ailleurs en Suisse romande"
        />
        <div className="flex flex-wrap gap-3">
          {otherZones.map((z) => (
            <Link
              key={z.slug}
              href={`/zones/${z.slug}`}
              className="font-body text-body text-markaj-primary underline-offset-4 hover:underline"
            >
              {z.shortName}
            </Link>
          ))}
          <Link href="/zones" className="font-body text-body text-markaj-primary underline-offset-4 hover:underline">
            Toutes les zones
          </Link>
        </div>
      </Section>

      <CtaBanner
        title={`Un projet à ${zone.shortName} ?`}
        description="Décrivez votre chantier : devis gratuit, réponse sous 5 jours ouvrés."
      />
    </>
  );
}
