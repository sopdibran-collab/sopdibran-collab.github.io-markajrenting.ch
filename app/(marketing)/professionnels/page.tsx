import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Professionnels — promoteurs, architectes, DT",
  description:
    "Markaj Renting SA accompagne promoteurs, investisseurs, architectes et directions de travaux en Suisse romande : lots finition, isolation, planning et normes SIA.",
  path: "/professionnels",
});

const audiences = [
  {
    title: "Promoteurs et investisseurs",
    description:
      "Un interlocuteur unique pour les lots plâtrerie, peinture, isolation et faux-plafonds. Devis par postes, respect des délais de programme et finitions homogènes sur l’ensemble du bâtiment.",
  },
  {
    title: "Architectes",
    description:
      "Exécution fidèle au cahier des charges : niveaux de finition Q3/Q4, détails d’isolation et d’acoustique, coordination avec les autres corps de métier. Photos de process (ossatures, joints, livraison) disponibles pour vos dossiers.",
  },
  {
    title: "Directions de travaux",
    description:
      "Présence chantier structurée, chefs d’équipe expérimentés, contrôle qualité avant réception. Communication claire sur avancement, réserves et planning.",
  },
  {
    title: "Régies et gestionnaires",
    description:
      "Rénovations locatives et parties communes : délais maîtrisés, un seul contact pour plâtrerie–peinture–isolation, interventions planifiées pour limiter la gêne aux occupants.",
  },
];

const capabilities = [
  {
    title: "Capacité d’équipe",
    text: "Environ 20 collaborateurs qualifiés basés à Fribourg, intervention en Suisse romande.",
  },
  {
    title: "Lots couverts",
    text: "Plâtrerie, peinture, faux-plafonds, isolation thermique et phonique, rénovation intérieure, façades.",
  },
  {
    title: "Cadre normatif",
    text: "Finitions selon niveaux SIA (Q1–Q4), isolation selon exigences énergétiques du projet, acoustique en lien avec la SIA 181 lorsque le dossier le prévoit.",
  },
  {
    title: "Références",
    text: "Chantiers tertiaires et résidentiels en romandie (plateaux de bureaux, rénovations, surélévations). Dossier photos sur demande — sans avis clients inventés.",
  },
];

const process = [
  "Réception du cahier des charges / plans / planning général",
  "Offre détaillée par postes et clarification des niveaux de finition",
  "Coordination avec DT et autres lots (électricité, CVS, sols…)",
  "Exécution, contrôle qualité et réception avec procès-verbal des réserves",
];

export default function ProfessionnelsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ label: "Professionnels" }])} />
      <div className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Professionnels" }]} />
      </div>

      <Hero
        title="Partenaire de finition pour vos projets en Suisse romande"
        subtitle="Markaj Renting SA travaille avec promoteurs, investisseurs, architectes et directions de travaux : lots plâtrerie–peinture–isolation, planning tenu et conformité au cahier des charges."
      />

      <Section background="white">
        <div className="max-w-prose">
          <p className="font-body text-body-lg text-markaj-mineral-dark">
            Les décisions d’achat en construction impliquent plusieurs acteurs. Nous nous adressons
            à vous avec un langage de projet : délais, lots, normes, capacité et preuves chantier —
            pas un discours grand public.
          </p>
        </div>
      </Section>

      <Section background="surface" texture="paint">
        <SectionHeading
          subtitle="Interlocuteurs"
          index="01"
          title="Pour qui travaillons-nous ?"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {audiences.map((item) => (
            <div key={item.title} className="border-l-2 border-markaj-primary/20 pl-6">
              <h2 className="font-heading text-heading-4 text-markaj-primary">{item.title}</h2>
              <p className="mt-2 font-body text-body text-markaj-mineral-dark">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <SectionHeading
          subtitle="Capacité"
          index="02"
          title="Ce que nous engageons sur un dossier"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {capabilities.map((item) => (
            <div key={item.title}>
              <h3 className="font-heading text-heading-4 text-markaj-primary">{item.title}</h3>
              <p className="mt-2 font-body text-body text-markaj-mineral-dark">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-prose font-body text-body text-markaj-mineral-dark">
          Voir aussi nos{" "}
          <Link href="/realisations" className="text-markaj-primary underline-offset-4 hover:underline">
            réalisations
          </Link>
          , la page{" "}
          <Link
            href="/qualite-normes"
            className="text-markaj-primary underline-offset-4 hover:underline"
          >
            qualité &amp; normes
          </Link>{" "}
          et nos guides techniques sur l&apos;
          <Link
            href="/blog/isolation-thermique-vs-phonique"
            className="text-markaj-primary underline-offset-4 hover:underline"
          >
            isolation thermique et phonique
          </Link>
          .
        </p>
      </Section>

      <Section background="crepi" texture="crepi">
        <SectionHeading subtitle="Processus" index="03" title="Déroulement type" />
        <ol className="max-w-prose space-y-4">
          {process.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-4 font-body text-body text-markaj-mineral-dark"
            >
              <span className="font-mono text-caption font-semibold text-markaj-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBanner
        title="Demander un dossier ou une offre"
        description="Transmettez plans, cahier des charges ou planning : nous revenons vers vous avec une offre structurée et, si besoin, une visite de chantier."
      />
    </>
  );
}
