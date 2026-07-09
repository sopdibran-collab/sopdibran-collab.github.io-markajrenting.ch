"use server";

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

export async function submitContactRequest(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot : champ invisible pour les humains, rempli par les bots.
  if (getField(formData, "entreprise_web")) {
    return { status: "success" };
  }

  const prenom = getField(formData, "prenom");
  const nom = getField(formData, "nom");
  const email = getField(formData, "email");
  const telephone = getField(formData, "telephone");
  const service = getField(formData, "service");
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

  const lead = {
    prenom,
    nom,
    email,
    telephone: telephone || "non renseigné",
    service: SERVICE_LABELS[service] ?? "Non précisé",
    message,
    recuLe: new Date().toISOString(),
  };

  const emailBody = [
    "Nouvelle demande de devis — markajrenting.ch",
    "",
    `Nom : ${lead.prenom} ${lead.nom}`,
    `E-mail : ${lead.email}`,
    `Téléphone : ${lead.telephone}`,
    `Type de travaux : ${lead.service}`,
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

  return { status: "success" };
}
