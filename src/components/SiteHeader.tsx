"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { industryNav, mainNav, site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [industriesPath, setIndustriesPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const industriesOpen = industriesPath === pathname;

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuPath(null);
        setIndustriesPath(null);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const industryActive = industryNav.some((item) => pathname === item.href);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/92 backdrop-blur-md">
      <div className="bg-navy text-white/75">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2 text-xs tracking-wide">
          <p>Arlington, Virginia · Recruitment and engineering collaboration</p>
          <Link href="/disclaimers" className="shrink-0 underline decoration-white/30 underline-offset-4 hover:text-white">
            Disclosures
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3">
        <Link href="/" className="flex items-center" aria-label={`${site.name} home`}>
          <Image src="/logo.png" alt={site.name} width={668} height={506} priority className="h-[4.5rem] w-auto" />
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setIndustriesPath(pathname)}
            onMouseLeave={() => setIndustriesPath(null)}
          >
            <button
              type="button"
              className={`rounded-full px-3 py-2 text-sm ${industryActive ? "text-navy" : "text-muted"} hover:text-navy`}
              aria-expanded={industriesOpen}
              aria-controls="industry-menu"
              onClick={() => setIndustriesPath(industriesOpen ? null : pathname)}
            >
              Industries
            </button>
            {industriesOpen ? (
              <div id="industry-menu" className="absolute left-0 top-full z-20 w-72 pt-2">
                <div className="rounded-md border border-line bg-card p-2 shadow-[0_16px_40px_rgba(8,20,36,0.08)]">
                  {industryNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm text-ink hover:bg-paper"
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`rounded-full px-3 py-2 text-sm hover:text-navy ${pathname === item.href ? "text-navy" : "text-muted"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/join"
          className="ml-auto hidden min-h-11 items-center rounded-full bg-navy px-4 text-sm font-medium text-white hover:bg-navy-2 lg:ml-2 lg:inline-flex"
        >
          Join Our Network
        </Link>
        <button
          type="button"
          className="ml-auto inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuPath(menuOpen ? null : pathname)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {menuOpen ? (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-paper px-6 py-4 lg:hidden">
          <p className="text-xs uppercase tracking-[0.18em] text-muted">Industries</p>
          <div className="mt-2 grid gap-1">
            {industryNav.map((item) => (
              <Link key={item.href} href={item.href} className="py-2 text-ink" aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid gap-1 border-t border-line pt-4">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className="py-2 text-ink" aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/join" className="mt-4 inline-flex min-h-11 items-center rounded-full bg-navy px-4 text-sm font-medium text-white">
            Join Our Network
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
