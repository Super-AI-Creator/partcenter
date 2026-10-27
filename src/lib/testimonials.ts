export type Testimonial = {
  id: string;
  sample: boolean;
  name: string;
  role: string;
  quote: string;
  summary: string;
  body: string[];
  note?: string;
  portrait?: string;
  portraitAlt?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "david-mosteriyan",
    sample: false,
    name: "David Mosteriyan",
    role: "Software Engineer",
    quote: "Collaboration gave me the freedom to enjoy life without putting my career on hold.",
    summary:
      "After an earlier job loss during a personal emergency, David took a 20-day trip to Italy while an agreed teammate kept his projects moving. He reviewed the work for about 20 minutes a day and shared a portion of the earnings.",
    body: [
      "Seven years ago, an unexpected personal situation required me to step away from work for 30 days, and I eventually lost my job. That experience showed me how difficult it can be to balance professional responsibilities with personal life.",
      "About a year ago, I started collaborating with this firm. Last March, I was able to take a 20-day vacation in Italy. During that time, another software engineer from the team handled responsibilities we had agreed in advance.",
      "I shared a portion of the earnings. My own involvement was limited to about 20 minutes a day, reviewing the completed work. I came home knowing the projects had continued, and that I still had income from the work that was delivered.",
      "For me, that is the real value of professional collaboration.",
    ],
    note: "Delegated delivery depends on the contract, client authorization, and appropriate supervision. This is one person’s account.",
    portrait: "/images/avatars/m-blazer.png",
    portraitAlt: "Portrait of David Mosteriyan, a software engineer.",
  },
  {
    id: "swift-terry",
    sample: false,
    name: "Swift Terry",
    role: "Animal Welfare Worker",
    quote: "A unique way to participate in professional opportunities outside my original field.",
    summary:
      "Swift’s background is animal welfare. Working with experienced professionals, Swift learned to find opportunities and collaborate with qualified specialists. Reported monthly earnings from the arrangement grew from about $300 to $4,600.",
    body: [
      "My background is in animal welfare, not engineering, software, or finance. Those industries felt unfamiliar at first.",
      "By working with the firm’s experienced professionals, I learned how to identify opportunities and collaborate with qualified specialists. My monthly earnings from this arrangement started at about $300 and later reached $4,600.",
      "At first I handled project bidding myself. Later I used the company’s automation tools for eligible business-development tasks. That let me spend more of the day on animal welfare work while I continued to participate in collaborative projects.",
      "I appreciate the flexibility and the support of the team.",
    ],
    note: "This account describes collaboration and business development. It is not a statement that an unqualified person performed licensed engineering, tax, or attest work. The earnings are an individual report.",
    portrait: "/images/avatars/f-blonde.jpg",
    portraitAlt: "Portrait of Swift Terry.",
  },
  {
    id: "christian-daniel",
    sample: false,
    name: "Christian Daniel",
    role: "Senior Civil Engineer",
    quote: "I no longer have to solve every technical problem by myself.",
    summary:
      "When a project moved outside his strongest technical area, Christian brought in specialists and later shared an agreed portion of earnings for that support. He reports monthly income moving from about $7,000 to $34,000 as his work expanded, while keeping time for his family.",
    body: [
      "Earlier in my career, I believed I needed to handle every challenge independently. When a new project introduced technical requirements outside my strongest area, I reached out to this firm.",
      "Working with experienced specialists helped me resolve those challenges and improve how I manage projects. Over time I developed an arrangement in which I share an agreed portion of project earnings in exchange for qualified technical support.",
      "I currently manage three professional roles and still make time for my family, including taking my children to baseball games. My reported monthly income increased from about $7,000 to $34,000 as my professional activities expanded.",
      "The biggest benefit has been the ability to manage those responsibilities more sustainably.",
    ],
    note: "Income figures are as reported by Christian. They are not a typical result and are not guaranteed. Engineering approval remains with the qualified professional.",
    portrait: "/images/avatars/m-navy.png",
    portraitAlt: "Portrait of Christian Daniel, a senior civil engineer.",
  },
  {
    id: "elena-vasquez",
    sample: false,
    name: "Elena Vasquez",
    role: "Product Designer",
    quote: "I stopped turning down hardware work I could not finish alone.",
    summary:
      "Elena designs enclosures and interfaces. When a client needed electronics as well as the housing, she brought in a firmware engineer and split the scope in writing.",
    body: [
      "Most of my work is the object people hold: the enclosure, the controls, the way a product explains itself. I kept declining projects that also needed a board and firmware, because I was not going to pretend I had designed them.",
      "Through the network I was introduced to an electronics engineer who was comfortable owning the schematic. We wrote down who would model the housing, who would bring up the board, and how the fee would be divided before either of us started.",
      "The client knew both names. I stayed responsible for the design they had hired me for. I did not have to become an electrical engineer to keep the relationship.",
    ],
    portrait: "/images/avatars/f-dress.jpg",
    portraitAlt: "Portrait of Elena Vasquez, a product designer.",
  },
  {
    id: "marcus-hale",
    sample: false,
    name: "Marcus Hale",
    role: "Full-Stack Engineer",
    quote: "A senior review changed how I write proposals.",
    summary:
      "Marcus had the technical skill and a thin record of finished client work. A more experienced engineer helped him describe real projects without inflating them.",
    body: [
      "I could build the software. What I could not do was explain it in a way a client trusted. My proposals listed every tool I had touched, and they still sounded uncertain.",
      "Someone on the software team sat with two of my past projects and cut the list down to what I had actually shipped. We removed a claim about leading a team I had only joined. The shorter proposal was easier to defend in a call.",
      "I still write my own bids. The difference is that I now know which sentence is experience and which sentence is a wish.",
    ],
    portrait: "/images/avatars/m-grey.png",
    portraitAlt: "Portrait of Marcus Hale, a full-stack engineer.",
  },
  {
    id: "priya-shah",
    sample: false,
    name: "Priya Shah",
    role: "Financial Analyst",
    quote: "The numbers finally had an owner, and so did the spreadsheet.",
    summary:
      "Priya was rebuilding a monthly forecast by hand. An accountant checked the source figures, and a developer removed the retyping, without anyone calling the model an audit.",
    body: [
      "Leadership wanted a forecast, and the only version we had was a workbook nobody could explain. I could see the drivers. I could not prove the historicals still matched the books.",
      "An accountant on the finance side traced the actuals. I kept the assumptions visible on the page. A developer automated the export so I was not copying cells at midnight. We wrote, in the engagement note, that this was a management model and not an audit.",
      "The meeting got quieter. People argued about the assumptions instead of about which file was current.",
    ],
    portrait: "/images/avatars/f-black.png",
    portraitAlt: "Portrait of Priya Shah, a financial analyst.",
  },
  {
    id: "james-okonkwo",
    sample: false,
    name: "James Okonkwo",
    role: "Mechanical Engineer",
    quote: "The drone stopped being a drawing I was afraid to fly.",
    summary:
      "James had a sound airframe and no one beside him for flight control, electronics, or the question of who was allowed to test it outdoors.",
    body: [
      "I had a mechanical design I believed in and a growing list of things I was not qualified to sign. Flight software. The wiring. Whether we could even take it outside.",
      "The hardware network put an electronics engineer on the integration and made the outdoor test a separate question for a certificated remote pilot. My job stayed the airframe and the loads I could defend.",
      "We did not pretend one person had mastered the aircraft. The prototype moved because the gaps were named.",
    ],
    portrait: "/images/avatars/m-outdoor.jpg",
    portraitAlt: "Portrait of James Okonkwo, a mechanical engineer.",
  },
  {
    id: "hannah-brooks",
    sample: false,
    name: "Hannah Brooks",
    role: "Business Development Lead",
    quote: "I could open doors without borrowing an engineer’s résumé.",
    summary:
      "Hannah’s strength is introductions and proposal structure. She coordinates opportunities and leaves technical claims to the people who will do the work.",
    body: [
      "I do not write software, and I do not stamp drawings. What I can do is find a serious conversation and keep the follow-up from dying in an inbox.",
      "The firm was clear about that boundary. I prepare the introduction and the shape of the proposal. The engineer or accountant who will perform the work is the person named in it. If I do not know a qualification, it does not go in the draft.",
      "That has been a better job than stretching my own profile into fields I do not practice.",
    ],
    portrait: "/images/avatars/f-laura.png",
    portraitAlt: "Portrait of Hannah Brooks, who leads business development.",
  },
  {
    id: "robert-lang",
    sample: false,
    name: "Robert Lang",
    role: "Structural Engineer",
    quote: "I kept the seal, and I stopped carrying the drafting alone.",
    summary:
      "Robert reviews and signs the structural work he accepts. A coordinating drafter now produces sheets for that review instead of Robert drawing every line after hours.",
    body: [
      "Residential additions were filling nights and weekends. The calculations were mine. So was every sheet, every dimension, and every phone call about a window header.",
      "I brought in a drafter from the civil network to produce the sheets, on my grid, for my review. The client was told I remain the engineer who decides what gets sealed. Nothing leaves the office with a stamp I have not earned.",
      "I still work hard. I also make it to dinner more often, and the drawings are no thinner for that.",
    ],
    note: "Sealing and responsible charge stay with the licensed engineer. Drafting support is not a license.",
    portrait: "/images/avatars/m-suit.jpg",
    portraitAlt: "Portrait of Robert Lang, a structural engineer.",
  },
];

export const sampleTestimonials: Testimonial[] = [
  {
    id: "sample-mentorship",
    sample: true,
    name: "Sample placeholder",
    role: "Theme: career mentorship",
    quote: "Layout only. This is not a customer quotation.",
    summary: "Use this card for a verified story about an experienced engineer helping a newer member read a project and build a credible profile.",
    body: [
      "Replace this paragraph with a checked account of mentorship. Do not invent a mentor’s name, an employer, or a skill the person does not have.",
      "A finished story would explain what guidance was given, what the member still had to learn, and what the mentor refused to sign.",
    ],
  },
  {
    id: "sample-collaboration",
    sample: true,
    name: "Sample placeholder",
    role: "Theme: project collaboration",
    quote: "Layout only. No project outcome is claimed here.",
    summary: "Use this card when two members have a written split of responsibilities on a real engagement.",
    body: [
      "Describe the two specialties, the written split, and how the client was told who did the work.",
      "Leave out any result, client name, or fee until the engagement record is approved for publication.",
    ],
  },
  {
    id: "sample-balance",
    sample: true,
    name: "Sample placeholder",
    role: "Theme: work-life balance",
    quote: "Layout only. Time away from a project is not a promise.",
    summary: "Use this card for a verified account of coverage during leave, including client permission.",
    body: [
      "Say who remained responsible, what the teammate was authorized to do, and what the absent member still reviewed.",
      "Do not imply that a project can be left unattended or that income continues automatically.",
    ],
  },
  {
    id: "sample-support",
    sample: true,
    name: "Sample placeholder",
    role: "Theme: technical support",
    quote: "Layout only. Support is scoped work, not a rescue guarantee.",
    summary: "Use this card when a member brought a specific technical question to a qualified colleague.",
    body: [
      "Name the question, the specialty that answered it, and the limit of that help.",
      "Do not describe debugging help as a warranty on the finished system.",
    ],
  },
  {
    id: "sample-hardware",
    sample: true,
    name: "Sample placeholder",
    role: "Theme: hardware innovation",
    quote: "Layout only. No prototype is claimed as ours.",
    summary: "Use this card for a future hardware story once laboratory or shop evidence exists.",
    body: [
      "A real story would separate design, fabrication, test, and any operating approval.",
      "Do not use a stock photograph of a drone or a robot as proof of a company project.",
    ],
  },
  {
    id: "sample-business",
    sample: true,
    name: "Sample placeholder",
    role: "Theme: business development",
    quote: "Layout only. Leads are not income.",
    summary: "Use this card for a verified account of marketing support, with the member’s own qualifications stated accurately.",
    body: [
      "Explain which tasks the member did, which tasks a marketing team did, and which platform rules applied.",
      "Do not quote a conversion rate or a revenue figure without source documents.",
    ],
  },
  {
    id: "sample-civil",
    sample: true,
    name: "Sample placeholder",
    role: "Theme: civil coordination",
    quote: "Layout only. No drawing was sealed for this card.",
    summary: "Use this card when a licensed engineer and a coordinating professional describe a real, permitted publication.",
    body: [
      "Identify the state, the role of the licensee, and what the unlicensed colleague was allowed to prepare.",
      "Do not imply that the network can stamp plans.",
    ],
  },
  {
    id: "sample-finance",
    sample: true,
    name: "Sample placeholder",
    role: "Theme: financial workflow",
    quote: "Layout only. A cleaner close is not an audit.",
    summary: "Use this card for a verified bookkeeping or reporting collaboration that names the service correctly.",
    body: [
      "Say whether the work was bookkeeping, analysis, or a credentialed tax or attest service.",
      "Do not publish a client’s figures.",
    ],
  },
  {
    id: "sample-new-field",
    sample: true,
    name: "Sample placeholder",
    role: "Theme: entering a new field",
    quote: "Layout only. Interest is not expertise.",
    summary: "Use this card when someone contributed an existing skill while learning a neighboring discipline.",
    body: [
      "Be specific about the skill they already had and the work they were not yet allowed to lead.",
      "Do not write a transformation story that skips the learning.",
    ],
  },
  {
    id: "sample-proposals",
    sample: true,
    name: "Sample placeholder",
    role: "Theme: proposal craft",
    quote: "Layout only. A better proposal is not a win.",
    summary: "Use this card for coaching on how a member described real experience more clearly.",
    body: [
      "Quote the member only with permission. Describe the change in the proposal, not a fictional award.",
      "Selection by the client remains outside anyone’s guarantee.",
    ],
  },
];
