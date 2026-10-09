import { Phone } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/seo/site-config";
import { cn } from "@/lib/utils";

/** Libellé court des CTA sous md. Le header mobile reste sur « Devis ». */
const MOBILE_DEVIS_LABEL = "Devis gratuit";

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
  /** Numéro visible sous le groupe, puisque le bouton mobile ne dit que « Appeler ». */
  phoneLine?: boolean;
  /**
   * Le hero photo aligne le texte en bas. Sans cette réserve, le passage
   * de deux boutons empilés à une ligne fait descendre tout le bloc.
   */
  preserveMobileStack?: boolean;
  className?: string;
  rowClassName?: string;
}

const mobileButtonClass =
  "max-md:h-full max-md:min-h-12 max-md:w-full max-md:whitespace-nowrap max-md:px-3";

/**
 * Sous md : deux colonnes égales, écart 8 px. À partir de md : libellés et
 * boutons d'origine, côte à côte.
 */
export function CtaPair({
  primary,
  secondary,
  tone = "light",
  secondaryToneDark = false,
  phoneLine = false,
  preserveMobileStack = false,
  className,
  rowClassName,
}: CtaPairProps) {
  const onDark = tone === "dark";
  const phoneHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <div
      className={cn(
        "min-w-0",
        preserveMobileStack && "max-md:min-h-[6.5rem]",
        className
      )}
    >
      <div
        className={cn(
          "grid grid-cols-2 items-stretch gap-2 md:flex md:flex-row md:flex-wrap md:items-center md:gap-4",
          rowClassName
        )}
      >
        <Button
          href={primary.href}
          variant="primary"
          tone={onDark ? "dark" : "default"}
          size={primary.size ?? "lg"}
          className={cn(mobileButtonClass, "md:w-auto", primary.className)}
        >
          <span className="md:hidden">{MOBILE_DEVIS_LABEL}</span>
          <span className="hidden md:inline">{primary.label}</span>
        </Button>
        <Button
          href={secondary.href}
          variant="secondary"
          tone={secondaryToneDark ? "dark" : "default"}
          size={secondary.size ?? "md"}
          aria-label={PHONE_ARIA_LABEL}
          className={cn(
            mobileButtonClass,
            "btn-appeler",
            onDark ? "btn-appeler--sombre" : "btn-appeler--clair",
            "md:w-auto",
            secondary.className
          )}
        >
          <Phone
            className="size-[18px] shrink-0 stroke-[1.5] md:hidden"
            aria-hidden="true"
          />
          <span className="md:hidden">Appeler</span>
          <span className="hidden md:inline">{secondary.label}</span>
        </Button>
      </div>
      {phoneLine && (
        <a
          href={phoneHref}
          className={cn(
            "mt-2 inline-flex items-center font-body text-sm font-semibold underline decoration-1 underline-offset-4 md:hidden",
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
