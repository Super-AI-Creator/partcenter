import Image from "next/image";
import type { PhotoAsset } from "@/lib/images";

export function Photo({
  photo,
  priority = false,
  className = "",
  aspect = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  onDark = false,
}: {
  photo: PhotoAsset;
  priority?: boolean;
  className?: string;
  aspect?: string;
  sizes?: string;
  onDark?: boolean;
}) {
  return (
    <figure className={className}>
      <div className={`relative overflow-hidden bg-navy-2 ${aspect}`}>
        <Image src={photo.src} alt={photo.alt} fill priority={priority} sizes={sizes} className="object-cover" />
      </div>
      {photo.caption ? (
        <figcaption className={`mt-2 text-xs leading-relaxed ${onDark ? "text-white/75" : "text-muted"}`}>{photo.caption}</figcaption>
      ) : null}
    </figure>
  );
}
