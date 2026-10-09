import { CtaPair } from "@/components/sections/CtaPair";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/seo/site-config";

interface CtaBannerProps {
  title?: string;
  description?: string;
}

/**
 * Bandeau CTA final — navy plein largeur, bouton devis sable (#DBCFB0).
 */
export function CtaBanner({
  title = "Parlons de votre chantier",
  description = "Nous vous accompagnons de l'idée à la réalisation. Décrivez votre projet : devis gratuit sous 5 jours ouvrés.",
}: CtaBannerProps) {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <Section background="primary">
      <AnimateIn>
        <div className="flex min-w-0 flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="min-w-0 max-w-xl">
            <h2 className="font-heading text-xl text-markaj-white sm:text-heading-2 md:text-heading-1">
              {title}
            </h2>
            <p className="mt-3 font-body text-body text-markaj-white/80 sm:text-body-lg">
              {description}
            </p>
          </div>
          <CtaPair
            className="w-full min-w-0 shrink-0 md:w-auto"
            rowClassName="md:gap-8"
            tone="dark"
            secondaryToneDark
            phoneLine
            primary={{
              label: "Demander un devis",
              href: "/contact",
              size: "lg",
              className: "w-full max-w-full md:w-auto",
            }}
            secondary={{
              label: `Appeler ${siteConfig.contact.phoneDisplay}`,
              href: phoneHref,
              size: "lg",
              className: "w-full max-w-full md:w-auto",
            }}
          />
        </div>
      </AnimateIn>
    </Section>
  );
}
