export type SectorSlug = "software" | "hardware" | "civil" | "finance";

export type SourceRef = {
  label: string;
  href: string;
  note: string;
};

export type Sector = {
  slug: SectorSlug;
  href: string;
  name: string;
  shortName: string;
  number: string;
  status: string;
  headline: string;
  cta: string;
  metaTitle: string;
  metaDescription: string;
  lede: string;
  questions: string[];
  story: string[];
  capabilities: { title: string; detail: string }[];
  practices: { title: string; detail: string }[];
  collaboration: string[];
  credentialTitle: string;
  credential: string;
  image: "pairing" | "drone" | "blueprints" | "reports";
  imageAlt: string;
  sources: SourceRef[];
};

export const sectors: Sector[] = [
  {
    slug: "software",
    href: "/software",
    name: "Software Engineering & AI Development",
    shortName: "Software & AI",
    number: "01",
    status: "In-house team of 18 engineers, formed April 2026",
    headline: "Your Skills. Our Network. Greater Opportunities.",
    cta: "Join Our Software Network",
    metaTitle: "Software Engineering & AI",
    metaDescription:
      "Software, AI, cloud, and cybersecurity collaboration for engineers who want a professional network, honest credentials, and shared delivery.",
    lede: "Skilled software engineers still miss the right work: between roles, changing fields, or watching freelance income arrive and then stop. This division exists so that problem is not carried alone.",
    questions: [
      "Are you a skilled software engineer who has struggled to find the right opportunity?",
      "Are you unemployed, changing careers, or finding it difficult to keep a freelance practice moving?",
    ],
    story: [
      "Thirteen specialized marketing and human resources teams across the United States help participating professionals present their experience, look for relevant openings, prepare for interviews, strengthen profiles, and make introductions to clients and employers. That support is practical. It is not a promise that a particular application will be selected.",
      "The in-house software group, formed in April 2026, includes 18 engineers. Their work covers artificial intelligence and machine learning, large language models and AI agents, web and mobile products, full-stack engineering, cloud infrastructure and DevOps, cybersecurity, APIs and system integration, business automation, database architecture, and enterprise software.",
      "Several people on the team have more than a decade of freelance and professional development experience. That experience is available as guidance: how to describe a real body of work, how to read a project before bidding, and how to build a skill that a client can verify.",
    ],
    capabilities: [
      { title: "Artificial intelligence", detail: "Applied machine learning, language-model features, and agent workflows with a defined task, a data boundary, and a human reviewer." },
      { title: "Web and mobile", detail: "Full-stack applications, modernization of existing products, and interfaces built to be usable with a keyboard and a screen reader." },
      { title: "Cloud and integration", detail: "Infrastructure, deployment, APIs, and the connections between systems a business already runs." },
      { title: "Cybersecurity", detail: "Defensive improvements organized around recognized outcomes: knowing what you have, protecting it, detecting trouble, and recovering." },
      { title: "Data and enterprise systems", detail: "Database design, internal tools, and software that has to fit an existing operation rather than replace it overnight." },
    ],
    practices: [
      {
        title: "AI with a named reviewer",
        detail:
          "NIST’s AI Risk Management Framework (AI 100-1) is voluntary guidance. Its core functions are Govern, Map, Measure, and Manage. Trustworthy AI, in that document, is valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy-enhanced, and fair, with harmful bias managed. We use those words to agree what a system may do. We do not claim the framework as a certification.",
      },
      {
        title: "Security as risk management",
        detail:
          "The NIST Cybersecurity Framework 2.0 organizes outcomes into six functions: Govern, Identify, Protect, Detect, Respond, and Recover. It does not prescribe a single control list. Cybersecurity work in this network is defensive: assessments, hardening, monitoring, and recovery planning. It is not offensive testing described as a productized attack.",
      },
      {
        title: "Web risk and accessibility",
        detail:
          "Application reviews can be discussed against the OWASP Top 10 categories of common web risks, and interface quality against the W3C Web Content Accessibility Guidelines (WCAG) 2.2. Naming a standard is the start of a scope. It is not a claim that every screen is certified.",
      },
    ],
    collaboration: [
      "A project often asks for a stack outside one person’s strongest area. Rejecting it, or quietly taking all of it, are not the only choices. Two qualified engineers can split the work, write down who owns which part, and agree how the fee is divided before the work starts.",
      "Support can be narrow: a debugging session, an architecture review, an AI integration, a security pass, or a deployment plan. The person whose name is on the client relationship stays responsible for what the client was promised, and for getting permission before someone else performs the work.",
    ],
    credentialTitle: "Say what you can actually do",
    credential:
      "Proposals and profiles must name the real person, the real skills, and the real limits. Automation may help find and draft. It may not apply as someone else, invent a seniority, or hide who will do the work. Client permission is required when delivery is shared.",
    image: "pairing",
    imageAlt: "Two people working side by side at a laptop.",
    sources: [
      {
        label: "NIST AI Risk Management Framework 1.0",
        href: "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10",
        note: "Voluntary framework. Functions: Govern, Map, Measure, Manage. Published January 2023 as NIST AI 100-1.",
      },
      {
        label: "NIST Cybersecurity Framework 2.0",
        href: "https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20",
        note: "Voluntary outcomes for managing cybersecurity risk. Six functions, including Govern. NIST CSWP 29, February 2024.",
      },
      {
        label: "OWASP Top 10",
        href: "https://owasp.org/www-project-top-ten/",
        note: "A widely used list of common web application security risk categories.",
      },
      {
        label: "WCAG 2.2",
        href: "https://www.w3.org/TR/WCAG22/",
        note: "W3C recommendation for making web content more accessible.",
      },
    ],
  },
  {
    slug: "hardware",
    href: "/hardware",
    name: "Hardware, Electronics & Advanced Technology",
    shortName: "Hardware & Technology",
    number: "02",
    status: "Division in formation",
    headline: "Transform Complex Ideas Into Real-World Innovation.",
    cta: "Explore Hardware & Engineering Opportunities",
    metaTitle: "Hardware & Advanced Technology",
    metaDescription:
      "A forming network for aerospace, drones, electronics, robotics, CNC, and mechanical design, with work divided by real specialty.",
    lede: "Physical products fail in the gaps between disciplines. A sound mechanical idea still needs electronics, firmware, a way to manufacture it, and, if it flies, an operating approval. This division is being built to connect those specialties.",
    questions: [
      "Are you a mechanical designer who needs an electronics partner, or a software engineer moving into embedded systems?",
      "Do you have a product that no single résumé can honestly cover?",
    ],
    story: [
      "The hardware and advanced technology division is in formation. It is not presented here as a fully staffed laboratory, and this site does not publish a headcount for it. The intent is a network of engineers and designers in aerospace and space systems, unmanned aircraft, embedded systems and firmware, PCB design, robotics and industrial automation, CNC and manufacturing, mechanical design and CAD, prototyping, simulation, mechatronics, and connected devices.",
      "A drone project is the clearest picture of the model. Flight dynamics, the airframe, the electronics, the flight software, and the legal authority to fly are different kinds of work. The network’s job is to put the right person on each part, with the client told who is doing what.",
    ],
    capabilities: [
      { title: "Aerospace and unmanned aircraft", detail: "Airframes, flight-control integration, and the distinction between designing a vehicle and operating it in US airspace." },
      { title: "Electronics and firmware", detail: "Boards, embedded controllers, and the firmware that has to be tested against the hardware, not only compiled." },
      { title: "Robotics and automation", detail: "Mechanisms, controls, and industrial cells planned with safety standards named in the scope." },
      { title: "Mechanical design", detail: "CAD, prototyping, CNC-aware design, and simulation used as an aid to engineering judgment." },
      { title: "Connected products", detail: "Sensors, enclosures, and the software boundary of a device that leaves the lab." },
    ],
    practices: [
      {
        title: "Commercial drone operations",
        detail:
          "Under FAA rules, many work or business flights of a small unmanned aircraft under 55 pounds follow 14 CFR Part 107. That usually means a certificated remote pilot, a registered aircraft, and attention to airspace, waivers, and operating limits. Designing the vehicle and being allowed to fly it are separate questions. This firm does not claim a blanket FAA authorization.",
      },
      {
        title: "Electronics and enclosures",
        detail:
          "Electronics teams commonly inspect assemblies against IPC acceptability standards, including IPC-A-610 for electronic assemblies. Enclosure sealing is often specified with IEC 60529 IP codes. We cite those references so a scope can name an acceptance target. Citing them is not a claim that this website holds a product certification.",
      },
      {
        title: "Robots, CNC, and simulation",
        detail:
          "Industrial robot safety is addressed by standards such as the ISO 10218 series. CNC and mechanical work depend on materials, tolerances, and how a part will actually be made. Finite element analysis approximates a design under stated loads. A stress plot is not, by itself, evidence that a part is safe. Models need checking by someone qualified to judge them.",
      },
    ],
    collaboration: [
      "Members can join a multidisciplinary project at the level of skill they can demonstrate, and learn the neighboring discipline from the person who owns it. A software engineer does not have to become an aerospace engineer to contribute flight software, and should not sign for the aerodynamic conclusion.",
      "Learning is part of the work. Pretending is not. If a task needs a specialty or a credential you do not have, that task is assigned to someone who does, and the client agrees to the assignment.",
    ],
    credentialTitle: "Physical products carry physical duties",
    credential:
      "Flight operations, safety-critical controls, and anything a regulator or a buyer must approve stay with the person qualified to own them. Collaboration can shorten the distance between specialties. It cannot lend a remote-pilot certificate, a professional engineer’s seal, or a test result the team did not produce.",
    image: "drone",
    imageAlt: "A small unmanned aircraft in flight.",
    sources: [
      {
        label: "FAA — certificated remote pilots",
        href: "https://www.faa.gov/uas/commercial_operators",
        note: "Part 107 is the usual US path for commercial small unmanned aircraft under 55 pounds, including pilot certification and registration.",
      },
      {
        label: "14 CFR Part 107",
        href: "https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-107",
        note: "The regulation itself, including operating limits and the definition of a small unmanned aircraft.",
      },
      {
        label: "IPC",
        href: "https://www.ipc.org/",
        note: "Association that publishes electronics manufacturing standards. IPC-A-610 covers acceptability of electronic assemblies.",
      },
      {
        label: "ISO 10218",
        href: "https://www.iso.org/standard/73933.html",
        note: "Industrial robot safety. Requirements for industrial environments are in the current ISO 10218 series. Not a certification held by this site.",
      },
    ],
  },
  {
    slug: "civil",
    href: "/civil",
    name: "Civil & Structural Engineering",
    shortName: "Civil & Structural",
    number: "03",
    status: "Team formed July 2026",
    headline: "Engineering Stronger Projects Through Collaboration.",
    cta: "Join Our Civil Engineering Network",
    metaTitle: "Civil & Structural Engineering",
    metaDescription:
      "Civil and structural collaboration for site work, buildings, drainage, and documents, with licensure and responsible charge kept where the law puts them.",
    lede: "Civil and structural projects cross design standards, local amendments, and more than one discipline. Skill in one of those areas does not automatically cover the others. Coordination is part of the engineering.",
    questions: [
      "Are you strong in site development and looking for structural support on the same project?",
      "Do you practice in residential work and need a colleague for a commercial condition you do not regularly design?",
    ],
    story: [
      "The civil engineering team was formed in July 2026. The network includes people working in residential and commercial structural engineering, civil site development, architectural and MEP coordination, foundations and framing, structural analysis, drainage and stormwater, grading and infrastructure, CAD and BIM, construction documents, engineering review, building-code compliance, and permit sets.",
      "A residential addition is a typical coordination problem, not a single drawing. It may need architectural drawings, structural calculations, a foundation design, and MEP coordination. Specialists can each take the part they are qualified to take. The project is stronger when those parts are explicit.",
    ],
    capabilities: [
      { title: "Structures", detail: "Residential and commercial structural analysis, framing, foundations, and rehabilitation concepts developed under a qualified engineer." },
      { title: "Site civil", detail: "Grading, drainage, stormwater, and infrastructure planning coordinated with the authority that will actually review the plans." },
      { title: "Documentation", detail: "CAD, BIM, construction documents, and permit sets prepared for the person who will sign them." },
      { title: "Coordination", detail: "Architectural, structural, and MEP interfaces checked before they become field conflicts." },
      { title: "Review", detail: "Calculation checking and quality review as a separate act from producing the original design." },
    ],
    practices: [
      {
        title: "Licensure is state by state",
        detail:
          "There is no single nationwide professional engineer license. NCEES describes a common path — an ABET/EAC-accredited degree, progressive experience, and the FE and PE exams — and tells candidates to verify the rules of the state where they will practice. Many states offer additional paths. Health, safety, and welfare are the reason the license exists.",
      },
      {
        title: "Virginia’s board",
        detail:
          "In Virginia, the Board for Architects, Professional Engineers, Land Surveyors, Certified Interior Designers and Landscape Architects (APELSCIDLA), within the Department of Professional and Occupational Regulation, licenses professional engineers and related business entities. A collaboration does not create a license, a seal, or the right to assume responsible charge.",
      },
      {
        title: "Codes are adopted locally",
        detail:
          "The International Building Code, published by the International Code Council, and ASCE/SEI 7, the widely used standard for minimum design loads, are reference points for building design in much of the United States. The edition that governs a project is the one the authority having jurisdiction has adopted, including local amendments. We do not claim that one code year covers every county.",
      },
    ],
    collaboration: [
      "A civil engineer and a structural engineer can divide a project without either person pretending to lead the other’s discipline. Drafting, research, and coordination can be shared. Sealing, responsible charge, and engineering approval cannot be borrowed.",
      "All work that requires professional licensure or engineering approval stays with a properly qualified and authorized professional, under the law of the state where the project sits, and with the client informed.",
    ],
    credentialTitle: "The seal stays with the licensee",
    credential:
      "If a member is not licensed in the relevant state, that member does not stamp drawings, does not offer engineering to the public in a way that state law reserves to licensees, and does not describe review comments as an approval. The licensed professional remains in responsible charge of the work they sign.",
    image: "blueprints",
    imageAlt: "Engineering drawings spread on a table.",
    sources: [
      {
        label: "NCEES licensure",
        href: "https://ncees.org/licensure/",
        note: "Common path and the reminder that each US state and territory sets its own requirements.",
      },
      {
        label: "Virginia DPOR — APELSCIDLA Board",
        href: "https://www.dpor.virginia.gov/boards/apels/",
        note: "Virginia licensing board for architects, professional engineers, land surveyors, and related professions.",
      },
      {
        label: "International Building Code",
        href: "https://www.iccsafe.org/products-and-services/i-codes/ibc/",
        note: "Model building code developed by the International Code Council. Local adoption controls.",
      },
      {
        label: "ASCE/SEI 7",
        href: "https://www.asce.org/publications-and-news/codes-and-standards/asce-7",
        note: "Minimum design loads and associated criteria for buildings and other structures.",
      },
    ],
  },
  {
    slug: "finance",
    href: "/finance",
    name: "Accounting, Finance & Business Analytics",
    shortName: "Accounting & Finance",
    number: "04",
    status: "Division in formation",
    headline: "Better Financial Solutions Through Shared Expertise.",
    cta: "Explore Finance Collaboration",
    metaTitle: "Accounting & Finance",
    metaDescription:
      "A forming practice for bookkeeping, reporting, forecasting, and analytics, with attest and tax work reserved for properly credentialed professionals.",
    lede: "Financial work depends on accuracy, judgment, and knowing which service you are actually providing. A bookkeeper, an analyst, a tax professional, and a software engineer can help one another. They are not interchangeable.",
    questions: [
      "Have you met a tax question, a reporting standard, or a data problem that sits outside your daily work?",
      "Do you want analysts, accountants, and developers coordinating, instead of each rebuilding the same spreadsheet?",
    ],
    story: [
      "The accounting and finance division is being developed. It is not described here as a CPA firm, and this site does not claim an attest practice. The aim is to connect qualified professionals across bookkeeping and financial accounting, tax preparation and tax-planning support, financial reporting, revenue and profitability analysis, modeling, budgeting and forecasting, cost analysis, valuation support, payroll analysis, dashboards, accounting systems, and data analytics.",
      "An experienced bookkeeper may need a credentialed colleague for a tax matter. An analyst may need an accountant to explain the source of a number, or a developer to stop a monthly export from being retyped. The ecosystem we are building is that handoff, done in the open.",
    ],
    capabilities: [
      { title: "Records and close", detail: "Bookkeeping, reconciliations, and the monthly information a manager can actually read." },
      { title: "Reporting and analysis", detail: "Management reports, profitability, cost, and forecasts with the assumptions written down." },
      { title: "Tax workflow", detail: "Preparation support coordinated with a credentialed preparer. This page does not offer to represent a taxpayer before the IRS." },
      { title: "Systems", detail: "Accounting software, workflow automation, and dashboards that trace a figure back to a source." },
      { title: "Decision support", detail: "Models and scenarios for planning. A model is a set of assumptions, not a prediction of profit." },
    ],
    practices: [
      {
        title: "Attest is a different service",
        detail:
          "AICPA attestation standards cover examinations, reviews, and agreed-upon procedures. Independence applies when a firm performs an attest engagement. Bookkeeping, financial-statement preparation, and many tax services are nonattest services. Doing the books is not an audit, and this firm does not advertise it as one.",
      },
      {
        title: "US GAAP has an address",
        detail:
          "For companies reporting under US generally accepted accounting principles, the FASB Accounting Standards Codification is the source of those standards. Management reports can be useful without being GAAP financial statements. The engagement should say which one is being prepared.",
      },
      {
        title: "Tax credentials",
        detail:
          "The IRS distinguishes tax return preparer credentials. Compensation for preparing returns, and any representation before the IRS, belong with people who meet the applicable preparer rules. Collaboration can organize documents and checks. It cannot lend a CPA license, an enrolled agent credential, or a law license.",
      },
    ],
    collaboration: [
      "Members coordinate so a financial question reaches the person qualified to answer it, and so developers automating a report do not silently change what the number means.",
      "Regulated tax, audit, attest, and accounting services are handled by appropriately credentialed professionals where the law or the standards require it. The client is told which service they are buying.",
    ],
    credentialTitle: "Name the service accurately",
    credential:
      "A dashboard is not an audit. A bookkeeping file is not a tax opinion. A forecast is not a promise of revenue. If the work needs a credential this network has not confirmed, the work is referred to someone who holds it, or it is not offered.",
    image: "reports",
    imageAlt: "A person reviewing financial papers at a desk.",
    sources: [
      {
        label: "AICPA Plain English Guide to Independence",
        href: "https://pub.aicpa.org/codeofconduct/ethicsresources/Plain_English_Guide_to_Independence.pdf",
        note: "Explains that independence is required for attest engagements, and that bookkeeping and tax preparation are examples of nonattest services.",
      },
      {
        label: "FASB Accounting Standards Codification",
        href: "https://www.fasb.org/standards",
        note: "Source of authoritative US GAAP for nongovernmental entities.",
      },
      {
        label: "IRS — tax return preparer credentials",
        href: "https://www.irs.gov/tax-professionals/understanding-tax-return-preparer-credentials-and-qualifications",
        note: "How the IRS describes preparer credentials and qualifications.",
      },
    ],
  },
];

export function getSector(slug: SectorSlug) {
  const sector = sectors.find((item) => item.slug === slug);
  if (!sector) throw new Error(`Unknown sector: ${slug}`);
  return sector;
}
