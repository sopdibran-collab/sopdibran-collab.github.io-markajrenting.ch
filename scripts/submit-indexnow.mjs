#!/usr/bin/env node
/**
 * Submit priority URLs to IndexNow (Bing / Yandex / compatible engines).
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs
 *   npm run indexnow
 *
 * Optional:
 *   INDEXNOW_BASE_URL=https://markajrenting.ch  (default)
 *   INDEXNOW_DRY_RUN=1                           (print payload only)
 *
 * Key file must be live at: https://markajrenting.ch/{key}.txt
 * @see https://www.indexnow.org/documentation
 */

const INDEXNOW_KEY = "a9fd595d-cd70-4d5d-ae86-48aaeeac42e9";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BASE = (process.env.INDEXNOW_BASE_URL || "https://markajrenting.ch").replace(
  /\/$/,
  ""
);

const SERVICE_SLUGS = [
  "platrerie",
  "peinture",
  "faux-plafonds",
  "isolation",
  "renovation",
  "facades",
];

const urls = [
  `${BASE}/`,
  `${BASE}/services`,
  ...SERVICE_SLUGS.map((slug) => `${BASE}/services/${slug}`),
  `${BASE}/zones/fribourg`,
];

const payload = {
  host: new URL(BASE).host,
  key: INDEXNOW_KEY,
  keyLocation: `${BASE}/${INDEXNOW_KEY}.txt`,
  urlList: urls,
};

if (process.env.INDEXNOW_DRY_RUN === "1") {
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

const text = await res.text().catch(() => "");
const ok = res.status === 200 || res.status === 202 || res.status === 204;

console.log(
  JSON.stringify(
    {
      ok,
      httpStatus: res.status,
      submitted: urls.length,
      keyLocation: payload.keyLocation,
      body: text || null,
    },
    null,
    2
  )
);

if (!ok) process.exit(1);
