import { ServicePageContent } from "@/components/sections/ServicePageContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { getServiceBySlug, serviceSlugs } from "@/lib/content/services";
import { SERVICE_TITLE_CITIES, zones } from "@/lib/content/zones";
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
    title: `${service.title} ${SERVICE_TITLE_CITIES}`,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  return (
    <>
      <JsonLd data={buildServicePageSchemas(service, zones)} />
      <ServicePageContent service={service} />
    </>
  );
}
