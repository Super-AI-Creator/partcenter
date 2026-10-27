"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/content";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => {
        const open = openId === item.id;
        const panelId = `faq-${item.id}`;
        return (
          <div key={item.id} className="py-2">
            <h3>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-6 py-4 text-left"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
              >
                <span className="font-serif text-xl text-navy sm:text-2xl">{item.question}</span>
                <span aria-hidden="true" className="mt-1 text-teal">
                  {open ? "–" : "+"}
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" hidden={!open} className="pb-4 pr-8 text-base leading-relaxed text-muted">
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
