/** Secret de test Cloudflare : n'accepte que le jeton factice des clés de test. */
const TURNSTILE_TEST_SECRET = "1x0000000000000000000000000000000AA";

export type TurnstileVerdict = "ok" | "fail" | "skip" | "misconfigured";

type SiteverifyResponse = {
  success?: boolean;
  "error-codes"?: string[];
};

/**
 * Vérifie le jeton Turnstile côté serveur.
 * En production, sans aucune clé, le contrôle est ignoré (le leurre et le filtre restent actifs).
 * Une seule des deux clés présentes est une erreur de configuration : on refuse l'envoi.
 */
export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string
): Promise<TurnstileVerdict> {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";
  const configuredSecret = process.env.TURNSTILE_SECRET_KEY?.trim() ?? "";
  const isProduction = process.env.NODE_ENV === "production";
  const hasSiteKey = Boolean(siteKey);
  const hasSecret = Boolean(configuredSecret);

  if (!hasSiteKey && !hasSecret) {
    if (isProduction) return "skip";
  } else if (hasSiteKey !== hasSecret) {
    return "misconfigured";
  }

  const secret = configuredSecret || TURNSTILE_TEST_SECRET;
  if (!token) return "fail";

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!response.ok) {
      console.error("[contact] Turnstile siteverify HTTP", response.status);
      return "fail";
    }

    const data = (await response.json()) as SiteverifyResponse;
    if (data.success === true) return "ok";

    console.warn("[contact] Turnstile refusé", data["error-codes"]?.join(",") || "unknown");
    return "fail";
  } catch (error) {
    console.error("[contact] Turnstile injoignable", error);
    return "fail";
  }
}
