import { ResumeData } from "@/data/types";
import Header from "./Header";
import Section from "./Section";
import ExperienceCard from "./ExperienceCard";

interface ResumePageProps {
  data: ResumeData;
  currentRole: "software" | "support";
}

export default function ResumePage({ data, currentRole }: ResumePageProps) {
  return (
    <div className="page-transition mx-auto min-h-screen max-w-2xl px-6 py-12 sm:px-8 sm:py-16">
      <Header currentRole={currentRole} />

      <div className="mt-10 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">{data.name}</h1>
          <a
            href={data.resumeFile}
            download
            className="flex shrink-0 items-center gap-2 border border-border px-4 py-2 text-xs font-medium text-fg transition-colors hover:border-border-hover hover:bg-fg hover:text-bg"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>
        <p className="text-sm text-muted">
          {data.location} &middot;{" "}
          <a href={`mailto:${data.email}`} className="text-fg underline underline-offset-2 transition-opacity hover:opacity-60">
            {data.email}
          </a>{" "}
          &middot;{" "}
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-fg underline underline-offset-2 transition-opacity hover:opacity-60">
            LinkedIn
          </a>{" "}
          &middot;{" "}
          <a href={data.website} target="_blank" rel="noopener noreferrer" className="text-fg underline underline-offset-2 transition-opacity hover:opacity-60">
            stevewachira.com
          </a>
        </p>
      </div>

      <div className="mt-12 space-y-10">
        <Section title="Summary">
          <p className="text-sm leading-relaxed text-fg">
            {data.summary}
          </p>
        </Section>

        <Section title="Skills">
          <div className="space-y-3">
            {data.skills.map((group, i) => (
              <div key={i}>
                {group.category && (
                  <p className="mb-1.5 text-xs font-medium text-muted">
                    {group.category}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-xs text-fg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Experience">
          <div className="space-y-6">
            {data.experience.map((exp) => (
              <ExperienceCard key={`${exp.company}-${exp.dates}`} {...exp} />
            ))}
          </div>
        </Section>
      </div>

      <footer className="mt-16 border-t border-border pt-6 text-xs text-subtle">
        {data.name} &middot; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
