import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { sectors } from "@/lib/sectors";

export const metadata: Metadata = {
  title: "Our Industries",
  description: "Software, hardware, civil engineering, and accounting collaboration under one professional network.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Four sectors. One standard for telling the truth."
        lede="Each practice has its own tools and its own rules about who may sign the work. The collaboration model is the same: divide the scope, name the qualified person, and agree the fee in writing."
        crumbs={[{ label: "Industries" }]}
      >
        <ButtonLink href="/join" variant="light">Join Our Network</ButtonLink>
      </PageHero>
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16">
        {sectors.map((sector) => (
          <article key={sector.slug} className="grid gap-6 rounded-md border border-line bg-card p-6 md:grid-cols-12 md:p-8">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[0.18em] text-teal">{sector.number}</p>
              <h2 className="mt-2 font-serif text-3xl text-navy">{sector.name}</h2>
              <p className="mt-3 text-sm text-muted">{sector.status}</p>
            </div>
            <div className="md:col-span-8">
              <p className="font-serif text-2xl leading-snug text-navy">{sector.headline}</p>
              <p className="mt-3 leading-relaxed text-muted">{sector.lede}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {sector.capabilities.map((item) => (
                  <li key={item.title} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{item.title}</li>
                ))}
              </ul>
              <Link href={sector.href} className="mt-5 inline-block text-sm font-medium text-teal underline underline-offset-4">
                {sector.cta}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
