import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Professional Disclosures",
  description: "What this firm does not guarantee, and which professional duties stay with credentialed people.",
};

const points = [
  {
    title: "Selection and income are not guaranteed",
    body: "A larger network can see more opportunities than one person. That is not a formula for being chosen, hired, or paid. Individual stories that mention money are reports from those people. They are not typical, and they are not an offer.",
  },
  {
    title: "Representations have to be true",
    body: "Profiles, proposals, and applications must name the real professional and the real qualifications. Marketing support and drafting tools exist to make a true record clearer. They do not exist to enlarge it.",
  },
  {
    title: "Clients authorize delegated work",
    body: "When someone other than the contracted professional will perform part of an engagement, the client’s permission is required where the contract or the professional relationship calls for it. Coverage during leave is planned. It is not assumed.",
  },
  {
    title: "Credentials cannot be borrowed",
    body: "Members may not claim a license, degree, certification, or project they do not have. A collaboration does not transfer a professional engineer’s seal, a CPA’s attest authority, a tax preparer’s credential, or a remote pilot certificate.",
  },
  {
    title: "Licensed work stays with the licensee",
    body: "Engineering that must be performed under responsible charge is done by a professional authorized in the relevant state. In Virginia, professional engineers are licensed by the APELSCIDLA Board at the Department of Professional and Occupational Regulation. Other states have their own boards. There is no nationwide PE license.",
  },
  {
    title: "Accounting services are named accurately",
    body: "Bookkeeping, analysis, and automation are not audits. Attest work and paid tax preparation belong with professionals who meet the applicable standards and IRS preparer rules. A forecast is a set of assumptions, not a promise of revenue.",
  },
  {
    title: "Revenue follows an agreement and actual work",
    body: "Sharing arrangements are individual. They reflect responsibilities and the work performed. Network membership alone does not pay anyone. If a client does not pay, there may be nothing to divide.",
  },
  {
    title: "Confidentiality is part of the work",
    body: "Client information, member information, and project detail stay private except where publication was authorized or disclosure is required.",
  },
  {
    title: "Automation stays inside the rules",
    body: "Tools may help with repetitive business development only where the platform, the law, and the client allow it. They may not apply under another person’s identity or misstate who will do the work.",
  },
  {
    title: "Recognition",
    body: "The firm was recognized as a consulting company to watch in 2025. That recognition is not a governmental endorsement.",
  },
];

export default function DisclaimersPage() {
  return (
    <>
      <PageHero
        eyebrow="Disclosures"
        title="The limits that make the offer believable."
        lede="Collaboration is a way of organizing qualified people. It is not a shortcut around licenses, contracts, or the fact that clients choose."
        crumbs={[{ label: "Disclosures" }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-8">
          {points.map((point) => (
            <article key={point.title}>
              <h2 className="font-serif text-2xl text-navy">{point.title}</h2>
              <p className="mt-2 leading-relaxed text-muted">{point.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
