import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "crepi" | "outline";
}

const variantStyles = {
  default: "bg-markaj-primary/10 text-markaj-primary",
  crepi: "bg-markaj-crepi text-markaj-primary",
  outline: "border border-markaj-mineral/30 text-markaj-mineral",
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
        "inline-flex items-center rounded-markaj px-3 py-1 font-body text-caption font-medium uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
