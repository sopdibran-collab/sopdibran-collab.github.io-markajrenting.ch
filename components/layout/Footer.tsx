import Link from "next/link";
import type { ReactNode } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { footerNav } from "@/lib/content/navigation";
import { siteConfig } from "@/lib/seo/site-config";

const chipClass =
  "inline-flex items-center rounded-md px-1.5 py-1 text-[11px] font-medium leading-none text-markaj-white/70 transition-colors hover:bg-markaj-white/10 hover:text-markaj-white";

const labelClass =
  "mb-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-markaj-white/45";

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
      <div className="flex flex-wrap gap-x-0.5 gap-y-0.5">{children}</div>
    </div>
  );
}

/** Pied de page compact (pattern agence — [[09 - Footer mobile compact]]). */
export function Footer() {
  const { address, contact } = siteConfig;
  const phoneHref = `tel:${contact.phone.replace(/\s/g, "")}`;

  return (
    <footer
      className="border-t border-markaj-white/10 bg-markaj-primary/95 text-markaj-white backdrop-blur-md"
      role="contentinfo"
    >
      <div className="mx-auto max-w-content space-y-3 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Logo variant="white" href="/" className="h-7 w-auto max-w-[140px]" />
          <p className="max-w-md text-[11px] leading-snug text-markaj-white/55">
            Plâtrerie · Peinture · Rénovation · Suisse romande
          </p>
          <Link
            href="/contact"
            className="ml-auto inline-flex items-center rounded-md border border-markaj-white/25 px-2.5 py-1.5 text-[11px] font-medium text-markaj-white/90 transition-colors hover:bg-markaj-white/10"
          >
            Devis
          </Link>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
          <LinkRow label="Services">
            {footerNav.services.map((item) => (
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
            <ul className="space-y-1 text-[11px] text-markaj-white/70">
              <li>
                <span className="inline-flex items-start gap-1.5">
                  <MapPin className="mt-0.5 size-3 shrink-0 stroke-[1.5]" aria-hidden />
                  <span>
                    {address.street}, {address.postalCode} {address.city}
                  </span>
                </span>
              </li>
              <li>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-markaj-white"
                >
                  <Phone className="size-3 stroke-[1.5]" aria-hidden />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-markaj-white"
                >
                  <Mail className="size-3 stroke-[1.5]" aria-hidden />
                  {contact.email}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-markaj-white/55">
                  <Clock className="size-3 stroke-[1.5]" aria-hidden />
                  Lun. – Ven. : 07h00 – 17h00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-markaj-white/10">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 text-[10px] text-markaj-white/45 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}
          </p>
          <div className="flex flex-wrap gap-x-3">
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
