import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Rules for using this website. Membership and project work require a separate agreement.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Using this website."
        lede="These terms cover the public site. Membership and project work require a separate written agreement."
        crumbs={[{ label: "Terms" }]}
      />
      <article className="legal mx-auto max-w-3xl px-6 py-16">
        <h2>The site</h2>
        <p>{site.name} publishes information about a Virginia recruitment and consulting practice and a collaboration network. Reading the site, or sending a form, does not make you a member, an employee, a partner, or a client.</p>
        <h2>No offer of work or income</h2>
        <p>Nothing on the site is an offer of employment, a guarantee of projects, or a promise of earnings. Customer stories describe individual experience.</p>
        <h2>Your submissions</h2>
        <p>You agree that the information you send is accurate, and that you will not claim a license, degree, or piece of experience you do not have. You also agree not to include confidential client material the firm has not asked to receive.</p>
        <h2>Separate agreements</h2>
        <p>If the firm works with you, the governing terms will be a separate written agreement. That agreement controls fees, confidentiality, who may perform the work, and who may approve regulated services. Revenue is shared only as that agreement states. There is no standard percentage on this website.</p>
        <h2>Acceptable use</h2>
        <p>Do not misuse the forms, attempt to break the site, or present the firm’s name as a credential you have not been given. Do not copy the site’s text or design for another business and present it as your own.</p>
        <h2>Professional boundaries</h2>
        <p>The site does not provide legal, tax, audit, engineering, or investment advice. Descriptions of standards are educational. Work that requires a license or another credential is performed only by a person authorized to do it, under a real engagement, not by these pages.</p>
        <h2>Liability</h2>
        <p>The site is provided as a source of information. To the extent the law allows, the firm is not liable for decisions you make solely from these pages, including decisions about leaving a job, bidding a project, or expecting a particular income. Nothing here limits liability that cannot legally be limited.</p>
        <h2>Changes</h2>
        <p>Pages can be updated as records, services, and integrations change. The version you are reading is the one published on the site at the time of your visit.</p>
      </article>
    </>
  );
}
