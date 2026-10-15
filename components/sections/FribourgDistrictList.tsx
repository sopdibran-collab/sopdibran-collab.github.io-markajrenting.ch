"use client";

import type { FribourgDistrict } from "@/lib/content/fribourg-zone";
import { useLayoutEffect, useRef, useState } from "react";

/** Sous cette hauteur, la liste mobile reste en cartes. */
const MOBILE_LIST_LIMIT = 1500;

function DistrictBody({ entry }: { entry: FribourgDistrict }) {
  return (
    <>
      <p className="font-body text-body-sm text-markaj-primary/80">
        Chef-lieu : {entry.chefLieu}
      </p>
      <p className="mt-2 font-body text-body text-markaj-primary/90">
        {entry.communes.join(", ")}
      </p>
    </>
  );
}

/**
 * Grille de cartes. Sur mobile, si la pile dépasse environ 1 500 px,
 * chaque district devient un accordéon fermé. Le texte reste dans le DOM.
 */
export function FribourgDistrictList({ districts }: { districts: FribourgDistrict[] }) {
  const cardsRef = useRef<HTMLUListElement>(null);
  const collapsed = useRef(false);
  const [collapseOnMobile, setCollapseOnMobile] = useState(false);

  useLayoutEffect(() => {
    const mobile = window.matchMedia("(max-width: 639px)");

    const measure = () => {
      if (!mobile.matches) {
        collapsed.current = false;
        setCollapseOnMobile(false);
        return;
      }
      if (collapsed.current) return;
      const list = cardsRef.current;
      if (!list) return;
      const tooTall = list.scrollHeight > MOBILE_LIST_LIMIT;
      collapsed.current = tooTall;
      setCollapseOnMobile(tooTall);
    };

    measure();
    mobile.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    return () => {
      mobile.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <>
      <ul
        ref={cardsRef}
        className={
          collapseOnMobile
            ? "mt-8 hidden max-w-3xl gap-4 sm:grid sm:grid-cols-2"
            : "mt-8 grid max-w-3xl gap-4 sm:grid-cols-2"
        }
      >
        {districts.map((entry) => (
          <li key={entry.district} className="border border-markaj-primary/15 bg-markaj-white p-5">
            <h3 className="font-heading text-heading-4 text-markaj-primary">{entry.district}</h3>
            <div className="mt-2">
              <DistrictBody entry={entry} />
            </div>
          </li>
        ))}
      </ul>

      {collapseOnMobile && (
        <div className="mt-8 max-w-3xl divide-y divide-markaj-mineral/15 border-y border-markaj-mineral/15 sm:hidden">
          {districts.map((entry) => (
            <details key={entry.district} className="group">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-5 text-left font-heading text-heading-4 text-markaj-primary marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-primary focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                <span>{entry.district}</span>
                <span className="shrink-0 font-body transition-transform group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="pb-5">
                <DistrictBody entry={entry} />
              </div>
            </details>
          ))}
        </div>
      )}
    </>
  );
}
