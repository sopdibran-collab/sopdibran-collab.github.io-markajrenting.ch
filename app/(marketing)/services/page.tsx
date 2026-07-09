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
        subtitle="Markaj Renting SA couvre l'ensemble des travaux de second œuvre en neuf et en rénovation. Un interlocuteur unique pour des finitions conformes aux normes suisses."
      />

      <Section background="white">
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
        <SectionHeading subtitle="Expertises" index="01" title="Six domaines d'intervention" />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group">
              <Card hover className="h-full">
                <Badge className="mb-3">{service.shortTitle}</Badge>
                <h2 className="font-heading text-heading-3 text-markaj-primary group-hover:text-markaj-primary-light">
                  {service.title}
                </h2>
                <p className="mt-3 font-body text-body text-markaj-mineral-dark">{service.definition}</p>
                <span className="btn-niveau mt-4">Voir le détail</span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
