import assert from "node:assert/strict";
import test from "node:test";
import { services } from "../content/services.ts";
import {
  CONTACT_GROUP_MESSAGE,
  EMAIL_FORMAT_MESSAGE,
  buildQuoteEmail,
  deliverQuoteEmail,
  serviceLabel,
  validateQuote,
  type QuoteLead,
  type QuoteValues,
} from "./quote-request.ts";

function values(extra: Partial<QuoteValues> = {}): QuoteValues {
  return {
    nom: "Anne Favre",
    email: "",
    telephone: "079 000 00 00",
    service: "peinture",
    commune: "Fribourg",
    message: "Cage d'escalier, environ 90 m2.",
    ...extra,
  };
}

function lead(extra: Partial<QuoteLead> = {}): QuoteLead {
  const base = values();
  return { ...base, serviceLabel: "Peinture", ...extra };
}

test("chaque fiche service a le libellé envoyé dans l'e-mail", () => {
  for (const service of services) {
    assert.equal(serviceLabel(service.slug), service.title);
  }
  assert.equal(serviceLabel("autre"), "Autre");
  assert.equal(serviceLabel(""), null);
});

test("téléphone seul ou e-mail seul suffit", () => {
  assert.equal(validateQuote(values({ email: "", telephone: "079 111 22 33" })), null);
  assert.equal(
    validateQuote(values({ telephone: "", email: "anne@example.ch" })),
    null
  );
});

test("les deux vides : un seul message, rattaché au groupe", () => {
  assert.deepEqual(validateQuote(values({ telephone: "", email: "" })), {
    field: "contact",
    message: CONTACT_GROUP_MESSAGE,
  });
});

test("un e-mail mal formé est une erreur de ce champ, même si le téléphone est rempli", () => {
  assert.deepEqual(
    validateQuote(values({ telephone: "079 111 22 33", email: "pas-un-email" })),
    { field: "email", message: EMAIL_FORMAT_MESSAGE }
  );
  assert.deepEqual(validateQuote(values({ telephone: "", email: "anne@" })), {
    field: "email",
    message: EMAIL_FORMAT_MESSAGE,
  });
});

test("nom, type de travaux et commune restent obligatoires", () => {
  assert.equal(validateQuote(values({ nom: "" }))?.field, "nom");
  assert.equal(validateQuote(values({ service: "" }))?.field, "service");
  assert.equal(validateQuote(values({ service: "inconnu" }))?.field, "service");
  assert.equal(validateQuote(values({ commune: "" }))?.field, "commune");
  assert.equal(validateQuote(values({ message: "" })), null);
});

test("l'e-mail Resend décrit les nouveaux champs, sans société ni prénom séparé", () => {
  const email = buildQuoteEmail(
    lead({
      nom: "Anne Favre",
      telephone: "",
      email: "anne@example.ch",
      commune: "Bulle",
      message: "",
    })
  );

  assert.equal(email.subject, "Demande de devis — Anne Favre (Peinture)");
  assert.equal(email.replyTo, "anne@example.ch");
  assert.match(email.text, /Nom et prénom : Anne Favre/);
  assert.match(email.text, /Téléphone : non renseigné/);
  assert.match(email.text, /E-mail : anne@example.ch/);
  assert.match(email.text, /Type de travaux : Peinture/);
  assert.match(email.text, /Commune du chantier : Bulle/);
  assert.match(email.text, /Votre projet :\nnon renseigné/);
  assert.equal(email.text.includes("Société"), false);
  assert.equal(email.text.includes("Prénom :"), false);
  assert.equal(email.text.includes("\nNom :"), false);
});

test("sans e-mail, pas de reply-to", () => {
  const email = buildQuoteEmail(lead({ email: "", telephone: "079 111 22 33" }));
  assert.equal(email.replyTo, undefined);
  assert.match(email.text, /Téléphone : 079 111 22 33/);
  assert.match(email.text, /E-mail : non renseigné/);
});

test("sans clé Resend, le mock n'est jamais appelé", async () => {
  let calls = 0;
  const fetchImpl: typeof fetch = async () => {
    calls += 1;
    throw new Error("aucun réseau attendu");
  };

  const result = await deliverQuoteEmail(lead(), {
    apiKey: "   ",
    fetchImpl,
    from: "Markaj Renting <onboarding@resend.dev>",
    to: "info@markajrenting.ch",
  });

  assert.deepEqual(result, { sent: false, reason: "no-key" });
  assert.equal(calls, 0);
});

test("avec une clé, l'envoi passe par le mock et reflète les champs", async () => {
  let captured: { url: string; body: Record<string, unknown> } | undefined;
  const fetchImpl: typeof fetch = async (input, init) => {
    captured = {
      url: String(input),
      body: JSON.parse(String(init?.body)) as Record<string, unknown>,
    };
    return new Response("{}", { status: 200 });
  };

  const result = await deliverQuoteEmail(
    lead({ email: "anne@example.ch", telephone: "079 111 22 33", message: "Peinture cage." }),
    {
      apiKey: "re_test_mock",
      fetchImpl,
      from: "Markaj Renting <onboarding@resend.dev>",
      to: "info@markajrenting.ch",
    }
  );

  assert.deepEqual(result, { sent: true });
  assert.equal(captured?.url, "https://api.resend.com/emails");
  assert.equal(captured?.body.reply_to, "anne@example.ch");
  assert.equal(captured?.body.subject, "Demande de devis — Anne Favre (Peinture)");
  const text = String(captured?.body.text);
  assert.match(text, /Nom et prénom : Anne Favre/);
  assert.equal(text.includes("Société"), false);
  assert.equal(text.includes("Prénom :"), false);
});
