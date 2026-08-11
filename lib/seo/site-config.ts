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
} as const;
