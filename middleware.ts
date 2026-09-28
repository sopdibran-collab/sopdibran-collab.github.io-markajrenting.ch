import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { isBlockedPath } from "@/lib/security/blocked-paths";

/**
 * Hard-404 internal tooling, Cursor/agent paths, repo markdown/dotfiles,
 * and credential filenames — including if copied under /public later.
 */
export function middleware(request: NextRequest) {
  if (!isBlockedPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/__blocked";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/design-system",
    "/design-system/:path*",
    "/cursor",
    "/cursor/:path*",
    "/cursor.json",
    "/.cursor",
    "/.cursor/:path*",
    "/.cursorrules",
    "/.obsidian",
    "/.obsidian/:path*",
    "/agents",
    "/agents/:path*",
    "/brand-book",
    "/brand-book/:path*",
    "/brandbook",
    "/brandbook/:path*",
    "/seo-agent",
    "/seo-agent/:path*",
    "/obsidian",
    "/obsidian/:path*",
    "/vault",
    "/vault/:path*",
    /*
     * Single-segment roots: README.md, AGENTS.md, .gitignore, .env, …
     * Logo assets under /brand/* are multi-segment and unaffected.
     */
    "/:file",
  ],
};
