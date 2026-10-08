import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/content/blog";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Blog et guides",
  description:
    "Guides et conseils sur la plâtrerie, la peinture, l'isolation et la rénovation en Suisse romande. Articles par les experts Markaj Renting.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ label: "Blog" }])} />
      <div className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Blog" }]} />
      </div>

      <Hero
        title="Guides et conseils pour vos travaux"
        subtitle="Articles pratiques sur la plâtrerie, la peinture, l'isolation et la rénovation, rédigés par les experts de Markaj Renting SA."
      />

      <div>
        {blogPosts.map((post, index) => (
          <article
            key={post.slug}
            className={cn(index % 2 === 0 ? "bg-markaj-crepi-light" : "bg-markaj-white")}
          >
            <div className="mx-auto max-w-content px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
              <p className="marque-cote">
                {post.category}
                <span className="font-normal normal-case tracking-normal">
                  {" · "}
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("fr-CH", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  {" · "}
                  {post.readTime}
                </span>
              </p>
              <h2 className="mt-3 max-w-prose font-heading text-heading-3 text-markaj-primary">
                <Link
                  href={`/blog/${post.slug}`}
                  className="transition-colors hover:text-markaj-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-markaj-primary"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-prose font-body text-body text-markaj-primary">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="btn-niveau mt-4">
                Lire l&apos;article
              </Link>
            </div>
          </article>
        ))}
      </div>

      <CtaBanner />
    </>
  );
}
