import { Portrait } from "@/components/Portrait";
import { teamMembers } from "@/lib/team";

export function TeamGrid() {
  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {teamMembers.map((member) => (
        <li key={member.name} className="overflow-hidden rounded-md border border-line bg-card">
          <Portrait src={member.portrait} alt={member.portraitAlt} className="aspect-[4/5]" sizes="(min-width: 1024px) 22vw, 50vw" />
          <div className="p-4">
            <p className="font-medium text-ink">{member.name}</p>
            <p className="text-sm text-teal">{member.role}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{member.focus}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
