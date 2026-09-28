import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

/**
 * Long-page zebra (blanc ↔ sable) — Markaj tokens only:
 * - `white` → #FFFFFF
 * - `sand` / `crepi` → #E8E3D3 (sable)
 * - `primary` → navy CTA / proof only
 *
 * Prefer alternating white ↔ sand between consecutive major sections.
 * Avoid stacking white + near-white (`surface` / paint noise) — they read as one flat band.
 */
type SectionBackground = "white" | "surface" | "crepi" | "sand" | "primary";
type SectionTexture = "none" | "concrete" | "paint" | "crepi" | "concrete-dark";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: SectionBackground;
  texture?: SectionTexture;
  contained?: boolean;
  as?: "section" | "div";
}

const backgroundStyles: Record<SectionBackground, string> = {
  white: "bg-markaj-white",
  /** Near-white utility — prefer `sand` for zebra bands on long pages. */
  surface: "bg-markaj-surface",
  crepi: "bg-markaj-crepi-light",
  sand: "bg-markaj-crepi-light",
  primary: "bg-markaj-primary text-markaj-white",
};

const textureStyles: Record<SectionTexture, string> = {
  none: "",
  concrete: "bg-texture-concrete",
  paint: "bg-texture-paint",
  crepi: "bg-texture-crepi",
  "concrete-dark": "bg-texture-concrete-dark",
};

export function Section({
  background = "white",
  texture = "none",
  contained = true,
  as: Component = "section",
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        "relative py-12 sm:py-16 md:py-22",
        backgroundStyles[background],
        texture !== "none" && textureStyles[texture],
        className
      )}
      {...props}
    >
      <div className={cn("relative z-10 min-w-0", contained && "mx-auto max-w-content px-4 sm:px-6 lg:px-8")}>
        {children}
      </div>
    </Component>
  );
}
