"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { checkFormToken } from "@/lib/contact/form-token";
import { HONEYPOT_FIELDS } from "@/lib/contact/honeypot";
import {
  deliverQuoteEmail,
  readQuoteValues,
  serviceLabel,
  validateQuote,
  type QuoteField,
} from "@/lib/contact/quote-request";
import { assessContactSpam } from "@/lib/contact/spam-filter";
import { verifyTurnstileToken } from "@/lib/contact/turnstile";
import { siteConfig } from "@/lib/seo/site-config";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  field?: QuoteField;
};

function getField(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function reachUs(): string {
  return `Appelez-nous au ${siteConfig.contact.phoneDisplay} ou écrivez à ${siteConfig.contact.email}.`;
}

function readClientIp(): string | undefined {
  const headerStore = headers();
  const forwarded = headerStore.get("x-forwarded-for");
  return headerStore.get("cf-connecting-ip") ?? forwarded?.split(",")[0]?.trim() ?? undefined;
}

export async function submitContactRequest(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  if (
    HONEYPOT_FIELDS.some((field) => {
      const value = formData.get(field.name);
      return typeof value === "string" && value.length > 0;
    })
  ) {
    console.warn("[contact] leurre déclenché");
    redirect("/merci");
  }

  const quote = readQuoteValues(formData);
  const issue = validateQuote(quote);
  if (issue) return { status: "error", field: issue.field, message: issue.message };

  const tokenStatus = checkFormToken(getField(formData, "form_token"));
  if (tokenStatus === "too-fast") {
    return {
      status: "error",
      message: "Merci de relire votre message, puis de le renvoyer.",
    };
  }
  if (tokenStatus !== "ok") {
    return {
      status: "error",
      message: "Ce formulaire a expiré. Rechargez la page, puis renvoyez votre demande.",
    };
  }

  const spam = assessContactSpam({
    nom: quote.nom,
    email: quote.email,
    telephone: quote.telephone,
    message: quote.message,
  });
  if (spam.blocked) {
    console.warn("[contact] message refusé", spam.reason, spam.detail);
    return {
      status: "error",
      message: `Ce message ne peut pas être transmis par le formulaire. ${reachUs()}`,
    };
  }

  const turnstile = await verifyTurnstileToken(
    getField(formData, "cf-turnstile-response"),
    readClientIp()
  );
  if (turnstile === "skip") {
    console.error("[contact] Turnstile absent en production — leurre et filtre seulement");
  } else if (turnstile === "misconfigured") {
    console.error("[contact] Turnstile mal configuré");
    return {
      status: "error",
      message: `L'envoi en ligne est momentanément indisponible. ${reachUs()}`,
    };
  } else if (turnstile !== "ok") {
    return {
      status: "error",
      message: `La vérification de sécurité a échoué. Rechargez la page et réessayez, ou appelez-nous au ${siteConfig.contact.phoneDisplay}.`,
    };
  }

  const lead = {
    ...quote,
    serviceLabel: serviceLabel(quote.service) ?? quote.service,
  };

  const delivery = await deliverQuoteEmail(lead, {
    apiKey: process.env.RESEND_API_KEY,
    from: process.env.CONTACT_FROM_EMAIL ?? "Markaj Renting <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email,
  });

  if (!delivery.sent && delivery.reason === "no-key") {
    // Pas de clé e-mail configurée : la demande reste visible dans les logs Vercel.
    console.log("[contact] Nouvelle demande de devis (aucun envoi Resend) :", JSON.stringify(lead, null, 2));
  } else if (!delivery.sent) {
    console.error("[contact] Échec d'envoi Resend :", delivery.status, delivery.body);
    return {
      status: "error",
      message:
        "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous appeler au 079 430 18 13.",
    };
  }

  redirect("/merci");
}
