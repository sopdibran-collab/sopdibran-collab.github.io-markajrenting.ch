"use client";

import { cn } from "@/lib/utils";
import { useId, useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn("divide-y divide-markaj-mineral/15 border-y border-markaj-mineral/15", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.question}>
            <button
              type="button"
              id={triggerId}
              className="flex min-h-11 w-full items-center justify-between gap-4 py-5 text-left font-body text-body font-medium text-markaj-primary transition-colors hover:text-markaj-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-markaj-primary focus-visible:ring-offset-2"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span>{item.question}</span>
              <span
                className={cn(
                  "shrink-0 text-markaj-primary",
                  isOpen && "rotate-45"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {/* Answers stay in the DOM so the visible content matches the FAQPage JSON-LD */}
            <div id={panelId} role="region" aria-labelledby={triggerId} hidden={!isOpen}>
              <div className="pb-5 font-body text-body text-markaj-primary">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
