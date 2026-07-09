import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/sections/ContactForm";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildBreadcrumbSchema } from "@/lib/seo/json-ld";
import { siteConfig } from "@/lib/seo/site-config";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Contact et demande de devis",
  description:
    "Contactez Markaj Renting SA à Fribourg pour un devis gratuit. Plâtrerie, peinture, rénovation en Suisse romande. 079 430 18 13.",
  path: "/contact",
});

export default function ContactPage() {
  const { address, contact } = siteConfig;

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ label: "Contact" }])} />
      <div className="mx-auto max-w-content px-6 pt-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact" }]} />
      </div>

      <Hero
        title="Contactez Markaj Renting SA"
        subtitle="Demandez un devis gratuit pour vos travaux de plâtrerie, peinture, isolation ou rénovation. Nous vous répondons dans les meilleurs délais."
      />

      <Section background="white">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Formulaire */}
          <div>
            <SectionHeading
              subtitle="Devis"
              index="01"
              title="Demande de devis"
              intro="Décrivez votre projet et nous vous recontactons pour planifier une visite sur site."
            />
            <ContactForm />
          </div>

          {/* Coordonnées */}
          <div>
            <SectionHeading subtitle="Coordonnées" index="02" title="Nous trouver" />
            <address className="not-italic">
              <p className="font-heading text-heading-4 text-markaj-primary">{siteConfig.legalName}</p>
              <p className="mt-3 font-body text-body text-markaj-mineral-dark">
                {address.street}<br />
                {address.postalCode} {address.city}<br />
                Suisse
              </p>
              <p className="mt-6 font-body text-body">
                <span className="font-medium text-markaj-primary">Téléphone :</span>{" "}
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="text-markaj-mineral-dark hover:text-markaj-primary">
                  {contact.phoneDisplay}
                </a>
              </p>
              <p className="mt-2 font-body text-body">
                <span className="font-medium text-markaj-primary">E-mail :</span>{" "}
                <a href={`mailto:${contact.email}`} className="text-markaj-mineral-dark hover:text-markaj-primary">
                  {contact.email}
                </a>
              </p>
            </address>

            <div className="mt-8">
              <h3 className="font-body text-body-sm font-semibold uppercase tracking-wider text-markaj-mineral">
                Horaires
              </h3>
              <p className="mt-2 font-body text-body text-markaj-mineral-dark">
                Lundi – Vendredi : 07h00 – 17h00
              </p>
            </div>

            <div className="mt-8 overflow-hidden border border-markaj-primary/15">
              <iframe
                title="Localisation Markaj Renting SA à Fribourg"
                src="https://maps.google.com/maps?q=Route+de+Schiffenen+40,+1700+Fribourg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
