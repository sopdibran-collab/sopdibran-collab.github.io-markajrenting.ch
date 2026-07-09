import type { Metadata } from "next";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}

const OG_IMAGE = {
  url: "/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Markaj Renting SA — plâtrerie, peinture et rénovation à Fribourg",
};

export function createPageMetadata({
  title,
  description,
  path = "",
  noindex = false,
}: PageMetadataOptions): Metadata {
  const pageUrl = `https://markajrenting.ch${path}`;
  const fullTitle = `${title} | Markaj Renting SA`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url: pageUrl,
      siteName: "Markaj Renting SA",
      locale: "fr_CH",
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
