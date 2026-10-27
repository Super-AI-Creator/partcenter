import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { caseStudies } from "@/lib/case-studies";
import { opportunities } from "@/lib/content";
import { photos } from "@/lib/images";
import type { Sector } from "@/lib/sectors";

export function SectorView({ sector }: { sector: Sector }) {
  const studies = caseStudies.filter((study) => study.sector === sector.slug).slice(0, 3);
  const listings = opportunities.filter((item) => item.sector === sector.slug);
  const photo = photos[sector.image];

  return (
    <>
      <PageHero
        eyebrow={sector.status}
        title={sector.headline}
        lede={sector.lede}
        image={photo}
        crumbs={[{ href: "/industries", label: "Industries" }, { label: sector.shortName }]}
      >
        <ButtonLink href="/join" variant="light">{sector.cta}</ButtonLink>
        <ButtonLink href="/businesses" variant="ghost">Work With Our Team</ButtonLink>
      </PageHero>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            {sector.questions.map((question) => (
              <p key={question} className="font-serif text-2xl leading-snug text-navy">{question}</p>
            ))}
            {sector.story.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted">{paragraph}</p>
            ))}
          </div>
          <aside className="rounded-md border border-line bg-card p-6 lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">{sector.credentialTitle}</p>
            <p className="mt-3 leading-relaxed text-muted">{sector.credential}</p>
          </aside>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-serif text-4xl text-navy">Capabilities</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sector.capabilities.map((item) => (
              <article key={item.title} className="rounded-md border border-line p-5">
                <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-4xl text-navy">How the work is usually practiced</h2>
          <p className="mt-4 leading-relaxed text-muted">
            These notes describe established standards and ordinary professional boundaries. They are references for scoping work. They are not certifications, licenses, or completed projects of this firm.
          </p>
        </div>
        <div className="space-y-6">
          {sector.practices.map((practice) => (
            <article key={practice.title}>
              <h3 className="font-serif text-2xl text-navy">{practice.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{practice.detail}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-navy text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2">
          <Photo photo={sector.slug === "hardware" ? photos.circuit : sector.slug === "civil" ? photos.siteReview : sector.slug === "finance" ? photos.analytics : photos.code} aspect="aspect-[16/10]" onDark />
          <div>
            <h2 className="font-serif text-4xl">The power of collaboration</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-white/80">
              {sector.collaboration.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl text-navy">Engagements</h2>
            <p className="mt-3 max-w-2xl text-muted">How a scope in this practice is divided among the people who can do each part.</p>
          </div>
          <Link href="/projects" className="text-sm font-medium text-teal underline underline-offset-4">See all examples</Link>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {studies.map((study) => (
            <article key={study.id} className="rounded-md border border-line bg-card p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-teal">{study.category}</p>
              <h3 className="mt-3 font-serif text-2xl text-navy">{study.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{study.challenge}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-serif text-4xl text-navy">Work members take on</h2>
          <p className="mt-3 max-w-2xl text-muted">The kind of collaboration a member is brought in to do.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {listings.map((listing) => (
              <article key={listing.id} className="rounded-md border border-line p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-teal">Collaboration</p>
                <h3 className="mt-2 font-serif text-2xl text-navy">{listing.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{listing.summary}</p>
                <p className="mt-3 text-sm text-ink">{listing.skills.join(" · ")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-4xl text-navy">Sources for the standards named here</h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          {sector.sources.map((source) => (
            <li key={source.href} className="rounded-md border border-line p-5">
              <a href={source.href} className="font-medium text-navy underline decoration-teal/50 underline-offset-4" target="_blank" rel="noopener noreferrer">
                {source.label}
              </a>
              <p className="mt-2 text-sm leading-relaxed text-muted">{source.note}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
