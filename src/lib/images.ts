export type PhotoAsset = {
  src: string;
  alt: string;
  caption: string;
};

const caption = "";

export const photos = {
  hero: {
    src: "/images/hero-team.jpg",
    alt: "Several colleagues gathered around a laptop in a bright office, talking through work on the screen.",
    caption,
  },
  pairing: {
    src: "/images/pairing.jpg",
    alt: "Two people seated together at a desk, looking at the same laptop.",
    caption,
  },
  workshop: {
    src: "/images/workshop.jpg",
    alt: "A small group in a meeting room, one person pointing at a laptop while others listen.",
    caption,
  },
  code: {
    src: "/images/code.jpg",
    alt: "A close view of a monitor filled with software code.",
    caption,
  },
  circuit: {
    src: "/images/circuit.jpg",
    alt: "A macro photograph of a green printed circuit board and its components.",
    caption,
  },
  drone: {
    src: "/images/drone.jpg",
    alt: "A small multirotor aircraft hovering outdoors against a pale sky.",
    caption,
  },
  robot: {
    src: "/images/robot.jpg",
    alt: "A white humanoid robot standing in a laboratory space.",
    caption,
  },
  bench: {
    src: "/images/bench.jpg",
    alt: "An engineer at a workbench using a laptop beside technical equipment.",
    caption,
  },
  blueprints: {
    src: "/images/blueprints.jpg",
    alt: "Architectural drawings spread across a table with a pencil and a scale.",
    caption,
  },
  construction: {
    src: "/images/construction.jpg",
    alt: "A building under construction, seen from outside the structural frame.",
    caption,
  },
  siteReview: {
    src: "/images/site-review.jpg",
    alt: "People wearing hard hats reviewing work on a construction site.",
    caption,
  },
  reports: {
    src: "/images/reports.jpg",
    alt: "A person reviewing printed financial documents beside a calculator.",
    caption,
  },
  analytics: {
    src: "/images/analytics.jpg",
    alt: "A laptop on a desk showing charts and a notebook beside it.",
    caption,
  },
  office: {
    src: "/images/office.jpg",
    alt: "A quiet modern office interior with desks and large windows.",
    caption,
  },
  conversation: {
    src: "/images/conversation.jpg",
    alt: "Two professionals seated across a table in conversation.",
    caption,
  },
  engineering: {
    src: "/images/engineering.jpg",
    alt: "An engineer in a workshop environment beside industrial equipment.",
    caption,
  },
  financeDesk: {
    src: "/images/finance-desk.jpg",
    alt: "Hands working through notes and a laptop at a wooden desk.",
    caption,
  },
  teamTable: {
    src: "/images/people/team-table.jpg",
    alt: "Professionals seated around a table with laptops, working together in a bright office.",
    caption,
  },
  workshopLive: {
    src: "/images/people/workshop-live.jpg",
    alt: "A woman presenting sticky notes on a wall while colleagues sit around a conference table with laptops.",
    caption,
  },
} as const satisfies Record<string, PhotoAsset>;
