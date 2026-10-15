/**
 * Contenu public de /zones/fribourg uniquement.
 * Les phrases sont celles déjà relues : la page les réordonne, elle n'ajoute aucun fait.
 * Les références d'articles restent dans le texte, sans lien. Les liens de source
 * sont regroupés en bas de section.
 */

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
      "Construire, reconstruire, transformer, rénover ou démolir : ces travaux demandent une autorisation (art. 135 LATeC). Pour une transformation intérieure, une simple annonce ne remplace pas le permis.",
    ],
    bullets: [
      [
        "Une transformation intérieure qui ne touche pas à la stabilité de la structure porteuse suit la procédure simplifiée (art. 85 al. 1 let. b1 ReLATeC).",
      ],
      [
        "Si elle peut toucher cette structure ou des éléments dignes de protection, la procédure est ordinaire (art. 84 al. 1 let. b ReLATeC). Le permis est alors délivré par le préfet ou la préfète du district (",
        { href: prefectures, label: "préfectures du canton" },
        ").",
      ],
      [
        "L'entretien, les réparations et la rénovation de façades ou de toitures n'exigent pas de permis, tant qu'ils ne changent pas sensiblement l'aspect du bâtiment (art. 87 al. 1 let. a ReLATeC).",
      ],
      [
        "L'annonce sert notamment aux installations solaires dispensées de permis : elle se fait auprès de la commune trente jours avant le début des travaux (art. 87 al. 3 ReLATeC).",
      ],
      [
        "La demande préalable est facultative. Le règlement communal d'urbanisme peut toutefois l'imposer, par exemple pour un objet protégé ou dans un périmètre de protection.",
      ],
    ],
    details: [
      [
        "Pour la procédure ordinaire, c'est le préfet qui décide. Pour la procédure simplifiée, c'est le conseil communal (art. 139 al. 1 LATeC). Toutes les demandes, y compris les demandes préalables, se déposent dans ",
        { href: permis, label: "FRIAC" },
        ".",
      ],
      [
        "Si vous avez un doute sur la procédure simplifiée, le conseil communal demande l'avis du préfet (art. 85 al. 2 ReLATeC).",
      ],
      [
        "En ville de Fribourg, l'",
        { href: ville, label: "inspectorat des constructions" },
        " propose une fiche de requête pour l'entretien des bâtiments en procédure allégée. Depuis 2018, les requérants ont l'obligation de déposer leurs dossiers de demande de permis dans FRIAC. Vérifiez d'abord si votre bien est protégé, ou s'il se trouve dans une zone ou un périmètre de protection.",
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
      "Votre bâtiment date d'avant 1993 ? Avant de le rénover, vous devez mandater un bureau d'ingénieur spécialisé pour un diagnostic des substances dangereuses.",
    ],
    bullets: [
      ["S'il a été construit à partir de 1993, ce diagnostic n'est pas nécessaire."],
      [
        "Selon l'aide cantonale, l'amiante doit être suspecté dans tout bâtiment construit avant 1993.",
      ],
      [
        "Le droit fédéral impose aussi un diagnostic avant travaux lorsque des déchets risquent de contenir des polluants dangereux pour l'environnement ou la santé (OLED, art. 16).",
      ],
      [
        "Si l'amiante est suspecté, l'employeur identifie et évalue les dangers avant de commencer (OTConst, art. 3 al. 2).",
      ],
      [
        "Si de l'amiante est découvert en cours de travaux, le chantier s'arrête et le maître d'ouvrage, ou son représentant, est informé (art. 32 al. 3 OTConst).",
      ],
    ],
    details: [
      [
        "C'est ce que prévoit l'aide à l'exécution du Service de l'environnement, établie avec le Service public de l'emploi et la Suva Fribourg. L'amiante, les PCB, les HAP et les métaux lourds ont été largement utilisés dès les années 1950, puis interdits au début des années 1990.",
      ],
      [
        "L'expertise couvre tous les matériaux touchés par les travaux. Elle est réalisée par un diagnostiqueur inscrit sur la liste du FACH. Pour toute démolition, transformation ou rénovation, même de minime importance (enquête simplifiée), le dossier de permis contient le formulaire Environnement – Déchets. La commune, qui est l'autorité de police des constructions, vérifie qu'il y figure, avec le rapport de diagnostic s'il en faut un. L'aide cite les éléments à contrôler : flocages, calorifugeages, faux-plafonds, fibrociment, revêtements de sols ou de parois, colles de carrelage et crépis.",
      ],
      [
        "Sur le chantier, la protection des travailleurs relève de la Suva et du Service public de l'emploi. Les travaux qui libèrent beaucoup de fibres sont réservés aux entreprises de désamiantage reconnues par la Suva (art. 82 OTConst). La Suva retient l'année 1990, date de l'interdiction de commercialiser l'amiante : les bâtiments plus anciens peuvent en contenir. Le canton, lui, retient 1993.",
      ],
    ],
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
      "À Fribourg, les sculpteurs taillaient la molasse, une pierre locale assez tendre, selon le Musée d'art et d'histoire de Fribourg. La tour Rouge, construite vers 1387, est en molasse de type « pierra rossa » (pierre rousse), d'après le circuit du Service des biens culturels.",
    ],
    bullets: [
      [
        "La halle de l'Hôtel cantonal, achevée dans les années 1510, repose sur des piliers en molasse.",
      ],
      [
        "Le cœur médiéval s'étend au bord de la Sarine et au flanc des falaises de molasse, avec ses ponts et sa vieille ville.",
      ],
      [
        "Le Schönberg, Beaumont et, dans une moindre mesure, le Jura sont des lotissements ouverts, souvent hauts.",
      ],
      [
        "La plupart de leurs ensembles ont été construits entre 1960 et 1975, et certains pieds d'immeubles datent des années 1960 à 1980 (rapport explicatif de la révision du plan d'aménagement local, art. 47 OAT, page de titre datée d'avril 2023).",
      ],
    ],
    details: [
      [
        "Entre 1950 et 2000, la ville s'est étendue au Schönberg, à Beaumont, au Jura et dans le secteur Beauregard-Vignettaz, avec de grands lotissements, des immeubles de grande hauteur et, au centre, des bâtiments administratifs (Service des biens culturels). Le centre historique ne représente plus qu'une petite partie du territoire bâti.",
      ],
      [
        "En 2025, le canton compte 75’906 bâtiments à usage d'habitation, dont 45’395 maisons individuelles (59,8 %). Ces chiffres valent pour l'ensemble du canton, pas pour un immeuble précis.",
      ],
    ],
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
    "Le canton compte sept districts : la Broye, la Glâne, la Gruyère, le Lac, la Sarine, la Singine et la Veveyse (État de Fribourg). Chacun a une préfecture, compétente pour les permis de construire de la procédure ordinaire (",
    { href: prefectures, label: "préfectures" },
    ").",
  ],
  [
    "Nous intervenons dans le chef-lieu de chaque district, ainsi que dans plusieurs communes de la Sarine et de la Singine proches de notre siège. La liste ne couvre pas des districts entiers : Charmey et Jaun (Bellegarde), plus loin en Gruyère, n'y figurent pas. Une commune citée ici est une commune que nous desservons, pas une référence de chantier.",
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
      "Cela dépend des travaux. L'entretien, les réparations et la rénovation de façade ou de toiture n'en demandent pas, s'ils ne changent pas sensiblement l'aspect du bâtiment (art. 87 al. 1 let. a ReLATeC). Une transformation intérieure qui ne touche pas à la structure porteuse suit la procédure simplifiée, et c'est le conseil communal qui décide (art. 85 al. 1 let. b1 ReLATeC et art. 139 al. 1 LATeC). Si elle peut toucher cette structure ou des éléments dignes de protection, la procédure est ordinaire et le permis relève du préfet (art. 84 al. 1 let. b ReLATeC). En cas de doute, le conseil communal demande l'avis du préfet (art. 85 al. 2 ReLATeC).",
    ],
  },
  {
    question: "Une annonce à la commune suffit-elle pour transformer un logement ?",
    answer: [
      "Non. L'annonce sert notamment aux installations solaires dispensées de permis, trente jours avant les travaux (art. 87 al. 3 ReLATeC). Pour transformer un logement, c'est la dispense, la procédure simplifiée ou la procédure ordinaire qui s'applique, comme expliqué ci-dessus. Les demandes de permis et les demandes préalables se déposent dans ",
      { href: permis, label: "FRIAC" },
      ". En ville de Fribourg, depuis 2018, les requérants ont l'obligation de déposer leurs dossiers de demande de permis dans FRIAC, selon l'inspectorat des constructions.",
    ],
  },
  {
    question: "Quand faut-il un diagnostic amiante avant de rénover ?",
    answer: [
      "Si votre bâtiment date d'avant 1993, vous mandatez un bureau spécialisé pour le diagnostic. À partir de 1993, l'aide cantonale le considère comme non nécessaire. Le droit fédéral l'impose aussi avant travaux lorsque des déchets risquent de contenir des polluants dangereux (art. 16 OLED). Le formulaire Environnement – Déchets accompagne toute démolition, transformation ou rénovation, même en enquête simplifiée. Si l'amiante est suspecté, l'employeur identifie les dangers avant les travaux (art. 3 al. 2 OTConst). La Suva retient les bâtiments d'avant 1990 (page Suva), le canton ceux d'avant 1993.",
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
      "Pour l'amiante, oui : les deux sont en général antérieurs à 1993, et l'aide cantonale demande alors un diagnostic avant une démolition, une transformation ou une rénovation. Les ensembles du Schönberg, de Beaumont et du Jura datent pour la plupart de 1960 à 1975 (rapport du plan d'aménagement local). En vieille ville, s'ajoute la question de la protection : on y trouve des constructions en molasse recensées par le canton, comme la tour Rouge et l'Hôtel cantonal, et la ",
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
