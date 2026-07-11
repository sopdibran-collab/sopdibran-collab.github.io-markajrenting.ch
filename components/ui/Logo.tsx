import { logoAssets, type LogoVariant } from "@/lib/brand/logo-assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  href?: string;
}

const variantSizes: Record<LogoVariant, string> = {
  full: "h-11 w-auto sm:h-12 lg:h-14",
  white: "h-12 w-auto sm:h-14",
  monogram: "h-10 w-auto sm:h-11",
  vertical: "h-16 w-auto sm:h-20",
  text: "h-5 w-auto sm:h-6",
};

export function Logo({ variant = "full", className, href = "/" }: LogoProps) {
  const asset = logoAssets[variant];

  const image = (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      className={cn("shrink-0", variantSizes[variant], className)}
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
