import Image from "next/image";
import Link from "next/link";
import { industryNav, office, officeQuery, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Image src="/logo.png" alt={site.name} width={668} height={506} className="h-28 w-auto rounded-md bg-white" />
          <p className="mt-3 text-sm leading-relaxed text-white/75">{site.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {office.street}
            <br />
            {office.city}, {office.region} {office.postalCode}
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-teal-2">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/collaboration" className="hover:text-white">How collaboration works</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects and examples</Link></li>
            <li><Link href="/stories" className="hover:text-white">Success stories</Link></li>
            <li><Link href="/join" className="hover:text-white">Join the network</Link></li>
            <li><Link href="/businesses" className="hover:text-white">For businesses</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-teal-2">Industries</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {industryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-teal-2">Records and policies</p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy notice</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of use</Link></li>
            <li><Link href="/disclaimers" className="hover:text-white">Professional disclosures</Link></li>
            <li><Link href="/sources" className="hover:text-white">Sources and standards</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs leading-relaxed text-white/60">
          <p>© {site.name}. {officeQuery()}</p>
        </div>
      </div>
    </footer>
  );
}
