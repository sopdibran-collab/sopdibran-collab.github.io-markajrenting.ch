import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content/services";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Nos services de plâtrerie, peinture et rénovation",
  description:
    "Découvrez l'ensemble des services Markaj Renting SA : plâtrerie, peinture, faux-plafonds, isolation, rénovation et façades en Suisse romande.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ label: "Services" }])} />
      <div className="mx-auto max-w-content px-6 pt-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services" }]} />
      </div>

      <Hero
        title="Nos services de finition et rénovation de bâtiment"
        subtitle="Plâtrerie, peinture, faux-plafonds, isolation, rénovation et façades — un interlocuteur unique pour des finitions conformes aux normes suisses, en neuf comme en rénovation."
        primaryCta={{ label: "Demander un devis", href: "/contact" }}
        secondaryCta={{ label: "Voir nos réalisations", href: "/realisations" }}
      />

      <Section background="white" className="py-10 sm:py-12 md:py-14">
        <div className="max-w-prose">
          <p className="font-body text-body-lg text-markaj-mineral-dark">
            De la pose de cloisons BA13 à la rénovation complète d&apos;un bâtiment, nous accompagnons
            particuliers, régies, architectes et entreprises en Suisse romande. Chaque prestation est
            réalisée avec des matériaux professionnels, un contrôle qualité rigoureux et le respect
            des délais convenus.
          </p>
        </div>
      </Section>

      <Section background="surface" texture="paint">
        <SectionHeading
          subtitle="Expertises"
          index="01"
          title="Six domaines d'intervention"
          intro="Choisissez un service pour le détail technique, ou demandez directement un devis ciblé."
        />
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {services.map((service) => (
            <Card key={service.slug} hover className="flex h-full flex-col">
              <Badge className="mb-3 w-fit">{service.shortTitle}</Badge>
              <h2 className="font-heading text-heading-3 text-markaj-primary">
                <Link
                  href={`/services/${service.slug}`}
                  className="transition-colors hover:text-markaj-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-markaj-primary"
                >
                  {service.title}
                </Link>
              </h2>
              <p className="mt-3 font-body text-body font-medium text-markaj-primary/85">
                {service.benefit}
              </p>
              <p className="mt-2 font-body text-body-sm text-markaj-mineral-dark">
                {service.intro}
              </p>
              <p className="mt-3 font-body text-caption text-markaj-mineral">
                {service.projectTypes.join(" · ")} — {service.audience.slice(0, 3).join(", ")}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
                <Link href={`/services/${service.slug}`} className="btn-niveau">
                  Voir le détail
                </Link>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="font-mono text-caption font-semibold uppercase tracking-[0.12em] text-markaj-mineral-dark underline underline-offset-4 transition-colors hover:text-markaj-primary"
                >
                  Devis pour ce service
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Un besoin précis en second œuvre ?"
        description="Indiquez le type de travaux : nous vous recontactons sous 5 jours ouvrés pour un devis gratuit."
      />
    </>
  );
}
