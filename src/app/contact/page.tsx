import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { LocationMap } from "@/components/LocationMap";
import { PageHero } from "@/components/PageHero";
import { office, officeQuery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Write to the Arlington office at ${officeQuery()}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to the firm."
        lede="Membership questions, business inquiries, and privacy requests. The office is in Arlington, Virginia."
        crumbs={[{ label: "Contact" }]}
      />
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-12">
          <div className="space-y-4 text-muted lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] text-teal">Office</p>
            <h2 className="font-serif text-4xl text-navy">
              {office.street}
              <br />
              {office.city}, {office.region} {office.postalCode}
            </h2>
            <p>Recruitment and consulting, serving clients across the United States from Arlington.</p>
          </div>
          <div className="lg:col-span-8">
            <LocationMap />
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-12">
        <div className="space-y-4 text-muted lg:col-span-4">
          <h2 className="font-serif text-3xl text-navy">Send a message</h2>
          <p>Send a note about membership, a project, or a privacy request. You will receive a reference number when the message is accepted.</p>
        </div>
        <div className="lg:col-span-8">
          <InquiryForm variant="contact" />
        </div>
      </section>
    </>
  );
}
