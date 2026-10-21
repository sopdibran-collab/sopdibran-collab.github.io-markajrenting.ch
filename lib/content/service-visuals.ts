/**
 * Photos de chantier déjà dans le repo, une par métier.
 * Façades : seule vue extérieure disponible (surélévation livrée, rue de Lausanne 119).
 */
export interface ServiceVisual {
  /** Dernière modification du visuel (YYYY-MM-DD). Repli du lastmod. */
  updated: string;
  src: string;
  alt: string;
  legend: string;
}

export const serviceVisuals: Record<string, ServiceVisual> = {
  platrerie: {
    updated: "2026-10-09",
    src: "/images/chantier/joints-ba13.webp",
    legend: "Joints BA13",
    alt: "Cloison en plaques de plâtre BA13, joints en cours sur chantier Markaj",
  },
  peinture: {
    updated: "2026-10-09",
    src: "/images/chantier/peinture-reseaux.webp",
    legend: "Peinture réseaux",
    alt: "Peinture technique des réseaux et plafonds en bleu nuit sur chantier",
  },
  "faux-plafonds": {
    updated: "2026-10-09",
    src: "/images/chantier/plafond-fibre-de-bois.webp",
    legend: "Plafond fibre de bois",
    alt: "Faux-plafond acoustique en fibre de bois et claire-voie sur chantier",
  },
  isolation: {
    updated: "2026-10-09",
    src: "/images/chantier/isolation-packs.webp",
    legend: "Isolation",
    alt: "Paquets d'isolant et peinture technique sur plateau en rénovation",
  },
  renovation: {
    updated: "2026-10-09",
    src: "/images/chantier/ossatures.webp",
    legend: "Ossatures",
    alt: "Ossatures métalliques et réseaux techniques en cloisonnement",
  },
  facades: {
    updated: "2026-10-09",
    src: "/realisations/rue-de-lausanne-119-surelevation.webp",
    legend: "Façade",
    alt: "Immeuble de la rue de Lausanne 119 après surélévation de trois étages en attique",
  },
  schichtex: {
    updated: "2026-10-22",
    src: "/images/chantier/panneaux-laine-de-bois-isolant-01.webp",
    legend: "Panneaux et isolant",
    alt: "Panneaux en fibres de bois posés au plafond, isolant visible dans l'ossature, sur chantier Markaj",
  },
};
