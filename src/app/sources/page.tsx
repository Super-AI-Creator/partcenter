import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { sectors } from "@/lib/sectors";

export const metadata: Metadata = {
  title: "Sources & Standards",
  description: "Authorities cited for cybersecurity, AI, engineering licensure, drone operations, and accounting services.",
};

export default function SourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sources"
        title="Where the technical statements come from."
        lede="Sector pages name the standards used when a scope is discussed."
        crumbs={[{ label: "Sources" }]}
      />
      <section className="mx-auto max-w-3xl space-y-12 px-6 py-16">
        {sectors.map((sector) => (
          <article key={sector.slug}>
            <h2 className="font-serif text-3xl text-navy">{sector.shortName}</h2>
            <ul className="mt-4 space-y-4">
              {sector.sources.map((source) => (
                <li key={source.href}>
                  <a className="font-medium text-navy underline decoration-teal/40 underline-offset-4" href={source.href} target="_blank" rel="noopener noreferrer">
                    {source.label}
                  </a>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{source.note}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}
