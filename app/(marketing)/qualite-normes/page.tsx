import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Qualité et normes suisses",
  description:
    "Normes SIA, isolation Minergie et sécurité suisse. Markaj Renting SA garantit la qualité et la conformité de chaque chantier.",
  path: "/qualite-normes",
});

const normes = [
  {
    title: "Normes SIA",
    description: "Nos travaux de plâtrerie, peinture et finition respectent les normes de la Société suisse des ingénieurs et des architectes (SIA), notamment en matière de finitions (Q1 à Q4), d'étanchéité à l'air et de préparation des supports.",
  },
  {
    title: "Isolation thermique",
    description: "L'isolation est dimensionnée selon les exigences énergétiques suisses (MuKEn, Minergie). Nous veillons à la continuité de l'enveloppe thermique et à la pose correcte des pare-vapeur.",
  },
  {
    title: "Sécurité sur chantier",
    description: "Nos équipes appliquent les règles de sécurité en vigueur : protections collectives, EPI, signalisation et propreté du chantier. La sécurité de nos collaborateurs et des occupants est une priorité.",
  },
  {
    title: "Contrôle qualité",
    description: "Chaque chantier fait l'objet d'un contrôle en cours et en fin de travaux : vérification des finitions, des raccords, de la planéité et de la conformité au cahier des charges avant réception.",
  },
];

export default function QualiteNormesPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ label: "Qualité & normes" }])} />
      <div className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Qualité & normes" }]} />
      </div>

      <Hero
        title="Qualité et normes suisses au cœur de chaque chantier"
        subtitle="Markaj Renting SA s'engage à respecter les normes SIA, les exigences d'isolation et les standards de sécurité suisses sur l'ensemble de ses interventions."
      />

      <Section background="white">
        <div className="max-w-prose">
          <p className="font-body text-body-lg text-markaj-mineral-dark">
            En Suisse, la qualité des travaux de construction est encadrée par des normes strictes.
            Chez Markaj Renting SA, la conformité n&apos;est pas une option : c&apos;est une exigence
            intégrée à chaque étape de nos chantiers, de la préparation des supports à la réception
            finale.
          </p>
        </div>
      </Section>

      <Section background="surface" texture="paint">
        <SectionHeading subtitle="Normes" index="01" title="Quelles normes suivons-nous ?" />
        <div className="grid gap-8 md:grid-cols-2">
          {normes.map((norme) => (
            <div key={norme.title} className="border-l-2 border-markaj-primary/20 pl-6">
              <h2 className="font-heading text-heading-4 text-markaj-primary">{norme.title}</h2>
              <p className="mt-2 font-body text-body text-markaj-mineral-dark">{norme.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeading
          subtitle="Gestion de chantier"
          index="02"
          title="Comment assurons-nous la conformité ?"
        />
        <ul className="max-w-prose space-y-4">
          <li className="flex items-start gap-3 font-body text-body text-markaj-mineral-dark">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-markaj-primary" />
            Devis détaillé par postes de travaux, aligné sur le cahier des charges
          </li>
          <li className="flex items-start gap-3 font-body text-body text-markaj-mineral-dark">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-markaj-primary" />
            Matériaux certifiés et conformes aux fiches techniques fabricant
          </li>
          <li className="flex items-start gap-3 font-body text-body text-markaj-mineral-dark">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-markaj-primary" />
            Suivi de chantier par un chef d&apos;équipe expérimenté
          </li>
          <li className="flex items-start gap-3 font-body text-body text-markaj-mineral-dark">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-markaj-primary" />
            Visite de réception avec le client et traitement des réserves
          </li>
        </ul>
      </Section>

      <CtaBanner />
    </>
  );
}
