import { AvisGoogle } from "@/components/sections/AvisGoogle";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ExpertisesGrid } from "@/components/sections/ExpertisesGrid";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { RealisationsTeaser } from "@/components/sections/RealisationsTeaser";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata = createPageMetadata({
  title: "Plâtrerie et peinture à Fribourg",
  description:
    "Entreprise familiale à Fribourg depuis 2018 : plâtrerie, peinture, isolation, faux-plafonds et façades en Suisse romande. Devis gratuit après visite.",
  path: "/",
});

/**
 * Accueil court : hero, une preuve, métiers, 2 avis, 2 chantiers, un CTA.
 * Méthode et publics : /a-propos. Zones : /zones. FAQ : /faq.
 */
export default function HomePage() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <>
      <Hero
        eyebrow="Fribourg · Suisse romande"
        addressLine={`${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`}
        title="Plâtrerie, peinture et rénovation à Fribourg"
        subtitle="Créée en 2018 à Fribourg, 20 collaborateurs. Travaux soignés en neuf et rénovation en Suisse romande — devis gratuit sous 5 jours."
        primaryCta={{ label: "Demander un devis", href: "/contact" }}
        secondaryCta={{
          label: `Appeler ${siteConfig.contact.phoneDisplay}`,
          href: phoneHref,
        }}
        image={{
          src: "/realisations/plateau-tertiaire-livraison.webp",
          alt: "Rénovation de plateau de bureaux à l'OMS Genève — plafonds peints et plâtrerie Markaj Renting SA",
        }}
      />
      <ProofStrip />
      <ExpertisesGrid />
      <AvisGoogle />
      <RealisationsTeaser limit={2} />
      <CtaBanner />
    </>
  );
}
