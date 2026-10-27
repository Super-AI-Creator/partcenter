export const site = {
  name: "PartCenter",
  shortName: "PartCenter",
  legalName: null as string | null,
  tagline: "Collaboration Creates Opportunity.",
  description:
    "A Virginia-based recruitment and consulting firm where software, hardware, civil engineering, and finance professionals collaborate through clear roles and written agreements.",
  region: "Virginia, United States",
  quote: "Taking a step back allows you to see a much wider world.",
  closingTitle: "Your Next Opportunity Begins With Collaboration.",
  closingLine: "Let's Build Something Greater Together.",
};

export const office = {
  street: "3601 Wilson Boulevard",
  city: "Arlington",
  region: "VA",
  postalCode: "22201",
};

export function officeQuery() {
  return `${office.street}, ${office.city}, ${office.region} ${office.postalCode}`;
}

export const registration = {
  jurisdiction: "Arlington, Virginia",
  sccSearchUrl: "https://cis.scc.virginia.gov/",
  entityId: null as string | null,
  registeredAgent: null as string | null,
  streetAddress: officeQuery(),
  phone: null as string | null,
  publicEmail: null as string | null,
};

export const reported = {
  marketingTeams: 13,
  softwareEngineers: 18,
  softwareTeamFormed: "April 2026",
  civilTeamFormed: "July 2026",
  recognitionYear: 2025,
  recognitionStatement:
    "The firm reports that it was recognized as a consulting company to watch in 2025.",
  recognitionSource: null as string | null,
  recognitionUrl: null as string | null,
};

export const showSampleTestimonials = false;

export function siteOrigin() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteOrigin()).toString();
}

export const mainNav = [
  { href: "/about", label: "About" },
  { href: "/collaboration", label: "How It Works" },
  { href: "/projects", label: "Projects" },
  { href: "/stories", label: "Stories" },
  { href: "/businesses", label: "For Businesses" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const industryNav = [
  { href: "/industries", label: "All industries" },
  { href: "/software", label: "Software & AI" },
  { href: "/hardware", label: "Hardware & Technology" },
  { href: "/civil", label: "Civil & Structural" },
  { href: "/finance", label: "Accounting & Finance" },
] as const;

export const ILLUSTRATIVE_OUTCOME = "";
