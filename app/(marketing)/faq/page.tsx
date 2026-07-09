import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { Hero } from "@/components/sections/Hero";
import { JsonLd } from "@/components/seo/JsonLd";
import { generalFaq } from "@/lib/content/faq";
import { buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata({
  title: "Questions fréquentes",
  description:
    "FAQ Markaj Renting SA : devis, délais, zones d'intervention, matériaux, garanties et coordination de chantier en Suisse romande.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([{ label: "FAQ" }]),
          buildFaqPageSchema(generalFaq),
        ]}
      />
      <div className="mx-auto max-w-content px-6 pt-6 lg:px-8">
        <Breadcrumbs items={[{ label: "FAQ" }]} />
      </div>

      <Hero
        title="Questions fréquentes sur nos services de finition"
        subtitle="Retrouvez les réponses aux questions les plus courantes sur nos devis, délais, zones d'intervention, matériaux et garanties en Suisse romande."
      />

      <FaqSection
        index="01"
        items={generalFaq}
        intro="Vous ne trouvez pas la réponse à votre question ? Contactez-nous directement par téléphone ou via le formulaire de contact."
      />

      <CtaBanner />
    </>
  );
}
