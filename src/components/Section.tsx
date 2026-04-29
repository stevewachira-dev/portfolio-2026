interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ title, children, className = "space-y-4" }: SectionProps) {
  return (
    <section className={className}>
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}
