import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="page-transition flex min-h-screen flex-col items-center justify-center px-6">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>

      <div className="space-y-16 text-center">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold tracking-tight text-fg sm:text-7xl">
            Steve Wachira
          </h1>
          <p className="text-sm text-muted">
            Select a role to view my experience
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="/software-engineer"
            className="group relative border border-border px-10 py-8 transition-all hover:border-border-hover"
          >
            <span className="block text-lg font-medium tracking-tight text-fg">
              Software Engineer
            </span>
            <span className="mt-1 block text-xs text-muted">
              React, Vue, TypeScript, Tauri
            </span>
            <span className="mt-4 block text-xs text-subtle transition-colors group-hover:text-fg">
              View Resume &rarr;
            </span>
          </Link>

          <Link
            href="/support-engineer"
            className="group relative border border-border px-10 py-8 transition-all hover:border-border-hover"
          >
            <span className="block text-lg font-medium tracking-tight text-fg">
              Support Engineer
            </span>
            <span className="mt-1 block text-xs text-muted">
              Triage, Onboarding, Documentation
            </span>
            <span className="mt-4 block text-xs text-subtle transition-colors group-hover:text-fg">
              View Resume &rarr;
            </span>
          </Link>

          <Link
            href="/tech-creator"
            className="group relative border border-border px-10 py-8 transition-all hover:border-border-hover"
          >
            <span className="block text-lg font-medium tracking-tight text-fg">
              Tech Creator
            </span>
            <span className="mt-1 block text-xs text-muted">
              Video Production & Editing
            </span>
            <span className="mt-4 block text-xs text-subtle transition-colors group-hover:text-fg">
              View Work &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
