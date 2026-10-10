/** Choix cookies. `v` force une nouvelle question si le bandeau change. */
export const CONSENT_STORAGE_KEY = "markaj-consent";
export const CONSENT_VERSION = 1;
/** Fermeture sans choix (Escape) : le bandeau revient à la visite suivante. */
export const CONSENT_DISMISS_KEY = "markaj-consent-dismissed";
export const CONSENT_OPEN_EVENT = "markaj:open-consent";

export type ConsentChoice = {
  analytics: boolean;
  v: number;
  date: string;
};

let memoryConsent: ConsentChoice | null = null;

export function parseConsent(raw: string | null, now = Date.now()): ConsentChoice | null {
  if (!raw) return null;

  try {
    const data = JSON.parse(raw) as Partial<ConsentChoice>;
    if (data.v !== CONSENT_VERSION) return null;
    if (typeof data.analytics !== "boolean") return null;
    if (typeof data.date !== "string") return null;

    const saved = new Date(data.date);
    if (Number.isNaN(saved.getTime())) return null;

    const expires = new Date(saved);
    expires.setMonth(expires.getMonth() + 12);
    if (now >= expires.getTime()) return null;

    return { analytics: data.analytics, v: CONSENT_VERSION, date: data.date };
  } catch {
    return null;
  }
}

export function readStoredConsent(now = Date.now()): ConsentChoice | null {
  if (typeof window === "undefined") return null;

  try {
    const parsed = parseConsent(window.localStorage.getItem(CONSENT_STORAGE_KEY), now);
    memoryConsent = parsed;
    return parsed;
  } catch {
    return memoryConsent ? parseConsent(JSON.stringify(memoryConsent), now) : null;
  }
}

export function writeStoredConsent(analytics: boolean): ConsentChoice {
  const choice: ConsentChoice = {
    analytics,
    v: CONSENT_VERSION,
    date: new Date().toISOString(),
  };
  memoryConsent = choice;

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(choice));
    window.sessionStorage.removeItem(CONSENT_DISMISS_KEY);
  } catch {
    /* navigation privée : le choix tient au moins pour cet onglet */
  }

  return choice;
}

export function isDevisHref(href: string): boolean {
  return (
    href === "#demande" ||
    href === "/contact" ||
    href.startsWith("/contact?") ||
    href.startsWith("/contact#")
  );
}
