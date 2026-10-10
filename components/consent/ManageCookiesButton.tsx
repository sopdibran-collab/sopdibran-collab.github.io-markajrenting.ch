"use client";

import { CONSENT_OPEN_EVENT } from "@/lib/analytics/consent";

/** Rouvre le bandeau sans effacer le choix déjà enregistré. */
export function ManageCookiesButton() {
  return (
    <button
      type="button"
      className="inline-flex min-h-11 items-center hover:text-markaj-crepi focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-crepi focus-visible:ring-offset-2 focus-visible:ring-offset-markaj-primary"
      onClick={() => window.dispatchEvent(new Event(CONSENT_OPEN_EVENT))}
    >
      Gérer les cookies
    </button>
  );
}
