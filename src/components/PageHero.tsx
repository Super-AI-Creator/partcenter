import Link from "next/link";
import { Photo } from "@/components/Photo";
import type { PhotoAsset } from "@/lib/images";

export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  crumbs = [],
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  image?: PhotoAsset;
  crumbs?: { href?: string; label: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="hero-grid bg-navy text-white">
      <div className="mx-auto grid max-w-7xl items-end gap-12 px-6 py-16 lg:grid-cols-12 lg:py-24">
        <div className={image ? "lg:col-span-7" : "lg:col-span-9"}>
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.22em] text-teal-2">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.08] font-medium tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{lede}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
        {image ? (
          <div className="lg:col-span-5">
            <Photo photo={image} aspect="aspect-[5/4]" className="lg:translate-y-4" onDark />
          </div>
        ) : null}
      </div>
    </section>
  );
}
