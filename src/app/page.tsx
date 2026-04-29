import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import RoleCard from "@/components/RoleCard";

const roles = [
  {
    href: "/software-engineer",
    title: "Software Engineer",
    subtitle: "React, Vue, TypeScript, Tauri",
    cta: "View Resume",
  },
  {
    href: "/support-engineer",
    title: "Support Engineer",
    subtitle: "Triage, Onboarding, Documentation",
    cta: "View Resume",
  },
  {
    href: "/tech-creator",
    title: "Tech Creator",
    subtitle: "Video Production & Editing",
    cta: "View Work",
  },
];

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
          {roles.map((role) => (
            <RoleCard key={role.href} {...role} />
          ))}
        </div>
      </div>
    </div>
  );
}
