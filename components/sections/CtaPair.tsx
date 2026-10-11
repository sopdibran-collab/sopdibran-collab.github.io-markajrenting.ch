import { Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { isDevisHref } from "@/lib/analytics/consent";
import { siteConfig } from "@/lib/seo/site-config";
import { cn } from "@/lib/utils";

/** Libellé des CTA devis hors header. Le header mobile reste sur « Devis ». */
const DEVIS_LABEL = "Devis gratuit";

const PHONE_ARIA_LABEL = "Appeler le 079 430 18 13";

interface CtaEndpoint {
  label: string;
  href: string;
  size?: "md" | "lg";
  className?: string;
}

interface CtaPairProps {
  primary: CtaEndpoint;
  secondary: CtaEndpoint;
  /** Navy ou photo : devis sable, Appeler blanc. Clair : les deux en navy. */
  tone?: "dark" | "light";
  /** Le secondaire desktop du bandeau est déjà en ton clair. Le hero photo, non. */
  secondaryToneDark?: boolean;
  /**
   * Numéro visible sous le groupe. Réservé à /contact : le hero et le bandeau
   * ne répètent pas le numéro sous les boutons.
   */
  phoneLine?: boolean;
  /**
   * Largeur jusqu'à laquelle « Appeler » reste court (icône, sans numéro).
   * `sm` = 640 px (hero, bandeau). `md` = 768 px, pour ne pas déplacer
   * le numéro de /contact.
   */
  compactUntil?: "sm" | "md";
  className?: string;
  rowClassName?: string;
  /** `tel_click` / `devis_click` : hero, bandeau, contact… */
  location?: string;
}

/**
 * Sous 640 px : deux colonnes égales. À partir de 640 px : les boutons
 * restent côte à côte et « Appeler » affiche le numéro. Le devis dit
 * « Devis gratuit » à toutes les largeurs.
 */
export function CtaPair({
  primary,
  secondary,
  tone = "light",
  secondaryToneDark = false,
  phoneLine = false,
  compactUntil = "sm",
  className,
  rowClassName,
  location = "hero",
}: CtaPairProps) {
  const onDark = tone === "dark";
  const untilMd = compactUntil === "md";
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;
  const mobileButtonClass = untilMd
    ? "max-md:h-full max-md:min-h-12 max-md:w-full max-md:whitespace-nowrap max-md:px-3"
    : "max-sm:h-full max-sm:min-h-12 max-sm:w-full max-sm:whitespace-nowrap max-sm:px-3";
  const widthFrom = untilMd ? "md:w-auto" : "sm:w-auto";

  return (
    <div className={cn("min-w-0", className)}>
      <div
        className={cn(
          untilMd
            ? "grid grid-cols-2 items-stretch gap-2 md:flex md:flex-row md:flex-wrap md:items-center md:gap-4"
            : "grid grid-cols-2 items-stretch gap-2 sm:flex sm:flex-row sm:flex-wrap sm:items-center sm:gap-4",
          rowClassName
        )}
        data-analytics-location={location}
      >
        <Button
          href={primary.href}
          variant="primary"
          tone={onDark ? "dark" : "default"}
          size={primary.size ?? "lg"}
          className={cn(mobileButtonClass, widthFrom, primary.className)}
          data-analytics-event={isDevisHref(primary.href) ? "devis" : undefined}
        >
          {isDevisHref(primary.href) ? DEVIS_LABEL : primary.label}
        </Button>
        <Button
          href={secondary.href}
          variant="secondary"
          tone={secondaryToneDark ? "dark" : "default"}
          size={secondary.size ?? "md"}
          aria-label={PHONE_ARIA_LABEL}
          className={cn(
            mobileButtonClass,
            "btn-appeler gap-2",
            untilMd && "btn-appeler--until-md",
            onDark ? "btn-appeler--sombre" : "btn-appeler--clair",
            widthFrom,
            secondary.className
          )}
        >
          <Phone
            className={cn(
              "size-[18px] shrink-0 stroke-[1.5]",
              untilMd ? "md:hidden" : "sm:hidden"
            )}
            aria-hidden="true"
          />
          <span className={untilMd ? "md:hidden" : "sm:hidden"}>Appeler</span>
          <span className={untilMd ? "hidden md:inline" : "hidden sm:inline"}>
            {secondary.label}
          </span>
        </Button>
      </div>
      {phoneLine && (
        <a
          href={phoneHref}
          className={cn(
            "mt-2 inline-flex items-center font-body text-sm font-semibold underline decoration-1 underline-offset-4",
            untilMd ? "md:hidden" : "sm:hidden",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            onDark
              ? "text-white focus-visible:ring-white focus-visible:ring-offset-markaj-primary"
              : "text-markaj-primary focus-visible:ring-markaj-primary"
          )}
        >
          {siteConfig.contact.phoneDisplay}
        </a>
      )}
    </div>
  );
}
