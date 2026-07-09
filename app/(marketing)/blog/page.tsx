import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { blogPosts } from "@/lib/content/blog";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Blog et guides",
  description:
    "Guides et conseils Markaj Renting SA : plâtrerie, peinture, isolation et rénovation en Suisse romande.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ label: "Blog" }])} />
      <div className="mx-auto max-w-content px-6 pt-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Blog" }]} />
      </div>

      <Hero
        title="Guides et conseils pour vos travaux"
        subtitle="Articles pratiques sur la plâtrerie, la peinture, l'isolation et la rénovation, rédigés par les experts de Markaj Renting SA."
      />

      <Section background="white">
        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card hover className="h-full">
                <div className="flex items-center gap-3">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="font-body text-caption text-markaj-mineral">
                    {new Date(post.date).toLocaleDateString("fr-CH", { day: "numeric", month: "long", year: "numeric" })} · {post.readTime}
                  </span>
                </div>
                <h2 className="mt-4 font-heading text-heading-3 text-markaj-primary group-hover:text-markaj-primary-light">
                  {post.title}
                </h2>
                <p className="mt-3 font-body text-body text-markaj-mineral-dark">{post.excerpt}</p>
                <span className="btn-niveau mt-4">Lire l&apos;article</span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
