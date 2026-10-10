export const CONTACT_GROUP_MESSAGE =
  "Indiquez un téléphone ou un e-mail pour que nous puissions vous répondre.";

export const EMAIL_FORMAT_MESSAGE = "Cette adresse e-mail ne semble pas valide.";

export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_LABELS: Record<string, string> = {
  platrerie: "Plâtrerie",
  peinture: "Peinture",
  "faux-plafonds": "Faux-plafonds",
  isolation: "Isolation",
  renovation: "Rénovation",
  facades: "Façades",
  autre: "Autre",
};

export type QuoteField = "nom" | "contact" | "email" | "service" | "commune";

export type QuoteValues = {
  nom: string;
  email: string;
  telephone: string;
  service: string;
  commune: string;
  message: string;
};

export type QuoteIssue = {
  field: QuoteField;
  message: string;
};

export type QuoteLead = QuoteValues & {
  serviceLabel: string;
};

export function serviceLabel(slug: string): string | null {
  return SERVICE_LABELS[slug] ?? null;
}

export function readQuoteValues(formData: FormData): QuoteValues {
  const read = (name: string) => {
    const value = formData.get(name);
    return typeof value === "string" ? value.trim() : "";
  };

  return {
    nom: read("nom"),
    email: read("email"),
    telephone: read("telephone"),
    service: read("service"),
    commune: read("commune"),
    message: read("message"),
  };
}

/** Première erreur, dans l'ordre des champs. Le message est facultatif. */
export function validateQuote(values: QuoteValues): QuoteIssue | null {
  if (!values.nom) {
    return { field: "nom", message: "Indiquez votre nom et prénom." };
  }

  if (!values.telephone && !values.email) {
    return { field: "contact", message: CONTACT_GROUP_MESSAGE };
  }

  if (values.email && !EMAIL_PATTERN.test(values.email)) {
    return { field: "email", message: EMAIL_FORMAT_MESSAGE };
  }

  if (!serviceLabel(values.service)) {
    return { field: "service", message: "Indiquez le type de travaux." };
  }

  if (!values.commune) {
    return { field: "commune", message: "Indiquez la commune du chantier." };
  }

  return null;
}

export function buildQuoteEmail(lead: QuoteLead): {
  subject: string;
  text: string;
  replyTo?: string;
} {
  const text = [
    "Nouvelle demande de devis — markajrenting.ch",
    "",
    `Nom et prénom : ${lead.nom}`,
    `Téléphone : ${lead.telephone || "non renseigné"}`,
    `E-mail : ${lead.email || "non renseigné"}`,
    `Type de travaux : ${lead.serviceLabel}`,
    `Commune du chantier : ${lead.commune}`,
    "",
    "Votre projet :",
    lead.message || "non renseigné",
  ].join("\n");

  return {
    subject: `Demande de devis — ${lead.nom} (${lead.serviceLabel})`,
    text,
    ...(lead.email ? { replyTo: lead.email } : {}),
  };
}

const RESEND_URL = "https://api.resend.com/emails";

export type QuoteDelivery =
  | { sent: false; reason: "no-key" }
  | { sent: false; reason: "http"; status: number; body: string }
  | { sent: true };

/**
 * Envoie le devis via Resend. Sans clé, aucun appel réseau : l'appelant
 * journalise la demande à la place.
 */
export async function deliverQuoteEmail(
  lead: QuoteLead,
  options: {
    apiKey?: string;
    fetchImpl?: typeof fetch;
    from: string;
    to: string;
  }
): Promise<QuoteDelivery> {
  const apiKey = options.apiKey?.trim();
  if (!apiKey) return { sent: false, reason: "no-key" };

  const email = buildQuoteEmail(lead);
  const fetchImpl = options.fetchImpl ?? fetch;
  const response = await fetchImpl(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: options.from,
      to: [options.to],
      ...(email.replyTo ? { reply_to: email.replyTo } : {}),
      subject: email.subject,
      text: email.text,
    }),
  });

  if (!response.ok) {
    return {
      sent: false,
      reason: "http",
      status: response.status,
      body: await response.text(),
    };
  }

  return { sent: true };
}
