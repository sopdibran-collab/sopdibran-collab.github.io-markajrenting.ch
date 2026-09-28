"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { checkFormToken } from "@/lib/contact/form-token";
import { HONEYPOT_FIELDS } from "@/lib/contact/honeypot";
import { assessContactSpam } from "@/lib/contact/spam-filter";
import { verifyTurnstileToken } from "@/lib/contact/turnstile";
import { siteConfig } from "@/lib/seo/site-config";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_LABELS: Record<string, string> = {
  platrerie: "Plâtrerie",
  peinture: "Peinture",
  "faux-plafonds": "Faux-plafonds",
  isolation: "Isolation",
  renovation: "Rénovation",
  facades: "Façades",
  autre: "Autre",
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

  const prenom = getField(formData, "prenom");
  const nom = getField(formData, "nom");
  const societe = getField(formData, "societe");
  const email = getField(formData, "email");
  const telephone = getField(formData, "telephone");
  const service = getField(formData, "service");
  const commune = getField(formData, "commune");
  const message = getField(formData, "message");
  const consentement = formData.get("consentement") === "on";

  if (!prenom || !nom || !email || !message) {
    return {
      status: "error",
      message: "Merci de remplir tous les champs obligatoires (prénom, nom, e-mail, message).",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return {
      status: "error",
      message: "L'adresse e-mail saisie ne semble pas valide.",
    };
  }

  if (!consentement) {
    return {
      status: "error",
      message: "Merci d'accepter le traitement de vos données pour que nous puissions vous répondre.",
    };
  }

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

  const spam = assessContactSpam({ prenom, nom, societe, email, message });
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
    prenom,
    nom,
    societe: societe || "non renseignée",
    email,
    telephone: telephone || "non renseigné",
    service: SERVICE_LABELS[service] ?? "Non précisé",
    commune: commune || "non renseignée",
    message,
    recuLe: new Date().toISOString(),
  };

  const emailBody = [
    "Nouvelle demande de devis — markajrenting.ch",
    "",
    `Nom : ${lead.prenom} ${lead.nom}`,
    `Société : ${lead.societe}`,
    `E-mail : ${lead.email}`,
    `Téléphone : ${lead.telephone}`,
    `Type de travaux : ${lead.service}`,
    `Commune / chantier : ${lead.commune}`,
    "",
    "Message :",
    lead.message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Markaj Renting <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email],
        reply_to: lead.email,
        subject: `Demande de devis — ${lead.prenom} ${lead.nom} (${lead.service})`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      console.error("[contact] Échec d'envoi Resend :", response.status, await response.text());
      return {
        status: "error",
        message:
          "Une erreur est survenue lors de l'envoi. Merci de réessayer ou de nous appeler au 079 430 18 13.",
      };
    }
  } else {
    // Pas de clé e-mail configurée : la demande reste visible dans les logs Vercel.
    console.log("[contact] Nouvelle demande de devis :", JSON.stringify(lead, null, 2));
  }

  redirect("/merci");
}
