/**
 * Contenu public de /zones/fribourg uniquement.
 * Chaque affirmation réglementaire ou patrimoniale porte un lien officiel
 * (fr.ch, commune, Suva ou droit fédéral). Pas de chantier, délai, prix ni certification inventés.
 */

export type TextPart = string | { href: string; label: string };

export interface FribourgSection {
  id: string;
  background: "white" | "sand";
  subtitle: string;
  title: string;
  paragraphs: TextPart[][];
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

export const FRIBOURG_SEAT = "Route de Schiffenen 40";

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
  "Siège à la Route de Schiffenen 40. La page décrit le permis cantonal pour des travaux intérieurs, le diagnostic amiante avant rénovation, le bâti de la ville et les communes desservies depuis cette adresse.";

export const fribourgSections: FribourgSection[] = [
  {
    id: "permis",
    background: "white",
    subtitle: "Procédure",
    title: "Permis, dispense et annonce pour des travaux intérieurs",
    paragraphs: [
      [
        "Le canton indique qu'une autorisation administrative est nécessaire pour les travaux de construction, de reconstruction, de transformation, de réfection ou de démolition, en renvoyant notamment à l'",
        { href: latec135, label: "art. 135 LATeC" },
        ". La compétence appartient au préfet pour la procédure ordinaire et au conseil communal pour la procédure simplifiée (",
        { href: latec139, label: "art. 139 al. 1 LATeC" },
        "). Les demandes de permis, ordinaires et simplifiées, ainsi que les demandes préalables, se saisissent dans ",
        { href: permis, label: "FRIAC" },
        ".",
      ],
      [
        "Les transformations intérieures qui ne sont pas susceptibles de porter atteinte à la stabilité de la structure porteuse relèvent de la procédure simplifiée (",
        { href: relat85, label: "art. 85 al. 1 let. b1 ReLATeC" },
        "). Celles qui peuvent porter atteinte à cette structure, ou à des éléments dignes de protection, relèvent de la procédure ordinaire (",
        { href: relat84, label: "art. 84 al. 1 let. b ReLATeC" },
        "). Le préfet ou la préfète du district délivre alors le permis (",
        { href: prefectures, label: "préfectures du canton" },
        ").",
      ],
      [
        "Ne sont pas soumis à permis les travaux d'entretien et de réparation, ni la rénovation de façades et de toitures, lorsqu'ils ne modifient pas sensiblement l'aspect de l'ouvrage (",
        { href: relat87, label: "art. 87 al. 1 let. a ReLATeC" },
        "). En cas de doute sur la procédure simplifiée, le conseil communal prend l'avis du préfet (",
        { href: relat85, label: "art. 85 al. 2 ReLATeC" },
        ").",
      ],
      [
        "L'annonce prévue par le règlement ne remplace pas ce permis pour une transformation intérieure. Elle vise notamment les installations solaires dispensées de permis, à annoncer à la commune trente jours avant le début des travaux (",
        { href: relat87, label: "art. 87 al. 3 ReLATeC" },
        "). La Ville de Fribourg publie une fiche de requête pour les procédures allégées d'entretien des bâtiments. Elle rappelle aussi que, depuis 2018, les dossiers de permis déposés à la Ville passent par FRIAC, et qu'il faut d'abord vérifier si le bien est protégé ou situé dans une zone ou un périmètre de protection (",
        { href: ville, label: "inspectorat des constructions" },
        ").",
      ],
      [
        "La demande préalable est facultative, sauf si une prescription du règlement communal d'urbanisme la rend obligatoire, par exemple pour un objet protégé ou un périmètre de protection (",
        { href: permis, label: "page cantonale du permis de construire" },
        ").",
      ],
    ],
  },
  {
    id: "amiante",
    background: "sand",
    subtitle: "Substances dangereuses",
    title: "Diagnostic amiante avant une rénovation",
    paragraphs: [
      [
        "L'",
        { href: diagnostic, label: "aide à l'exécution du Service de l'environnement" },
        ", établie avec le Service public de l'emploi et la Suva Fribourg, porte sur le diagnostic des substances dangereuses. L'amiante, les PCB, les HAP et les métaux lourds ont été abondamment utilisés depuis les années 1950 et interdits au début des années 1990. Pour un bâtiment construit à partir de 1993, cette aide considère qu'un diagnostic n'est pas nécessaire. Pour un bâtiment construit avant 1993, le requérant doit mandater un bureau d'ingénieur spécialisé.",
      ],
      [
        "L'ordonnance fédérale sur les déchets impose un diagnostic avant travaux lorsqu'il faut s'attendre à des déchets contenant des polluants dangereux pour l'environnement ou la santé (",
        { href: oled, label: "OLED, art. 16" },
        "). L'aide cantonale précise que la présence d'amiante doit être suspectée dans tout bâtiment construit avant 1993, que l'expertise porte sur tous les matériaux concernés par les travaux et qu'elle est établie par un diagnostiqueur figurant sur la liste du FACH.",
      ],
      [
        "Dans un dossier de permis, le formulaire Environnement – Déchets accompagne tout projet de démolition, de transformation ou de rénovation, même de minime importance (enquête simplifiée). La commune, autorité de police des constructions, vérifie que ce formulaire et, le cas échéant, le rapport de diagnostic figurent dans la demande. Parmi les éléments à contrôler, l'aide cite les flocages, les calorifugeages, les faux-plafonds, le fibrociment, les revêtements de sols ou de parois, les colles de carrelage et les crépis.",
      ],
      [
        "La protection des travailleurs relève de la Suva et du Service public de l'emploi. Si la présence d'amiante est suspectée, l'employeur identifie et apprécie les dangers avant le début des travaux (",
        { href: otconst3, label: "OTConst, art. 3 al. 2" },
        "). Si de l'amiante est découvert pendant les travaux, ceux-ci sont interrompus et le maître d'ouvrage ou son représentant est informé (",
        { href: otconst32, label: "art. 32 al. 3 OTConst" },
        "). Les travaux qui libèrent une quantité importante de fibres ne peuvent être exécutés que par une entreprise de désamiantage reconnue par la Suva (",
        { href: otconst82, label: "art. 82 OTConst" },
        "). La Suva rappelle par ailleurs que la commercialisation de l'amiante est interdite depuis 1990 et que les bâtiments construits avant cette date sont susceptibles d'en contenir (",
        { href: suva, label: "bases légales Suva" },
        "). Le seuil cantonal reste 1993 ; le seuil rappelé par la Suva est 1990.",
      ],
    ],
  },
  {
    id: "bati",
    background: "white",
    subtitle: "Parc bâti",
    title: "Vieille ville en molasse et ensembles de 1960 à 1980",
    paragraphs: [
      [
        "Le ",
        { href: mahf, label: "Musée d'art et d'histoire de Fribourg" },
        " indique que les sculpteurs de la ville taillaient la molasse, une pierre locale relativement tendre. Le ",
        { href: circuit, label: "circuit du Service des biens culturels" },
        " décrit la tour Rouge, vers 1387, comme une construction en molasse de type « pierra rossa » (pierre rousse). La halle de l'",
        { href: hotel, label: "Hôtel cantonal" },
        ", achevée dans les années 1510, a des piliers en molasse.",
      ],
      [
        "Le ",
        { href: pal, label: "rapport explicatif de la révision du plan d'aménagement local" },
        " (art. 47 OAT, page de titre datée d'avril 2023) situe le cœur historique médiéval au bord de la Sarine et au flanc des falaises de molasse, avec le patrimoine bâti des ponts et de la vieille ville. Il décrit les quartiers du Schönberg, de Beaumont et, dans une moindre mesure, du Jura : des lotissements à l'urbanisation ouverte, souvent d'une hauteur importante, dont la plupart des ensembles ont été construits entre 1960 et 1975. Le même rapport évoque des pieds d'immeubles datés des années 1960 à 1980.",
      ],
      [
        "Le ",
        { href: sbc, label: "Service des biens culturels" },
        " situe l'expansion de 1950 à 2000 au Schoenberg, à Beaumont, au Jura et dans le secteur Beauregard-Vignettaz : grands lotissements, immeubles de grande hauteur et bâtiments administratifs au centre. Le centre historique ne représente plus qu'une petite partie du territoire bâti.",
      ],
      [
        "À l'échelle du canton, la ",
        { href: stats, label: "statistique des bâtiments à usage d'habitation" },
        " (Office fédéral de la statistique, Registre des bâtiments et des logements) compte 75’906 bâtiments en 2025, dont 45’395 maisons individuelles, soit 59,8 %. Avec 29,8 % de bâtiments construits au XXIe siècle, ce parc reste le plus jeune de Suisse, où cette part est de 19,3 %. Ces chiffres qualifient le canton. Ils ne décrivent pas un immeuble en particulier.",
      ],
    ],
  },
];

export const fribourgDistrictsIntro: TextPart[][] = [
  [
    "Le canton compte sept districts : la Broye, la Glâne, la Gruyère, le Lac, la Sarine, la Singine et la Veveyse (",
    { href: districts, label: "État de Fribourg" },
    "). Chacun a une préfecture, compétente pour les permis de construire de la procédure ordinaire (",
    { href: prefectures, label: "préfectures" },
    ").",
  ],
  [
    `Depuis le siège, ${FRIBOURG_SEAT}, la liste retient le chef-lieu de chaque district et, tout près de cette adresse, des communes de la Sarine et de la Singine. Elle ne reprend pas l'ensemble d'un district : Charmey et Jaun (Bellegarde), plus loin en Gruyère, n'y figurent pas. Citer une commune dit qu'elle est desservie depuis le siège. Ce n'est pas un chantier documenté.`,
  ],
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
      "L'entretien et la réparation, ainsi que la rénovation de façade ou de toiture, sont dispensés de permis s'ils ne modifient pas sensiblement l'aspect de l'ouvrage (",
      { href: relat87, label: "art. 87 al. 1 let. a ReLATeC" },
      "). Une transformation intérieure qui ne touche pas à la stabilité de la structure porteuse suit la procédure simplifiée, décidée par le conseil communal (",
      { href: relat85, label: "art. 85 al. 1 let. b1 ReLATeC" },
      " et ",
      { href: latec139, label: "art. 139 al. 1 LATeC" },
      "). Si elle peut porter atteinte à cette structure ou à des éléments dignes de protection, la procédure est ordinaire et le permis relève du préfet (",
      { href: relat84, label: "art. 84 al. 1 let. b ReLATeC" },
      "). En cas de doute, le conseil communal prend l'avis du préfet (",
      { href: relat85, label: "art. 85 al. 2 ReLATeC" },
      ").",
    ],
  },
  {
    question: "Une annonce à la commune suffit-elle pour transformer un logement ?",
    answer: [
      "Non. L'annonce du ReLATeC concerne notamment les installations solaires dispensées de permis, déposée auprès de la commune trente jours avant les travaux (",
      { href: relat87, label: "art. 87 al. 3 ReLATeC" },
      "). Une transformation intérieure suit la dispense, la procédure simplifiée ou la procédure ordinaire, selon les articles ci-dessus. Les demandes de permis et les demandes préalables se déposent dans ",
      { href: permis, label: "FRIAC" },
      ". À la Ville, l'",
      { href: ville, label: "inspectorat des constructions" },
      " indique que ce dépôt est obligatoire depuis 2018.",
    ],
  },
  {
    question: "Quand faut-il un diagnostic amiante avant de rénover ?",
    answer: [
      "Pour un bâtiment construit avant 1993, le requérant mandate un bureau spécialisé ; à partir de 1993, l'",
      { href: diagnostic, label: "aide cantonale" },
      " considère le diagnostic non nécessaire. Le formulaire Environnement – Déchets accompagne toute démolition, transformation ou rénovation, y compris en enquête simplifiée. L'",
      { href: oled, label: "art. 16 OLED" },
      " impose le diagnostic avant travaux lorsqu'il faut s'attendre à des déchets de polluants dangereux. Côté Suva, l'employeur identifie les dangers avant les travaux si l'amiante est suspecté (",
      { href: otconst3, label: "art. 3 al. 2 OTConst" },
      "). La Suva vise les bâtiments d'avant 1990 (",
      { href: suva, label: "page Suva" },
      ") ; le canton, ceux d'avant 1993.",
    ],
  },
  {
    question: "Un crépi, une colle de carrelage ou un faux-plafond peuvent-ils être concernés ?",
    answer: [
      "Oui, ce sont des éléments que l'",
      { href: diagnostic, label: "aide cantonale" },
      " cite parmi ceux où l'amiante est recherché, avec les flocages, les calorifugeages, le fibrociment et les revêtements de sols ou de parois. L'expertise porte sur les matériaux concernés par les travaux. Elle ne dit pas que chaque crépi ou chaque peinture en contient.",
    ],
  },
  {
    question: "Quelles communes sont desservies depuis la Route de Schiffenen 40 ?",
    answer: [
      "Les sept districts du canton, avec leur chef-lieu : Fribourg (Sarine), Bulle (Gruyère), Romont (Glâne), Morat (Lac), Tavel (Singine), Estavayer-le-Lac (Broye) et Châtel-Saint-Denis (Veveyse). S'y ajoutent, près du siège, Granges-Paccot, Givisiez, Marly et Villars-sur-Glâne en Sarine, et Guin (Düdingen) en Singine. La liste ne couvre pas tout le district : Charmey et Jaun (Bellegarde) n'y sont pas. Les noms des districts et des chefs-lieux viennent de l'",
      { href: districts, label: "État de Fribourg" },
      " et des ",
      { href: prefectures, label: "préfectures" },
      ".",
    ],
  },
  {
    question: "Un immeuble de la vieille ville suit-il la même démarche qu'un logement des années 1960 ?",
    answer: [
      "Les deux sont, en règle générale, antérieurs à 1993 : l'",
      { href: diagnostic, label: "aide cantonale" },
      " demande alors un diagnostic pour une démolition, une transformation ou une rénovation. La vieille ville concentre en outre des constructions en molasse recensées par le canton, comme la ",
      { href: circuit, label: "tour Rouge" },
      " et l'",
      { href: hotel, label: "Hôtel cantonal" },
      ". La ",
      { href: ville, label: "Ville" },
      " demande de vérifier le degré de protection avant des travaux. Les ensembles du Schönberg, de Beaumont et du Jura datent, pour la plupart, de 1960 à 1975 (",
      { href: pal, label: "rapport du plan d'aménagement local" },
      ").",
    ],
  },
];

export function textOf(parts: TextPart[]): string {
  return parts.map((part) => (typeof part === "string" ? part : part.label)).join("");
}
