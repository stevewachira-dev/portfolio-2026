import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  currentRole?: "software" | "support" | "creator";
}

const navLinks = [
  { href: "/software-engineer", label: "Software Engineer", role: "software" },
  { href: "/support-engineer", label: "Support Engineer", role: "support" },
  { href: "/tech-creator", label: "Tech Creator", role: "creator" },
] as const;

export default function Header({ currentRole }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-border pb-6">
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-fg transition-opacity hover:opacity-60"
        >
          SW
        </Link>
        {currentRole && (
          <nav className="flex gap-3 text-sm sm:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.role}
                href={link.href}
                className={`transition-opacity hover:opacity-60 ${
                  currentRole === link.role
                    ? "font-medium text-fg"
                    : "text-subtle"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
      <ThemeToggle />
    </header>
  );
}
