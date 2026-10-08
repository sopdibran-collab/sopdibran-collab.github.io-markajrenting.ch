import { cn } from "@/lib/utils";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Fil d'Ariane" className={cn("font-body text-body-sm text-markaj-primary", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="inline-flex min-h-11 items-center hover:text-markaj-primary">
            Accueil
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="inline-flex min-h-11 items-center hover:text-markaj-primary">
                {item.label}
              </Link>
            ) : (
              <span className="inline-flex min-h-11 items-center font-semibold text-markaj-primary" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
