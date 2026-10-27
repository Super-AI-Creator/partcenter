import Image from "next/image";

export function Portrait({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 280px, 80vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-navy-2 ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover object-top" />
    </div>
  );
}
