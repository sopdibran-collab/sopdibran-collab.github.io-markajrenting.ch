"use client";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { Badge } from "@/components/ui/Badge";
import type { Realisation } from "@/lib/content/realisations";
import { cn } from "@/lib/utils";

interface RealisationCardProps {
  project: Realisation;
  index: number;
}

export function RealisationCard({ project, index }: RealisationCardProps) {
  return (
    <AnimateIn delay={index * 80}>
      <article className="group overflow-hidden border border-markaj-primary/15 bg-markaj-white transition-all duration-200 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-markaj-primary/40 hover:shadow-card-hover">
        <div className="grid grid-cols-2" role="img" aria-label={`${project.title} — avant et après, ${project.location}`}>
          <div className={cn("flex h-40 items-end p-4 sm:h-48", project.beforeColor)} aria-hidden="true">
            <span className="bg-markaj-primary/85 px-2 py-1 font-mono text-caption font-semibold uppercase tracking-[0.12em] text-markaj-white">
              Avant
            </span>
          </div>
          <div className={cn("flex h-40 items-end p-4 sm:h-48", project.afterColor)} aria-hidden="true">
            <span className="bg-markaj-primary/85 px-2 py-1 font-mono text-caption font-semibold uppercase tracking-[0.12em] text-markaj-white">
              Après
            </span>
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{project.location}</Badge>
            <Badge>{project.service}</Badge>
          </div>
          <h2 className="mt-3 font-heading text-heading-4 text-markaj-primary transition-colors group-hover:text-markaj-primary-light">
            {project.title}
          </h2>
          <p className="mt-2 font-body text-body-sm text-markaj-mineral-dark">{project.description}</p>
          <p className="mt-3 font-body text-caption text-markaj-mineral">
            Matériaux : {project.materials}
          </p>
        </div>
      </article>
    </AnimateIn>
  );
}
