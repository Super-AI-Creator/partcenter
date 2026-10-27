import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectFilter } from "@/components/ProjectFilter";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Projects & Case Studies",
  description: "Engagements across software, hardware, civil engineering, and finance.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work across the four practices."
        lede="Software, hardware, civil, and finance engagements, with each part owned by the person qualified to do it."
        crumbs={[{ label: "Projects" }]}
      />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <ProjectFilter studies={caseStudies} />
      </section>
    </>
  );
}
