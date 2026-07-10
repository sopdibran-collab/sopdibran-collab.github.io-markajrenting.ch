import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/seo/site-config";

const nextSteps = [
  "Nous lisons votre demande sous 5 jours ouvrés",
  "Nous vous rappelons pour préciser le besoin",
  "Visite sur site et devis gratuit si nécessaire",
];

export function TrustPanel() {
  const { address, contact } = siteConfig;
  const phoneHref = `tel:${contact.phone.replace(/\s/g, "")}`;

  return (
    <aside className="space-y-8">
      <div className="border border-markaj-primary/15 bg-markaj-surface p-6 sm:p-8">
        <p className="marque-cote mb-3">Engagement</p>
        <ul className="space-y-3">
          <li className="font-body text-body-sm text-markaj-mineral-dark">
            Devis gratuit et sans engagement
          </li>
          <li className="font-body text-body-sm text-markaj-mineral-dark">
            Réponse sous 5 jours ouvrés
          </li>
          <li className="font-body text-body-sm text-markaj-mineral-dark">
            Intervention en Suisse romande depuis Fribourg
          </li>
          <li className="font-body text-body-sm text-markaj-mineral-dark">
            Travaux conformes aux normes SIA
          </li>
        </ul>
      </div>

      <div>
        <p className="marque-cote mb-3">Après l&apos;envoi</p>
        <ol className="space-y-3">
          {nextSteps.map((step, index) => (
            <li key={step} className="flex gap-3 font-body text-body-sm text-markaj-mineral-dark">
              <span className="font-mono text-caption font-semibold text-markaj-crepi-dark">
                0{index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      <address className="not-italic">
        <p className="font-heading text-heading-4 text-markaj-primary">{siteConfig.legalName}</p>
        <p className="mt-3 font-body text-body text-markaj-mineral-dark">
          {address.street}<br />
          {address.postalCode} {address.city}<br />
          Suisse
        </p>
        <p className="mt-6 font-body text-body">
          <span className="font-medium text-markaj-primary">Téléphone :</span>{" "}
          <a href={phoneHref} className="text-markaj-mineral-dark hover:text-markaj-primary">
            {contact.phoneDisplay}
          </a>
        </p>
        <p className="mt-2 font-body text-body">
          <span className="font-medium text-markaj-primary">E-mail :</span>{" "}
          <a href={`mailto:${contact.email}`} className="text-markaj-mineral-dark hover:text-markaj-primary">
            {contact.email}
          </a>
        </p>
        <p className="mt-4 font-body text-body-sm text-markaj-mineral">
          Lun. – Ven. : 07h00 – 17h00
        </p>
        <div className="mt-6">
          <Button href={phoneHref} variant="secondary" size="sm" className="w-full sm:w-auto">
            Appeler {contact.phoneDisplay}
          </Button>
        </div>
      </address>

      <div className="overflow-hidden border border-markaj-primary/15">
        <iframe
          title="Localisation Markaj Renting SA à Fribourg"
          src="https://maps.google.com/maps?q=Route+de+Schiffenen+40,+1700+Fribourg&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="280"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </aside>
  );
}
