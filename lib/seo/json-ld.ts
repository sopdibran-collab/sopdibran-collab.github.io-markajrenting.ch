import type { BlogPost } from "@/lib/content/blog";
import type { FaqItem } from "@/lib/content/services";
import type { Service } from "@/lib/content/services";
import type { Zone } from "@/lib/content/zones";
import { getGlossaryForService } from "@/lib/seo/glossary";
import { siteConfig } from "@/lib/seo/site-config";

const { url, name, legalName, description, address, contact } = siteConfig;

export const GEO_COORDINATES = {
  latitude: 46.8065,
  longitude: 7.162,
};

export const AREA_SERVED = [
  "Fribourg",
  "Romont",
  "Bulle",
  "Lausanne",
  "Vevey",
  "Morges",
  "Suisse romande",
];

type JsonLdObject = Record<string, unknown>;

function absoluteUrl(path: string): string {
  return `${url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildOrganizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name: legalName,
    url,
    description,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      postalCode: address.postalCode,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    areaServed: AREA_SERVED.map((place) => ({
      "@type": "Place",
      name: place,
    })),
    knowsAbout: [
      "Plâtrerie",
      "Peinture",
      "Faux-plafonds",
      "Isolation thermique",
      "Rénovation intérieure",
      "Façades",
    ],
  };
}

export function buildLocalBusinessSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${url}/#localbusiness`,
    name: legalName,
    description,
    url,
    image: `${url}/og-default.jpg`,
    telephone: contact.phone,
    email: contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      postalCode: address.postalCode,
      addressRegion: address.region,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO_COORDINATES.latitude,
      longitude: GEO_COORDINATES.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
    ],
    areaServed: AREA_SERVED.map((place) => ({
      "@type": "City",
      name: place,
    })),
    parentOrganization: {
      "@id": `${url}/#organization`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services Markaj Renting SA",
      itemListElement: [
        "Plâtrerie",
        "Peinture",
        "Faux-plafonds",
        "Isolation",
        "Rénovation",
        "Façades",
      ].map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          provider: { "@id": `${url}/#localbusiness` },
        },
      })),
    },
  };
}

export function buildWebSiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name,
    url,
    description,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: "fr-CH",
  };
}

export function buildBreadcrumbSchema(
  items: { label: string; href?: string }[]
): JsonLdObject {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    ...items,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };
}

export function buildFaqPageSchema(items: FaqItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildHowToSchema(
  name: string,
  description: string,
  steps: { title: string; description: string }[]
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };
}

export function buildDefinedTermSetSchema(
  name: string,
  terms: { name: string; description: string }[]
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name,
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      name: term.name,
      description: term.description,
      inDefinedTermSet: name,
    })),
  };
}

export function buildServiceSchema(service: Service): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.title} — Markaj Renting SA`,
    description: service.definition,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": `${url}/#localbusiness` },
    areaServed: AREA_SERVED.map((place) => ({
      "@type": "City",
      name: place,
    })),
    serviceType: service.title,
  };
}

export function buildArticleSchema(post: BlogPost): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: legalName,
      url,
    },
    publisher: {
      "@type": "Organization",
      name: legalName,
      url,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    inLanguage: "fr-CH",
    articleSection: post.category,
  };
}

export function buildZonesItemListSchema(zones: Zone[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Zones d'intervention Markaj Renting SA",
    description:
      "Villes et régions couvertes par Markaj Renting SA en Suisse romande.",
    itemListElement: zones.map((zone, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: zone.name,
      description: zone.description,
      url: absoluteUrl(`/zones#${zone.slug}`),
    })),
  };
}

export function buildServicePageSchemas(service: Service): JsonLdObject[] {
  const glossary = getGlossaryForService(service.slug);

  return [
    buildBreadcrumbSchema([
      { label: "Services", href: "/services" },
      { label: service.title },
    ]),
    buildServiceSchema(service),
    buildFaqPageSchema(service.faq),
    buildHowToSchema(
      `Processus de chantier ${service.title.toLowerCase()} — Markaj Renting SA`,
      service.intro,
      service.process.map((s) => ({ title: s.title, description: s.description }))
    ),
    ...(glossary.length > 0
      ? [
          buildDefinedTermSetSchema(
            `Glossaire ${service.title} — Markaj Renting SA`,
            glossary
          ),
        ]
      : []),
  ];
}

export function buildGlobalSchemas(): JsonLdObject[] {
  return [buildOrganizationSchema(), buildLocalBusinessSchema(), buildWebSiteSchema()];
}
