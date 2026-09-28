/** Clé de test Cloudflare : widget invisible qui réussit toujours. Publique par conception. */
export const TURNSTILE_TEST_SITE_KEY = "1x00000000000000000000BB";

export function resolveTurnstileSiteKey(): string {
  const configured = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
  if (configured) return configured;
  if (process.env.NODE_ENV !== "production") return TURNSTILE_TEST_SITE_KEY;
  return "";
}
