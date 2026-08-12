import type { MetadataRoute } from "next";
import { blogSlugs } from "@/lib/content/blog";
import { serviceSlugs } from "@/lib/content/services";
import { zoneSlugs } from "@/lib/content/zones";
import { siteConfig } from "@/lib/seo/site-config";

const baseUrl = siteConfig.url;

type RouteEntry = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticRoutes: RouteEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/zones", changeFrequency: "monthly", priority: 0.85 },
  { path: "/realisations", changeFrequency: "monthly", priority: 0.8 },
  { path: "/a-propos", changeFrequency: "yearly", priority: 0.7 },
  { path: "/professionnels", changeFrequency: "monthly", priority: 0.8 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.75 },
  { path: "/qualite-normes", changeFrequency: "yearly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.75 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.9 },
  { path: "/plan-du-site", changeFrequency: "monthly", priority: 0.5 },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.3 },
  { path: "/politique-confidentialite", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  serviceSlugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    });
  });

  zoneSlugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/zones/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  blogSlugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return routes;
}
