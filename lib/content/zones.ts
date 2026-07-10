export interface Zone {
  slug: string;
  name: string;
  canton: string;
  description: string;
  villes: string[];
  chantiers: string[];
}

/*
 * Zones d'intervention : les cantons francophones de Suisse.
 * Le siège est à Fribourg, sans hiérarchie de « priorité » entre cantons.
 */
export const zones: Zone[] = [
  {
    slug: "fribourg",
    name: "Canton de Fribourg",
    canton: "FR",
    description:
      "Siège de Markaj Renting SA. Nous réalisons des chantiers de plâtrerie, peinture et rénovation dans tout le canton, de la ville de Fribourg à la Gruyère en passant par la Glâne et la Broye, pour particuliers, régies et entreprises.",
    villes: ["Fribourg", "Romont", "Bulle", "Estavayer-le-Lac", "Châtel-St-Denis", "Morat"],
    chantiers: ["Rénovation d'appartements", "Bureaux et commerces", "Copropriétés", "Bâtiments publics"],
  },
  {
    slug: "vaud",
    name: "Canton de Vaud",
    canton: "VD",
    description:
      "De Lausanne à la Riviera, nous accompagnons des projets de rénovation, d'isolation et de finition intérieure pour le secteur privé et professionnel, en milieu urbain comme en périphérie.",
    villes: ["Lausanne", "Vevey", "Montreux", "Morges", "Yverdon-les-Bains", "Nyon"],
    chantiers: ["Rénovation de bureaux", "Isolation périphérique", "Faux-plafonds acoustiques", "Rénovation haut de gamme"],
  },
  {
    slug: "geneve",
    name: "Canton de Genève",
    canton: "GE",
    description:
      "À Genève et dans les communes du canton, nos équipes interviennent sur des chantiers de finition exigeants : appartements, bureaux, commerces et immeubles de rendement.",
    villes: ["Genève", "Carouge", "Lancy", "Vernier", "Meyrin"],
    chantiers: ["Peinture intérieure", "Plâtrerie technique", "Aménagement de bureaux", "Rénovation d'immeubles"],
  },
  {
    slug: "neuchatel",
    name: "Canton de Neuchâtel",
    canton: "NE",
    description:
      "Du Littoral aux Montagnes neuchâteloises, nous prenons en charge des travaux de plâtrerie, peinture et isolation adaptés au bâti ancien comme aux constructions récentes.",
    villes: ["Neuchâtel", "La Chaux-de-Fonds", "Le Locle", "Val-de-Ruz"],
    chantiers: ["Rénovation intérieure", "Isolation de combles", "Peinture et plâtrerie", "Façades"],
  },
  {
    slug: "valais",
    name: "Canton du Valais",
    canton: "VS",
    description:
      "Dans le Valais romand, nous intervenons en plaine comme en station : résidences principales et secondaires, hôtellerie et locaux commerciaux.",
    villes: ["Sion", "Sierre", "Martigny", "Monthey", "Verbier", "Crans-Montana"],
    chantiers: ["Rénovation de chalets et appartements", "Crépi et façades", "Peinture décorative", "Faux-plafonds"],
  },
  {
    slug: "jura",
    name: "Canton du Jura",
    canton: "JU",
    description:
      "De Delémont à Porrentruy et aux Franches-Montagnes, nous réalisons des travaux de second œuvre pour particuliers, entreprises et collectivités.",
    villes: ["Delémont", "Porrentruy", "Saignelégier"],
    chantiers: ["Rénovation intérieure", "Plâtrerie", "Peinture", "Isolation"],
  },
  {
    slug: "berne",
    name: "Canton de Berne (partie francophone)",
    canton: "BE",
    description:
      "Nous couvrons la partie francophone du canton de Berne : Bienne et le Jura bernois, pour des chantiers résidentiels, tertiaires et industriels.",
    villes: ["Bienne", "Moutier", "Saint-Imier", "La Neuveville"],
    chantiers: ["Rénovation d'appartements", "Faux-plafonds commerciaux", "Peinture intérieure", "Doublages isolants"],
  },
];

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find((z) => z.slug === slug);
}
