import { cn } from "@/lib/utils";

type LogoVariant = "full" | "monogram" | "white";

interface LogoMonogramProps {
  variant?: LogoVariant;
  className?: string;
}

export function LogoMonogram({ variant = "full", className }: LogoMonogramProps) {
  const color = variant === "white" ? "#FFFFFF" : "#0A2B5E";

  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-12 w-auto", className)}
      aria-hidden="true"
    >
      {/* M — serif style */}
      <text
        x="4"
        y="44"
        fill={color}
        fontFamily="Georgia, 'Playfair Display', serif"
        fontSize="48"
        fontWeight="400"
      >
        M
      </text>
      {/* R — serif style, offset right */}
      <text
        x="38"
        y="50"
        fill={color}
        fontFamily="Georgia, 'Playfair Display', serif"
        fontSize="44"
        fontWeight="400"
      >
        R
      </text>
      {/* Diagonal slash */}
      <line
        x1="18"
        y1="52"
        x2="58"
        y2="8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
