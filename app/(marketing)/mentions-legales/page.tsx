import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales de Markaj Renting SA. Informations juridiques de l'entreprise de plâtrerie et peinture basée à Fribourg.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  const { address, contact } = siteConfig;

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ label: "Mentions légales" }])} />
      <div className="mx-auto max-w-content px-6 pt-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Mentions légales" }]} />
      </div>

      <Section background="white" className="py-12">
        <div className="mx-auto max-w-prose">
          <h1 className="font-heading text-heading-1 text-markaj-primary">Mentions légales</h1>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">Éditeur du site</h2>
          <p className="mt-3 font-body text-body text-markaj-mineral-dark">
            {siteConfig.legalName}<br />
            {address.street}<br />
            {address.postalCode} {address.city}, Suisse<br />
            Tél. : {contact.phoneDisplay}<br />
            E-mail : {contact.email}
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">Hébergement</h2>
          <p className="mt-3 font-body text-body text-markaj-mineral-dark">
            Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">Propriété intellectuelle</h2>
          <p className="mt-3 font-body text-body text-markaj-mineral-dark">
            L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété de
            Markaj Renting SA ou de ses partenaires. Toute reproduction, même partielle, est interdite
            sans autorisation préalable.
          </p>

          <h2 className="mt-10 font-heading text-heading-3 text-markaj-primary">Responsabilité</h2>
          <p className="mt-3 font-body text-body text-markaj-mineral-dark">
            Markaj Renting SA s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées sur ce site.
            Toutefois, elle ne saurait être tenue responsable des omissions, inexactitudes ou carences
            dans la mise à jour des informations.
          </p>
        </div>
      </Section>
    </>
  );
}
