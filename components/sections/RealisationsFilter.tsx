"use client";

import { RealisationCard } from "@/components/sections/RealisationCard";
import {
  realisationLocations,
  realisationServices,
  realisations,
  type Realisation,
} from "@/lib/content/realisations";
import { useMemo, useState } from "react";

function filterProjects(
  projects: Realisation[],
  service: string,
  location: string
): Realisation[] {
  return projects.filter((project) => {
    const matchService = service === "all" || project.service === service;
    const matchLocation = location === "all" || project.location === location;
    return matchService && matchLocation;
  });
}

export function RealisationsFilter() {
  const [service, setService] = useState("all");
  const [location, setLocation] = useState("all");

  const filtered = useMemo(
    () => filterProjects(realisations, service, location),
    [service, location]
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
        <div className="min-w-[12rem] flex-1 sm:max-w-xs">
          <label
            htmlFor="filter-service"
            className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary"
          >
            Type de travaux
          </label>
          <select
            id="filter-service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="form-input"
          >
            <option value="all">Tous les services</option>
            {realisationServices.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-[12rem] flex-1 sm:max-w-xs">
          <label
            htmlFor="filter-location"
            className="mb-1.5 block font-body text-body-sm font-medium text-markaj-primary"
          >
            Localisation
          </label>
          <select
            id="filter-location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="form-input"
          >
            <option value="all">Toutes les zones</option>
            {realisationLocations.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <p className="font-body text-body-sm text-markaj-mineral sm:pb-3" aria-live="polite">
          {filtered.length} projet{filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="border border-markaj-primary/15 bg-markaj-surface p-6 font-body text-body text-markaj-mineral-dark">
          Aucune réalisation ne correspond à ces filtres. Modifiez votre sélection ou{" "}
          <a href="/contact" className="text-markaj-primary underline underline-offset-4">
            demandez un devis
          </a>{" "}
          pour votre projet.
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {filtered.map((project, index) => (
            <RealisationCard
              key={project.id}
              project={project}
              index={index}
              featured={index === 0 && filtered.length > 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
