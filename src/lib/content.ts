import type { SectorSlug } from "@/lib/sectors";

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "who",
    question: "Who can ask to join?",
    answer:
      "Experienced specialists, people between roles, freelancers, and professionals changing fields may all apply. So may people whose strength is coordination, writing, or business development, provided they do not present that strength as a license or a technical credential they do not hold. An application is a request to be considered. It is not employment and it is not acceptance.",
  },
  {
    id: "expert",
    question: "Do I need to know every part of a discipline?",
    answer:
      "No. The network is built for complementary skills. You contribute what you can demonstrate, and a qualified person takes the work that requires a specialty or a credential you do not have. Interest in a new field is welcome. Claiming that field as current expertise is not.",
  },
  {
    id: "employment",
    question: "Is membership a job?",
    answer:
      "No. Joining the network does not make you an employee, does not guarantee hours, and does not assign you a project. Employment, if it is ever offered, would be a separate written agreement. Project work depends on fit, client needs, and the agreements in place at the time.",
  },
  {
    id: "teams",
    question: "How are teams formed?",
    answer:
      "A member or the firm identifies an opportunity that matches someone’s real qualifications. The scope is broken into responsibilities. People are invited because they can do a defined part, not because a résumé needs to look larger. The client is told who will do the work when more than one person will touch it.",
  },
  {
    id: "revenue",
    question: "How is revenue shared?",
    answer:
      "By a written agreement for that project. The split should reflect responsibilities, the work actually performed, and any cost the engagement has to carry. There is no standard percentage on this website, and there is no passive share for someone who does not have an agreed role. If the client does not pay, there is nothing to divide.",
  },
  {
    id: "income",
    question: "Are earnings guaranteed?",
    answer:
      "No. Project selection, hiring, and income are not guaranteed. Stories on this site that mention money are individual reports. They are not typical results, not a forecast, and not an offer. Your outcome depends on your qualifications, the work you actually do, the market, and the clients involved.",
  },
  {
    id: "away",
    question: "Can a teammate cover my work while I am away?",
    answer:
      "Sometimes, if the contract allows it, the client authorizes it, and the teammate is qualified for the tasks they will touch. The person who owns the relationship does not disappear. Review, supervision, and any licensed responsibility stay where the agreement and the law put them. Coverage is a plan made in advance, not an assumption that income continues on its own.",
  },
  {
    id: "license",
    question: "Who performs licensed engineering, tax, or attest work?",
    answer:
      "The person who holds the credential and is allowed to do that work in the relevant jurisdiction. In the United States, professional engineering licenses are issued by state boards. Virginia professional engineers are licensed through the APELSCIDLA Board at the Department of Professional and Occupational Regulation. Audits and other attest services follow professional standards and independence rules. Tax returns prepared for compensation belong with preparers who meet IRS requirements. The network does not lend seals or licenses.",
  },
  {
    id: "automation",
    question: "What may automation do?",
    answer:
      "Tools in development may help with searching, filtering, drafting, reminders, and tracking, where a platform’s rules and the law allow it. They must identify the real professional, use true qualifications, and leave judgment with a person. They may not bid as someone else, scrape private data, or ignore a platform’s terms. Members can decline the tools and handle business development themselves.",
  },
  {
    id: "privacy",
    question: "How are client and member information protected?",
    answer:
      "Project details, credentials, and personal circumstances are confidential except where a client has agreed to publication or the law requires disclosure. Forms on this website store what you submit so the inquiry can be reviewed. Read the privacy notice before you submit.",
  },
  {
    id: "business",
    question: "How does a company hire the team?",
    answer:
      "Send an inquiry describing the problem, the timing, and the discipline you think you need. If there is a fit, the next step is a scoped conversation and a written agreement. An inquiry does not reserve engineers, and the firm does not promise that a particular specialist is available.",
  },
  {
    id: "truth",
    question: "What if a profile overstates someone’s experience?",
    answer:
      "It should be corrected before it is sent to a client or a platform. Members may not claim degrees, licenses, tools, or projects they do not have. Marketing help is supposed to make a true record clearer, not a thin record larger.",
  },
];

export const opportunities: {
  id: string;
  sector: SectorSlug;
  title: string;
  summary: string;
  skills: string[];
}[] = [
  {
    id: "opp-sw-review",
    sector: "software",
    title: "Second engineer on an internal web tool",
    summary:
      "A full-stack engineer wants a reviewer for authorization rules and a second pair of hands on the API.",
    skills: ["TypeScript", "API design", "Access control"],
  },
  {
    id: "opp-sw-ai",
    sector: "software",
    title: "Human review for an assistant feature",
    summary:
      "A product team needs someone to define what an assistant may answer and to sample its mistakes.",
    skills: ["Evaluation", "Support operations", "Privacy"],
  },
  {
    id: "opp-hw-firmware",
    sector: "hardware",
    title: "Firmware bring-up beside a board designer",
    summary:
      "A prototype needs firmware paired to a frozen schematic revision.",
    skills: ["Embedded C", "Bench testing", "Revision control"],
  },
  {
    id: "opp-hw-mech",
    sector: "hardware",
    title: "Mechanical review of an enclosure",
    summary:
      "An electronics designer needs a mechanical partner for fit, heat, and assembly.",
    skills: ["CAD", "DFM review", "Thermal basics"],
  },
  {
    id: "opp-cv-draft",
    sector: "civil",
    title: "Drafting support for a licensed engineer",
    summary:
      "Production drawings for a residential addition, reviewed and sealed only by the engineer of record.",
    skills: ["CAD", "Construction documents", "Coordination"],
  },
  {
    id: "opp-cv-drainage",
    sector: "civil",
    title: "Drainage coordination on a small site",
    summary:
      "Grading and stormwater notes prepared for the civil engineer who will sign the set.",
    skills: ["Civil CAD", "Stormwater criteria", "Local submittals"],
  },
  {
    id: "opp-fn-close",
    sector: "finance",
    title: "Monthly close checklist with review",
    summary:
      "A bookkeeper prepares, a reviewer approves, and a developer removes a manual export. This is a close process, not an audit.",
    skills: ["Bookkeeping", "Reconciliations", "Process notes"],
  },
  {
    id: "opp-fn-model",
    sector: "finance",
    title: "Driver-based forecast with visible assumptions",
    summary:
      "An analyst builds scenarios from figures accounting has accepted.",
    skills: ["Financial modeling", "Source tracing", "Writing assumptions"],
  },
];
