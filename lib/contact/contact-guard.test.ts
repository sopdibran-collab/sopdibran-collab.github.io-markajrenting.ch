import assert from "node:assert/strict";
import test from "node:test";
import { checkFormToken, issueFormToken } from "./form-token.ts";
import { assessContactSpam, type ContactSpamInput } from "./spam-filter.ts";

const SPAM_MAILS = [
  `Hi, I came across your website and noticed a few opportunities where SEO and AEO could help improve your Google rankings, visibility across answer engines, and attract more relevant leads. I've put together a short SEO & AEO strategy with pricing based on these opportunities. Would you be interested in having a look? Best regards, Edward`,
  `Welcome from bonusbacklinks, Supercharge markajrenting.ch website's backlinks with top quality seo backlinks! BonusBacklinks.com - we build daily backlinks and bring organic visits to your website every day: https://BonusBacklinks.com/coupon Get 85% Discount Quality daily seo backlinks Organic web traffic Price only from $1 Bonus discount codes Kind regards, Dwayne from BonusBacklinks.com team`,
  `Hi, I just visited markajrenting.ch and wondered if you'd ever thought about having an engaging video to explain what you do? Our videos are just $195 USD / £145 for a 30-second video ($239 USD / £179 for 60 seconds) and include a full script, voice-over and visuals. Regards, Joanna`,
  `Hi Register markajrenting.ch in Google's Search Index to appear in web search results! List markajrenting.ch here: indexhelp.pro`,
  `Hi do you want to buy the domain name markajrenting.com?`,
];

function lead(message: string, extra: Partial<ContactSpamInput> = {}): ContactSpamInput {
  return {
    prenom: "Anne",
    nom: "Favre",
    societe: "",
    email: "anne@example.ch",
    message,
    ...extra,
  };
}

test("bloque les cinq démarchages reçus", () => {
  for (const message of SPAM_MAILS) {
    const verdict = assessContactSpam(lead(message));
    assert.equal(verdict.blocked, true, message.slice(0, 80));
  }
});

test("laisse passer un devis réel, en français ou en anglais", () => {
  const messages = [
    "Bonjour, je souhaite un devis pour repeindre un appartement de 4.5 pièces à Fribourg. Environ 90 m2, murs et plafonds. Merci.",
    "Nous devons rénover une cage d'escalier à Lausanne (peinture et plâtre). Merci de nous rappeler.",
    "Isolation des combles, maison à Bulle, environ 120 m2. Descriptif disponible sur demande.",
    "Hello, I need a quote for painting a 3-room apartment in Geneva. Please call me tomorrow.",
    "Peinture cage d'escalier, immeuble à Bulle.",
    "Voici le lien des plans : https://drive.google.com/file/d/abc",
    "Notre régie : https://www.regie-du-parc.ch",
  ];

  for (const message of messages) {
    const verdict = assessContactSpam(lead(message));
    assert.deepEqual(verdict, { blocked: false }, message);
  }
});

test("bloque le charabia et les domaines de démarchage", () => {
  assert.equal(assessContactSpam(lead("asdfgh jklqwerty zxcvbnm poiuytre")).blocked, true);
  assert.equal(assessContactSpam(lead("xkqzwplmnb vcxzqwrty plkjhsdfg")).blocked, true);
  assert.equal(
    assessContactSpam(lead("Bonjour", { societe: "qwertyasdf zxcvbnml" })).blocked,
    true
  );
  assert.equal(assessContactSpam(lead("Voir https://indexhelp.pro/go")).blocked, true);
});

test("le jeton de formulaire refuse un envoi immédiat et accepte un envoi humain", () => {
  const issuedAt = 1_700_000_000_000;
  const token = issueFormToken(issuedAt);

  assert.equal(checkFormToken(token, issuedAt + 1_999), "too-fast");
  assert.equal(checkFormToken(token, issuedAt + 2_000), "ok");
  assert.equal(checkFormToken(token, issuedAt + 13 * 60 * 60 * 1000), "expired");
  assert.equal(checkFormToken(`${issuedAt}.tampered`, issuedAt + 5_000), "invalid");
  assert.equal(checkFormToken("", issuedAt), "invalid");
});
