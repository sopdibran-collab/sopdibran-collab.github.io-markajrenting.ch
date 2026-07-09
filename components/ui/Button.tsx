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
  sm: "min-h-10 px-5",
  md: "min-h-12 px-7",
  lg: "min-h-[3.25rem] px-9",
};

/* Le bouton « niveau » est un lien souligné : pas de padding horizontal */
const ghostSizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-10",
  md: "min-h-11",
  lg: "min-h-12",
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
