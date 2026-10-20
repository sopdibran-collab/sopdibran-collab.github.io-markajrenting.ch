import type { FaqItem } from "@/lib/content/services";

/** Règle cantonale citée sur une page zone, avec sa source officielle. */
export interface RegleLocale {
  titre: string;
  texte: string;
  sourceLabel: string;
  sourceUrl: string;
}

export interface Zone {
  slug: string;
  /** Dernière modification du contenu (YYYY-MM-DD). Repli du lastmod. */
  updated: string;
  name: string;
  /** Nom court pour titres (ex. « Fribourg ») */
  shortName: string;
  /** H1 : le métier, avec la préposition correcte. */
  h1: string;
  /** Complément de lieu : « à Fribourg », « en Valais », « dans le Jura »… */
  locative: string;
  canton: string;
  description: string;
  villes: string[];
  chantiers: string[];
  metaTitle: string;
  metaDescription: string;
  intro: string;
  contexteLocal: string[];
  /** Règles cantonales sourcées (contenu local, pas de gabarit). */
  reglesLocales?: RegleLocale[];
  /** Titre de la section règles si le texte par défaut ne suffit pas (ex. Jura + Jura bernois). */
  reglesTitre?: string;
  faqLocal: FaqItem[];
}

/*
 * Zones d'intervention : cantons francophones de Suisse.
 * Le siège est à Fribourg ; chaque zone a du contenu local distinct.
 */
export const zones: Zone[] = [
  {
    slug: "fribourg",
    updated: "2026-10-08",
    name: "Canton de Fribourg",
    shortName: "Fribourg",
    h1: "Plâtrerie et peinture à Fribourg",
    locative: "à Fribourg",
    canton: "FR",
    description:
      "Siège de Markaj Renting SA. Nous réalisons des chantiers de plâtrerie, peinture et rénovation dans tout le canton, de la ville de Fribourg à la Gruyère en passant par la Glâne et la Broye, pour particuliers, régies et entreprises.",
    villes: ["Fribourg", "Romont", "Bulle", "Estavayer-le-Lac", "Châtel-St-Denis", "Morat"],
    chantiers: ["Rénovation d'appartements", "Bureaux et commerces", "Copropriétés", "Bâtiments publics"],
    metaTitle: "Plâtrier-peintre canton de Fribourg",
    metaDescription:
      "Siège Route de Schiffenen à Fribourg. Plâtrerie, peinture, isolation et façades à Fribourg, Bulle, Romont, Morat, Estavayer-le-Lac. Devis gratuit.",
    intro:
      "Vous cherchez un plâtrier ou un peintre à Fribourg ? Markaj Renting SA est basée Route de Schiffenen et intervient dans tout le canton pour la plâtrerie, la peinture, l'isolation et la rénovation.",
    contexteLocal: [
      "Le bâti fribourgeois mélange immeubles historiques en vieille ville, logements des années 1960–80 à rénover et constructions neuves Minergie en périphérie (Marly, Villars-sur-Glâne, Givisiez). Nos équipes maîtrisent les reprises de plâtre ancien comme les cloisons BA13 en neuf.",
      "En Gruyère (Bulle, Châtel-St-Denis) et en Glâne (Romont), nous traitons aussi des façades exposées et des rénovations d'appartements pour régies et particuliers. Un seul interlocuteur pour plâtrerie, peinture et isolation.",
    ],
    faqLocal: [
      {
        question: "Intervenez-vous pour de la plâtrerie à Fribourg ?",
        answer:
          "Oui. Notre siège est à Fribourg : cloisons, doublages, finitions Q3/Q4 et reprises en rénovation pour particuliers, architectes et régies dans toute l'agglomération.",
      },
      {
        question: "Proposez-vous un devis isolation ou façades à Bulle et Romont ?",
        answer:
          "Oui. Nous établissons un devis gratuit après visite sur site à Bulle, Romont, Estavayer-le-Lac et dans le reste du canton. Réponse sous 5 jours ouvrés.",
      },
      {
        question: "Quels délais pour un chantier peinture à Fribourg ?",
        answer:
          "Selon la surface et l'état des supports, comptez en général quelques jours à deux semaines. Nous planifions la visite rapidement depuis notre base fribourgeoise.",
      },
    ],
  },
  {
    slug: "vaud",
    updated: "2026-10-19",
    name: "Canton de Vaud",
    shortName: "Vaud",
    h1: "Plâtrerie et peinture à Lausanne et dans le canton de Vaud",
    locative: "dans le canton de Vaud",
    canton: "VD",
    description: "Nous intervenons à Lausanne, dans l'Ouest lausannois, sur La Côte, dans le Lavaux, sur la Riviera et dans le Nord vaudois pour la plâtrerie, la peinture, l'isolation intérieure et les faux-plafonds.",
    villes: [
      "Lausanne",
      "Renens",
      "Pully",
      "Morges",
      "Nyon",
      "Vevey",
      "Montreux",
      "Yverdon-les-Bains"
    ],
    chantiers: ["Rénovation de bureaux", "Doublages isolants", "Faux-plafonds acoustiques", "Rénovation complète"],
    metaTitle: "Plâtrerie-peinture Lausanne et Vaud",
    metaDescription:
      "Plâtrerie, peinture, isolation et faux-plafonds à Lausanne, Morges, Nyon, Vevey, Montreux et Yverdon. Entreprise basée à Fribourg. Devis gratuit.",
    intro: "Un appartement à rafraîchir à Lausanne, des bureaux à réaménager à Morges ou à Nyon ? Nous intervenons à Lausanne, Morges, Nyon, Vevey, Montreux et Yverdon-les-Bains pour la plâtrerie, la peinture, l'isolation intérieure et les faux-plafonds.",
    contexteLocal: [
      "Avant de poncer, percer ou démolir une cloison, le droit fédéral (OTConst) impose de vérifier la présence d'amiante. Si les travaux demandent un permis et que le bâtiment date d'avant 1991, le canton de Vaud exige en plus qu'un diagnostic amiante soit joint à la demande. Nous l'intégrons au planning dès votre demande de devis, pour éviter un arrêt de chantier.",
      "Pour un appartement loué ou des bureaux occupés, nous organisons les travaux pièce par pièce, avec protection des sols et des parties communes, en lien avec la régie, l'architecte ou le propriétaire."
    ],
    reglesLocales: [
      {
        "titre": "Diagnostic amiante avant travaux (bâtiments d'avant 1991)",
        "texte": "Pour des travaux soumis à permis de construire sur un bâtiment antérieur à 1991, un diagnostic amiante avant travaux doit être joint à la demande de permis (art. 103a LATC). Même sans permis, le droit fédéral impose de vérifier la présence d'amiante avant les travaux (art. 3 OTConst).",
        "sourceLabel": "État de Vaud – Amiante : diagnostic et assainissement",
        "sourceUrl": "https://www.vd.ch/territoire-et-construction/amiante-1/diagnostic-et-assainissement"
      },
      {
        "titre": "Un diagnostiqueur reconnu FACH",
        "texte": "Le diagnostic est réalisé par une diagnostiqueuse ou un diagnostiqueur reconnu par le Forum Amiante Suisse (FACH). Le rapport est déposé sur la plateforme cantonale GDA lors de la demande de permis.",
        "sourceLabel": "État de Vaud – Questionnaire général (QG), question B18",
        "sourceUrl": "https://www.vd.ch/territoire-et-construction/permis-de-construire/faq/questionnaire-general-qg"
      }
    ],
    faqLocal: [
      {
        "question": "Intervenez-vous pour de la plâtrerie et de la peinture à Lausanne ?",
        "answer": "Oui. Nous intervenons à Lausanne et dans l'Ouest lausannois (Renens, Prilly, Pully) pour les cloisons, les finitions Q3/Q4, la peinture intérieure et la rénovation."
      },
      {
        "question": "Mon immeuble vaudois date d'avant 1991 : faut-il un diagnostic amiante avant de repeindre ou de refaire une cloison ?",
        "answer": "Oui, dès que les travaux touchent les matériaux : ponçage, perçage ou démolition. Pour une peinture sans ponçage, décrivez-nous les travaux et nous regardons ensemble ce qui s'applique."
      },
      {
        "question": "Couvrez-vous Nyon, Morges et la Riviera ?",
        "answer": "Oui. Nous intervenons à Nyon, Morges, Vevey, Montreux et Yverdon-les-Bains, pour les mêmes travaux qu'à Lausanne."
      }
    ],
  },
  {
    slug: "geneve",
    updated: "2026-10-08",
    name: "Canton de Genève",
    shortName: "Genève",
    h1: "Plâtrerie (gypserie) et peinture à Genève",
    locative: "à Genève",
    canton: "GE",
    description:
      "À Genève et dans les communes du canton, nos équipes interviennent sur des chantiers de finition exigeants : appartements, bureaux, commerces et immeubles de rendement.",
    villes: ["Genève", "Carouge", "Lancy", "Vernier", "Meyrin"],
    chantiers: ["Peinture intérieure", "Plâtrerie technique", "Aménagement de bureaux", "Rénovation d'immeubles"],
    metaTitle: "Gypserie-peinture à Genève",
    metaDescription:
      "Plâtrerie (gypserie), peinture et faux-plafonds à Genève. Chantiers publiés : plateaux de bureaux OMS, immeuble rue de Lausanne 119. Devis gratuit.",
    intro:
      "Vous cherchez un plâtrier ou un peintre à Genève ? Markaj Renting SA intervient dans le canton pour la plâtrerie technique, la peinture intérieure, l'aménagement de bureaux et la rénovation d'immeubles.",
    contexteLocal: [
      "Le parc bâti genevois exige souvent des finitions soignées : appartements en PPE, bureaux au centre et en zone aéroportuaire (Meyrin, Vernier), commerces à Carouge et Lancy. Nous livrons des surfaces prêtes à peindre (Q3/Q4) et des plafonds techniques intégrés.",
      "Pour les régies et promoteurs, nous planifions des chantiers en site occupé avec protection des parties communes et coordination des corps de métier.",
    ],
    faqLocal: [
      {
        question: "Intervenez-vous pour de la peinture à Genève ?",
        answer:
          "Oui. Peinture intérieure et extérieure, préparation des supports et finitions durables à Genève et dans les communes du canton (Carouge, Lancy, Vernier, Meyrin).",
      },
      {
        question: "Proposez-vous la plâtrerie pour bureaux à Genève ?",
        answer:
          "Oui. Cloisons, doublages, faux-plafonds acoustiques et finitions pour aménagements tertiaires, en lien avec architectes et entreprises générales.",
      },
      {
        question: "Quels délais pour un devis à Genève ?",
        answer:
          "Après prise de contact, nous organisons une visite et remettons un devis gratuit sous 5 jours ouvrés environ, selon la complexité du chantier.",
      },
    ],
  },
  {
    slug: "neuchatel",
    updated: "2026-10-19",
    name: "Canton de Neuchâtel",
    shortName: "Neuchâtel",
    h1: "Plâtrerie et peinture à Neuchâtel",
    locative: "à Neuchâtel",
    canton: "NE",
    description: "Nous intervenons sur le Littoral, au Val-de-Ruz, au Val-de-Travers et dans les Montagnes neuchâteloises pour la plâtrerie, la peinture, l'isolation intérieure et la rénovation.",
    villes: [
      "Neuchâtel",
      "La Chaux-de-Fonds",
      "Le Locle",
      "Val-de-Ruz",
      "Boudry",
      "Milvignes"
    ],
    chantiers: ["Rénovation intérieure", "Isolation de combles", "Peinture et plâtrerie", "Façades"],
    metaTitle: "Plâtrerie-peinture à Neuchâtel",
    metaDescription:
      "Plâtrerie, peinture, isolation et façades à Neuchâtel, La Chaux-de-Fonds, Le Locle et Val-de-Ruz. Entreprise basée à Fribourg. Devis gratuit après visite.",
    intro: "Des cloisons à refaire à Neuchâtel, une isolation à revoir à La Chaux-de-Fonds ? Nous intervenons à Neuchâtel, La Chaux-de-Fonds, Le Locle, au Val-de-Ruz et sur le Littoral pour la plâtrerie, la peinture, l'isolation intérieure et la rénovation.",
    contexteLocal: [
      "À Neuchâtel, le seuil est plus tardif qu'ailleurs : pour une transformation importante ou une démolition soumise à permis, un diagnostic des polluants est exigé pour les immeubles construits avant 1994. Il porte sur l'amiante, les PCB et les peintures au plomb. Avant tous travaux, le droit fédéral (OTConst) impose déjà de vérifier la présence d'amiante.",
      "Entre le Littoral et les Montagnes, l'altitude et le climat changent d'une commune à l'autre. Nous choisissons les doublages isolants, les enduits et les peintures en fonction de l'exposition et de l'usage des locaux."
    ],
    reglesLocales: [
      {
        "titre": "Diagnostic bâtiment pour les immeubles d'avant 1994",
        "texte": "En cas de démolition ou de transformation importante soumise à permis de construire sur un immeuble construit avant 1994, la demande doit comprendre un diagnostic de présence d'amiante, de PCB, de peinture au plomb et d'autres polluants liés à l'usage du bâtiment (art. 8a RELConstr.).",
        "sourceLabel": "RSN 720.1 – Règlement d'exécution de la loi sur les constructions, art. 8a",
        "sourceUrl": "https://rsn.ne.ch/DATA/program/books/rsne/htm/720.1.htm"
      },
      {
        "titre": "Assainissement et plan de gestion des déchets",
        "texte": "Si une de ces substances est présente, la demande de permis comprend aussi un programme d'assainissement et un plan de gestion des déchets. La commune contrôle que ces documents respectent les normes cantonales.",
        "sourceLabel": "Canton de Neuchâtel – Le diagnostic des polluants du bâtiment (PDF)",
        "sourceUrl": "https://www.ne.ch/sites/default/files/2026-01/Modele_final_DiagnosticBat.pdf"
      }
    ],
    faqLocal: [
      {
        "question": "Faites-vous de l'isolation intérieure à Neuchâtel et La Chaux-de-Fonds ?",
        "answer": "Oui. Nous intervenons sur le Littoral et dans les Montagnes neuchâteloises pour les doublages isolants intérieurs et le traitement acoustique, en logement comme en locaux professionnels."
      },
      {
        "question": "Mon immeuble à Neuchâtel date de 1992 : un diagnostic polluants est-il nécessaire ?",
        "answer": "Pour une transformation importante ou une démolition soumise à permis, oui : le seuil neuchâtelois est fixé aux immeubles construits avant 1994. Pour des travaux plus légers, la règle peut être différente : précisez-nous la nature des travaux dans votre demande."
      },
      {
        "question": "Intervenez-vous aussi au Locle et au Val-de-Ruz ?",
        "answer": "Oui. Nous intervenons au Locle, au Val-de-Ruz et dans les communes voisines."
      }
    ],
  },
  {
    slug: "valais",
    updated: "2026-10-08",
    name: "Canton du Valais",
    shortName: "Valais",
    h1: "Plâtrerie (gypserie) et peinture en Valais",
    locative: "en Valais",
    canton: "VS",
    description:
      "Dans le Valais romand, nous intervenons en plaine comme en station : résidences principales et secondaires, hôtellerie et locaux commerciaux.",
    villes: ["Sion", "Sierre", "Martigny", "Monthey", "Verbier", "Crans-Montana"],
    chantiers: ["Rénovation de chalets et appartements", "Crépi et façades", "Peinture décorative", "Faux-plafonds"],
    metaTitle: "Gypserie-peinture en Valais",
    metaDescription:
      "Plâtrerie, peinture, isolation et façades en Valais : Sion, Sierre, Martigny, Monthey, Verbier, Crans-Montana. Entreprise basée à Fribourg. Devis gratuit.",
    intro:
      "Vous cherchez un peintre ou un plâtrier en Valais ? Markaj Renting SA intervient à Sion, Martigny, Monthey, Sierre et en station (Verbier, Crans-Montana) pour plâtrerie, peinture, crépi et rénovation.",
    contexteLocal: [
      "En plaine (Sion, Martigny, Monthey, Sierre), nous réalisons rénovations d'appartements, commerces et finitions neuves. Les exigences thermiques et les façades exposées au soleil valaisan guident le choix des enduits et peintures.",
      "En station, chalets et résidences secondaires demandent des plannings flexibles et des finitions résistantes. Nous coordonnons plâtrerie, peinture et faux-plafonds selon les fenêtres de chantier hors haute saison lorsque possible.",
    ],
    faqLocal: [
      {
        question: "Intervenez-vous pour de la plâtrerie à Sion et Martigny ?",
        answer:
          "Oui. Cloisons, doublages et finitions à Sion, Martigny, Monthey et Sierre, pour particuliers, hôtellerie et locaux commerciaux.",
      },
      {
        question: "Travaillez-vous sur des chalets à Verbier ou Crans-Montana ?",
        answer:
          "Oui. Rénovation intérieure, peinture et façades pour résidences en station, avec planning adapté aux contraintes d'accès et de saison.",
      },
      {
        question: "Proposez-vous un devis crépi ou façade en Valais ?",
        answer:
          "Oui. Après inspection de façade, nous chiffrons reprise d'enduit, crépi ou peinture de protection. Devis gratuit sous 5 jours ouvrés environ.",
      },
    ],
  },
  {
    slug: "jura",
    updated: "2026-10-08",
    name: "Canton du Jura",
    shortName: "Jura",
    h1: "Plâtrerie et peinture dans le Jura",
    locative: "dans le Jura",
    canton: "JU",
    description:
      "De Delémont à Porrentruy et aux Franches-Montagnes, nous réalisons des travaux de second œuvre pour particuliers, entreprises et collectivités.",
    villes: ["Delémont", "Porrentruy", "Saignelégier"],
    chantiers: ["Rénovation intérieure", "Plâtrerie", "Peinture", "Isolation"],
    metaTitle: "Plâtrerie-peinture dans le Jura",
    metaDescription:
      "Plâtrerie, peinture, isolation et façades à Delémont, Porrentruy et aux Franches-Montagnes. Entreprise basée à Fribourg. Devis gratuit après visite.",
    intro:
      "Vous cherchez un plâtrier ou un peintre dans le Jura ? Markaj Renting SA intervient à Delémont, Porrentruy et Saignelégier pour plâtrerie, peinture, isolation et rénovation intérieure.",
    contexteLocal: [
      "Le canton du Jura combine habitat urbain à Delémont, villages de l'Ajoie autour de Porrentruy et constructions des Franches-Montagnes où l'isolation et le confort thermique sont prioritaires.",
      "Nous prenons en charge rénovations d'appartements, reprises de plâtre et peinture pour particuliers, PME et collectivités, avec un interlocuteur unique pour le second œuvre.",
    ],
    faqLocal: [
      {
        question: "Intervenez-vous à Delémont pour de la peinture et plâtrerie ?",
        answer:
          "Oui. Nous couvrons Delémont et les communes voisines pour cloisons, finitions et peinture intérieure ou extérieure.",
      },
      {
        question: "Proposez-vous l'isolation à Porrentruy et aux Franches-Montagnes ?",
        answer:
          "Oui. Doublages et isolation adaptés au climat jurassien, pour améliorer le confort et réduire les déperditions.",
      },
      {
        question: "Comment obtenir un devis dans le canton du Jura ?",
        answer:
          "Via le formulaire de contact ou par téléphone : nous planifions une visite et remettons un devis détaillé, sans engagement.",
      },
    ],
  },
  {
    slug: "berne",
    updated: "2026-10-08",
    name: "Canton de Berne (partie francophone)",
    shortName: "Jura bernois",
    h1: "Plâtrerie et peinture dans le Jura bernois",
    locative: "dans le Jura bernois",
    canton: "BE",
    description:
      "Nous couvrons la partie francophone du canton de Berne : Bienne et le Jura bernois, pour des chantiers résidentiels, tertiaires et industriels.",
    villes: ["Bienne", "Moutier", "Saint-Imier", "La Neuveville"],
    chantiers: ["Rénovation d'appartements", "Faux-plafonds commerciaux", "Peinture intérieure", "Doublages isolants"],
    metaTitle: "Plâtrerie-peinture Jura bernois",
    metaDescription:
      "Plâtrerie, peinture et isolation à Bienne, Moutier, Saint-Imier et La Neuveville (partie francophone du canton de Berne). Devis gratuit après visite.",
    intro:
      "Vous cherchez un peintre ou un plâtrier à Bienne et dans le Jura bernois ? Markaj Renting SA intervient à Bienne, Moutier, Saint-Imier et La Neuveville pour plâtrerie, peinture, isolation et faux-plafonds.",
    contexteLocal: [
      "À Bienne, le tissu mixte (logements, commerces, industrie légère) génère des besoins en rénovation intérieure, faux-plafonds commerciaux et doublages isolants. Nous adaptons planning et finitions aux sites occupés.",
      "Dans le Jura bernois (Moutier, Saint-Imier, La Neuveville), nous traitons aussi des rénovations d'appartements et de la peinture intérieure pour un bâti souvent plus ancien, avec reprise soignée des supports.",
    ],
    faqLocal: [
      {
        question: "Faites-vous de la plâtrerie et peinture à Bienne ?",
        answer:
          "Oui. Cloisons, finitions, peinture et faux-plafonds à Bienne pour particuliers, commerces et locaux professionnels.",
      },
      {
        question: "Couvrez-vous Moutier et Saint-Imier ?",
        answer:
          "Oui. Nous intervenons dans le Jura bernois francophone, y compris Moutier, Saint-Imier et La Neuveville.",
      },
      {
        question: "Quels services sont disponibles dans le Jura bernois ?",
        answer:
          "L'ensemble de nos expertises : plâtrerie, peinture, isolation, faux-plafonds, rénovation et façades, selon le projet.",
      },
    ],
  },
];

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find((z) => z.slug === slug);
}

export const zoneSlugs = zones.map((z) => z.slug);

/** Localité mise en avant dans les titres de services (siège Fribourg). */
export const SERVICE_TITLE_LOCATION = "Fribourg" as const;
