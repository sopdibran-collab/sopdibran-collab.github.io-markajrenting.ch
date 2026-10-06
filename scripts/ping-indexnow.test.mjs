import assert from "node:assert/strict";
import test from "node:test";
import {
  acceptLoc,
  decodeXml,
  isDisallowed,
  isDryRun,
  parseSitemapLocs,
} from "./ping-indexnow.mjs";

const KEY = "a9fd595d-cd70-4d5d-ae86-48aaeeac42e9";

test("decodeXml restores escaped sitemap characters", () => {
  assert.equal(decodeXml("https://markajrenting.ch/a&amp;b"), "https://markajrenting.ch/a&b");
  assert.equal(decodeXml("&lt;&gt;&quot;&apos;"), "<>\"'");
});

test("acceptLoc keeps canonical https apex URLs only", () => {
  assert.equal(
    acceptLoc("  https://markajrenting.ch/services/platrerie  "),
    "https://markajrenting.ch/services/platrerie"
  );
  assert.equal(acceptLoc("http://markajrenting.ch/"), null);
  assert.equal(acceptLoc("https://www.markajrenting.ch/"), null);
  assert.equal(acceptLoc("https://markajrenting.ch/contact?ok=1"), null);
  assert.equal(acceptLoc("https://markajrenting.ch/contact#form"), null);
  assert.equal(acceptLoc(`https://markajrenting.ch/${KEY}.txt`), null);
  assert.equal(acceptLoc("https://example.com/"), null);
  assert.equal(acceptLoc("not a url"), null);
});

test("isDisallowed matches robots.txt prefixes", () => {
  assert.equal(isDisallowed("/api/indexnow"), true);
  assert.equal(isDisallowed("/design-system"), true);
  assert.equal(isDisallowed("/services"), false);
});

test("parseSitemapLocs dedupes and drops non-publishable locs", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset>
      <url><loc>https://markajrenting.ch/</loc></url>
      <url><loc>https://markajrenting.ch/</loc></url>
      <url><loc>https://markajrenting.ch/blog/qualite&amp;normes</loc></url>
      <url><loc>https://markajrenting.ch/zones/fribourg</loc></url>
      <url><loc>https://www.markajrenting.ch/contact</loc></url>
      <url><loc>https://markajrenting.ch/api/indexnow</loc></url>
      <url><loc>https://markajrenting.ch/${KEY}.txt</loc></url>
    </urlset>`;

  assert.deepEqual(parseSitemapLocs(xml), [
    "https://markajrenting.ch/",
    "https://markajrenting.ch/blog/qualite&normes",
    "https://markajrenting.ch/zones/fribourg",
  ]);
});

test("isDryRun accepts the flag and the existing env var", () => {
  assert.equal(isDryRun(["node", "script"], {}), false);
  assert.equal(isDryRun(["node", "script", "--dry-run"], {}), true);
  assert.equal(isDryRun(["node", "script"], { INDEXNOW_DRY_RUN: "1" }), true);
  assert.equal(isDryRun(["node", "script"], { INDEXNOW_DRY_RUN: "0" }), false);
});
