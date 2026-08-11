export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Zones", href: "/zones" },
  { label: "À propos", href: "/a-propos" },
] as const;

export const footerNav = {
  services: [
    { label: "Plâtrerie", href: "/services/platrerie" },
    { label: "Peinture", href: "/services/peinture" },
    { label: "Faux-plafonds", href: "/services/faux-plafonds" },
    { label: "Isolation", href: "/services/isolation" },
    { label: "Rénovation", href: "/services/renovation" },
    { label: "Façades", href: "/services/facades" },
  ],
  entreprise: [
    { label: "À propos", href: "/a-propos" },
    { label: "Qualité & normes", href: "/qualite-normes" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Plan du site", href: "/plan-du-site" },
  ],
  zones: [
    { label: "Fribourg", href: "/zones/fribourg" },
    { label: "Vaud", href: "/zones/vaud" },
    { label: "Genève", href: "/zones/geneve" },
    { label: "Neuchâtel", href: "/zones/neuchatel" },
    { label: "Valais", href: "/zones/valais" },
    { label: "Jura", href: "/zones/jura" },
    { label: "Jura bernois", href: "/zones/berne" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
  ],
} as const;
