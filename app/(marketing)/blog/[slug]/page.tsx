import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBlogPostBySlug, blogSlugs } from "@/lib/content/blog";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]),
          buildArticleSchema(post),
        ]}
      />
      <div className="mx-auto max-w-content px-6 pt-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
      </div>

      <Section background="white" texture="concrete" className="py-16">
        <article className="mx-auto max-w-prose">
          <p className="font-body text-body-sm text-markaj-mineral">
            {new Date(post.date).toLocaleDateString("fr-CH", { day: "numeric", month: "long", year: "numeric" })} · {post.readTime} · {post.category}
          </p>
          <h1 className="mt-4 font-heading text-heading-1 text-markaj-primary md:text-display">
            {post.title}
          </h1>
          <p className="mt-6 font-body text-body-lg text-markaj-mineral-dark">{post.excerpt}</p>
        </article>
      </Section>

      <Section background="white">
        <div className="mx-auto max-w-prose space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="font-body text-body text-markaj-mineral-dark">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
