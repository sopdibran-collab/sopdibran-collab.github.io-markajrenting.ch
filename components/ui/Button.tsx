import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";
type ButtonTone = "default" | "dark";

/*
 * Direction « Trait de chantier » — les styles signature (btn-bloc,
 * btn-cote, btn-niveau) sont définis dans globals.css.
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary: "btn-bloc",
  secondary: "btn-cote",
  ghost: "btn-niveau",
};

/* Modificateurs pour sections bleu nuit */
const darkToneStyles: Record<ButtonVariant, string> = {
  primary: "btn-bloc--sable",
  secondary: "btn-cote--light",
  ghost: "btn-niveau--light",
};

const sizeStyles: Record<ButtonSize, string> = {
  /* Header / chrome : compact mais lisible — pas en dessous de ~12px */
  sm: "min-h-10 px-4 text-[0.75rem] tracking-[0.11em] [--btn-pad-x:1rem]",
  md: "min-h-11 px-6 text-[0.8125rem] [--btn-pad-x:1.5rem]",
  lg: "min-h-12 px-8 text-[0.8125rem] [--btn-pad-x:2rem]",
};

/* Le bouton « niveau » est un lien souligné : pas de padding horizontal */
const ghostSizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-10 text-[0.75rem]",
  md: "min-h-11 text-[0.8125rem]",
  lg: "min-h-12 text-[0.8125rem]",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  tone?: ButtonTone;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles = "text-center disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "primary",
  size = "md",
  tone = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    tone === "dark" && darkToneStyles[variant],
    variant === "ghost" ? ghostSizeStyles[size] : sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    const isProtocolLink =
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("http://") ||
      href.startsWith("https://");

    if (isProtocolLink) {
      return (
        <a href={href} className={classes} {...linkProps}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
