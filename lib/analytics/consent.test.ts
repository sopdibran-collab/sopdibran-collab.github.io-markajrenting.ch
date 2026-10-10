import assert from "node:assert/strict";
import test from "node:test";
import { CONSENT_VERSION, parseConsent } from "./consent.ts";

function record(analytics: boolean, date: string, version = CONSENT_VERSION): string {
  return JSON.stringify({ analytics, v: version, date });
}

test("conserve un choix de moins de 12 mois", () => {
  const raw = record(true, "2026-01-15T12:00:00.000Z");
  const now = new Date("2026-12-15T11:00:00.000Z").getTime();
  assert.equal(parseConsent(raw, now)?.analytics, true);
});

test("oublie un choix au bout de 12 mois", () => {
  const raw = record(false, "2025-01-15T12:00:00.000Z");
  const now = new Date("2026-01-15T12:00:00.000Z").getTime();
  assert.equal(parseConsent(raw, now), null);
});

test("oublie un choix d'une autre version", () => {
  const raw = record(true, "2026-06-01T12:00:00.000Z", 0);
  assert.equal(parseConsent(raw, new Date("2026-06-02T12:00:00.000Z").getTime()), null);
});

test("rejette un enregistrement illisible", () => {
  assert.equal(parseConsent("non", Date.now()), null);
  assert.equal(parseConsent(null, Date.now()), null);
  assert.equal(
    parseConsent(JSON.stringify({ analytics: "oui", v: 1, date: "2026-01-01T00:00:00.000Z" }), Date.now()),
    null
  );
});
