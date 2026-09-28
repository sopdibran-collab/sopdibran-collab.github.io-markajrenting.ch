import {
  getDefaultIndexNowUrls,
  submitIndexNowUrls,
} from "@/lib/seo/indexnow";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Secure IndexNow submit endpoint.
 *
 * Auth: `Authorization: Bearer <INDEXNOW_SUBMIT_SECRET>`
 *   or  `?secret=<INDEXNOW_SUBMIT_SECRET>`
 *
 * Body (optional JSON): `{ "urls": ["https://markajrenting.ch/..."] }`
 * Without body → submits default local-SEO set (home, /services/*, /zones/fribourg).
 *
 * Does not expose INDEXNOW_SUBMIT_SECRET to the client bundle.
 */
function authorize(request: NextRequest): boolean {
  const secret = process.env.INDEXNOW_SUBMIT_SECRET;
  if (!secret) return false;

  const header = request.headers.get("authorization");
  if (header?.startsWith("Bearer ") && header.slice(7) === secret) {
    return true;
  }

  const querySecret = request.nextUrl.searchParams.get("secret");
  return querySecret === secret;
}

export async function POST(request: NextRequest) {
  if (!authorize(request)) {
    return NextResponse.json(
      { error: "Unauthorized. Set INDEXNOW_SUBMIT_SECRET and pass Bearer token." },
      { status: 401 }
    );
  }

  let urls = getDefaultIndexNowUrls();

  try {
    const body = (await request.json()) as { urls?: unknown };
    if (Array.isArray(body?.urls) && body.urls.every((u) => typeof u === "string")) {
      urls = body.urls as string[];
    }
  } catch {
    // empty / non-JSON body → defaults
  }

  try {
    const result = await submitIndexNowUrls(urls);
    return NextResponse.json(
      {
        ok: result.ok,
        status: result.status,
        submitted: result.submitted,
        urls,
        indexNowBody: result.body || null,
      },
      { status: result.ok ? 200 : 502 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "IndexNow request failed";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

/** GET with secret → same as POST with default URL list (handy for deploy hooks). */
export async function GET(request: NextRequest) {
  if (!authorize(request)) {
    return NextResponse.json(
      { error: "Unauthorized. Set INDEXNOW_SUBMIT_SECRET and pass Bearer token." },
      { status: 401 }
    );
  }

  try {
    const urls = getDefaultIndexNowUrls();
    const result = await submitIndexNowUrls(urls);
    return NextResponse.json(
      {
        ok: result.ok,
        status: result.status,
        submitted: result.submitted,
        urls,
        indexNowBody: result.body || null,
      },
      { status: result.ok ? 200 : 502 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "IndexNow request failed";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
