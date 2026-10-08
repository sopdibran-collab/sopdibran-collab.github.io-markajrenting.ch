import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  /** Conservé pour les appels existants. L'apparition en cascade est retirée (un seul effet : le bouton). */
  delay?: number;
}

/** Conteneur statique. Le seul mouvement du site est la translation du bouton principal. */
export function AnimateIn({ children, className }: AnimateInProps) {
  return <div className={cn(className)}>{children}</div>;
}
