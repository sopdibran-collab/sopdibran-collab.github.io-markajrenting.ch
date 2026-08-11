import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { blogPosts } from "@/lib/content/blog";
import { services } from "@/lib/content/services";
import { zones } from "@/lib/content/zones";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site-config";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Plan du site",
  description:
    "Plan du site markajrenting.ch : services, zones d'intervention, réalisations, blog et contact.",
  path: "/plan-du-site",
});

const mainPages = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Zones d'intervention", href: "/zones" },
  { label: "Réalisations", href: "/realisations" },
  { label: "À propos", href: "/a-propos" },
  { label: "Qualité & normes", href: "/qualite-normes" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export default function PlanDuSitePage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Plan du site — ${siteConfig.name}`,
    itemListElement: [
      ...mainPages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: page.label,
        url: `${siteConfig.url}${page.href === "/" ? "" : page.href}`,
      })),
      ...services.map((service, index) => ({
        "@type": "ListItem",
        position: mainPages.length + index + 1,
        name: service.title,
        url: `${siteConfig.url}/services/${service.slug}`,
      })),
      ...zones.map((zone, index) => ({
        "@type": "ListItem",
        position: mainPages.length + services.length + index + 1,
        name: zone.name,
        url: `${siteConfig.url}/zones/${zone.slug}`,
      })),
    ],
  };

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([{ label: "Plan du site" }]),
          itemList,
        ]}
      />
      <div className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Plan du site" }]} />
      </div>

      <Hero
        title="Plan du site"
        subtitle="Toutes les pages de markajrenting.ch : services, zones, réalisations et informations légales."
      />

      <Section background="white">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading subtitle="Pages" index="01" title="Navigation principale" />
            <ul className="mt-4 space-y-2">
              {mainPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="font-body text-body text-markaj-primary underline-offset-4 hover:underline"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading subtitle="Services" index="02" title="Prestations" />
            <ul className="mt-4 space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-body text-body text-markaj-primary underline-offset-4 hover:underline"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading subtitle="Zones" index="03" title="Zones d'intervention" />
            <ul className="mt-4 space-y-2">
              {zones.map((zone) => (
                <li key={zone.slug}>
                  <Link
                    href={`/zones/${zone.slug}`}
                    className="font-body text-body text-markaj-primary underline-offset-4 hover:underline"
                  >
                    {zone.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading subtitle="Blog" index="04" title="Articles" />
            <ul className="mt-4 space-y-2">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-body text-body text-markaj-primary underline-offset-4 hover:underline"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
