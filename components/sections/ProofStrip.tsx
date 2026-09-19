import { MapPin, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";

const proofs = [
  {
    title: "20 ans d'expérience",
    detail: "et d'engagements",
    icon: "years" as const,
  },
  {
    title: "Normes SIA",
    detail: "Qualité, sécurité et durabilité",
    icon: "shield" as const,
  },
  {
    title: "Fribourg siège",
    detail: "Ancrés en Suisse romande",
    icon: "pin" as const,
  },
];

/**
 * Fine bandeau de preuves plein largeur — fond navy, texte blanc.
 */
export function ProofStrip() {
  return (
    <section
      aria-label="Preuves Markaj Renting"
      className="bg-markaj-primary text-markaj-white"
    >
      <ul className="mx-auto grid max-w-content grid-cols-1 divide-y divide-markaj-white/20 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
        {proofs.map((item) => (
          <li
            key={item.title}
            className="flex items-center gap-3 py-3.5 sm:justify-center sm:gap-3.5 sm:px-4 sm:py-4"
          >
            <span
              className={cn(
                "flex h-9 w-9 shrink-0 items-center justify-center border border-markaj-white/35",
                item.icon === "years" && "font-heading text-[0.65rem] font-semibold leading-tight tracking-wide"
              )}
              aria-hidden
            >
              {item.icon === "years" && (
                <span className="text-center">
                  20
                  <br />
                  ANS
                </span>
              )}
              {item.icon === "shield" && <ShieldCheck className="h-4 w-4" strokeWidth={1.75} />}
              {item.icon === "pin" && <MapPin className="h-4 w-4" strokeWidth={1.75} />}
            </span>
            <div className="min-w-0">
              <p className="font-body text-body-sm font-semibold text-markaj-white">
                {item.title}
              </p>
              <p className="font-body text-caption text-markaj-white/75">{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
