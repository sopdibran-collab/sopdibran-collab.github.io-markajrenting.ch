import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  intro,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-prose",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <p
          className={cn(
            "mb-2 font-body text-body-sm font-medium uppercase tracking-[0.15em]",
            light ? "text-markaj-crepi-light" : "text-markaj-mineral"
          )}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-xl sm:text-heading-2 md:text-heading-1",
          light ? "text-markaj-white" : "text-markaj-primary"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-4 text-body-lg",
            light ? "text-markaj-white/85" : "text-markaj-mineral-dark"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
