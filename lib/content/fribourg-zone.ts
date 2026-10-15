/**
 * Contenu public de /zones/fribourg uniquement.
 * Les phrases sont celles déjà relues : la page les raccourcit, elle n'ajoute aucun fait.
 * Les références d'articles ne figurent pas dans le corps : elles sont regroupées
 * dans la ligne Sources de chaque section.
 */

/** Dernière modification du contenu Fribourg (YYYY-MM-DD). Repli du lastmod. */
export const fribourgUpdated = "2026-10-15";

export type TextPart = string | { href: string; label: string };

export interface SourceLink {
  href: string;
  label: string;
}

export interface FribourgFigure {
  value: string;
  caption: string;
  source: SourceLink;
  sourceNote: string;
}

export interface FribourgSection {
  id: string;
  background: "white" | "sand";
  subtitle: string;
  title: string;
  lead: TextPart[];
  bullets: TextPart[][];
  details: TextPart[][];
  figure?: FribourgFigure;
  sources: SourceLink[];
}

export interface FribourgDistrict {
  district: string;
  chefLieu: string;
  communes: string[];
}

export interface FribourgFaq {
  question: string;
  answer: TextPart[];
}

const permis =
  "https://www.fr.ch/territoire-amenagement-et-constructions/permis-de-construire-et-autorisations/permis-de-construire";
const latec135 = "https://bdlf.fr.ch/app/fr/texts_of_law/710.1/art/135";
const latec139 = "https://bdlf.fr.ch/app/fr/texts_of_law/710.1/art/139";
const relat84 = "https://bdlf.fr.ch/app/fr/texts_of_law/710.11/art/84";
const relat85 = "https://bdlf.fr.ch/app/fr/texts_of_law/710.11/art/85";
const relat87 = "https://bdlf.fr.ch/app/fr/texts_of_law/710.11/art/87";
const prefectures = "https://www.fr.ch/etat-et-droit/justice/prefectures";
const ville =
  "https://www.ville-fribourg.ch/urbanisme-architecture/inspectorat-constructions";
const districts =
  "https://www.fr.ch/hello-fribourg/vivre-ensemble-a-fribourg/le-canton-les-districts-et-les-communes";
const diagnostic =
  "https://www.fr.ch/sites/default/files/2025-03/etablissement-dun-diagnostic-des-substances-dangereuses--aide-a-l-execution.pdf";
const oled = "https://www.fedlex.admin.ch/eli/cc/2015/891/fr#art_16";
const otconst3 = "https://www.fedlex.admin.ch/eli/cc/2005/476/fr#art_3";
const otconst32 = "https://www.fedlex.admin.ch/eli/cc/2005/476/fr#art_32";
const otconst82 = "https://www.fedlex.admin.ch/eli/cc/2005/476/fr#art_82";
const suva =
  "https://www.suva.ch/fr-ch/prevention/par-danger/materiaux-rayonnements-et-situations-a-risque/amiante/base-legale-et-protection-des-travailleurs";
const mahf = "https://www.fr.ch/mahf/sculpture-sur-pierre-medievale-et-baroque";
const circuit =
  "https://www.fr.ch/sites/default/files/contens/sbc/_www/files/pdf100/sbc_circuit-patrimoine-2018_fr1.pdf";
const hotel = "https://www.fr.ch/parlinfo/lhotel-cantonal-de-fribourg";
const pal =
  "https://www.ville-fribourg.ch/sites/default/files/2024-06/7_palrev_vdf_rapportexplicatif47oat_adopte2024.pdf";
const sbc =
  "https://www.fr.ch/dfac/sbc/publications-du-service-des-biens-culturels/monographies/batir-fribourg-au-20-siecle-la-ville-die-stadt-1950-2000";
const stats = "https://www.fr.ch/deef/ssd/statistiques-par-themes/batiments";

export const fribourgHeroSubtitle =
  "Plâtrerie, peinture et faux-plafonds, avec notre siège à la Route de Schiffenen 40. Avant vos travaux, vous trouverez ici les règles du permis, le diagnostic amiante et les communes que nous desservons dans le canton.";

export const fribourgToc = [
  { href: "#permis", label: "Permis" },
  { href: "#amiante", label: "Amiante" },
  { href: "#bati", label: "Bâti" },
  { href: "#districts", label: "Districts" },
  { href: "#faq", label: "FAQ" },
] as const;

export const fribourgSections: FribourgSection[] = [
  {
    id: "permis",
    background: "white",
    subtitle: "Procédure",
    title: "Permis, dispense et annonce pour des travaux intérieurs",
    lead: [
      "Construire, reconstruire, transformer, rénover ou démolir : ces travaux demandent une autorisation. Pour une transformation intérieure, une simple annonce ne remplace pas le permis.",
    ],
    bullets: [
      ["Hors structure porteuse, la procédure est simplifiée."],
      ["Le préfet délivre le permis : structure ou élément digne de protection."],
      [
        "Entretien, réparations ou rénovation de façade et de toiture : pas de permis sans changement sensible d'aspect.",
      ],
      ["Solaire dispensé de permis : annonce à la commune trente jours avant."],
      ["Demande préalable facultative, sauf si le règlement communal l'impose."],
    ],
    details: [
      [
        "Le conseil communal décide de la procédure simplifiée et, en cas de doute, demande l'avis du préfet. Toutes les demandes, y compris les demandes préalables, se déposent dans ",
        { href: permis, label: "FRIAC" },
        ".",
      ],
    ],
    sources: [
      { href: latec135, label: "art. 135 LATeC" },
      { href: latec139, label: "art. 139 al. 1 LATeC" },
      { href: relat85, label: "art. 85 ReLATeC" },
      { href: relat84, label: "art. 84 al. 1 let. b ReLATeC" },
      { href: relat87, label: "art. 87 ReLATeC" },
      { href: prefectures, label: "préfectures du canton" },
      { href: ville, label: "inspectorat des constructions" },
      { href: permis, label: "page cantonale du permis de construire" },
    ],
  },
  {
    id: "amiante",
    background: "sand",
    subtitle: "Substances dangereuses",
    title: "Diagnostic amiante avant une rénovation",
    lead: [
      "L'aide cantonale demande un diagnostic pour un bâtiment d'avant 1993.",
    ],
    bullets: [
      ["S'il a été construit à partir de 1993, ce diagnostic n'est pas nécessaire."],
      [
        "Il est réalisé par un diagnostiqueur spécialisé, inscrit sur la liste du FACH.",
      ],
      ["Si de l'amiante est découvert en cours de travaux, le chantier s'arrête."],
      ["Beaucoup de fibres : désamiantage réservé aux entreprises reconnues par la Suva."],
    ],
    details: [],
    sources: [
      { href: diagnostic, label: "aide à l'exécution du Service de l'environnement" },
      { href: oled, label: "OLED, art. 16" },
      { href: otconst3, label: "OTConst, art. 3 al. 2" },
      { href: otconst32, label: "art. 32 al. 3 OTConst" },
      { href: otconst82, label: "art. 82 OTConst" },
      { href: suva, label: "bases légales Suva" },
    ],
  },
  {
    id: "bati",
    background: "white",
    subtitle: "Parc bâti",
    title: "Vieille ville en molasse et ensembles de 1960 à 1980",
    lead: [
      "À Fribourg, les sculpteurs taillaient la molasse, une pierre locale assez tendre, selon le Musée d'art et d'histoire de Fribourg. La tour Rouge, construite vers 1387, est en molasse de type « pierra rossa » (pierre rousse).",
    ],
    bullets: [
      [
        "Le cœur médiéval longe la Sarine et les falaises de molasse, avec ses ponts.",
      ],
      [
        "Le Schönberg et Beaumont, moins le Jura : lotissements ouverts, souvent hauts.",
      ],
      [
        "La plupart datent de 1960 à 1975, certains pieds d'immeubles de 1960 à 1980.",
      ],
    ],
    details: [],
    figure: {
      value: "29,8 %",
      caption:
        "ont été construits au XXIe siècle, contre 19,3 % en moyenne suisse : c'est le parc le plus jeune du pays.",
      source: { href: stats, label: "statistique des bâtiments à usage d'habitation" },
      sourceNote: "(Office fédéral de la statistique, Registre des bâtiments et des logements).",
    },
    sources: [
      { href: mahf, label: "Musée d'art et d'histoire de Fribourg" },
      { href: circuit, label: "circuit du Service des biens culturels" },
      { href: hotel, label: "Hôtel cantonal" },
      {
        href: pal,
        label: "rapport explicatif de la révision du plan d'aménagement local",
      },
      { href: sbc, label: "Service des biens culturels" },
      { href: stats, label: "statistique des bâtiments à usage d'habitation" },
    ],
  },
];

export const fribourgDistrictsIntro: TextPart[][] = [
  [
    "Le canton compte sept districts. Chacun a une préfecture, compétente pour les permis de construire de la procédure ordinaire.",
  ],
  [
    "Nous intervenons au chef-lieu de chaque district et, près du siège, en Sarine et en Singine, pas sur tout le district. Charmey et Jaun (Bellegarde), plus loin en Gruyère, n'y figurent pas. Une commune citée est desservie, pas une référence de chantier.",
  ],
];

export const fribourgDistrictSources: SourceLink[] = [
  { href: districts, label: "État de Fribourg" },
  { href: prefectures, label: "préfectures" },
];

export const fribourgDistricts: FribourgDistrict[] = [
  {
    district: "Sarine",
    chefLieu: "Fribourg",
    communes: ["Fribourg", "Granges-Paccot", "Givisiez", "Marly", "Villars-sur-Glâne"],
  },
  {
    district: "Gruyère",
    chefLieu: "Bulle",
    communes: ["Bulle"],
  },
  {
    district: "Glâne",
    chefLieu: "Romont",
    communes: ["Romont"],
  },
  {
    district: "Lac",
    chefLieu: "Morat",
    communes: ["Morat"],
  },
  {
    district: "Singine",
    chefLieu: "Tavel (Tafers)",
    communes: ["Tavel (Tafers)", "Guin (Düdingen)"],
  },
  {
    district: "Broye",
    chefLieu: "Estavayer-le-Lac",
    communes: ["Estavayer-le-Lac"],
  },
  {
    district: "Veveyse",
    chefLieu: "Châtel-Saint-Denis",
    communes: ["Châtel-Saint-Denis"],
  },
];

export const fribourgAreaServed = [
  "Fribourg",
  "Granges-Paccot",
  "Givisiez",
  "Marly",
  "Villars-sur-Glâne",
  "Bulle",
  "Romont",
  "Morat",
  "Tavel",
  "Guin",
  "Estavayer-le-Lac",
  "Châtel-Saint-Denis",
];

export const fribourgFaq: FribourgFaq[] = [
  {
    question: "Faut-il un permis pour des travaux intérieurs à Fribourg ?",
    answer: [
      "Cela dépend des travaux. Pas de permis pour l'entretien, les réparations ou la rénovation de façade et de toiture, si l'aspect ne change pas sensiblement. Le conseil communal décide la procédure simplifiée si la structure porteuse n'est pas touchée. Le préfet délivre le permis si elle peut toucher la structure ou un élément digne de protection.",
    ],
  },
  {
    question: "Une annonce à la commune suffit-elle pour transformer un logement ?",
    answer: [
      "Non. L'annonce sert notamment aux installations solaires dispensées de permis, trente jours avant les travaux. Pour transformer un logement, c'est la dispense, la procédure simplifiée ou la procédure ordinaire qui s'applique, comme expliqué ci-dessus. Les demandes de permis et les demandes préalables se déposent dans ",
      { href: permis, label: "FRIAC" },
      ". En ville de Fribourg, depuis 2018, les requérants ont l'obligation de déposer leurs dossiers de demande de permis dans FRIAC, selon l'inspectorat des constructions.",
    ],
  },
  {
    question: "Quand faut-il un diagnostic amiante avant de rénover ?",
    answer: [
      "Si votre bâtiment date d'avant 1993, vous mandatez un bureau spécialisé pour le diagnostic. À partir de 1993, l'aide cantonale le considère comme non nécessaire. Le droit fédéral l'impose aussi avant travaux lorsque des déchets risquent de contenir des polluants dangereux. Le formulaire Environnement – Déchets accompagne toute démolition, transformation ou rénovation, même en enquête simplifiée. Si l'amiante est suspecté, l'employeur identifie les dangers avant les travaux.",
    ],
  },
  {
    question: "Un crépi, une colle de carrelage ou un faux-plafond peuvent-ils être concernés ?",
    answer: [
      "Oui. L'aide cantonale les cite parmi les éléments où l'amiante est recherché, avec les flocages, les calorifugeages, le fibrociment et les revêtements de sols ou de parois. L'expertise porte sur les matériaux touchés par vos travaux. Cela ne signifie pas que chaque crépi ou chaque peinture contient de l'amiante.",
    ],
  },
  {
    question: "Quelles communes desservez-vous dans le canton de Fribourg ?",
    answer: [
      "Nous desservons le chef-lieu de chacun des sept districts : Fribourg (Sarine), Bulle (Gruyère), Romont (Glâne), Morat (Lac), Tavel (Singine), Estavayer-le-Lac (Broye) et Châtel-Saint-Denis (Veveyse). Nous intervenons aussi à Granges-Paccot, Givisiez, Marly et Villars-sur-Glâne en Sarine, et à Guin (Düdingen) en Singine. Certaines communes, comme Charmey et Jaun (Bellegarde) en Gruyère, ne figurent pas dans la liste. Les noms des districts et des chefs-lieux viennent de l'État de Fribourg et des ",
      { href: prefectures, label: "préfectures" },
      ".",
    ],
  },
  {
    question: "Un immeuble de la vieille ville suit-il la même démarche qu'un logement des années 1960 ?",
    answer: [
      "Pour l'amiante, oui : les deux sont en général antérieurs à 1993, et l'aide cantonale demande alors un diagnostic avant une démolition, une transformation ou une rénovation. Les ensembles du Schönberg, de Beaumont et du Jura datent pour la plupart de 1960 à 1975. En vieille ville, s'ajoute la question de la protection : on y trouve des constructions en molasse recensées par le canton, comme la tour Rouge et l'Hôtel cantonal, et la ",
      { href: ville, label: "Ville" },
      " demande de vérifier le degré de protection avant les travaux.",
    ],
  },
];

export const fribourgFaqSources: SourceLink[] = [
  { href: relat87, label: "art. 87 ReLATeC" },
  { href: relat85, label: "art. 85 ReLATeC" },
  { href: latec139, label: "art. 139 al. 1 LATeC" },
  { href: relat84, label: "art. 84 al. 1 let. b ReLATeC" },
  { href: permis, label: "FRIAC" },
  { href: ville, label: "inspectorat des constructions" },
  { href: diagnostic, label: "aide cantonale" },
  { href: oled, label: "art. 16 OLED" },
  { href: otconst3, label: "art. 3 al. 2 OTConst" },
  { href: suva, label: "page Suva" },
  { href: districts, label: "État de Fribourg" },
  { href: prefectures, label: "préfectures" },
  { href: pal, label: "rapport du plan d'aménagement local" },
  { href: circuit, label: "tour Rouge" },
  { href: hotel, label: "Hôtel cantonal" },
];

export function textOf(parts: TextPart[]): string {
  return parts.map((part) => (typeof part === "string" ? part : part.label)).join("");
}
