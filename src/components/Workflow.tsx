const steps = [
  {
    title: "Introduce a true record",
    body: "You describe your background, the work you can demonstrate, and the work you are still learning. Licenses and tools are listed only when you hold them.",
  },
  {
    title: "Look at suitable work",
    body: "Marketing and human resources teams can help with visibility, introductions, interview preparation, and filtering. They do not promise that a client will choose you.",
  },
  {
    title: "Form a team around the scope",
    body: "If a project needs more than one specialty, the people invited are the ones who can actually do a defined part. Roles are written down.",
  },
  {
    title: "Agree the money before the work",
    body: "Compensation follows responsibilities and the work performed. There is no universal split, and nothing is owed for a role that was never agreed.",
  },
  {
    title: "Get permission to share delivery",
    body: "When someone other than the contracted professional will perform part of the work, the client authorizes that arrangement if the contract or the relationship requires it.",
  },
  {
    title: "Deliver, review, and keep the record",
    body: "The qualified person stays responsible for the part they own. Licensed approval stays with the licensee. Confidential client material stays confidential.",
  },
];

export function Workflow() {
  return (
    <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-md border border-line bg-card p-5">
          <p className="font-serif text-3xl text-teal">0{index + 1}</p>
          <h3 className="mt-3 font-serif text-2xl text-navy">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
