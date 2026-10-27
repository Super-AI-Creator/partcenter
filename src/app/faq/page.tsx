import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { faqItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Membership, collaboration, licenses, automation, revenue sharing, and what is not guaranteed.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Questions"
        title="Plain answers before you apply."
        lede="Membership requirements, how teams form, who may do regulated work, and how revenue is actually shared."
        crumbs={[{ label: "FAQ" }]}
      />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <FaqAccordion items={faqItems} />
      </section>
    </>
  );
}
