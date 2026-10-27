import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28">
      <p className="text-xs uppercase tracking-[0.18em] text-teal">404</p>
      <h1 className="mt-3 font-serif text-5xl text-navy">That page is not on this site.</h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        The address may be mistyped. The work of the firm is still on the pages that do exist.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 text-sm font-medium">
        <Link href="/" className="rounded-full bg-navy px-5 py-3 text-white">Back to home</Link>
        <Link href="/contact" className="rounded-full border border-line px-5 py-3">Contact</Link>
      </div>
    </section>
  );
}
