import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

const usefulLinks = [
  { label: "Nos services", href: "/services" },
  { label: "Zones d'intervention", href: "/zones" },
  { label: "Réalisations avant / après", href: "/realisations" },
  { label: "Questions fréquentes", href: "/faq" },
];

export default function NotFound() {
  return (
    <MarketingLayout>
      <Section background="white" texture="paint" className="py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="font-body text-body-sm font-semibold uppercase tracking-wider text-markaj-mineral">
            Erreur 404
          </p>
          <h1 className="mt-3 font-heading text-heading-1 text-markaj-primary">
            Cette page est introuvable
          </h1>
          <p className="mt-5 font-body text-body-lg text-markaj-mineral-dark">
            La page que vous cherchez n&apos;existe pas ou a été déplacée. Vous
            pouvez revenir à l&apos;accueil ou consulter l&apos;une des pages
            ci-dessous.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/" variant="primary" size="lg" className="w-full sm:w-auto">
              Retour à l&apos;accueil
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
              Nous contacter
            </Button>
          </div>

          <ul className="mt-12 space-y-2 border-t border-markaj-mineral/15 pt-8">
            {usefulLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-body text-markaj-primary underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </MarketingLayout>
  );
}
