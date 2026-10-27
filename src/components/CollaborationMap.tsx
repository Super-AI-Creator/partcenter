const stages = [
  {
    who: "You",
    title: "Name the skill you can show",
    body: "Marketing, design, engineering, coordination, or analysis. Only the work you can actually do.",
  },
  {
    who: "A colleague",
    title: "They take the part you should not claim",
    body: "If the project needs a license or a specialty you do not have, that person owns it.",
  },
  {
    who: "The client",
    title: "They see both names first",
    body: "The client is told who will do each part before the work starts. Nothing is hidden behind one résumé.",
  },
  {
    who: "The agreement",
    title: "The fee follows the work",
    body: "The split is written down for that project. There is no standard percentage, and joining does not pay you.",
  },
];

export function CollaborationMap() {
  return (
    <div>
      <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage, index) => (
          <li key={stage.who} className="relative rounded-md border border-line bg-card p-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy font-serif text-lg text-white">
                {index + 1}
              </span>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-teal">{stage.who}</p>
            </div>
            <h3 className="mt-4 font-serif text-2xl leading-snug text-navy">{stage.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{stage.body}</p>
            {index < stages.length - 1 ? (
              <span className="mt-4 hidden text-sm font-medium text-teal xl:absolute xl:top-7 xl:-right-3 xl:mt-0 xl:block" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <figure className="mt-8 overflow-hidden rounded-md border border-line bg-white">
        <figcaption className="border-b border-line px-5 py-4">
          <p className="font-serif text-2xl text-navy">One project, two owners</p>
          <p className="mt-1 text-sm text-muted">A picture of the idea. Your project will name its own roles.</p>
        </figcaption>
        <div className="grid gap-0 lg:grid-cols-[1fr_auto_1fr]">
          <div className="bg-paper-2 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-teal">Person A</p>
            <p className="mt-2 font-serif text-2xl text-navy">Finds the client and writes the proposal</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">This might be you. It is a real task, not a claim that you designed the engineering.</p>
          </div>
          <div className="grid place-items-center bg-navy px-5 py-6 text-center text-white lg:w-52">
            <p className="font-serif text-xl leading-tight">Written split</p>
            <p className="mt-2 text-xs leading-relaxed text-white/75">Who does what. How the fee is divided.</p>
          </div>
          <div className="bg-teal-2 p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-teal">Person B</p>
            <p className="mt-2 font-serif text-2xl text-navy">Delivers the technical part and signs what they are allowed to sign</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">A qualified colleague. The client knows this name. A license stays with the person who holds it.</p>
          </div>
        </div>
        <div className="grid gap-px bg-line sm:grid-cols-3">
          {[
            ["The client", "Chooses the team. Pays for the work that was agreed."],
            ["The fee", "Divided by the written roles. If the client does not pay, there is nothing to divide."],
            ["What is not included", "No standard cut. No pay for simply being a member. No borrowed credential."],
          ].map(([title, body]) => (
            <div key={title} className="bg-card p-5">
              <p className="font-medium text-ink">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </div>
          ))}
        </div>
      </figure>
    </div>
  );
}
