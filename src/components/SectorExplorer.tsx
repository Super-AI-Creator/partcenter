"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import type { Sector } from "@/lib/sectors";

export function SectorExplorer({ sectors }: { sectors: Sector[] }) {
  const [active, setActive] = useState(sectors[0]?.slug ?? "software");
  const sector = sectors.find((item) => item.slug === active) ?? sectors[0];
  if (!sector) return null;

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="flex gap-2 overflow-x-auto lg:col-span-4 lg:flex-col lg:overflow-visible" role="tablist" aria-label="Industries">
        {sectors.map((item) => {
          const selected = item.slug === sector.slug;
          return (
            <button
              key={item.slug}
              type="button"
              role="tab"
              id={`tab-${item.slug}`}
              aria-selected={selected}
              aria-controls={`panel-${item.slug}`}
              onClick={() => setActive(item.slug)}
              className={`min-w-56 rounded-md border px-4 py-4 text-left lg:min-w-0 ${selected ? "border-navy bg-navy text-white" : "border-line bg-card text-ink hover:border-navy/30"}`}
            >
              <span className={`text-xs tracking-[0.18em] ${selected ? "text-teal-2" : "text-teal"}`}>{item.number}</span>
              <span className="mt-2 block font-serif text-xl leading-snug">{item.shortName}</span>
              <span className={`mt-1 block text-sm ${selected ? "text-white/70" : "text-muted"}`}>{item.status}</span>
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`panel-${sector.slug}`}
        aria-labelledby={`tab-${sector.slug}`}
        className="rounded-md border border-line bg-card p-6 sm:p-8 lg:col-span-8"
      >
        <p className="text-xs uppercase tracking-[0.18em] text-teal">{sector.status}</p>
        <h3 className="mt-3 font-serif text-3xl leading-tight text-navy sm:text-4xl">{sector.headline}</h3>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{sector.lede}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {sector.capabilities.slice(0, 4).map((item) => (
            <li key={item.title} className="rounded-md bg-paper px-4 py-3">
              <p className="font-medium text-ink">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <ButtonLink href={sector.href}>{sector.cta}</ButtonLink>
        </div>
      </div>
    </div>
  );
}
