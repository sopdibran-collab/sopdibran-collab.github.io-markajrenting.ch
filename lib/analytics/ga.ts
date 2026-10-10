import { readStoredConsent } from "@/lib/analytics/consent";

const DENIED = {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
} as const;

let scriptRequested = false;
let grantedInQueue = false;
let lastPagePath = "";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Vide = mesure coupée. Aucun script Google n'est inséré. */
export function getMeasurementId(): string {
  return (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "").trim();
}

function ensureGtagStub(): void {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag === "function") return;

  window.gtag = function gtag() {
    // gtag.js lit un objet Arguments, pas un tableau issu de ...args.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
}

/**
 * Consent Mode v2 : le défaut « denied » est posé par le script inline du layout.
 * Le fichier gtag.js n'est ajouté qu'ici, après un accord enregistré.
 */
export function enableGa(): boolean {
  if (typeof window === "undefined") return false;
  const id = getMeasurementId();
  if (!id) return false;
  if (!readStoredConsent()?.analytics) return false;

  ensureGtagStub();

  if (!grantedInQueue) {
    window.gtag?.("consent", "update", {
      ...DENIED,
      analytics_storage: "granted",
    });
    grantedInQueue = true;
  }

  if (!scriptRequested) {
    window.gtag?.("js", new Date());
    window.gtag?.("config", id, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    script.dataset.markajGa = "1";
    document.head.appendChild(script);
    scriptRequested = true;
  }

  return true;
}

export function deleteGaCookies(): void {
  if (typeof document === "undefined") return;

  const names = document.cookie
    .split(";")
    .map((part) => part.trim().split("=")[0] ?? "")
    .filter((name) => name.startsWith("_ga"));

  if (names.length === 0) return;

  const host = window.location.hostname;
  const domains = new Set<string | undefined>([undefined, host, `.${host}`]);
  const parts = host.split(".");
  for (let index = 0; index < parts.length - 1; index += 1) {
    domains.add(`.${parts.slice(index).join(".")}`);
  }

  for (const name of names) {
    for (const domain of Array.from(domains)) {
      const domainAttr = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; Max-Age=0; path=/${domainAttr}`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainAttr}`;
    }
  }
}

/** Refus après coup : plus aucun hit, et suppression des cookies `_ga*`. */
export function disableGa(): void {
  lastPagePath = "";
  grantedInQueue = false;
  if (typeof window === "undefined") return;

  ensureGtagStub();
  window.gtag?.("consent", "update", { ...DENIED });
  deleteGaCookies();
  window.setTimeout(deleteGaCookies, 500);
}

export function trackEvent(name: string, params: Record<string, string> = {}): void {
  if (!enableGa()) return;
  window.gtag?.("event", name, params);
}

export function trackPageView(): void {
  if (typeof window === "undefined") return;
  if (!enableGa()) return;

  const path = `${window.location.pathname}${window.location.search}`;
  if (lastPagePath === path) return;
  lastPagePath = path;

  window.gtag?.("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}
