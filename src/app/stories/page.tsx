import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Portrait } from "@/components/Portrait";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Customer experiences supplied by the firm, with individual results clearly separated from any promise.",
};

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success stories"
        title="Members, in their own words."
        lede="Members describe how collaboration changed the way they take on work."
        crumbs={[{ label: "Stories" }]}
      />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-16">
          {testimonials.map((story) => (
            <article key={story.id} className="grid gap-8 border-t border-line pt-12 md:grid-cols-12">
              {story.portrait ? (
                <Portrait
                  src={story.portrait}
                  alt={story.portraitAlt ?? story.name}
                  className="aspect-[4/5] rounded-md md:col-span-4"
                />
              ) : null}
              <div className={story.portrait ? "md:col-span-8" : "md:col-span-12"}>
                <p className="text-xs uppercase tracking-[0.18em] text-teal">Reported experience</p>
                <h2 className="mt-3 font-serif text-3xl leading-snug text-navy">“{story.quote}”</h2>
                <p className="mt-4 font-medium text-ink">{story.name}</p>
                <p className="text-sm text-muted">{story.role}</p>
                <div className="mt-5 space-y-4 leading-relaxed text-muted">
                  {story.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {story.note ? <p className="mt-4 text-sm leading-relaxed text-ink">{story.note}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
