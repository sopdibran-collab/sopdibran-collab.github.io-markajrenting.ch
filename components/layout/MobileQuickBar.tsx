"use client";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/seo/site-config";

/**
 * Barre fixe mobile : Appeler + Devis (pattern conversion SopjaniTech, ton chantier).
 * Masquée dès lg — le header desktop expose déjà le téléphone.
 */
export function MobileQuickBar() {
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-markaj-primary/15 bg-markaj-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm lg:hidden"
      role="navigation"
      aria-label="Actions rapides"
    >
      <div className="mx-auto flex max-w-content gap-2 sm:gap-3">
        <a
          href={phoneHref}
          className="btn-cote inline-flex min-h-11 flex-1 items-center justify-center px-3 text-[0.75rem] tracking-[0.11em] [--btn-pad-x:0.75rem]"
        >
          Appeler
        </a>
        <Button
          href="/contact"
          variant="primary"
          size="sm"
          className="min-h-11 flex-1 px-3"
        >
          Devis
        </Button>
      </div>
    </div>
  );
}
