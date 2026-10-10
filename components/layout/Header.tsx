"use client";

import { Button } from "@/components/ui/Button";
import { mainNav } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/seo/site-config";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function HeaderLogo() {
  return (
    <Link
      href="/"
      className="inline-flex min-h-11 min-w-0 shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-primary focus-visible:ring-offset-2"
    >
      <span className="sr-only">Markaj Renting SA — Accueil</span>
      <img
        src="/brand/markaj-horizontal-navy.svg"
        alt="Markaj Renting SA"
        width={288}
        height={64}
        className="block h-14 w-auto xl:h-16 hidden sm:block"
        decoding="async"
        fetchPriority="high"
      />
      <img
        src="/brand/markaj-favicon.svg"
        alt="Markaj Renting SA"
        width={43}
        height={44}
        className="h-11 w-auto sm:hidden"
        decoding="async"
        fetchPriority="high"
      />
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLElement>(null);
  const returnFocus = useRef(false);
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  const closeMenu = (restoreFocus = false) => {
    returnFocus.current = restoreFocus;
    setMobileOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const main = document.getElementById("contenu-principal");
    const footer = document.querySelector("footer");
    const blocked = [barRef.current, main, footer];
    if (mobileOpen) {
      blocked.forEach((node) => node?.setAttribute("inert", ""));
    }
    return () => {
      document.body.style.overflow = "";
      blocked.forEach((node) => node?.removeAttribute("inert"));
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen || !returnFocus.current) return;
    returnFocus.current = false;
    toggleRef.current?.focus();
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = () =>
      Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (element) => !element.hasAttribute("disabled")
      );

    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        returnFocus.current = true;
        setMobileOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const nodes = focusable();
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={barRef}
        className="sticky top-0 z-50 border-b border-markaj-primary/10 bg-markaj-white"
      >
        <div className="mx-auto flex max-w-content min-w-0 items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8 xl:py-2">
          <HeaderLogo />

          <nav
            className="hidden items-center gap-5 lg:flex xl:gap-7"
            aria-label="Navigation principale"
          >
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 shrink-0 items-center font-body text-body-sm font-medium text-markaj-primary transition-colors hover:text-markaj-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-primary focus-visible:ring-offset-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-4">
            <a
              href={phoneHref}
              className="hidden min-h-11 items-center font-body text-body-sm font-medium text-markaj-primary transition-colors hover:text-markaj-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-primary focus-visible:ring-offset-2 xl:inline-flex"
            >
              {siteConfig.contact.phoneDisplay}
            </a>
            <Button href="/contact" variant="primary" size="sm">
              Demander un devis
            </Button>
          </div>

          <div className="flex min-w-0 shrink-0 items-center gap-2 lg:hidden">
            <Button href="/contact" variant="primary" size="sm" className="px-3.5">
              Devis
            </Button>
            <button
              ref={toggleRef}
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-primary focus-visible:ring-offset-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          id="mobile-nav"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col bg-markaj-white lg:hidden"
        >
          <div className="flex items-center justify-between gap-3 border-b border-markaj-primary/10 px-4 py-3">
            <HeaderLogo />
            <button
              ref={closeRef}
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-primary focus-visible:ring-offset-2"
              onClick={() => closeMenu(true)}
              aria-label="Fermer le menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto px-4 py-4">
            <ul>
              {mainNav.map((item) => (
                <li key={item.href} className="border-b border-markaj-primary/10">
                  <Link
                    href={item.href}
                    className="flex min-h-11 items-center font-body text-body font-medium text-markaj-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-primary focus-visible:ring-offset-2"
                    onClick={() => closeMenu(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="border-b border-markaj-primary/10">
                <a
                  href={phoneHref}
                  className="flex min-h-11 items-center font-body text-body font-medium text-markaj-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-primary focus-visible:ring-offset-2"
                  onClick={() => closeMenu(false)}
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="pt-5">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  className="w-full max-w-full"
                  onClick={() => closeMenu(false)}
                >
                  Demander un devis
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
