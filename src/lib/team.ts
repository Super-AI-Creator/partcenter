export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  portrait: string;
  portraitAlt: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Amira Hassan",
    role: "Software engineering",
    focus: "Web platforms and the review of what an assistant is allowed to answer.",
    portrait: "/images/team/lilly-indriago.jpg",
    portraitAlt: "Portrait of Amira Hassan.",
  },
  {
    name: "Noah Pell",
    role: "Software engineering",
    focus: "Cloud infrastructure, deployment, and the handoff between environments.",
    portrait: "/images/team/gabriel.jpg",
    portraitAlt: "Portrait of Noah Pell.",
  },
  {
    name: "Sofia Almeida",
    role: "Marketing and member support",
    focus: "Profiles, interview preparation, and introductions that match real experience.",
    portrait: "/images/team/maria-kieval.jpg",
    portraitAlt: "Portrait of Sofia Almeida.",
  },
  {
    name: "Daniel Cho",
    role: "Electronics",
    focus: "Boards, bring-up, and firmware tied to a frozen hardware revision.",
    portrait: "/images/team/martin-dupont.jpg",
    portraitAlt: "Portrait of Daniel Cho.",
  },
  {
    name: "Lin Zhao",
    role: "Mechanical design",
    focus: "CAD, enclosures, and simulation that still gets a second engineering review.",
    portrait: "/images/team/maria-mastroianni.jpg",
    portraitAlt: "Portrait of Lin Zhao.",
  },
  {
    name: "Owen Clarke",
    role: "Civil coordination",
    focus: "Drawing production and site coordination for the engineer who will sign.",
    portrait: "/images/team/owen-clarke.jpg",
    portraitAlt: "Portrait of Owen Clarke.",
  },
  {
    name: "Maya Ellison",
    role: "Accounting",
    focus: "Close checklists, reconciliations, and reports a reviewer can trace.",
    portrait: "/images/team/natalie-picot.jpg",
    portraitAlt: "Portrait of Maya Ellison.",
  },
  {
    name: "Andre Blake",
    role: "Project coordination",
    focus: "Scopes, client updates, and the written split of who owns each part.",
    portrait: "/images/team/andre-blake.jpg",
    portraitAlt: "Portrait of Andre Blake.",
  },
];
