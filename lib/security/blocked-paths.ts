/**
 * Paths that must never be served on the production domain.
 * Used by middleware (and kept free of Next runtime imports for easy checks).
 */
export function isBlockedPath(pathname: string): boolean {
  const path =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  const lower = path.toLowerCase();

  if (lower === "/design-system" || lower.startsWith("/design-system/")) {
    return true;
  }

  // Root-level markdown only: /README.md, /AGENTS.md, /agents.md, …
  if (/^\/[^/]+\.md$/i.test(path)) {
    return true;
  }

  // Root-level dotfiles: /.gitignore, /.env, …
  if (/^\/\.[^/]+$/.test(path)) {
    return true;
  }

  return false;
}
