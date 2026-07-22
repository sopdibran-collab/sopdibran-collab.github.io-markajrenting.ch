"use client";

import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/seo/site-config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-markaj-mineral/10 bg-markaj-white/95 backdrop-blur-sm">
      {/*
        Desktop chrome from xl (1280px): below that, burger + compact CTA.
        At lg (1024) the logo + 4 links + 2 CTAs squeezed the phone button.
      */}
      <div className="mx-auto flex max-w-content min-w-0 items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 xl:flex xl:gap-8" aria-label="Navigation principale">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 shrink-0 items-center font-body text-body-sm font-medium text-markaj-primary transition-colors hover:text-markaj-primary-light"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Button href="/contact" variant="primary" size="sm">
            Demander un devis
          </Button>
          <Button href={phoneHref} variant="secondary" size="sm">
            {siteConfig.contact.phoneDisplay}
          </Button>
        </div>

        <div className="flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2 xl:hidden">
          <Button href="/contact" variant="primary" size="sm" className="px-3 sm:px-4">
            Devis
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-markaj"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5" aria-hidden="true">
              <span className={cn("block h-0.5 w-6 origin-center bg-markaj-primary transition-transform duration-200", mobileOpen && "translate-y-[7px] rotate-45")} />
              <span className={cn("block h-0.5 w-6 bg-markaj-primary transition-opacity duration-200", mobileOpen && "opacity-0")} />
              <span className={cn("block h-0.5 w-6 origin-center bg-markaj-primary transition-transform duration-200", mobileOpen && "-translate-y-[7px] -rotate-45")} />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="animate-menu-in border-t border-markaj-mineral/10 bg-markaj-white px-4 py-4 sm:px-6 xl:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="space-y-1">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center font-body text-body font-medium text-markaj-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="space-y-3 pt-3">
              <Button href="/contact" variant="primary" size="md" className="w-full max-w-full" onClick={() => setMobileOpen(false)}>
                Demander un devis
              </Button>
              <Button
                href={phoneHref}
                variant="secondary"
                size="md"
                className="w-full max-w-full"
                onClick={() => setMobileOpen(false)}
              >
                {siteConfig.contact.phoneDisplay}
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
