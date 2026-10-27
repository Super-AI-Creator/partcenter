import Link from "next/link";

const variants = {
  primary: "bg-navy text-white hover:bg-navy-2",
  light: "bg-white text-navy hover:bg-paper-2",
  ghost: "border border-white/40 text-white hover:border-white hover:bg-white/10",
  line: "border border-navy/20 text-navy hover:border-navy hover:bg-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-wide transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
