import { officeQuery } from "@/lib/site";

export function LocationMap() {
  const query = officeQuery();
  const embed = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&hl=en&output=embed`;

  return (
    <div className="aspect-[16/10] min-h-72 overflow-hidden rounded-md border border-line bg-navy-2">
      <iframe
        title={`Map of ${query}`}
        src={embed}
        className="h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
