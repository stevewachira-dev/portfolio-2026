interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
}

export default function ButtonLink({ href, children, target, rel, className = "" }: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`inline-block border border-border px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-border-hover hover:bg-fg hover:text-bg ${className}`.trim()}
    >
      {children}
    </a>
  );
}
