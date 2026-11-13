"use client";

import {
  CONSENT_DISMISS_KEY,
  CONSENT_OPEN_EVENT,
  readStoredConsent,
  writeStoredConsent,
} from "@/lib/analytics/consent";
import { disableGa, enableGa, trackPageView } from "@/lib/analytics/ga";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

/* Refuser et Accepter : même poids, cible 44 px, 13 px minimum en capitales. */
const choiceButtonClass =
  "inline-flex h-11 min-h-11 w-full items-center justify-center rounded-none bg-markaj-primary px-2 font-body text-[13px] font-bold uppercase tracking-[0.04em] text-white shadow-none hover:bg-markaj-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-crepi focus-visible:ring-offset-2 md:px-4 md:tracking-[0.06em]";

function rememberDismiss(): void {
  try {
    window.sessionStorage.setItem(CONSENT_DISMISS_KEY, "1");
  } catch {
    /* navigation privée */
  }
}

function wasDismissed(): boolean {
  try {
    return window.sessionStorage.getItem(CONSENT_DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

/**
 * Bandeau non modal. Escape le ferme sans écrire de choix :
 * GA4 reste bloqué, et la question revient à la prochaine visite.
 */
export function CookieBanner() {
  const bannerRef = useRef<HTMLElement>(null);
  const generation = useRef(0);
  const [present, setPresent] = useState(false);
  const [open, setOpen] = useState(false);
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  const hide = useCallback(() => {
    const ticket = generation.current + 1;
    generation.current = ticket;
    setOpen(false);
    window.setTimeout(() => {
      if (generation.current === ticket) setPresent(false);
    }, 150);
  }, []);

  const show = useCallback(() => {
    const ticket = generation.current + 1;
    generation.current = ticket;
    setPresent(true);
    window.requestAnimationFrame(() => {
      if (generation.current === ticket) setOpen(true);
    });
  }, []);

  useEffect(() => {
    if (wasDismissed() || readStoredConsent()) return;
    show();
  }, [show]);

  useEffect(() => {
    const onManage = () => show();
    window.addEventListener(CONSENT_OPEN_EVENT, onManage);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, onManage);
  }, [show]);

  useEffect(() => {
    if (!present) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (document.querySelector('[role="dialog"][aria-modal="true"]')) return;
      event.preventDefault();
      rememberDismiss();
      hide();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [present, hide]);

  useEffect(() => {
    const node = bannerRef.current;
    if (!node) return;
    if (open) {
      node.removeAttribute("inert");
      /* Focus sur le premier bouton à l'ouverture, sans faire défiler la page. */
      firstButtonRef.current?.focus({ preventScroll: true });
    }
    else node.setAttribute("inert", "");
  }, [open, present]);

  useEffect(() => {
    const node = bannerRef.current;
    if (!present || !node) {
      document.body.style.paddingBottom = "";
      return;
    }

    const query = window.matchMedia("(max-width: 767px)");
    const apply = () => {
      document.body.style.paddingBottom = query.matches ? `${node.offsetHeight}px` : "";
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(node);
    query.addEventListener("change", apply);

    return () => {
      observer.disconnect();
      query.removeEventListener("change", apply);
      document.body.style.paddingBottom = "";
    };
  }, [present]);

  if (!present) return null;

  return (
    <section
      ref={bannerRef}
      role="region"
      aria-label="Préférences cookies"
      className={cn(
        /*
         * Mobile : bande compacte (≤ 64 px dès 360 px de large ; ≈ 70 px à 320 px, texte inchangé), texte à gauche,
         * boutons à droite. Desktop : une ligne discrète en bas à gauche, sans ombre.
         */
        "fixed inset-x-0 bottom-0 z-40 border-t border-[#DBCFB0] bg-white max-md:pb-[env(safe-area-inset-bottom)] motion-safe:transition-opacity motion-safe:duration-150 md:inset-x-auto md:bottom-4 md:left-4 md:w-auto md:max-w-[38rem] md:border md:border-markaj-primary/20",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="flex items-center gap-1.5 px-3 py-1 min-[375px]:gap-2 min-[375px]:py-1.5 md:gap-4 md:py-2.5 md:pl-4 md:pr-3">
        <p className="min-w-0 flex-1 font-body text-[0.75rem] leading-[1.25] text-markaj-primary min-[375px]:text-[0.8125rem] min-[375px]:leading-[1.3] md:text-[0.875rem] md:leading-[1.4]">
          Statistiques de visite (Google Analytics) uniquement avec votre accord.{" "}
          <Link
            href="/politique-confidentialite"
            /* Lien en ligne : padding vertical pour une cible de 44 px sans changer la hauteur de ligne. */
            className="whitespace-nowrap py-3.5 font-semibold underline underline-offset-[3px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-crepi focus-visible:ring-offset-2"
          >
            En savoir plus
          </Link>
        </p>
        <div className="grid w-[10rem] shrink-0 grid-cols-2 gap-1.5 min-[375px]:w-[11rem] md:w-auto md:gap-2">
          <button
            ref={firstButtonRef}
            type="button"
            className={choiceButtonClass}
            onClick={() => {
              writeStoredConsent(false);
              disableGa();
              hide();
            }}
          >
            Refuser
          </button>
          <button
            type="button"
            className={choiceButtonClass}
            onClick={() => {
              writeStoredConsent(true);
              enableGa();
              trackPageView();
              hide();
            }}
          >
            Accepter
          </button>
        </div>
      </div>
    </section>
  );
}
