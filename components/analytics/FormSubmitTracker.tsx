"use client";

import { trackEvent } from "@/lib/analytics/ga";
import { useEffect } from "react";

/**
 * Une fois par envoi réussi. Le paramètre `envoi=1` est retiré tout de suite,
 * y compris sans accord : aucun hit Google dans ce cas.
 */
export function FormSubmitTracker() {
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.get("envoi") !== "1") return;

    url.searchParams.delete("envoi");
    const next = `${url.pathname}${url.search}${url.hash}`;
    window.history.replaceState(window.history.state, "", next);
    trackEvent("form_submit", { location: "contact" });
  }, []);

  return null;
}
