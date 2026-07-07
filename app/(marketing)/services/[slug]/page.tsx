import { ServicePageContent } from "@/components/sections/ServicePageContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { getServiceBySlug, serviceSlugs } from "@/lib/content/services";
import { buildServicePageSchemas } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return createPageMetadata({
    title: `${service.title} à Fribourg et en Suisse romande`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  return (
    <>
      <JsonLd data={buildServicePageSchemas(service)} />
      <ServicePageContent service={service} />
    </>
  );
}
