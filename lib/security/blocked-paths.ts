/**
 * Paths that must never be served on the production domain.
 * Defense in depth if internal tooling files are ever dropped into /public.
 * Kept free of Next runtime imports for easy checks.
 */

function normalizePath(pathname: string): string {
  return pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;
}

/** Exact single-segment paths (case-insensitive). */
const BLOCKED_EXACT = new Set([
  "/design-system",
  "/cursor",
  "/cursor.json",
  "/.cursorrules",
  "/agents",
  "/brand-book",
  "/brandbook",
  "/seo-agent",
  "/obsidian",
  "/vault",
  "/.obsidian",
  "/.cursor",
  "/.env",
  "/.env.local",
  "/.env.production",
  "/.env.development",
]);

/** Prefixes that block the path and all nested segments (case-insensitive). */
const BLOCKED_PREFIXES = [
  "/design-system/",
  "/.cursor/",
  "/cursor/",
  "/.obsidian/",
  "/brand-book/",
  "/brandbook/",
  "/seo-agent/",
  "/agents/",
  "/vault/",
  "/obsidian/",
];

/** Root filenames that look like internal tooling dumps (any extension). */
const BLOCKED_ROOT_BASENAMES = [
  /^\/brand-book(\.|$)/i,
  /^\/brandbook(\.|$)/i,
  /^\/seo-agent(\.|$)/i,
  /^\/agents(\.|$)/i,
  /^\/cursor(\.|$)/i,
  /^\/obsidian(\.|$)/i,
  /^\/vault(\.|$)/i,
  /^\/design-system(\.|$)/i,
];

export function isBlockedPath(pathname: string): boolean {
  const path = normalizePath(pathname);
  const lower = path.toLowerCase();

  if (BLOCKED_EXACT.has(lower)) {
    return true;
  }

  for (const prefix of BLOCKED_PREFIXES) {
    if (lower.startsWith(prefix)) {
      return true;
    }
  }

  for (const pattern of BLOCKED_ROOT_BASENAMES) {
    if (pattern.test(path)) {
      return true;
    }
  }

  // Root-level markdown: /README.md, /AGENTS.md, /Brand-Book.md, …
  if (/^\/[^/]+\.md$/i.test(path)) {
    return true;
  }

  // Root-level dotfiles: /.gitignore, /.env.anything
  if (/^\/\.[^/]+$/.test(path)) {
    return true;
  }

  // Nested env / credentials under any folder
  if (
    /(^|\/)\.env(\.|$|\/)/i.test(path) ||
    /(^|\/)\.cursorrules$/i.test(path) ||
    /(^|\/)cursor\.json$/i.test(path)
  ) {
    return true;
  }

  return false;
}
