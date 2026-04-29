import Link from "next/link";

interface RoleCardProps {
  href: string;
  title: string;
  subtitle: string;
  cta: string;
}

export default function RoleCard({ href, title, subtitle, cta }: RoleCardProps) {
  return (
    <Link
      href={href}
      className="group relative border border-border px-10 py-8 transition-all hover:border-border-hover"
    >
      <span className="block text-lg font-medium tracking-tight text-fg">{title}</span>
      <span className="mt-1 block text-xs text-muted">{subtitle}</span>
      <span className="mt-4 block text-xs text-subtle transition-colors group-hover:text-fg">
        {cta} &rarr;
      </span>
    </Link>
  );
}
