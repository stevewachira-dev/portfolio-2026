interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}
