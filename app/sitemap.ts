import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content/blog";
import { faqUpdated } from "@/lib/content/faq";
import { fribourgUpdated } from "@/lib/content/fribourg-zone";
import { pageFileUpdated, type PageSourceFile } from "@/lib/content/pages";
import { realisations } from "@/lib/content/realisations";
import { services } from "@/lib/content/services";
import { serviceVisuals } from "@/lib/content/service-visuals";
import { zones } from "@/lib/content/zones";
import { siteConfig } from "@/lib/seo/site-config";
import { lastmodFor, type LastmodSource } from "@/lib/seo/lastmod";

const baseUrl = siteConfig.url;

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

type RouteEntry = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  sources: LastmodSource[];
};

function page(file: PageSourceFile): LastmodSource {
  return { file, fallback: pageFileUpdated[file] };
}

function present<T>(item: T | undefined, label: string): T {
  if (!item) throw new Error(`${label} introuvable`);
  return item;
}

function serviceEntry(slug: string): LastmodSource {
  const service = present(
    services.find((item) => item.slug === slug),
    slug,
  );
  return {
    file: "lib/content/services.ts",
    entry: { kind: "prop", name: "slug", value: slug },
    fallback: service.updated,
  };
}

function serviceVisual(slug: string): LastmodSource {
  const visual = present(serviceVisuals[slug], `visuel ${slug}`);
  return {
    file: "lib/content/service-visuals.ts",
    entry: { kind: "key", name: slug },
    fallback: visual.updated,
  };
}

function zoneSources(slug: string): LastmodSource[] {
  if (slug === "fribourg") {
    return [
      page("app/(marketing)/zones/fribourg/page.tsx"),
      zoneEntry(slug),
      { file: "lib/content/fribourg-zone.ts", fallback: fribourgUpdated },
    ];
  }
  return [page("app/(marketing)/zones/[slug]/page.tsx"), zoneEntry(slug)];
}

function zoneEntry(slug: string): LastmodSource {
  const zone = present(
    zones.find((item) => item.slug === slug),
    slug,
  );
  return {
    file: "lib/content/zones.ts",
    entry: { kind: "prop", name: "slug", value: slug },
    fallback: zone.updated,
  };
}

function postEntry(slug: string): LastmodSource {
  const post = present(
    blogPosts.find((item) => item.slug === slug),
    slug,
  );
  return {
    file: "lib/content/blog.ts",
    entry: { kind: "prop", name: "slug", value: slug },
    fallback: post.updated,
  };
}

function realisationEntry(id: string): LastmodSource {
  const item = present(
    realisations.find((entry) => entry.id === id),
    id,
  );
  return {
    file: "lib/content/realisations.ts",
    entry: { kind: "prop", name: "id", value: id },
    fallback: item.updated,
  };
}

const faqEntry: LastmodSource = {
  file: "lib/content/faq.ts",
  entry: { kind: "export", name: "generalFaq" },
  fallback: faqUpdated,
};

const serviceEntries = services.map((service) => serviceEntry(service.slug));
const serviceVisualsEntries = services.map((service) => serviceVisual(service.slug));
const zoneEntries = zones.map((zone) => zoneEntry(zone.slug));
const postEntries = blogPosts.map((post) => postEntry(post.slug));
const realisationEntries = realisations.map((item) => realisationEntry(item.id));

const staticRoutes: RouteEntry[] = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
    sources: [page("app/(marketing)/page.tsx")],
  },
  {
    path: "/services",
    changeFrequency: "monthly",
    priority: 0.9,
    sources: [page("app/(marketing)/services/page.tsx"), ...serviceEntries, ...serviceVisualsEntries],
  },
  {
    path: "/zones",
    changeFrequency: "monthly",
    priority: 0.85,
    sources: [page("app/(marketing)/zones/page.tsx"), ...zoneEntries],
  },
  {
    path: "/realisations",
    changeFrequency: "monthly",
    priority: 0.8,
    sources: [page("app/(marketing)/realisations/page.tsx"), ...realisationEntries],
  },
  {
    path: "/a-propos",
    changeFrequency: "yearly",
    priority: 0.7,
    sources: [page("app/(marketing)/a-propos/page.tsx")],
  },
  {
    path: "/professionnels",
    changeFrequency: "monthly",
    priority: 0.8,
    sources: [page("app/(marketing)/professionnels/page.tsx")],
  },
  {
    path: "/faq",
    changeFrequency: "monthly",
    priority: 0.75,
    sources: [page("app/(marketing)/faq/page.tsx"), faqEntry],
  },
  {
    path: "/qualite-normes",
    changeFrequency: "yearly",
    priority: 0.7,
    sources: [page("app/(marketing)/qualite-normes/page.tsx")],
  },
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.75,
    sources: [page("app/(marketing)/blog/page.tsx"), ...postEntries],
  },
  {
    path: "/contact",
    changeFrequency: "yearly",
    priority: 0.9,
    sources: [page("app/(marketing)/contact/page.tsx")],
  },
  {
    path: "/plan-du-site",
    changeFrequency: "monthly",
    priority: 0.5,
    sources: [page("app/(marketing)/plan-du-site/page.tsx"), ...serviceEntries, ...zoneEntries, ...postEntries],
  },
  {
    path: "/mentions-legales",
    changeFrequency: "yearly",
    priority: 0.3,
    sources: [page("app/(marketing)/mentions-legales/page.tsx")],
  },
  {
    path: "/politique-confidentialite",
    changeFrequency: "yearly",
    priority: 0.3,
    sources: [page("app/(marketing)/politique-confidentialite/page.tsx")],
  },
];

function toSitemapEntry(route: RouteEntry): MetadataRoute.Sitemap[number] {
  return {
    url: `${baseUrl}${route.path}`,
    lastModified: lastmodFor(route.sources),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map(toSitemapEntry),
    ...services.map((service) =>
      toSitemapEntry({
        path: `/services/${service.slug}`,
        changeFrequency: "monthly",
        priority: 0.85,
        sources: [page("app/(marketing)/services/[slug]/page.tsx"), serviceEntry(service.slug), serviceVisual(service.slug)],
      }),
    ),
    ...zones.map((zone) =>
      toSitemapEntry({
        path: `/zones/${zone.slug}`,
        changeFrequency: "monthly",
        priority: 0.8,
        sources: zoneSources(zone.slug),
      }),
    ),
    ...blogPosts.map((post) =>
      toSitemapEntry({
        path: `/blog/${post.slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
        sources: [page("app/(marketing)/blog/[slug]/page.tsx"), postEntry(post.slug)],
      }),
    ),
  ];
}
