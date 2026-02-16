import { Experience } from "@/data/types";

export default function ExperienceCard({ company, title, dates, location, bullets }: Experience) {
  return (
    <div className="border-b border-border pb-6 last:border-0 last:pb-0">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <div>
          <h3 className="font-medium text-fg">{company}</h3>
          <p className="text-sm text-muted">{title}</p>
        </div>
        <div className="text-sm text-muted sm:text-right">
          <p>{dates}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-fg">
        {bullets.map((bullet, i) => (
          <li key={i} className="relative pl-4 before:absolute before:left-0 before:text-subtle before:content-['·']">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
