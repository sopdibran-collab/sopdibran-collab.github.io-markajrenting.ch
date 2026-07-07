import type { Metadata } from "next";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}

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
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
