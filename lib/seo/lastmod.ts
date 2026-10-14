import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";

/**
 * Dernière modification d'une page, calculée au moment du build.
 *
 * Source préférée : la date committer du dernier commit qui touche le
 * fichier de page ou l'entrée dans lib/content (git blame).
 * Repli : la date maintenue sur cette entrée.
 *
 * Vercel clone avec `git clone --depth=10`. Les lignes plus anciennes que
 * cette fenêtre sont marquées `boundary` : le commit renvoyé est le bord
 * du clone, pas une modification du contenu. On ignore ces lignes. S'il ne
 * reste aucun commit fiable, la date maintenue est utilisée.
 *
 * `new Date()` n'est jamais appelé : un déploiement ne doit pas dater
 * toutes les URLs.
 */

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const UNCOMMITTED = "0000000000000000000000000000000000000000";

export type EntryRef =
  | { kind: "prop"; name: string; value: string }
  | { kind: "key"; name: string }
  | { kind: "export"; name: string };

export type LastmodSource = {
  file: string;
  entry?: EntryRef;
  fallback: string;
};

export type LineRange = { start: number; end: number };

export type BlameLine = {
  date: string;
  boundary: boolean;
  uncommitted: boolean;
  text: string;
};

type CommitMeta = {
  sha: string;
  time: string;
  tz: string;
  boundary: boolean;
  uncommitted: boolean;
};

const blameCache = new Map<string, Map<number, BlameLine> | null>();

export function committerCalendarDate(unixSeconds: number, tz: string): string {
  const match = /^([+-])(\d{2})(\d{2})$/.exec(tz);
  if (!match) {
    throw new Error(`Fuseau git invalide : ${tz}`);
  }
  const sign = match[1] === "-" ? -1 : 1;
  const offsetSeconds = sign * (Number(match[2]) * 60 + Number(match[3])) * 60;
  return civilFromDays(Math.floor((unixSeconds + offsetSeconds) / 86400));
}

/** Date civile grégorienne pour un nombre de jours depuis 1970-01-01. */
function civilFromDays(daysSinceEpoch: number): string {
  const z = daysSinceEpoch + 719468;
  const era = Math.floor((z >= 0 ? z : z - 146096) / 146097);
  const doe = z - era * 146097;
  const yoe = Math.floor(
    (doe - Math.floor(doe / 1460) + Math.floor(doe / 36524) - Math.floor(doe / 146096)) / 365,
  );
  let year = yoe + era * 400;
  const doy = doe - (365 * yoe + Math.floor(yoe / 4) - Math.floor(yoe / 100));
  const mp = Math.floor((5 * doy + 2) / 153);
  const day = doy - Math.floor((153 * mp + 2) / 5) + 1;
  const month = mp + (mp < 10 ? 3 : -9);
  if (month <= 2) year += 1;
  const pad = (value: number) => value.toString().padStart(2, "0");
  return `${year.toString().padStart(4, "0")}-${pad(month)}-${pad(day)}`;
}

export function parseBlame(porcelain: string): Map<number, BlameLine> {
  const lines = new Map<number, BlameLine>();
  const rows = porcelain.split("\n");
  let meta: CommitMeta | null = null;
  let pendingLine: number | null = null;

  for (const row of rows) {
    if (row.startsWith("\t")) {
      if (!meta || pendingLine === null) continue;
      lines.set(pendingLine, {
        date: calendarDate(meta),
        boundary: meta.boundary,
        uncommitted: meta.uncommitted,
        text: row.slice(1),
      });
      pendingLine = null;
      continue;
    }

    const header = /^([0-9a-f]{40}) (\d+) (\d+)(?: (\d+))?$/.exec(row);
    if (header) {
      const sha = header[1];
      const finalLine = Number(header[3]);
      const startsGroup = header[4] !== undefined;
      if (startsGroup || !meta || meta.sha !== sha) {
        meta = {
          sha,
          time: "",
          tz: "",
          boundary: false,
          uncommitted: sha === UNCOMMITTED,
        };
      }
      pendingLine = finalLine;
      continue;
    }

    if (!meta) continue;
    if (row === "boundary") {
      meta.boundary = true;
      continue;
    }
    if (row.startsWith("committer-time ")) {
      meta.time = row.slice("committer-time ".length);
      continue;
    }
    if (row.startsWith("committer-tz ")) {
      meta.tz = row.slice("committer-tz ".length);
    }
  }

  return lines;
}

function calendarDate(meta: CommitMeta): string {
  if (!/^\d+$/.test(meta.time) || !/^[+-]\d{4}$/.test(meta.tz)) return "";
  return committerCalendarDate(Number(meta.time), meta.tz);
}

/** Dernière date fiable dans l'intervalle. `null` si seul le bord d'un clone superficiel est visible. */
export function latestTrustedDate(
  lines: Map<number, BlameLine>,
  start: number,
  end: number,
): string | null {
  let best: string | null = null;
  for (let number = start; number <= end; number += 1) {
    const line = lines.get(number);
    if (!line || line.boundary || line.uncommitted) continue;
    if (line.text.trim().startsWith("updated:")) continue;
    if (!ISO_DATE.test(line.date)) continue;
    if (!best || line.date > best) best = line.date;
  }
  return best;
}

export function preferGitDate(gitDate: string | null, fallback: string): string {
  if (!ISO_DATE.test(fallback)) {
    throw new Error(`Date de repli invalide : ${fallback}`);
  }
  if (gitDate && ISO_DATE.test(gitDate) && gitDate > fallback) return gitDate;
  return fallback;
}

export function findEntryRange(source: string, entry: EntryRef): LineRange {
  if (entry.kind === "prop") return findPropObjectRange(source, entry.name, entry.value);
  if (entry.kind === "key") return findKeyObjectRange(source, entry.name);
  return findExportArrayRange(source, entry.name);
}

export function lastmodFor(sources: readonly LastmodSource[], root = process.cwd()): string {
  if (sources.length === 0) {
    throw new Error("Aucune source pour lastmod");
  }
  let best: string | null = null;
  for (const source of sources) {
    const date = preferGitDate(gitDateFor(source, root), source.fallback);
    if (!best || date > best) best = date;
  }
  if (!best) throw new Error("Aucune date lastmod");
  return best;
}

function gitDateFor(source: LastmodSource, root: string): string | null {
  const blamed = blameFile(root, source.file);
  if (!blamed) return null;
  if (!source.entry) {
    let start = Number.POSITIVE_INFINITY;
    let end = Number.NEGATIVE_INFINITY;
    blamed.forEach((_line, number) => {
      if (number < start) start = number;
      if (number > end) end = number;
    });
    if (!Number.isFinite(start)) return null;
    return latestTrustedDate(blamed, start, end);
  }
  const text = readFileSync(path.join(root, source.file), "utf8");
  const range = findEntryRange(text, source.entry);
  return latestTrustedDate(blamed, range.start, range.end);
}

function blameFile(root: string, file: string): Map<number, BlameLine> | null {
  const cacheKey = `${root}\0${file}`;
  const cached = blameCache.get(cacheKey);
  if (cached !== undefined) return cached;
  try {
    const output = execFileSync("git", ["--no-pager", "blame", "--porcelain", "--", file], {
      cwd: root,
      encoding: "utf8",
      maxBuffer: 16 * 1024 * 1024,
      stdio: ["ignore", "pipe", "pipe"],
    });
    const parsed = parseBlame(output);
    blameCache.set(cacheKey, parsed);
    return parsed;
  } catch {
    blameCache.set(cacheKey, null);
    return null;
  }
}

function findPropObjectRange(source: string, name: string, value: string): LineRange {
  const token = `${name}: "${value}"`;
  const at = source.indexOf(token);
  if (at < 0) {
    throw new Error(`Entrée introuvable : ${name}: "${value}"`);
  }
  let open = at - 1;
  while (open >= 0 && /\s/.test(source[open])) open -= 1;
  if (source[open] !== "{") {
    throw new Error(`L'entrée ${value} ne commence pas par ${name}`);
  }
  return toRange(source, open, matchClose(source, open));
}

function findKeyObjectRange(source: string, key: string): LineRange {
  const quoted = source.indexOf(`"${key}":`);
  let at = quoted;
  if (at < 0) {
    const match = new RegExp(`(?:^|\\n)[ \\t]*${escapeRegExp(key)}\\s*:`).exec(source);
    if (!match) throw new Error(`Clé introuvable : ${key}`);
    at = match.index;
  }
  const open = source.indexOf("{", at);
  if (open < 0) throw new Error(`Objet introuvable pour ${key}`);
  return toRange(source, open, matchClose(source, open));
}

function findExportArrayRange(source: string, name: string): LineRange {
  const head = source.indexOf(`export const ${name}`);
  if (head < 0) throw new Error(`Export introuvable : ${name}`);
  const eq = source.indexOf("=", head);
  const open = source.indexOf("[", eq);
  if (eq < 0 || open < 0) throw new Error(`Tableau introuvable : ${name}`);
  return toRange(source, open, matchClose(source, open));
}

function toRange(source: string, startIndex: number, endIndex: number): LineRange {
  return {
    start: source.slice(0, startIndex).split("\n").length,
    end: source.slice(0, endIndex).split("\n").length,
  };
}

function matchClose(source: string, openIndex: number): number {
  const pairs: Record<string, string> = { "{": "}", "[": "]", "(": ")" };
  const open = source[openIndex];
  const close = pairs[open];
  if (!close) throw new Error(`Délimiteur inattendu : ${open}`);

  let depth = 0;
  let mode: "code" | "sq" | "dq" | "bt" | "line" | "block" = "code";
  for (let i = openIndex; i < source.length; i += 1) {
    const char = source[i];
    const next = source[i + 1];
    if (mode === "line") {
      if (char === "\n") mode = "code";
      continue;
    }
    if (mode === "block") {
      if (char === "*" && next === "/") {
        mode = "code";
        i += 1;
      }
      continue;
    }
    if (mode === "sq" || mode === "dq" || mode === "bt") {
      if (char === "\\") {
        i += 1;
        continue;
      }
      const quote = mode === "sq" ? "'" : mode === "dq" ? '"' : "`";
      if (char === quote) mode = "code";
      continue;
    }
    if (char === "/" && next === "/") {
      mode = "line";
      i += 1;
      continue;
    }
    if (char === "/" && next === "*") {
      mode = "block";
      i += 1;
      continue;
    }
    if (char === "'") {
      mode = "sq";
      continue;
    }
    if (char === '"') {
      mode = "dq";
      continue;
    }
    if (char === "`") {
      mode = "bt";
      continue;
    }
    if (char === "{" || char === "[" || char === "(") depth += 1;
    if (char === "}" || char === "]" || char === ")") {
      depth -= 1;
      if (depth === 0) return i + 1;
    }
  }
  throw new Error("Délimiteur non fermé");
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
