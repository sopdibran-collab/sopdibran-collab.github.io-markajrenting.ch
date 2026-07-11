import { logoAssets, type LogoVariant } from "@/lib/brand/logo-assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  href?: string;
}

const variantHeights: Record<LogoVariant, string> = {
  full: "h-10 sm:h-12",
  white: "h-10 sm:h-12",
  monogram: "h-9 sm:h-10",
  vertical: "h-14 sm:h-16",
  text: "h-6 sm:h-7",
};

export function Logo({ variant = "full", className, href = "/" }: LogoProps) {
  const asset = logoAssets[variant];

  const image = (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      className={cn("w-auto shrink-0", variantHeights[variant], className)}
      priority={variant === "full"}
      unoptimized
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
