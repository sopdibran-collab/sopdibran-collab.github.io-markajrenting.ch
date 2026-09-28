export type ContactSpamInput = {
  prenom: string;
  nom: string;
  societe: string;
  email: string;
  message: string;
};

export type SpamVerdict =
  | { blocked: false }
  | { blocked: true; reason: "keyword" | "gibberish" | "link"; detail: string };

/**
 * Signatures des démarchages reçus : SEO/AEO, backlinks, vidéo low-cost,
 * indexation Google, revente du .com. Volontairement étroites pour laisser
 * passer un devis de plâtrerie ou de peinture, y compris rédigé en anglais.
 */
const SPAM_PATTERNS: { id: string; pattern: RegExp }[] = [
  { id: "seo", pattern: /\bseo\b/ },
  { id: "aeo", pattern: /\baeo\b/ },
  { id: "search-engine-optimization", pattern: /search engine optimi[sz]ation/ },
  { id: "answer-engine", pattern: /answer engines?/ },
  { id: "google-ranking", pattern: /google rankings?|rank(?:ing)? on google|first page of google/ },
  { id: "backlink", pattern: /backlinks?/ },
  { id: "link-building", pattern: /link building|guest posts?/ },
  { id: "organic-traffic", pattern: /organic (?:web )?(?:traffic|visits?)/ },
  { id: "search-index", pattern: /search index/ },
  { id: "indexhelp", pattern: /indexhelp/ },
  { id: "bonusbacklinks", pattern: /bonusbacklinks/ },
  { id: "voiceover", pattern: /voice[-\s]?over/ },
  { id: "video-pitch", pattern: /\b\d+\s*-?\s*seconds?\s+video|\bengaging video\b/ },
  { id: "domain-sale", pattern: /buy the domain|domain name/ },
  { id: "dot-com-offer", pattern: /markajrenting\.com/ },
  { id: "foreign-price", pattern: /(?:\$|£)\s?\d+|\b\d+\s?(?:usd|gbp)\b/ },
  { id: "supercharge", pattern: /\bsupercharge\b/ },
];

const SHADY_HOST =
  /backlink|bonusback|indexhelp|linkbuild|guestpost|seo[-.]?(?:agency|service|offer)/;

const SHADY_TLD = /\b[a-z0-9-]+\.(?:xyz|click|top|loan|buzz|gq|tk|ml|ga|cf|pro)\b/;

const ALLOWED_HOST_SUFFIXES = [
  "markajrenting.ch",
  "google.com",
  "google.ch",
  "dropbox.com",
  "wetransfer.com",
  "we.tl",
  "swisstransfer.com",
  "onedrive.live.com",
  "sharepoint.com",
  "icloud.com",
];

const KEYBOARD_WALK = /azerty|qwerty|qsdfg|asdfg|zxcvb|wxcvb|poiuy|mlkjh/;

function normalize(value: string): string {
  return value
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function letterWords(value: string): string[] {
  return normalize(value)
    .split(/[^a-z]+/)
    .filter((word) => word.length >= 4);
}

function wordIsGibberish(word: string): boolean {
  if (KEYBOARD_WALK.test(word)) return true;
  if (/(.)\1{3,}/.test(word)) return true;

  const vowels = word.match(/[aeiouy]/g)?.length ?? 0;
  if (word.length >= 5 && vowels === 0) return true;
  if (/[^aeiouy]{6,}/.test(word)) return true;
  if (word.length >= 8 && vowels / word.length < 0.2) return true;
  return false;
}

function textIsGibberish(value: string): boolean {
  const words = letterWords(value);
  if (words.length === 0) return false;

  const gibberishCount = words.filter(wordIsGibberish).length;
  if (words.length >= 4 && gibberishCount / words.length >= 0.5) return true;
  if (words.length <= 3 && gibberishCount === words.length && words.some((word) => word.length >= 6)) {
    return true;
  }
  return false;
}

function hostIsAllowed(hostname: string): boolean {
  return ALLOWED_HOST_SUFFIXES.some(
    (suffix) => hostname === suffix || hostname.endsWith(`.${suffix}`)
  );
}

function findBlockedLink(value: string): string | null {
  const normalized = normalize(value);
  const urls = normalized.match(/https?:\/\/[^\s<>"']+/g) ?? [];

  for (const rawUrl of urls) {
    let hostname = "";
    try {
      hostname = new URL(rawUrl).hostname.replace(/^www\./, "");
    } catch {
      return "url-invalide";
    }
    if (hostIsAllowed(hostname)) continue;
    if (SHADY_HOST.test(hostname) || SHADY_TLD.test(hostname)) return hostname;
  }

  const bareDomain = normalized.match(SHADY_TLD);
  return bareDomain?.[0] ?? null;
}

export function assessContactSpam(input: ContactSpamInput): SpamVerdict {
  const corpus = normalize(
    [input.prenom, input.nom, input.societe, input.email, input.message].filter(Boolean).join("\n")
  );

  for (const rule of SPAM_PATTERNS) {
    if (rule.pattern.test(corpus)) {
      return { blocked: true, reason: "keyword", detail: rule.id };
    }
  }

  const link = findBlockedLink(corpus);
  if (link) return { blocked: true, reason: "link", detail: link };

  if (textIsGibberish(input.message) || textIsGibberish(input.societe)) {
    return { blocked: true, reason: "gibberish", detail: "charabia" };
  }

  return { blocked: false };
}
