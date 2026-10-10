import assert from "node:assert/strict";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const ROOT = path.resolve(import.meta.dirname, "..");
const NEEDLE = "www." + "markajrenting";
const APEX = "https://markajrenting.ch";
const LEGACY_HOST = `${NEEDLE}.ch`;

const SOURCE_SKIP = new Set(["node_modules", ".git", ".next", ".cursor"]);

async function collectFiles(dir, skipNames) {
  const files = [];

  async function visit(current) {
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      if (skipNames.has(entry.name)) continue;
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === "cache" && path.basename(current) === ".next") continue;
        await visit(full);
      } else if (entry.isFile()) {
        files.push(full);
      }
    }
  }

  await visit(dir);
  return files;
}

function excerpts(buf) {
  const hits = [];
  let from = 0;
  while (from < buf.length && hits.length < 5) {
    const index = buf.indexOf(NEEDLE, from);
    if (index === -1) break;
    const start = Math.max(0, index - 70);
    const end = Math.min(buf.length, index + NEEDLE.length + 70);
    hits.push(buf.slice(start, end).toString("utf8").replace(/\s+/g, " "));
    from = index + NEEDLE.length;
  }
  return hits;
}

/**
 * A permanent redirect may name the legacy host as its source.
 * The destination must stay on the apex, and no other field may.
 */
function withoutLegacyRedirectHost(text) {
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    return null;
  }

  if (!Array.isArray(data.redirects)) return text;

  for (const rule of data.redirects) {
    if (typeof rule?.destination !== "string") continue;
    if (rule.destination.includes(NEEDLE)) continue;
    const toApex =
      rule.destination === APEX || rule.destination.startsWith(`${APEX}/`);
    if (!toApex || rule.permanent !== true || !Array.isArray(rule.has)) continue;

    for (const condition of rule.has) {
      if (condition?.type === "host" && condition.value === LEGACY_HOST) {
        condition.value = "legacy-host";
      }
    }
  }

  return JSON.stringify(data);
}

test("source code does not name the legacy www host", async () => {
  const files = await collectFiles(ROOT, SOURCE_SKIP);
  const failures = [];

  for (const file of files) {
    const buf = await readFile(file);
    if (!buf.includes(Buffer.from(NEEDLE))) continue;
    failures.push(`${path.relative(ROOT, file)}: ${excerpts(buf).join(" | ")}`);
  }

  assert.deepEqual(failures, []);
});

test("build output does not publish the legacy www host", async () => {
  const buildDir = path.join(ROOT, ".next");
  try {
    await stat(buildDir);
  } catch {
    assert.fail("sortie de build absente : lancer next build avant ce test");
  }

  const files = await collectFiles(buildDir, new Set());
  assert.ok(files.length > 0, "sortie de build vide");

  const failures = [];
  let sawCanonical = false;
  let sawOpenGraphUrl = false;
  let sawOpenGraphImage = false;
  let sawJsonUrl = false;
  let sawJsonId = false;
  let sawJsonLogo = false;
  let sawJsonImage = false;
  let sawSitemap = false;

  for (const file of files) {
    const buf = await readFile(file);
    const relative = path.relative(buildDir, file);
    const text = buf.toString("utf8");

    if (buf.includes(Buffer.from(NEEDLE))) {
      const stripped = withoutLegacyRedirectHost(text);
      if (stripped === null || stripped.includes(NEEDLE)) {
        failures.push(`${relative}: ${excerpts(buf).join(" | ")}`);
      }
    }

    if (
      text.includes(`rel="canonical" href="${APEX}`) ||
      text.includes(`\\"rel\\":\\"canonical\\",\\"href\\":\\"${APEX}`)
    ) {
      sawCanonical = true;
    }
    if (
      text.includes(`property="og:url" content="${APEX}`) ||
      text.includes(`\\"property\\":\\"og:url\\",\\"content\\":\\"${APEX}`)
    ) {
      sawOpenGraphUrl = true;
    }
    if (
      text.includes(`property="og:image" content="${APEX}/`) ||
      text.includes(`\\"property\\":\\"og:image\\",\\"content\\":\\"${APEX}/`)
    ) {
      sawOpenGraphImage = true;
    }
    if (
      text.includes(`"url":"${APEX}`) ||
      text.includes(`\\"url\\":\\"${APEX}`)
    ) {
      sawJsonUrl = true;
    }
    if (
      text.includes(`"@id":"${APEX}`) ||
      text.includes(`\\"@id\\":\\"${APEX}`)
    ) {
      sawJsonId = true;
    }
    if (
      text.includes(`"logo":"${APEX}/`) ||
      text.includes(`\\"logo\\":\\"${APEX}/`)
    ) {
      sawJsonLogo = true;
    }
    if (
      text.includes(`"image":"${APEX}/`) ||
      text.includes(`\\"image\\":\\"${APEX}/`)
    ) {
      sawJsonImage = true;
    }
    if (text.includes(`<loc>${APEX}/`) || text.includes(`<loc>${APEX}<`)) {
      sawSitemap = true;
    }
  }

  assert.deepEqual(failures, []);
  assert.equal(sawCanonical, true, "canonical apex absent de la sortie de build");
  assert.equal(sawOpenGraphUrl, true, "og:url apex absent de la sortie de build");
  assert.equal(sawOpenGraphImage, true, "og:image apex absent de la sortie de build");
  assert.equal(sawJsonUrl, true, "JSON-LD url apex absent de la sortie de build");
  assert.equal(sawJsonId, true, "JSON-LD @id apex absent de la sortie de build");
  assert.equal(sawJsonLogo, true, "JSON-LD logo apex absent de la sortie de build");
  assert.equal(sawJsonImage, true, "JSON-LD image apex absent de la sortie de build");
  assert.equal(sawSitemap, true, "sitemap apex absent de la sortie de build");
});
