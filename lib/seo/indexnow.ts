import { serviceSlugs } from "@/lib/content/services";
import { siteConfig } from "@/lib/seo/site-config";

/**
 * IndexNow — public key hosted at `/{key}.txt` (see public/).
 * The key itself is public by design; protect the submit API with INDEXNOW_SUBMIT_SECRET.
 * @see https://www.indexnow.org/documentation
 */
export const INDEXNOW_KEY = "a9fd595d-cd70-4d5d-ae86-48aaeeac42e9" as const;

export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow" as const;

/** Host without protocol (IndexNow expects bare host). Canonical is apex. */
export function getIndexNowHost(): string {
  return new URL(siteConfig.url).host;
}

export function getIndexNowKeyLocation(): string {
  return `${siteConfig.url}/${INDEXNOW_KEY}.txt`;
}

/** Priority URLs for local SEO: home, services hub + pages, siège Fribourg. */
export function getDefaultIndexNowUrls(): string[] {
  const base = siteConfig.url;
  return [
    `${base}/`,
    `${base}/services`,
    ...serviceSlugs.map((slug) => `${base}/services/${slug}`),
    `${base}/zones/fribourg`,
  ];
}

export type IndexNowSubmitResult = {
  ok: boolean;
  status: number;
  submitted: number;
  body: string;
};

/**
 * POST a URL list to IndexNow. Safe to call from Node (script) or Route Handler.
 */
export async function submitIndexNowUrls(
  urlList: string[],
  fetchImpl: typeof fetch = fetch
): Promise<IndexNowSubmitResult> {
  const unique = Array.from(new Set(urlList)).filter(Boolean);
  if (unique.length === 0) {
    return { ok: false, status: 400, submitted: 0, body: "empty urlList" };
  }

  const payload = {
    host: getIndexNowHost(),
    key: INDEXNOW_KEY,
    keyLocation: getIndexNowKeyLocation(),
    urlList: unique,
  };

  const res = await fetchImpl(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const body = await res.text().catch(() => "");
  // IndexNow: 200 OK, 202 Accepted are success; 204 = already known variants
  const ok = res.status === 200 || res.status === 202 || res.status === 204;

  return { ok, status: res.status, submitted: unique.length, body };
}
