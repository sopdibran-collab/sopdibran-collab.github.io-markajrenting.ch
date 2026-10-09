import Link from "next/link";
import type { ReactNode } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/seo/site-config";

const chipClass =
  "inline-flex min-h-11 items-center px-3 font-body text-body-sm font-medium text-markaj-white transition-colors hover:bg-markaj-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-crepi focus-visible:ring-offset-2 focus-visible:ring-offset-markaj-primary";

const labelClass =
  "mb-2 font-body text-caption font-semibold uppercase tracking-[0.08em] text-markaj-crepi";

function LinkRow({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="min-w-0">
      <p className={labelClass}>{label}</p>
      <div className="flex flex-wrap gap-x-1 gap-y-1">{children}</div>
    </div>
  );
}

/** Pied de page : navy plein, mêmes boutons que le header, cibles tactiles ≥ 44 px. */
export function Footer() {
  const { address, contact } = siteConfig;
  const phoneHref = `tel:${contact.phone.replace(/\s/g, "")}`;

  return (
    <footer
      className="border-t border-markaj-white/10 bg-markaj-primary text-markaj-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-content space-y-5 px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <Logo variant="white" href="/" />
          <p className="max-w-md font-body text-body-sm leading-snug text-markaj-crepi">
            Plâtrerie · Peinture · Rénovation · Suisse romande
          </p>
          <Button
            href="/contact"
            variant="primary"
            tone="dark"
            size="sm"
            className="ml-auto hidden w-full md:inline-flex md:w-auto"
          >
            Demander un devis
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <LinkRow label="Services">
            {footerNav.services.map((item) => (
              <Link key={item.href} href={item.href} className={chipClass}>
                {item.label}
              </Link>
            ))}
          </LinkRow>

          <LinkRow label="Zones">
            {footerNav.zones.map((item) => (
              <Link key={item.href} href={item.href} className={chipClass}>
                {item.label}
              </Link>
            ))}
          </LinkRow>

          <LinkRow label="Entreprise">
            {footerNav.entreprise.map((item) => (
              <Link key={item.href} href={item.href} className={chipClass}>
                {item.label}
              </Link>
            ))}
          </LinkRow>

          <div className="min-w-0">
            <p className={labelClass}>Contact</p>
            <ul className="space-y-1 font-body text-body-sm text-markaj-white">
              <li>
                <span className="inline-flex min-h-11 items-center gap-2">
                  <MapPin className="size-4 shrink-0 stroke-[1.5]" aria-hidden />
                  <span>
                    {address.street}, {address.postalCode} {address.city}
                  </span>
                </span>
              </li>
              <li>
                <a
                  href={phoneHref}
                  className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-markaj-crepi focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-crepi focus-visible:ring-offset-2 focus-visible:ring-offset-markaj-primary"
                >
                  <Phone className="size-4 stroke-[1.5]" aria-hidden />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-markaj-crepi focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-crepi focus-visible:ring-offset-2 focus-visible:ring-offset-markaj-primary"
                >
                  <Mail className="size-4 stroke-[1.5]" aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="inline-flex min-h-11 items-center gap-2 text-markaj-crepi">
                  <Clock className="size-4 stroke-[1.5]" aria-hidden />
                  Lun. – Ven. : 07h00 – 17h00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-markaj-white/10">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 font-body text-caption text-markaj-white sm:px-6 lg:px-8">
          <p className="inline-flex min-h-11 items-center">
            © {new Date().getFullYear()} {siteConfig.legalName}
          </p>
          <div className="flex flex-wrap gap-x-4">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex min-h-11 items-center hover:text-markaj-crepi focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-crepi focus-visible:ring-offset-2 focus-visible:ring-offset-markaj-primary"
              >
                {item.label === "Politique de confidentialité"
                  ? "Confidentialité"
                  : item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
