import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "crepi" | "outline";
}

const variantStyles = {
  default: "border-markaj-primary/30 bg-markaj-primary/5 text-markaj-primary",
  crepi: "border-markaj-crepi-dark/50 bg-markaj-crepi text-markaj-primary",
  outline: "border-markaj-mineral/40 text-markaj-mineral-dark",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 font-mono text-caption font-semibold uppercase tracking-[0.12em]",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
