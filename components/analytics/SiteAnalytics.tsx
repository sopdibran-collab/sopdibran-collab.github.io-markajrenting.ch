"use client";

import { trackEvent, trackPageView } from "@/lib/analytics/ga";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function locationOf(element: Element): string {
  const own = element.getAttribute("data-analytics-location");
  if (own) return own;
  return element.closest("[data-analytics-location]")?.getAttribute("data-analytics-location") || "page";
}

/** Pages vues et clics, uniquement si l'accord analytics est enregistré. */
export function SiteAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    trackPageView();
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const clickable = target.closest("a, button");
      if (!clickable) return;

      const href = clickable.getAttribute("href") ?? "";
      const location = locationOf(clickable);

      if (href.startsWith("tel:")) {
        trackEvent("tel_click", { location });
        return;
      }

      if (clickable.getAttribute("data-analytics-event") === "devis") {
        trackEvent("devis_click", { location });
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
