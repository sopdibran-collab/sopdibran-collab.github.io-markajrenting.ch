import { logoAssets, type LogoVariant } from "@/lib/brand/logo-assets";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  href?: string;
}

/*
 * Display sizes (not the SVG artboard) so the intrinsic HTML
 * width/height never blow out the layout before CSS loads (FOUC).
 * `full` stays 4000×1532 (logo couleur). `white` follows the recropped
 * monochrome lockup, viewBox 4235.372×941.705 (ratio ≈ 4.50).
 */
const variantMeta: Record<
  LogoVariant,
  { className: string; width: number; height: number }
> = {
  /* Header : marque lisible, un cran au-dessus du footer (hiérarchie chrome) */
  full: {
    className: "h-auto w-40 max-w-full sm:w-44",
    width: 176,
    height: 67,
  },
  /* Footer navy : hauteur CSS inchangée ; width/height suivent le nouveau ratio */
  white: {
    className: "h-9 w-auto max-w-[11rem] sm:h-10 sm:max-w-[13rem]",
    width: 180,
    height: 40,
  },
  monogram: {
    className: "h-9 w-auto max-w-full sm:h-10",
    width: 40,
    height: 40,
  },
  vertical: {
    className: "h-16 w-auto max-w-full sm:h-20 md:h-24",
    width: 120,
    height: 81,
  },
  text: {
    className: "h-5 w-auto max-w-full sm:h-6 md:h-7",
    width: 180,
    height: 43,
  },
};

export function Logo({ variant = "full", className, href = "/" }: LogoProps) {
  const asset = logoAssets[variant];
  const meta = variantMeta[variant];

  const image = (
    // Native img keeps SVG sizing predictable; width/height reserve aspect ratio.
    <img
      src={asset.src}
      alt={asset.alt}
      width={meta.width}
      height={meta.height}
      className={cn("block min-w-0", meta.className, className)}
      decoding="async"
      fetchPriority={variant === "full" ? "high" : undefined}
    />
  );

  if (!href) {
    return image;
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 min-w-0 max-w-[min(100%,11rem)] items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:max-w-[13rem]",
        variant === "white"
          ? "focus-visible:ring-markaj-crepi focus-visible:ring-offset-markaj-primary"
          : "focus-visible:ring-markaj-primary"
      )}
    >
      <span className="sr-only">Markaj Renting SA — Accueil</span>
      {image}
    </Link>
  );
}
