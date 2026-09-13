/**
 * Avis Google publics vérifiés — Markaj Renting SA.
 * Source : Google Maps / GBP, septembre 2026.
 * Ne pas inventer ni importer d'avis d'autres marques.
 */
export const googleRating = {
  ratingValue: 5,
  reviewCount: 2,
  bestRating: 5,
  worstRating: 1,
} as const;

export type GoogleReview = {
  author: string;
  rating: 5;
  /** Date approximative ISO (affichage mois/année côté UI). */
  datePublished: string;
  text: string;
};

export const googleReviews: GoogleReview[] = [
  {
    author: "Iven Michel Cabrita Sambento",
    rating: 5,
    datePublished: "2026-09-10",
    text: "Un grand merci a toute l'équipe pour la rénovation complète de notre appartement. Le résultat est vraiment top, tout a été fait avec soin et le changement est impressionnant. Travail propre, sérieux et de qualité. Nous sommes vraiment très contents du résultat. Je recommande sans hésiter !",
  },
  {
    author: "Gilbert Muller",
    rating: 5,
    datePublished: "2026-09-09",
    text: "Travaux effectués rapidement et proprement. Nous avons été pleinement satisfaits.",
  },
];
