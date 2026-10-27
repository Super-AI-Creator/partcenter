import type { Metadata } from "next";
import { LocationMap } from "@/components/LocationMap";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { TeamGrid } from "@/components/TeamGrid";
import { photos } from "@/lib/images";
import { milestones, } from "@/lib/options";
import { officeQuery, reported, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "History, structure, and the public records this Virginia collaboration firm is willing to publish.",
};

const records = [
  ["Office", officeQuery()],
  ["Marketing and HR teams", `${reported.marketingTeams} teams across the United States`],
  ["Software engineers", `${reported.softwareEngineers}, in-house team formed ${reported.softwareTeamFormed}`],
  ["Civil engineering", `Team formed ${reported.civilTeamFormed}`],
  ["2025 recognition", "Consulting company to watch"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the firm"
        title="A consulting practice built around shared work."
        lede={`${site.name} is a recruitment and consulting firm in Arlington, Virginia. Software, hardware, civil, and finance professionals work together under written roles.`}
        image={photos.office}
        crumbs={[{ label: "About" }]}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2">
        <div className="space-y-4 leading-relaxed text-muted">
          <h2 className="font-serif text-4xl text-navy">Mission</h2>
          <p>
            Connect capable professionals so they can pursue serious work together, with roles written down and qualifications stated accurately. The firm recruits, introduces, and helps members prepare. It also gives specialists a way to collaborate instead of treating every neighboring skill as a reason to decline a project.
          </p>
          <h2 className="pt-6 font-serif text-4xl text-navy">Vision</h2>
          <p>
            A durable US professional network in which technical delivery, business development, and learning reinforce one another. Success for one member can create room for another, without turning the practice into a promise of income.
          </p>
          <p>
            The philosophy is simple: {site.tagline} Professionals can accomplish more by combining strengths than by competing as if every project required a single complete person.
          </p>
        </div>
        <Photo photo={photos.conversation} aspect="aspect-[4/3]" />
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-serif text-4xl text-navy">Milestones the company has stated</h2>
          <ol className="mt-8 space-y-8">
            {milestones.map((item) => (
              <li key={item.title} className="grid gap-2 border-t border-line pt-6 md:grid-cols-12">
                <p className="text-sm font-medium text-teal md:col-span-3">{item.when}</p>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.18em] text-teal">People</p>
              <h2 className="mt-3 font-serif text-4xl text-navy">The colleagues clients actually meet.</h2>
            </div>
            <p className="text-muted lg:col-span-7">
              Software, marketing, electronics, mechanical design, civil coordination, accounting, and project leadership sit in one network.
            </p>
          </div>
          <TeamGrid />
          <div className="mt-10">
            <Photo photo={photos.teamTable} aspect="aspect-[16/7]" sizes="100vw" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-4xl text-navy">How the organization is arranged</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <article className="rounded-md border border-line bg-card p-6">
            <h3 className="font-serif text-2xl text-navy">Marketing and human resources</h3>
            <p className="mt-3 leading-relaxed text-muted">Thirteen specialized teams across the United States. They help with visibility, opportunity research, interview preparation, profiles, and introductions.</p>
          </article>
          <article className="rounded-md border border-line bg-card p-6">
            <h3 className="font-serif text-2xl text-navy">Software engineering</h3>
            <p className="mt-3 leading-relaxed text-muted">Eighteen engineers, formed as an in-house team in April 2026. Several members bring more than a decade of freelance and professional development experience.</p>
          </article>
          <article className="rounded-md border border-line bg-card p-6">
            <h3 className="font-serif text-2xl text-navy">Civil and structural engineering</h3>
            <p className="mt-3 leading-relaxed text-muted">A team formed in July 2026 covering structural work, architectural coordination, infrastructure, and related services. Licensed approval stays with the professional engineer authorized for the project.</p>
          </article>
          <article className="rounded-md border border-line bg-card p-6">
            <h3 className="font-serif text-2xl text-navy">Finance and hardware</h3>
            <p className="mt-3 leading-relaxed text-muted">Accounting and hardware practices are growing inside the same network, alongside the software and civil teams. Licensed and credentialed work stays with the person qualified to perform it.</p>
          </article>
        </div>
      </section>
      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-serif text-4xl text-navy">The office</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            {officeQuery()}. The practice works with professionals and companies across the United States.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <caption className="sr-only">Office and team facts</caption>
              <thead>
                <tr className="border-b border-line text-muted">
                  <th scope="col" className="py-3 pr-4 font-medium">Item</th>
                  <th scope="col" className="py-3 font-medium">Detail</th>
                </tr>
              </thead>
              <tbody>
                {records.map(([item, value]) => (
                  <tr key={item} className="border-b border-line">
                    <th scope="row" className="py-3 pr-4 font-medium text-ink">{item}</th>
                    <td className="py-3 text-muted">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10">
            <LocationMap />
          </div>
        </div>
      </section>
    </>
  );
}
