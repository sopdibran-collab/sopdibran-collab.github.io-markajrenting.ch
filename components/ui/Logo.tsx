import { cn } from "@/lib/utils";
import Link from "next/link";
import { LogoMonogram } from "./LogoMonogram";

type LogoVariant = "full" | "monogram" | "white";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  href?: string;
}

export function Logo({ variant = "full", className, href = "/" }: LogoProps) {
  const isWhite = variant === "white";
  const showText = variant === "full" || variant === "white";

  const content = (
    <span
      className={cn(
        "inline-flex flex-col items-center gap-1",
        variant === "monogram" && "items-start",
        className
      )}
    >
      <LogoMonogram variant={variant} className={variant === "monogram" ? "h-9 sm:h-10" : "h-10 sm:h-14"} />

      {showText && (
        <span className="flex flex-col items-center text-center leading-none">
          <span
            className={cn(
              "font-body text-[0.7rem] font-medium uppercase tracking-[0.35em]",
              isWhite ? "text-markaj-white" : "text-markaj-primary"
            )}
          >
            Markaj Renting
          </span>
          <span
            className={cn(
              "mt-0.5 font-heading text-[0.6rem] italic tracking-widest",
              isWhite ? "text-markaj-white/80" : "text-markaj-primary"
            )}
          >
            SA
          </span>
        </span>
      )}
    </span>
  );

  return (
    <Link
      href={href}
      className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-primary focus-visible:ring-offset-2"
    >
      <span className="sr-only">Markaj Renting SA — Accueil</span>
      {content}
    </Link>
  );
}
