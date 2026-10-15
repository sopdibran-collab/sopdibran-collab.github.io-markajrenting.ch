import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  committerCalendarDate,
  findEntryRange,
  lastmodFor,
  isMaintainedDateLine,
  latestTrustedDate,
  parseBlame,
  preferGitDate,
} from "./lastmod.ts";

const boundaryPorcelain = [
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 1 1 2",
  "author Ada",
  "author-mail <ada@example.com>",
  "author-time 1700000000",
  "author-tz +0000",
  "committer Ada",
  "committer-mail <ada@example.com>",
  "committer-time 1700000000",
  "committer-tz +0000",
  "summary bord de clone",
  "boundary",
  "filename page.tsx",
  "\tligne ancienne",
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 2 2",
  "\tencore ancienne",
  "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb 3 3 1",
  "author Ada",
  "author-mail <ada@example.com>",
  "author-time 1728600000",
  "author-tz +0200",
  "committer Ada",
  "committer-mail <ada@example.com>",
  "committer-time 1728600000",
  "committer-tz +0200",
  "summary vrai changement",
  "filename page.tsx",
  "\tligne récente",
  "0000000000000000000000000000000000000000 4 4 1",
  "author Not",
  "author-mail <not@committed>",
  "author-time 1791669976",
  "author-tz +0200",
  "committer Not",
  "committer-mail <not@committed>",
  "committer-time 1791669976",
  "committer-tz +0200",
  "summary non commité",
  "filename page.tsx",
  "\tupdated: \"2026-10-14\",",
  "",
].join("\n");

test("la date committer suit le fuseau, pas l'horloge du build", () => {
  assert.equal(committerCalendarDate(0, "+0000"), "1970-01-01");
  assert.equal(committerCalendarDate(0, "-0100"), "1969-12-31");
  const raw = execFileSync("git", ["log", "-1", "--format=%ct %cI %cs", "--", "lib/content/faq.ts"], {
    encoding: "utf8",
  }).trim();
  const [unix, iso, day] = raw.split(/\s+/);
  const tz = iso.endsWith("Z") ? "+0000" : iso.slice(-6).replace(":", "");
  assert.equal(committerCalendarDate(Number(unix), tz), day);
});

test("le blame ignore le bord du clone, le non-commité et la ligne updated", () => {
  const lines = parseBlame(boundaryPorcelain);
  assert.equal(lines.size, 4);
  assert.equal(lines.get(1)?.boundary, true);
  assert.equal(lines.get(3)?.boundary, false);
  assert.equal(lines.get(4)?.uncommitted, true);
  assert.equal(lines.get(4)?.text, 'updated: "2026-10-14",');
  assert.equal(latestTrustedDate(lines, 1, 2), null);
  assert.equal(latestTrustedDate(lines, 1, 4), lines.get(3)?.date);
  assert.match(lines.get(3)?.date ?? "", /^\d{4}-\d{2}-\d{2}$/);
});

test("une constante de repli n'est pas une modification de contenu", () => {
  assert.equal(isMaintainedDateLine('    updated: "2026-10-14",'), true);
  assert.equal(isMaintainedDateLine('export const fribourgUpdated = "2026-10-14";'), true);
  assert.equal(isMaintainedDateLine("Siège de Markaj Renting SA."), false);
});

test("la date git ne remplace le repli que si elle est plus récente", () => {
  assert.equal(preferGitDate(null, "2026-08-11"), "2026-08-11");
  assert.equal(preferGitDate("2026-10-11", "2026-08-11"), "2026-10-11");
  assert.equal(preferGitDate("2026-01-01", "2026-08-11"), "2026-08-11");
  assert.throws(() => preferGitDate(null, "hier"), /invalide/);
});

test("chaque entrée de contenu est isolée de la suivante", () => {
  const services = readFileSync("lib/content/services.ts", "utf8");
  const platrerie = slice(services, findEntryRange(services, { kind: "prop", name: "slug", value: "platrerie" }));
  assert.match(platrerie, /slug: "platrerie"/);
  assert.doesNotMatch(platrerie, /slug: "peinture"/);

  const zones = readFileSync("lib/content/zones.ts", "utf8");
  const fribourg = slice(zones, findEntryRange(zones, { kind: "prop", name: "slug", value: "fribourg" }));
  assert.match(fribourg, /slug: "fribourg"/);
  assert.doesNotMatch(fribourg, /slug: "vaud"/);

  const posts = readFileSync("lib/content/blog.ts", "utf8");
  const post = slice(
    posts,
    findEntryRange(posts, { kind: "prop", name: "slug", value: "isolation-peripherique-avantages" }),
  );
  assert.match(post, /slug: "isolation-peripherique-avantages"/);
  assert.doesNotMatch(post, /choisir-isolant/);

  const jobs = readFileSync("lib/content/realisations.ts", "utf8");
  const job = slice(jobs, findEntryRange(jobs, { kind: "prop", name: "id", value: "rue-de-lausanne-119" }));
  assert.match(job, /id: "rue-de-lausanne-119"/);
  assert.doesNotMatch(job, /credit-suisse/);

  const visuals = readFileSync("lib/content/service-visuals.ts", "utf8");
  const visual = slice(visuals, findEntryRange(visuals, { kind: "key", name: "faux-plafonds" }));
  assert.match(visual, /plafond-fibre-de-bois/);
  assert.doesNotMatch(visual, /isolation-packs/);

  const faq = readFileSync("lib/content/faq.ts", "utf8");
  const list = slice(faq, findEntryRange(faq, { kind: "export", name: "generalFaq" }));
  assert.match(list, /Comment obtenir un devis/);
  assert.match(list, /Quels matériaux utilisez-vous/);
  assert.doesNotMatch(list, /^import /m);
});

test("chaque entrée publiée a une date de repli", () => {
  const dated = (file: string, pattern: RegExp) => {
    const source = readFileSync(file, "utf8");
    const keys = [...source.matchAll(pattern)].map((match) => match[1] ?? match[2]);
    assert.ok(keys.length > 0, file);
    for (const key of keys) {
      const kind = file.endsWith("realisations.ts") ? "id" : file.endsWith("service-visuals.ts") ? "key" : "slug";
      const entry =
        kind === "key"
          ? findEntryRange(source, { kind: "key", name: key })
          : findEntryRange(source, { kind: "prop", name: kind, value: key });
      const body = slice(source, entry);
      assert.match(body, /updated: "\d{4}-\d{2}-\d{2}"/, `${file} ${key}`);
    }
  };
  dated("lib/content/services.ts", /slug: "([^"]+)"/g);
  dated("lib/content/zones.ts", /slug: "([^"]+)"/g);
  dated("lib/content/blog.ts", /slug: "([^"]+)"/g);
  dated("lib/content/realisations.ts", /id: "([^"]+)"/g);
  dated("lib/content/service-visuals.ts", /(?:^|\n)\s*(?:"([^"]+)"|([A-Za-z0-9-]+)):\s*\{/g);
  assert.match(readFileSync("lib/content/faq.ts", "utf8"), /export const faqUpdated = "\d{4}-\d{2}-\d{2}"/);
  assert.match(readFileSync("lib/content/pages.ts", "utf8"), /"app\/\(marketing\)\/page\.tsx": "\d{4}-\d{2}-\d{2}"/);
});

test("lastmodFor prend le plus récent entre git fiable et le repli", () => {
  const date = lastmodFor([
    { file: "app/(marketing)/plan-du-site/page.tsx", fallback: "2020-01-01" },
  ]);
  const gitDay = execFileSync("git", ["log", "-1", "--format=%cs", "--", "app/(marketing)/plan-du-site/page.tsx"], {
    encoding: "utf8",
  }).trim();
  assert.equal(date, gitDay);

  const kept = lastmodFor([
    { file: "app/(marketing)/plan-du-site/page.tsx", fallback: "2099-01-01" },
  ]);
  assert.equal(kept, "2099-01-01");
});

function slice(source: string, range: { start: number; end: number }): string {
  return source.split("\n").slice(range.start - 1, range.end).join("\n");
}
