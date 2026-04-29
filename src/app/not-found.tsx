import ButtonLink from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold tracking-tight text-fg">404</h1>
      <p className="mt-4 text-sm text-muted">Page not found.</p>
      <ButtonLink href="/" className="mt-8">
        Go Home
      </ButtonLink>
    </div>
  );
}
