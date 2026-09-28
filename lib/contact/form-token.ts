import { createHmac, timingSafeEqual } from "node:crypto";

const MIN_FILL_MS = 2_000;
const MAX_AGE_MS = 12 * 60 * 60 * 1000;

function signingKey(): string {
  return (
    process.env.CONTACT_FORM_SECRET ||
    process.env.TURNSTILE_SECRET_KEY ||
    "markaj-renting-form-timing"
  );
}

export function issueFormToken(now = Date.now()): string {
  const payload = String(now);
  const signature = createHmac("sha256", signingKey()).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export type FormTokenStatus = "ok" | "invalid" | "too-fast" | "expired";

export function checkFormToken(token: string, now = Date.now()): FormTokenStatus {
  const separator = token.indexOf(".");
  if (separator <= 0) return "invalid";

  const payload = token.slice(0, separator);
  const signature = token.slice(separator + 1);
  const expected = createHmac("sha256", signingKey()).update(payload).digest("base64url");
  const received = Buffer.from(signature);
  const valid = Buffer.from(expected);

  if (received.length !== valid.length || !timingSafeEqual(received, valid)) {
    return "invalid";
  }

  const issuedAt = Number(payload);
  if (!Number.isFinite(issuedAt)) return "invalid";

  const elapsed = now - issuedAt;
  if (elapsed < MIN_FILL_MS) return "too-fast";
  if (elapsed > MAX_AGE_MS) return "expired";
  return "ok";
}
