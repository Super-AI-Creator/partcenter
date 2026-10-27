import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Join Our Network",
  description: "Apply to the professional network. Membership is not employment and does not guarantee projects or income.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Bring a true record. We’ll help you find the right colleagues."
        lede="Joining is a request to be considered. It is not a job offer, not a promise of projects, and not permission to use someone else’s credentials."
        crumbs={[{ label: "Join" }]}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12">
        <div className="space-y-4 leading-relaxed text-muted lg:col-span-5">
          <h2 className="font-serif text-3xl text-navy">Who this is for</h2>
          <p>Experienced specialists, people between roles, freelancers whose work comes in bursts, and professionals entering a neighboring field.</p>
          <p>Companies looking to hire a team should use the business inquiry instead. This form is for individuals.</p>
          <h2 className="pt-4 font-serif text-3xl text-navy">What happens next</h2>
          <p>We review every application. If there is a fit, the next conversation is about your skills and a written agreement.</p>
        </div>
        <div className="lg:col-span-7">
          <InquiryForm variant="join" />
        </div>
      </section>
    </>
  );
}
