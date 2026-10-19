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
    updated: "2026-10-08",
    name: "Canton de Vaud",
    shortName: "Vaud",
    h1: "Plâtrerie et peinture à Lausanne et dans le canton de Vaud",
    locative: "dans le canton de Vaud",
    canton: "VD",
    description:
      "De Lausanne à la Riviera, nous accompagnons des projets de rénovation, d'isolation et de finition intérieure pour le secteur privé et professionnel, en milieu urbain comme en périphérie.",
    villes: ["Lausanne", "Vevey", "Montreux", "Morges", "Yverdon-les-Bains", "Nyon"],
    chantiers: ["Rénovation de bureaux", "Doublages isolants", "Faux-plafonds acoustiques", "Rénovation haut de gamme"],
    metaTitle: "Plâtrerie-peinture Lausanne et Vaud",
    metaDescription:
      "Plâtrerie, peinture, isolation et faux-plafonds à Lausanne, Morges, Nyon, Vevey, Montreux et Yverdon. Entreprise basée à Fribourg. Devis gratuit.",
    intro:
      "Vous cherchez un peintre ou un plâtrier à Lausanne et dans le canton de Vaud ? Markaj Renting SA réalise plâtrerie, peinture, isolation et faux-plafonds sur la Riviera, à Morges, Nyon et Yverdon-les-Bains.",
    contexteLocal: [
      "À Lausanne et dans l'Ouest lausannois (Renens, Prilly, Pully), les chantiers typiques vont de la rénovation d'appartements locatifs aux aménagements de bureaux avec faux-plafonds acoustiques. Nous adaptons finitions et planning aux contraintes d'immeubles occupés.",
      "Sur la Riviera (Vevey, Montreux) et dans le nord vaudois (Yverdon), nous traitons aussi les doublages isolants intérieurs et la peinture intérieure pour résidences et commerces, en coordination avec architectes et régies.",
    ],
    faqLocal: [
      {
        question: "Faites-vous de la plâtrerie et peinture à Lausanne ?",
        answer:
          "Oui. Nous intervenons à Lausanne et environs pour cloisons, finitions Q3/Q4, peinture intérieure et rénovation complète. Devis après visite sur site.",
      },
      {
        question: "Couvrez-vous Nyon, Morges et la Riviera ?",
        answer:
          "Oui. Nos équipes se déplacent à Nyon, Morges, Vevey, Montreux et Yverdon-les-Bains pour l'ensemble de nos prestations second œuvre.",
      },
      {
        question: "Comment obtenir un devis rénovation dans le canton de Vaud ?",
        answer:
          "Contactez-nous par téléphone ou formulaire : nous planifions une visite, évaluons le chantier et vous remettons un devis détaillé sous 5 jours ouvrés.",
      },
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
    updated: "2026-10-08",
    name: "Canton de Neuchâtel",
    shortName: "Neuchâtel",
    h1: "Plâtrerie et peinture à Neuchâtel",
    locative: "à Neuchâtel",
    canton: "NE",
    description:
      "Du Littoral aux Montagnes neuchâteloises, nous prenons en charge des travaux de plâtrerie, peinture et isolation adaptés au bâti ancien comme aux constructions récentes.",
    villes: ["Neuchâtel", "La Chaux-de-Fonds", "Le Locle", "Val-de-Ruz"],
    chantiers: ["Rénovation intérieure", "Isolation de combles", "Peinture et plâtrerie", "Façades"],
    metaTitle: "Plâtrerie-peinture à Neuchâtel",
    metaDescription:
      "Plâtrerie, peinture, isolation et façades à Neuchâtel, La Chaux-de-Fonds, Le Locle et Val-de-Ruz. Entreprise basée à Fribourg. Devis gratuit après visite.",
    intro:
      "Vous cherchez un plâtrier ou un peintre à Neuchâtel ? Markaj Renting SA intervient sur le Littoral et dans les Montagnes (La Chaux-de-Fonds, Le Locle) pour plâtrerie, peinture, isolation et façades.",
    contexteLocal: [
      "Le bâti neuchâtelois alterne immeubles du Littoral, habitat densifié à La Chaux-de-Fonds et constructions en altitude où l'isolation et les façades jouent un rôle critique face au climat. Nous adaptons matériaux et mises en œuvre à ces contraintes.",
      "Rénovation intérieure, isolation de combles et reprise de crépi font partie de nos chantiers récurrents pour particuliers et entreprises du canton.",
    ],
    faqLocal: [
      {
        question: "Faites-vous de l'isolation à Neuchâtel et La Chaux-de-Fonds ?",
        answer:
          "Oui. Doublages isolants intérieurs et traitement acoustique pour logements et locaux professionnels sur le Littoral et dans les Montagnes neuchâteloises.",
      },
      {
        question: "Intervenez-vous aussi au Locle et Val-de-Ruz ?",
        answer:
          "Oui. Nous couvrons Le Locle, Val-de-Ruz et les communes environnantes pour l'ensemble de nos prestations second œuvre.",
      },
      {
        question: "Comment demander un devis façades dans le canton de Neuchâtel ?",
        answer:
          "Appelez-nous ou utilisez le formulaire de contact : une visite permet d'évaluer l'état du crépi et de chiffrer ravalement ou peinture de façade.",
      },
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
    updated: "2026-10-19",
    name: "Canton du Jura et Jura bernois",
    shortName: "Jura",
    h1: "Plâtrerie et peinture dans le Jura",
    locative: "dans le Jura",
    canton: "JU",
    description: "Nous intervenons à Delémont, en Ajoie, aux Franches-Montagnes, à Moutier et dans le Jura bernois (Saint-Imier, Tramelan, La Neuveville) pour la plâtrerie, la peinture, l'isolation intérieure et la rénovation.",
    villes: [
      "Delémont",
      "Porrentruy",
      "Saignelégier",
      "Moutier",
      "Saint-Imier",
      "Tramelan",
      "La Neuveville"
    ],
    chantiers: ["Rénovation intérieure", "Plâtrerie", "Peinture", "Isolation"],
    metaTitle: "Plâtrerie-peinture dans le Jura",
    metaDescription:
      "Plâtrerie, peinture, isolation et façades à Delémont, Porrentruy et aux Franches-Montagnes. Entreprise basée à Fribourg. Devis gratuit après visite.",
    intro: "Vous cherchez un plâtrier ou un peintre dans le Jura ? Nous intervenons à Delémont, Porrentruy, Saignelégier et Moutier, ainsi que dans le Jura bernois à Saint-Imier, Tramelan et La Neuveville, pour la plâtrerie, la peinture, l'isolation intérieure et la rénovation.",
    contexteLocal: [
      "Depuis le 1er janvier 2026, Moutier fait partie du canton du Jura. Pour un chantier à Moutier, ce sont donc désormais les règles et les services jurassiens qui s'appliquent, alors que Saint-Imier, Tramelan ou La Neuveville restent soumis aux règles bernoises.",
      "Dans les deux cantons, un bâtiment construit avant 1990 contient probablement des polluants (amiante, PCB, peintures au plomb). Avant de poncer, percer ou démolir, un diagnostic des polluants est demandé : nous en parlons dès le premier échange pour l'intégrer au planning.",
      "Aux Franches-Montagnes et sur les hauteurs du Jura bernois, l'hiver est long : nous choisissons les doublages isolants et les finitions en fonction de l'exposition et du chauffage des locaux."
    ],
    reglesLocales: [
      {
        "titre": "Canton du Jura : diagnostic des polluants avant 1990",
        "texte": "Pour une transformation ou une déconstruction touchant un bâtiment édifié avant 1990, un rapport de diagnostic des polluants établi par un spécialiste doit être fourni avec la demande de permis de construire. Au-delà d'environ 200 m³ de déchets, un plan d'élimination des déchets est aussi demandé.",
        "sourceLabel": "République et Canton du Jura – Déchets de chantier",
        "sourceUrl": "https://www.jura.ch/fr/Autorites/Administration/DEC/ENV/Dechets/Dechets-de-chantier/.html"
      },
      {
        "titre": "Jura bernois : diagnostic des polluants et plan d'élimination",
        "texte": "Dans le Jura bernois, ce sont les règles du canton de Berne qui s'appliquent. La notice cantonale décrit quand un diagnostic des polluants et un plan d'élimination des déchets doivent accompagner la demande de permis.",
        "sourceLabel": "Canton de Berne – Notice diagnostic des polluants et plan d'élimination des déchets (PDF)",
        "sourceUrl": "https://www.bvd.be.ch/content/dam/bvd/dokumente/fr/awa/umwelt/abfall/merkblatt-schadstoffermittlung-und-entsorgungskonzept-fr.pdf"
      }
    ],
    faqLocal: [
      {
        "question": "Intervenez-vous à Delémont et à Porrentruy ?",
        "answer": "Oui. Nous intervenons à Delémont, en Ajoie et aux Franches-Montagnes pour les cloisons, les finitions, la peinture intérieure et l'isolation."
      },
      {
        "question": "Moutier est passé au canton du Jura : qu'est-ce que cela change pour mes travaux ?",
        "answer": "Depuis le 1er janvier 2026, une demande de permis à Moutier suit les règles jurassiennes, y compris pour le diagnostic des polluants. Pour les travaux eux-mêmes, rien ne change : nous intervenons à Moutier comme avant."
      },
      {
        "question": "Couvrez-vous Saint-Imier, Tramelan et La Neuveville ?",
        "answer": "Oui. Nous intervenons dans le Jura bernois, à Saint-Imier, Tramelan, La Neuveville et dans les communes voisines, pour la plâtrerie, la peinture, l'isolation intérieure et la rénovation."
      }
    ],
  },
];

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find((z) => z.slug === slug);
}

export const zoneSlugs = zones.map((z) => z.slug);

/** Localité mise en avant dans les titres de services (siège Fribourg). */
export const SERVICE_TITLE_LOCATION = "Fribourg" as const;
