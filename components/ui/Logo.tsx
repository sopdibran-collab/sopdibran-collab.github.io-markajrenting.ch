import { logoAssets, type LogoVariant } from "@/lib/brand/logo-assets";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  href?: string;
}

const variantSizes: Record<LogoVariant, string> = {
  full: "h-auto w-44 sm:w-52 lg:w-60",
  white: "h-auto w-48 sm:w-56 lg:w-60",
  monogram: "h-11 w-auto sm:h-12",
  vertical: "h-20 w-auto sm:h-24",
  text: "h-6 w-auto sm:h-7",
};

export function Logo({ variant = "full", className, href = "/" }: LogoProps) {
  const asset = logoAssets[variant];

  const image = (
    // Native img keeps SVG sizing predictable; width/height reserve aspect ratio.
    <img
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      className={cn("block max-w-full shrink-0", variantSizes[variant], className)}
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
      className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-primary focus-visible:ring-offset-2"
    >
      <span className="sr-only">Markaj Renting SA — Accueil</span>
      {image}
    </Link>
  );
}
