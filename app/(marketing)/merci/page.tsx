import { Hero } from "@/components/sections/Hero";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/seo/site-config";

export const metadata = createPageMetadata({
  title: "Demande envoyée",
  description:
    "Votre demande de devis a bien été transmise à Markaj Renting SA. Nous vous recontactons sous 5 jours ouvrés.",
  path: "/merci",
  noindex: true,
});

export default function MerciPage() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <Hero
      title="Merci, votre demande a bien été envoyée"
      subtitle="Nous vous recontactons sous 5 jours ouvrés pour préciser votre besoin et planifier une visite sur site si nécessaire. Pour une urgence, appelez-nous."
      primaryCta={{
        label: `Appeler ${siteConfig.contact.phoneDisplay}`,
        href: phoneHref,
      }}
      secondaryCta={{ label: "Retour à l'accueil", href: "/" }}
    />
  );
}
