export const siteConfig = {
  name: "Markaj Renting SA",
  legalName: "Markaj Renting SA",
  description:
    "Entreprise familiale de plâtrerie, peinture, faux-plafonds, isolation et rénovation en Suisse romande. 20 ans d'expérience, 20 collaborateurs.",
  url: "https://markajrenting.ch",
  locale: "fr_CH",
  address: {
    street: "Route de Schiffenen 40",
    postalCode: "1700",
    city: "Fribourg",
    region: "FR",
    country: "CH",
  },
  contact: {
    email: "info@markajrenting.ch",
    phone: "+41 79 430 18 13",
    phoneDisplay: "079 430 18 13",
  },
  openingHours: [
    "Mo-Fr 07:00-17:00",
  ],
  /** Profil Google Maps / avis clients (vérifié sep. 2026 : 5,0 · 2 avis). */
  googleMapsUrl:
    "https://www.google.com/maps/place/Markaj+Renting+SA/@46.8171518,7.1721405,17z/data=!3m1!4b1!4m6!3m5!1s0xb853626806e4763:0xd40b5c3036a3f68f!8m2!3d46.8171518!4d7.1721405!16s%2Fg%2F11v1bl87tl",
} as const;
