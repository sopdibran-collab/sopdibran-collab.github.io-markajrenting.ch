import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { isBlockedPath } from "@/lib/security/blocked-paths";

/**
 * Block internal preview and repo-root markdown/dotfiles from public URLs.
 * Defense in depth if such files are ever dropped into /public.
 */
export function middleware(request: NextRequest) {
  if (!isBlockedPath(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Rewrite to a non-existent route so app/not-found.tsx renders with 404.
  const url = request.nextUrl.clone();
  url.pathname = "/__blocked";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/design-system",
    "/design-system/:path*",
    /*
     * Single-segment root paths (README.md, AGENTS.md, .gitignore, …).
     * Marketing single segments pass through via isBlockedPath → next().
     */
    "/:file",
  ],
};
