import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/lib/site";

export function ClosingBand() {
  return (
    <section className="hero-grid bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <p className="text-xs uppercase tracking-[0.22em] text-teal-2">{site.tagline}</p>
        <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-6xl">{site.closingTitle}</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-white/80">
          <p>
            Success does not have to depend on working alone. Whether you are an experienced engineer, a developing professional, a freelancer, an accountant, a designer, or someone seeking a new direction, the network is built to connect strengths.
          </p>
          <p>
            Together, members can identify opportunities, work through technical problems with the right specialist, form professional partnerships, and build careers that are easier to sustain. You bring your ambition. The network brings colleagues, marketing support, and a way to divide real work.
          </p>
        </div>
        <p className="mt-8 font-serif text-3xl text-white">{site.closingLine}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/join" variant="light">Join Our Network</ButtonLink>
          <ButtonLink href="/industries" variant="ghost">Explore Our Industries</ButtonLink>
          <ButtonLink href="/businesses" variant="ghost">Work With Our Team</ButtonLink>
        </div>
      </div>
    </section>
  );
}
