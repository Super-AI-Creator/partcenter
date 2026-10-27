import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { ClosingBand } from "@/components/ClosingBand";
import { CollaborationMap } from "@/components/CollaborationMap";
import { OddsIllustration } from "@/components/OddsIllustration";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Workflow } from "@/components/Workflow";
import { photos } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "How Collaboration Works",
  description: "How members join, form teams, divide work, and share revenue under written agreements.",
};

const contributions = [
  "Marketing and business development",
  "Client introductions and lead generation",
  "Proposal preparation",
  "Project coordination",
  "Documentation and administrative support",
  "Technical assistance within demonstrated skill",
  "Learning beside a qualified specialist",
];

const tools = [
  "Opportunity discovery and filtering",
  "Lead identification on platforms whose rules allow it",
  "Drafting a proposal the member will review",
  "Application tracking and follow-up reminders",
  "CRM notes and administrative reporting",
];

export default function CollaborationPage() {
  return (
    <>
      <PageHero
        eyebrow="The business model"
        title="Why Compete Alone When We Can Succeed Together?"
        lede="The firm’s advantage is not a secret ratio. It is a network in which complementary people can take on work that one incomplete claim could not honestly cover."
        image={photos.workshopLive}
        crumbs={[{ label: "How It Works" }]}
      >
        <ButtonLink href="/join" variant="light">Find Your Place in Our Network</ButtonLink>
      </PageHero>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-teal">Start here</p>
          <h2 className="mt-3 font-serif text-4xl text-navy">The model, in one picture.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            Read the four steps from left to right. The colored row under them is the same idea drawn as a project: two people, one written split, a client who can see both names.
          </p>
        </div>
        <div className="mt-10">
          <CollaborationMap />
        </div>
        <div className="mt-10">
          <Photo photo={photos.teamTable} aspect="aspect-[16/7]" sizes="100vw" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <OddsIllustration />
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="max-w-3xl font-serif text-4xl text-navy">From introduction to a finished scope</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Nothing in this sequence awards a project. It is the path a collaboration follows when there is a fit, a client, and a written agreement.
          </p>
          <div className="mt-10">
            <Workflow />
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-4xl text-navy">Share responsibilities, not a vague percentage</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">
            <p>
              Inconsistent income is one of the hard facts of independent work. A person can spend weeks delivering, then look up and find nothing next. When a member secures suitable work, other qualified members may complete agreed portions. Revenue is shared under an agreement that reflects responsibilities, contribution, and what the project actually requires.
            </p>
            <p>
              That can leave more time for business development and for learning, while delivery continues under the right oversight. The objective is not to extract more from one invoice. It is a way of working that can continue. Compensation follows work. It is not paid for simply being in the network.
            </p>
          </div>
        </div>
        <div>
          <h2 className="font-serif text-4xl text-navy">Freedom that does not drop the client</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">
            <p>
              Working alone means carrying development, meetings, revisions, client communication, and the search for the next job. Those tasks can be divided among qualified people.
            </p>
            <p>
              A senior software engineer taking extended leave, for example, may arrange for an approved teammate to handle agreed development. With client authorization and supervision, the work can continue. Collaboration should add room without weakening quality, transparency, security, or the contract.
            </p>
            <p className="font-serif text-2xl text-navy">“{site.quote}”</p>
          </div>
        </div>
      </section>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="max-w-3xl font-serif text-4xl">You don&apos;t have to know everything to get started.</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/80">
            The network is not reserved for people who already cover every discipline. A new software engineer, a mechanical designer curious about aircraft, or a marketer learning how engineering projects are sold can contribute the strength they already have.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {contributions.map((item) => (
              <li key={item} className="rounded-md border border-white/15 px-4 py-3 text-sm text-white/85">{item}</li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/70">
            You do not need to pretend. If a project requires expertise or a regulated credential you do not possess, a qualified professional is assigned that responsibility with the client’s informed agreement.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-4xl text-navy">Spend less time searching. More time growing.</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Marketing teams help members improve visibility and prepare for opportunities. Automated tools are being developed for repetitive business-development tasks. Depending on the platform and the permissions available, they may assist with:
        </p>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {tools.map((tool) => (
            <li key={tool} className="rounded-md border border-line bg-card px-4 py-3 text-sm">{tool}</li>
          ))}
        </ul>
        <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-muted">
          <p>
            Members choose whether to handle business development themselves or to use approved tools on eligible tasks. Automation has to follow platform rules, privacy duties, the law, and the client’s requirements. A proposal must accurately represent the participating professional’s identity, qualifications, and capabilities.
          </p>
          <p className="font-medium text-ink">
            Automate repetitive processes while keeping professional judgment, transparency, and human expertise at the center of every project.
          </p>
        </div>
      </section>
      <ClosingBand />
    </>
  );
}
