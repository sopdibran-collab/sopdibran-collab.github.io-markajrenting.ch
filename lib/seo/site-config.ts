export const siteConfig = {
  name: "Markaj Renting SA",
  legalName: "Markaj Renting SA",
  description:
    "Markaj Renting SA, créée en 2018 à Fribourg, compte 20 collaborateurs. Plâtrerie, peinture, faux-plafonds, isolation, rénovation et façades en Suisse romande.",
  founded: 2018,
  employees: 20,
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
