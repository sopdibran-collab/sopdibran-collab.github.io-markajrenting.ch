import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { zones } from "@/lib/content/zones";
import { buildBreadcrumbSchema, buildZonesItemListSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Zones d'intervention en Suisse romande",
  description:
    "Markaj Renting SA intervient en Suisse romande : Fribourg, Romont, Bulle, Lausanne, Vevey, Morges. Plâtrerie, peinture et rénovation.",
  path: "/zones",
});

export default function ZonesPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([{ label: "Zones d'intervention" }]),
          buildZonesItemListSchema(zones),
        ]}
      />
      <div className="mx-auto max-w-content px-6 pt-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Zones d'intervention" }]} />
      </div>

      <Hero
        title="Zones d'intervention en Suisse romande"
        subtitle="Basés à Fribourg, nous intervenons principalement dans le canton de Fribourg et les régions voisines du canton de Vaud. Notre proximité nous permet une réactivité optimale et une connaissance approfondie du tissu local."
      />

      <Section background="white">
        <div className="max-w-prose">
          <p className="font-body text-body-lg text-markaj-mineral-dark">
            Markaj Renting SA couvre un large périmètre en Suisse romande. Le canton de Fribourg reste
            notre zone de prédilection, mais nous nous déplaçons régulièrement dans les cantons voisins
            pour des projets de plâtrerie, peinture, isolation, faux-plafonds et rénovation.
          </p>
        </div>
      </Section>

      <Section background="surface" texture="paint">
        <SectionHeading subtitle="Villes couvertes" index="01" title="Où intervenons-nous ?" />
        <div className="grid gap-8 md:grid-cols-2">
          {zones.map((zone) => (
            <article key={zone.slug} id={zone.slug} className="panel-chantier">
              <p className="marque-cote">Canton {zone.canton}</p>
              <h2 className="mt-1 font-heading text-heading-3 text-markaj-primary">{zone.name}</h2>
              <p className="mt-3 font-body text-body text-markaj-mineral-dark">{zone.description}</p>
              <h3 className="mt-4 font-body text-body-sm font-semibold text-markaj-primary">
                Types de chantiers
              </h3>
              <ul className="mt-2 space-y-1">
                {zone.chantiers.map((c) => (
                  <li key={c} className="font-body text-body-sm text-markaj-mineral">
                    — {c}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeading
          subtitle="Services"
          index="02"
          title="Quels services sont disponibles dans votre zone ?"
          intro="Quelle que soit votre localisation dans notre périmètre, l'ensemble de nos expertises est disponible."
        />
        <div className="flex flex-wrap gap-4 font-body text-body">
          <Link href="/services/platrerie" className="text-markaj-primary hover:underline">Plâtrerie</Link>
          <Link href="/services/peinture" className="text-markaj-primary hover:underline">Peinture</Link>
          <Link href="/services/faux-plafonds" className="text-markaj-primary hover:underline">Faux-plafonds</Link>
          <Link href="/services/isolation" className="text-markaj-primary hover:underline">Isolation</Link>
          <Link href="/services/renovation" className="text-markaj-primary hover:underline">Rénovation</Link>
          <Link href="/services/facades" className="text-markaj-primary hover:underline">Façades</Link>
        </div>
      </Section>

      <CtaBanner
        title="Un projet dans votre région ?"
        description="Contactez-nous pour vérifier notre disponibilité dans votre commune et obtenir un devis personnalisé."
      />
    </>
  );
}
