import { cn } from "@/lib/utils";
import Link from "next/link";
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-markaj-primary text-markaj-white shadow-button hover:bg-markaj-primary-dark hover:shadow-button-hover hover:-translate-y-px focus-visible:ring-markaj-primary active:translate-y-0 active:shadow-button",
  secondary:
    "border-2 border-markaj-primary bg-transparent text-markaj-primary hover:bg-markaj-primary hover:text-markaj-white hover:shadow-card focus-visible:ring-markaj-primary active:scale-[0.98]",
  ghost:
    "bg-transparent text-markaj-primary underline-offset-4 hover:bg-markaj-surface hover:underline focus-visible:ring-markaj-mineral active:scale-[0.98]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-body-sm",
  md: "min-h-11 px-6 text-body",
  lg: "min-h-12 px-8 text-body-lg",
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseStyles =
  "inline-flex items-center justify-center rounded-markaj font-body font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

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
