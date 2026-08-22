import Link from "next/link";
import type { ReactNode } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/seo/site-config";

const chipClass =
  "inline-flex items-center rounded-md px-2 py-1.5 font-body text-[0.8125rem] font-medium leading-none text-markaj-white/75 transition-colors hover:bg-markaj-white/10 hover:text-markaj-white";

const labelClass =
  "mb-2 font-body text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-markaj-white/55";

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

/** Pied de page : lisible (typographie ≥ ~13px), logo présent sans rivaliser avec le header. */
export function Footer() {
  const { address, contact } = siteConfig;
  const phoneHref = `tel:${contact.phone.replace(/\s/g, "")}`;

  return (
    <footer
      className="border-t border-markaj-white/10 bg-markaj-primary/95 text-markaj-white backdrop-blur-md"
      role="contentinfo"
    >
      <div className="mx-auto max-w-content space-y-5 px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <Logo variant="white" href="/" />
          <p className="max-w-md font-body text-[0.875rem] leading-snug text-markaj-white/65">
            Plâtrerie · Peinture · Rénovation · Suisse romande
          </p>
          <Link
            href="/contact"
            className="ml-auto inline-flex min-h-10 items-center rounded-md border border-markaj-white/30 px-3.5 py-2 font-body text-[0.8125rem] font-medium text-markaj-white transition-colors hover:bg-markaj-white/10"
          >
            Demander un devis
          </Link>
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
            <ul className="space-y-2 font-body text-[0.875rem] text-markaj-white/75">
              <li>
                <span className="inline-flex items-start gap-2">
                  <MapPin className="mt-0.5 size-3.5 shrink-0 stroke-[1.5]" aria-hidden />
                  <span>
                    {address.street}, {address.postalCode} {address.city}
                  </span>
                </span>
              </li>
              <li>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-markaj-white"
                >
                  <Phone className="size-3.5 stroke-[1.5]" aria-hidden />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-markaj-white"
                >
                  <Mail className="size-3.5 stroke-[1.5]" aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-markaj-white/60">
                  <Clock className="size-3.5 stroke-[1.5]" aria-hidden />
                  Lun. – Ven. : 07h00 – 17h00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-markaj-white/10">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3 font-body text-[0.75rem] text-markaj-white/50 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}
          </p>
          <div className="flex flex-wrap gap-x-4">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-markaj-white"
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
