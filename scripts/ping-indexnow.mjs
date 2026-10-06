#!/usr/bin/env node
/**
 * Publie toutes les URL pertinentes du sitemap de production vers IndexNow
 * (Bing et les moteurs compatibles).
 *
 * Bing Webmaster demande de publier l’ensemble des URL récentes, pas un
 * échantillon. La source est le sitemap déjà servi (pages indexables).
 *
 * Prérequis :
 * - Fichier clé public : /public/<KEY>.txt (contenu = KEY)
 * - Même fichier accessible en HTTPS à la racine du domaine
 *
 * Aucun secret : la clé IndexNow est publique par conception.
 *
 * Usage :
 *   node scripts/ping-indexnow.mjs
 *   npm run indexnow
 *   node scripts/ping-indexnow.mjs --dry-run
 *   INDEXNOW_DRY_RUN=1 npm run indexnow
 */

import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const HOST = "markajrenting.ch";
const KEY = "a9fd595d-cd70-4d5d-ae86-48aaeeac42e9";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH_SIZE = 10_000;

/** Aligné sur app/robots.ts — ces préfixes ne doivent jamais partir vers IndexNow. */
const DISALLOWED_PREFIXES = [
  "/api/",
  "/design-system",
  "/agents.md",
  "/readme.md",
  "/.gitignore",
  "/.cursor/",
  "/cursor/",
  "/cursor.json",
  "/.cursorrules",
  "/.env",
  "/brand-book",
  "/brandbook",
  "/seo-agent",
  "/agents",
  "/obsidian",
  "/vault",
];

export function isDryRun(argv = process.argv, env = process.env) {
  return argv.includes("--dry-run") || env.INDEXNOW_DRY_RUN === "1";
}

export function assertKeyFile() {
  const keyPath = join(root, "public", `${KEY}.txt`);
  if (!existsSync(keyPath)) {
    console.error(`Fichier clé manquant : public/${KEY}.txt`);
    process.exit(1);
  }
  const body = readFileSync(keyPath, "utf8").trim();
  if (body !== KEY) {
    console.error(`Contenu de public/${KEY}.txt doit être exactement la clé.`);
    process.exit(1);
  }
}

export function decodeXml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

export function isDisallowed(pathname) {
  const path = pathname.toLowerCase();
  return DISALLOWED_PREFIXES.some((prefix) => path.startsWith(prefix));
}

export function acceptLoc(loc) {
  const trimmed = loc.trim();
  let url;
  try {
    url = new URL(trimmed);
  } catch {
    return null;
  }
  if (url.protocol !== "https:" || url.hostname !== HOST) return null;
  if (url.username || url.password || url.search || url.hash) return null;
  if (url.pathname === `/${KEY}.txt`) return null;
  if (isDisallowed(url.pathname)) return null;
  return trimmed;
}

export function parseSitemapLocs(xml) {
  const locs = [];
  const seen = new Set();
  const re = /<loc>\s*([^<]+?)\s*<\/loc>/g;
  for (const match of xml.matchAll(re)) {
    const accepted = acceptLoc(decodeXml(match[1]));
    if (!accepted || seen.has(accepted)) continue;
    seen.add(accepted);
    locs.push(accepted);
  }
  return locs;
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Markaj-IndexNow/1.0" },
  });
  if (!res.ok) {
    throw new Error(`${url} → HTTP ${res.status}`);
  }
  return res.text();
}

async function assertKeyOnline() {
  const body = (await fetchText(KEY_LOCATION)).trim();
  if (body !== KEY) {
    throw new Error(`Le fichier clé en ligne ne correspond pas à la clé (${KEY_LOCATION}).`);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function submitBatch(urlList) {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  for (let attempt = 1; attempt <= 4; attempt += 1) {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    console.log(`HTTP ${res.status} (${urlList.length} URL)`);
    if (text) console.log(text);

    // 200 OK, 202 Accepted. 204 : variante déjà connue (aligné sur lib/seo/indexnow.ts).
    if (res.status === 200 || res.status === 202 || res.status === 204) return;

    const retryable = res.status === 429 || res.status >= 500;
    if (retryable && attempt < 4) {
      const retryAfter = Number(res.headers.get("retry-after"));
      const waitMs = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : attempt * 2000;
      console.log(`Nouvel essai dans ${waitMs} ms…`);
      await sleep(waitMs);
      continue;
    }

    process.exit(1);
  }
}

export async function main() {
  assertKeyFile();
  await assertKeyOnline();

  const xml = await fetchText(SITEMAP_URL);
  const urlList = parseSitemapLocs(xml);
  if (urlList.length === 0) {
    console.error(`Aucune URL publiable dans ${SITEMAP_URL}`);
    process.exit(1);
  }

  console.log(`IndexNow → ${urlList.length} URL(s) depuis ${SITEMAP_URL}`);
  console.log(`keyLocation: ${KEY_LOCATION}`);
  for (const url of urlList) console.log(url);

  if (isDryRun()) {
    console.log("Dry-run : aucune requête envoyée.");
    return;
  }

  for (let offset = 0; offset < urlList.length; offset += BATCH_SIZE) {
    await submitBatch(urlList.slice(offset, offset + BATCH_SIZE));
  }
}

function isDirectRun() {
  const entry = process.argv[1];
  if (!entry) return false;
  return import.meta.url === pathToFileURL(entry).href;
}

if (isDirectRun()) {
  main().catch((err) => {
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  });
}
