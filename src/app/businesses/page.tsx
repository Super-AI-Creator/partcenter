import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { sectors } from "@/lib/sectors";

export const metadata: Metadata = {
  title: "For Businesses",
  description: "Request software, hardware, civil, or finance collaboration from a Virginia consulting network.",
};

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="For businesses"
        title="Hire a team that can say who is doing the work."
        lede="Companies come here when a project crosses specialties. You get a scoped conversation, named responsibilities, and professionals who are not asked to pretend a credential."
        crumbs={[{ label: "For Businesses" }]}
      />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="font-serif text-3xl text-navy">Engagements can start in any of the four sectors</h2>
          <ul className="mt-6 space-y-4">
            {sectors.map((sector) => (
              <li key={sector.slug}>
                <p className="font-medium text-ink">{sector.shortName}</p>
                <p className="text-sm leading-relaxed text-muted">{sector.status}. {sector.lede}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            An inquiry does not reserve people. Availability, fit, and a written agreement come after a real conversation. Licensed engineering, attest work, and tax preparation are offered only through professionals who may perform them.
          </p>
        </div>
        <div className="lg:col-span-7">
          <InquiryForm variant="business" />
        </div>
      </section>
    </>
  );
}
