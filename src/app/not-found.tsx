import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold tracking-tight text-fg">404</h1>
      <p className="mt-4 text-sm text-muted">Page not found.</p>
      <Link
        href="/"
        className="mt-8 border border-border px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-border-hover hover:bg-fg hover:text-bg"
      >
        Go Home
      </Link>
    </div>
  );
}
