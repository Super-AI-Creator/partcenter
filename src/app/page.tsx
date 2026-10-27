import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ClosingBand } from "@/components/ClosingBand";
import { CollaborationMap } from "@/components/CollaborationMap";
import { OddsIllustration } from "@/components/OddsIllustration";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SectorExplorer } from "@/components/SectorExplorer";
import { TeamGrid } from "@/components/TeamGrid";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { caseStudies } from "@/lib/case-studies";
import { milestones } from "@/lib/options";
import { photos } from "@/lib/images";
import { reported, site } from "@/lib/site";
import { sectors } from "@/lib/sectors";
import { testimonials } from "@/lib/testimonials";

const featured = caseStudies.filter((study) =>
  ["sw-automation", "hw-drone", "cv-addition", "fn-reporting"].includes(study.id),
);

export default function HomePage() {
  return (
    <>
      <section className="hero-grid relative overflow-hidden bg-navy text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-teal-2">
              Virginia · Recruitment, consulting, and professional collaboration
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.02] font-medium tracking-tight sm:text-7xl">
              {site.tagline.replace(/\.$/, "")}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {site.name} connects software, hardware, civil, and finance professionals with marketing teams and with each other. Members pursue work through clear roles, truthful credentials, and written agreements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/join" variant="light">Join Our Network</ButtonLink>
              <ButtonLink href="/industries" variant="ghost">Explore Our Industries</ButtonLink>
              <ButtonLink href="/businesses" variant="ghost">Work With Our Team</ButtonLink>
            </div>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="#purpose" className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
                Why this company exists
              </a>
              <a href="#reviews" className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
                Client reviews
              </a>
            </p>
            <ul className="mt-10 grid gap-3 text-sm text-white/75 sm:grid-cols-2">
              {sectors.map((sector) => (
                <li key={sector.slug}>
                  <Link href={sector.href} className="hover:text-white">
                    <span className="text-teal-2">{sector.number}</span> {sector.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <Photo photo={photos.hero} priority aspect="aspect-[4/5]" onDark />
          </div>
        </div>
      </section>

      <section id="purpose" className="scroll-mt-28 border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">Our purpose</p>
            <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">
              We exist so a professional does not have to pretend they can do every part of a project.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {site.name} is a Virginia recruitment and consulting firm. We introduce people, help them prepare, and give specialists a way to share one project when a single person cannot honestly cover it.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Help you be found", "Marketing teams help with visibility, interview preparation, and introductions. A client still chooses. Being introduced is not a job offer."],
              ["02", "Match the work to the right person", "If a project needs a skill or a license you do not have, a qualified colleague owns that part. The client is told both names."],
              ["03", "Keep the fee honest", "Money follows the work, in a written agreement for that project. There is no standard percentage, and membership itself is not income."],
            ].map(([number, title, body]) => (
              <li key={number} className="rounded-md border border-line bg-card p-6">
                <p className="font-serif text-3xl text-teal">{number}</p>
                <h3 className="mt-3 font-serif text-2xl text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-28 bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">Client reviews</p>
            <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">What members say about working together.</h2>
            <p className="mt-4 leading-relaxed text-muted">
              In their own words.
            </p>
          </div>
          <div className="mt-8">
            <TestimonialCarousel items={testimonials} />
          </div>
          <div className="mt-6">
            <Link href="/stories" className="text-sm font-medium text-teal underline underline-offset-4">
              Read the full accounts
            </Link>
          </div>
        </div>
      </section>

      <section id="collaboration" className="scroll-mt-28 border-y border-line bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">How a project is shared</p>
            <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">Four steps. Then one picture.</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              You name what you can do. A colleague takes the rest. The client sees both names. The fee follows that written split.
            </p>
          </div>
          <div className="mt-10">
            <CollaborationMap />
          </div>
          <div className="mt-8">
            <ButtonLink href="/collaboration" variant="line">See the full collaboration guide</ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">
          <Stat value={String(reported.marketingTeams)} label="Marketing and HR teams across the United States" />
          <Stat value={String(reported.softwareEngineers)} label="Software engineers on the in-house team formed in April 2026" />
          <Stat value="4" label="Professional sectors, two of them still being built" />
          <Stat value="VA" label="Headquartered in Arlington, Virginia" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">Four practices, one network</p>
            <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">Technical work is rarely one person’s job.</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              The firm recruits and consults. It also gives professionals a way to combine skills, share a defined scope, and keep business development moving while qualified colleagues deliver the parts they agreed to own.
            </p>
          </div>
          <div className="mt-10">
            <SectorExplorer sectors={sectors} />
          </div>
        </Reveal>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <OddsIllustration />
          </Reveal>
        </div>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-teal-2">Our philosophy</p>
          <blockquote className="mt-6 font-serif text-4xl leading-tight sm:text-6xl">
            “{site.quote}”
          </blockquote>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <Photo photo={photos.workshop} aspect="aspect-[16/11]" />
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-teal">Business development</p>
          <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">Spend less time searching. More time growing.</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Marketing teams help members become easier to find, prepare for conversations, and think about the next engagement before the current one ends. Tools now in development may assist with discovery, filtering, drafting, reminders, and tracking, where a platform allows it.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Members can do that work themselves or use approved tools for eligible tasks. Applications must name the real person and the real qualifications. Professional judgment stays with a human being.
          </p>
          <div className="mt-6">
            <ButtonLink href="/collaboration" variant="line">See how the tools are limited</ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">The team</p>
            <h2 className="mt-3 font-serif text-4xl text-navy sm:text-5xl">Specialists across the work.</h2>
          </div>
          <p className="text-muted lg:col-span-7">
            Engineers, coordinators, marketers, and analysts, each shown in the discipline they practice.
          </p>
        </div>
        <TeamGrid />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl text-navy">Example engagements</h2>
            <p className="mt-3 max-w-2xl text-muted">Engagements across software, hardware, civil engineering, and finance.</p>
          </div>
          <Link href="/projects" className="text-sm font-medium text-teal underline underline-offset-4">Browse the full set</Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((study) => (
            <article key={study.id} className="rounded-md border border-line bg-card p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-teal">{study.category}</p>
              <h3 className="mt-3 font-serif text-2xl text-navy">{study.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="font-serif text-4xl text-navy">How the firm has grown</h2>
          <ol className="mt-10 space-y-8 border-l border-line pl-6">
            {milestones.map((item) => (
              <li key={item.title} className="relative">
                <span className="absolute -left-[1.7rem] top-1.5 h-3 w-3 rounded-full bg-teal" aria-hidden="true" />
                <p className="text-xs uppercase tracking-[0.16em] text-teal">{item.when}</p>
                <h3 className="mt-1 font-serif text-2xl text-navy">{item.title}</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <ClosingBand />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-4xl text-navy">{value}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{label}</p>
    </div>
  );
}
