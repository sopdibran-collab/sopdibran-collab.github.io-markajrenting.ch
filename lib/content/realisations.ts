export interface RealisationImage {
  src: string;
  alt: string;
  /** Étiquette affichée sur la photo (ex. « Pendant le chantier ») */
  label?: string;
}

export type RealisationStatus = "livre" | "en-cours";

export interface Realisation {
  id: string;
  title: string;
  location: string;
  periode?: string;
  year?: number;
  status: RealisationStatus;
  service: string;
  /** Lien vers le slug service quand le projet correspond à une expertise */
  serviceSlug?: string;
  materials?: string;
  description: string;
  /** Résultat concret obtenu pour le client */
  result?: string;
  images: RealisationImage[];
  /** Crédit photo affiché sur la fiche — certaines images de projets livrés proviennent de sources externes. */
  credit: string;
}

export const realisations: Realisation[] = [
  {
    id: "plateaux-de-bureaux",
    title: "Aménagement de plateaux de bureaux",
    location: "Suisse romande",
    year: 2024,
    status: "livre",
    service: "Plâtrerie",
    serviceSlug: "platrerie",
    materials: "Ossatures métalliques, plaques de plâtre, joints Q3, peinture de plafond",
    description:
      "Cloisonnement et doublage en plaques de plâtre sur structure métallique, joints prêts à peindre et mise en peinture des plafonds. Nos équipes suivent le plateau de la pose des ossatures jusqu'à la livraison des surfaces.",
    result: "Surfaces livrées prêtes à peindre, planning tenu, un seul interlocuteur du cloisonnement à la peinture.",
    images: [
      {
        src: "/realisations/plateau-tertiaire-chantier.webp",
        alt: "Cloison en plaques de plâtre jointoyée sur un plateau de bureaux en cours de chantier",
        label: "Pendant le chantier",
      },
      {
        src: "/realisations/plateau-tertiaire-livraison.webp",
        alt: "Plateau de bureaux en fin de chantier avec plafond peint en bleu nuit et gaines apparentes",
        label: "Fin de chantier",
      },
    ],
    credit: "Photos : Markaj Renting SA",
  },
  {
    id: "rue-de-lausanne-119",
    title: "Surélévation et rénovation d'immeuble — Rue de Lausanne 119",
    location: "Genève",
    periode: "2022 – 2023",
    year: 2023,
    status: "livre",
    service: "Rénovation",
    serviceSlug: "renovation",
    description:
      "Surélévation de trois étages d'un immeuble résidentiel et rénovation complète des six étages existants. Nos équipes sont intervenues sur les travaux de second œuvre et de finition de l'ensemble du bâtiment.",
    result: "Second œuvre et finitions livrés sur neuf et existant, en coordination avec les autres corps de métier.",
    images: [
      {
        src: "/realisations/rue-de-lausanne-119-surelevation.webp",
        alt: "Immeuble de la rue de Lausanne 119 après surélévation de trois étages en attique",
      },
    ],
    credit: "Image externe — projet livré",
  },
  {
    id: "credit-suisse-rue-du-rhone",
    title: "Credit Suisse — Rue du Rhône",
    location: "Genève",
    periode: "2016 – 2017",
    year: 2017,
    status: "livre",
    service: "Aménagement intérieur",
    serviceSlug: "platrerie",
    description:
      "Aménagement des espaces d'accueil et de réception de la banque : plâtrerie, plafonds et finitions haut de gamme, dans un environnement où le niveau d'exigence ne tolère aucun défaut.",
    result: "Finitions haut de gamme livrées dans un environnement bancaire à forte exigence de qualité.",
    images: [
      {
        src: "/realisations/credit-suisse-rue-du-rhone-hall.webp",
        alt: "Hall d'accueil du Credit Suisse à la rue du Rhône avec plafonds et cloisons finis",
        label: "Hall d'accueil",
      },
      {
        src: "/realisations/credit-suisse-rue-du-rhone-accueil.webp",
        alt: "Espace de réception du Credit Suisse avec banque d'accueil en bois et plafonds blancs",
        label: "Espace de réception",
      },
    ],
    credit: "Images externes — projet livré",
  },
];

export const realisationLocations = Array.from(
  new Set(realisations.map((r) => r.location))
);

export const realisationServices = Array.from(
  new Set(realisations.map((r) => r.service))
);