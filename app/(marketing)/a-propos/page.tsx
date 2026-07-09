import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "À propos de Markaj Renting SA",
  description:
    "Découvrez l'histoire de Markaj Renting SA : entreprise familiale de plâtrerie et peinture à Fribourg, 20 ans d'expérience, 20 collaborateurs.",
  path: "/a-propos",
});

const timeline = [
  { year: "Fondation", text: "Création de l'entreprise familiale à Fribourg, spécialisée en plâtrerie et peinture." },
  { year: "Croissance", text: "Développement des effectifs et élargissement des services : isolation, faux-plafonds, rénovation." },
  { year: "Aujourd'hui", text: "20 collaborateurs qualifiés, une expertise reconnue en Suisse romande et des centaines de chantiers réalisés." },
];

const values = [
  { title: "Qualité", description: "Finitions soignées, matériaux professionnels et contrôle systématique en fin de chantier." },
  { title: "Sérieux", description: "Devis clairs, respect des délais et communication transparente tout au long du projet." },
  { title: "Proximité", description: "Une entreprise familiale ancrée à Fribourg, proche de ses clients et de ses collaborateurs." },
  { title: "Conformité", description: "Respect des normes SIA, des cahiers des charges et des réglementations suisses en vigueur." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ label: "À propos" }])} />
      <div className="mx-auto max-w-content px-6 pt-6 lg:px-8">
        <Breadcrumbs items={[{ label: "À propos" }]} />
      </div>

      <Hero
        title="Une entreprise familiale au service de la belle ouvrage"
        subtitle="Markaj Renting SA, c'est plus de 20 ans d'expérience en plâtrerie, peinture et rénovation, portés par une équipe de 20 collaborateurs passionnés par leur métier."
      />

      <Section background="white">
        <div className="max-w-prose">
          <h2 className="font-heading text-heading-3 text-markaj-primary">
            Qui est Markaj Renting SA ?
          </h2>
          <p className="mt-4 font-body text-body-lg text-markaj-mineral-dark">
            Markaj Renting SA est une entreprise familiale basée à Fribourg, spécialisée dans les
            travaux de plâtrerie, peinture, faux-plafonds, isolation, rénovation intérieure et façades.
            Depuis plus de 20 ans, nous accompagnons particuliers, régies immobilières, architectes
            et entreprises en Suisse romande.
          </p>
          <p className="mt-4 font-body text-body-lg text-markaj-mineral-dark">
            Notre force : un savoir-faire artisanal transmis au sein de la famille, une équipe stable
            de professionnels qualifiés et un engagement constant envers la qualité des finitions et
            le respect des normes suisses.
          </p>
        </div>
      </Section>

      <Section background="crepi" texture="crepi">
        <SectionHeading subtitle="Histoire" index="01" title="Plus de 20 ans d'expérience" />
        <div className="space-y-8">
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-6 border-l-2 border-markaj-primary/30 pl-8">
              <span className="shrink-0 font-heading text-heading-4 text-markaj-primary">{item.year}</span>
              <p className="font-body text-body text-markaj-mineral-dark">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeading
          subtitle="Équipe"
          index="02"
          title="20 collaborateurs qualifiés"
          intro="Plâtriers, peintres, chefs d'équipe et apprentis : une équipe complète pour mener vos chantiers de A à Z."
        />
        <p className="max-w-prose font-body text-body-lg text-markaj-mineral-dark">
          Nos collaborateurs maîtrisent les techniques actuelles de plâtrerie (BA13, finitions Q3/Q4),
          de peinture (intérieure et extérieure), d&apos;isolation thermique et acoustique, ainsi que
          la pose de faux-plafonds. La formation continue et le respect des normes SIA sont au cœur
          de notre démarche qualité.
        </p>
      </Section>

      <Section background="surface">
        <SectionHeading subtitle="Valeurs" index="03" title="Ce qui nous guide au quotidien" />
        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value) => (
            <div key={value.title}>
              <h3 className="font-heading text-heading-4 text-markaj-primary">{value.title}</h3>
              <p className="mt-2 font-body text-body text-markaj-mineral-dark">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
