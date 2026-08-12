import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/seo/JsonLd";
import { getBlogPostBySlug, blogSlugs, type BlogBlock } from "@/lib/content/blog";
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

function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="mx-auto max-w-prose space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="pt-4 font-heading text-heading-3 text-markaj-primary"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="space-y-3 pl-1">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-body text-body text-markaj-mineral-dark"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-markaj-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="font-body text-body text-markaj-mineral-dark">
            {block.text}
          </p>
        );
      })}
    </div>
  );
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
      <div className="mx-auto max-w-content px-4 pt-6 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
      </div>

      <Section background="white" texture="paint" className="py-16">
        <article className="mx-auto max-w-prose">
          <p className="font-mono text-caption font-semibold uppercase tracking-[0.12em] text-markaj-mineral-dark">
            {new Date(post.date).toLocaleDateString("fr-CH", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            · {post.readTime} · {post.category}
          </p>
          <h1 className="mt-4 font-heading text-heading-1 text-markaj-primary md:text-display">
            {post.title}
          </h1>
          <p className="mt-6 font-body text-body-lg text-markaj-mineral-dark">
            {post.excerpt}
          </p>
        </article>
      </Section>

      <Section background="white">
        <BlogContent blocks={post.content} />
      </Section>

      <CtaBanner />
    </>
  );
}
