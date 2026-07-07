export interface Zone {
  slug: string;
  name: string;
  canton: string;
  description: string;
  chantiers: string[];
}

export const zones: Zone[] = [
  {
    slug: "fribourg",
    name: "Fribourg",
    canton: "FR",
    description:
      "Siège de Markaj Renting SA, Fribourg est notre zone de prédilection. Nous y réalisons des chantiers de plâtrerie, peinture et rénovation pour particuliers, régies et entreprises.",
    chantiers: ["Rénovation d'appartements", "Bureaux et commerces", "Copropriétés", "Bâtiments publics"],
  },
  {
    slug: "romont",
    name: "Romont",
    canton: "FR",
    description:
      "Actifs à Romont et dans la Broye, nous intervenons sur des projets de rénovation intérieure et de finition pour le secteur résidentiel et tertiaire.",
    chantiers: ["Rénovation intérieure", "Peinture et plâtrerie", "Isolation de combles"],
  },
  {
    slug: "bulle",
    name: "Bulle",
    canton: "FR",
    description:
      "La Gruyère fait partie de notre périmètre d'intervention régulier, avec des équipes habituées aux chantiers en milieu urbain et rural.",
    chantiers: ["Faux-plafonds commerciaux", "Rénovation de façades", "Aménagement de bureaux"],
  },
  {
    slug: "vevey",
    name: "Vevey",
    canton: "VD",
    description:
      "En Riviera vaudoise, nous accompagnons des projets de rénovation et de finition intérieure pour des clients exigeants.",
    chantiers: ["Rénovation haut de gamme", "Peinture décorative", "Plâtrerie technique"],
  },
  {
    slug: "lausanne",
    name: "Lausanne",
    canton: "VD",
    description:
      "À Lausanne et agglomération, Markaj Renting SA intervient sur des chantiers de rénovation, d'isolation et de finition pour le secteur privé et professionnel.",
    chantiers: ["Rénovation de bureaux", "Isolation périphérique", "Faux-plafonds acoustiques"],
  },
  {
    slug: "morges",
    name: "Morges",
    canton: "VD",
    description:
      "Zone couverte régulièrement pour des travaux de plâtrerie, peinture et rénovation intérieure.",
    chantiers: ["Rénovation d'appartements", "Peinture intérieure", "Doublages isolants"],
  },
];

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find((z) => z.slug === slug);
}
