"use client";

import { useMemo, useState } from "react";
import { sectorFilters, type CaseStudy } from "@/lib/case-studies";
import type { SectorSlug } from "@/lib/sectors";

export function ProjectFilter({ studies }: { studies: CaseStudy[] }) {
  const [filter, setFilter] = useState<SectorSlug | "all">("all");
  const visible = useMemo(
    () => (filter === "all" ? studies : studies.filter((study) => study.sector === filter)),
    [filter, studies],
  );

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="toolbar" aria-label="Filter examples">
        {sectorFilters.map((item) => {
          const selected = filter === item.slug;
          return (
            <button
              key={item.slug}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item.slug)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm ${selected ? "bg-navy text-white" : "border border-line bg-card text-ink"}`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-6">
        {visible.map((study) => (
          <article key={study.id} className="rounded-md border border-line bg-card p-6 sm:p-8">
            <p className="text-sm text-muted">{study.category}</p>
            <h2 className="mt-4 font-serif text-3xl text-navy">{study.title}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-muted">Challenge</h3>
                <p className="mt-2 leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-muted">Proposed approach</h3>
                <p className="mt-2 leading-relaxed">{study.solution}</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.disciplines.map((discipline) => (
                <span key={discipline} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
                  {discipline}
                </span>
              ))}
            </div>
            <dl className="mt-6 grid gap-5 border-t border-line pt-6 md:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-ink">Tools and references</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{study.tools.join(" · ")}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-ink">Collaboration</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{study.collaboration}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-ink">Deliverables</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted">{study.deliverables.join(" · ")}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
