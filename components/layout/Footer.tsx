import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/seo/site-config";
import Link from "next/link";

export function Footer() {
  const { address, contact } = siteConfig;
  const phoneHref = `tel:${contact.phone.replace(/\s/g, "")}`;

  return (
    <footer className="bg-markaj-primary text-markaj-white">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="white" href="/" />
            <p className="mt-4 font-body text-body-sm text-markaj-white/70">
              Entreprise familiale de plâtrerie, peinture et rénovation en Suisse romande depuis plus de 20 ans.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary" tone="dark" size="sm">
                Demander un devis
              </Button>
            </div>
          </div>

          <div>
            <h3 className="marque-cote marque-cote--light mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center font-body text-body-sm text-markaj-white/80 transition-colors hover:text-markaj-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="marque-cote marque-cote--light mb-4">
              Entreprise
            </h3>
            <ul className="space-y-2">
              {footerNav.entreprise.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center font-body text-body-sm text-markaj-white/80 transition-colors hover:text-markaj-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="marque-cote marque-cote--light mb-4">
              Contact
            </h3>
            <address className="not-italic">
              <p className="font-body text-body-sm text-markaj-white/80">
                {address.street}<br />
                {address.postalCode} {address.city}
              </p>
              <p className="mt-3 font-body text-body-sm">
                <a href={phoneHref} className="text-markaj-white/80 hover:text-markaj-white">
                  {contact.phoneDisplay}
                </a>
              </p>
              <p className="mt-1 font-body text-body-sm">
                <a href={`mailto:${contact.email}`} className="text-markaj-white/80 hover:text-markaj-white">
                  {contact.email}
                </a>
              </p>
              <p className="mt-4 font-body text-body-sm text-markaj-white/70">
                Lun. – Ven. : 07h00 – 17h00
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-markaj-white/15 pt-8 md:flex-row">
          <p className="font-body text-caption text-markaj-white/50">
            © {new Date().getFullYear()} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="font-body text-caption text-markaj-white/50 hover:text-markaj-white/80">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
