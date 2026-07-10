import Image from "next/image";
import Link from "next/link";

import { AnimateIn } from "@/components/ui/AnimateIn";
import { Badge } from "@/components/ui/Badge";
import type { Realisation } from "@/lib/content/realisations";
import { cn } from "@/lib/utils";

interface RealisationCardProps {
  project: Realisation;
  index: number;
  /** Carte pleine largeur (mise en avant) sur desktop */
  featured?: boolean;
}

const statusLabels = {
  livre: "Livré",
  "en-cours": "En cours",
} as const;

export function RealisationCard({ project, index, featured = false }: RealisationCardProps) {
  const hasImagePair = project.images.length > 1;

  return (
    <AnimateIn delay={index * 80} className={cn(featured && "md:col-span-2")}>
      <article className="group h-full overflow-hidden border border-markaj-primary/15 bg-markaj-white transition-all duration-200 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-markaj-primary/40 hover:shadow-card-hover">
        <div className={cn("grid", hasImagePair && "grid-cols-2")}>
          {project.images.map((image) => (
            <figure
              key={image.src}
              className={cn(
                "relative",
                hasImagePair ? "aspect-[4/3]" : "aspect-[16/10]"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  featured
                    ? "(min-width: 768px) 600px, 100vw"
                    : hasImagePair
                      ? "(min-width: 768px) 300px, 50vw"
                      : "(min-width: 768px) 600px, 100vw"
                }
                className="object-cover"
              />
              {image.label && (
                <figcaption className="absolute bottom-3 left-3 bg-markaj-primary/85 px-2 py-1 font-mono text-caption font-semibold uppercase tracking-[0.12em] text-markaj-white">
                  {image.label}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{project.location}</Badge>
            {project.serviceSlug ? (
              <Link href={`/services/${project.serviceSlug}`}>
                <Badge>{project.service}</Badge>
              </Link>
            ) : (
              <Badge>{project.service}</Badge>
            )}
            <Badge variant="crepi">{statusLabels[project.status]}</Badge>
            {project.periode && <Badge variant="outline">{project.periode}</Badge>}
            {!project.periode && project.year && (
              <Badge variant="outline">{String(project.year)}</Badge>
            )}
          </div>
          <h2 className="mt-3 font-heading text-heading-4 text-markaj-primary transition-colors group-hover:text-markaj-primary-light">
            {project.title}
          </h2>
          <p className="mt-2 font-body text-body-sm text-markaj-mineral-dark">{project.description}</p>
          {project.result && (
            <p className="mt-3 border-l-2 border-markaj-primary/25 pl-3 font-body text-body-sm font-medium text-markaj-primary">
              {project.result}
            </p>
          )}
          {project.materials && (
            <p className="mt-3 font-body text-caption text-markaj-mineral">
              Matériaux : {project.materials}
            </p>
          )}
          <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-markaj-mineral">
            {project.credit}
          </p>
        </div>
      </article>
    </AnimateIn>
  );
}
