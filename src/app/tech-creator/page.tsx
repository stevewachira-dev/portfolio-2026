import Image from "next/image";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steve Wachira — Tech Creator",
  description:
    "Tech content creator specializing in short-form and long-form video production, editing, and storytelling.",
};

const featuredVideos = [
  {
    platform: "YouTube",
    views: "177K",
    thumbnail: "https://img.youtube.com/vi/BxywPHkF3Og/maxresdefault.jpg",
    url: "https://youtube.com/shorts/BxywPHkF3Og",
    width: 720,
    height: 1280,
  },
  {
    platform: "TikTok",
    views: "69K",
    thumbnail: "/tiktok-thumb-1.jpg",
    url: "https://www.tiktok.com/@.swachira/video/7221322247296896298",
    width: 338,
    height: 600,
  },
  {
    platform: "TikTok",
    views: "22K",
    thumbnail: "/tiktok-thumb-2.jpg",
    width: 338,
    height: 600,
    url: "https://www.tiktok.com/@.swachira/video/7216121152060591402",
  },
];

function PlayIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      className="text-fg/20 transition-colors group-hover:text-fg/50"
    >
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
      <path d="M20 16l12 8-12 8V16z" fill="currentColor" />
    </svg>
  );
}

export default function TechCreatorPage() {
  return (
    <div className="page-transition mx-auto min-h-screen max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
      <Header currentRole="creator" />

      <div className="mt-10 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          Tech Creator
        </h1>
        <p className="text-sm leading-relaxed text-muted">
          Short-form and long-form video production, editing, and storytelling
          for tech audiences.
        </p>
      </div>

      {/* Featured Work */}
      <div className="mt-12 space-y-6">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featuredVideos.map((video) => (
            <a
              key={video.url}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden border border-border transition-all hover:border-border-hover"
            >
              <div className="relative aspect-9/16 w-full overflow-hidden bg-fg/5">
                <Image
                  src={video.thumbnail}
                  alt={`${video.platform} video`}
                  width={video.width}
                  height={video.height}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  priority
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-bg/30 opacity-0 transition-opacity group-hover:opacity-100">
                  <PlayIcon />
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <span className="text-xs font-medium text-fg">
                  {video.platform}
                </span>
                <span className="text-xs text-muted">{video.views} views</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* About Me */}
      <div className="mt-16 space-y-6">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
          About Me
        </h2>
        <div className="overflow-hidden border border-border">
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/0KzKOz6KZfg"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              title="About Me"
            />
          </div>
        </div>
      </div>

      {/* Tutorial Samples */}
      <div className="mt-16 space-y-6">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
          Tutorial Samples
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a
            href="https://drive.google.com/file/d/1USczlx4ZbV1RnpTg4sWW4z57HNiGyQyZ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden border border-border transition-all hover:border-border-hover"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-fg/5">
              <Image
                src="/TrenderLinkedin.jpg"
                alt="Trender AI — How to connect your LinkedIn account"
                width={900}
                height={506}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-bg/30 opacity-0 transition-opacity group-hover:opacity-100">
                <PlayIcon />
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-fg">
                How to connect your LinkedIn account
              </p>
              <p className="mt-1 text-xs text-muted">Trender AI</p>
            </div>
          </a>

          <a
            href="https://drive.google.com/file/d/1OmxFPHzSThBGrCLrAyMniOZ7kCIAfYhO/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden border border-border transition-all hover:border-border-hover"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-fg/5">
              <Image
                src="/TrenderSlack.jpg"
                alt="Trender AI — How to integrate Slack into your workspace"
                width={900}
                height={506}
                sizes="(max-width: 640px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-bg/30 opacity-0 transition-opacity group-hover:opacity-100">
                <PlayIcon />
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-fg">
                How to integrate Slack into your workspace
              </p>
              <p className="mt-1 text-xs text-muted">Trender AI</p>
            </div>
          </a>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-16 space-y-4">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted">
          Contact
        </h2>
        <p className="text-sm text-fg">
          Interested in working together?
        </p>
        <a
          href="mailto:steve@stevewachira.com"
          className="inline-block border border-border px-6 py-3 text-sm font-medium text-fg transition-colors hover:border-border-hover hover:bg-fg hover:text-bg"
        >
          steve@stevewachira.com
        </a>
      </div>

      <footer className="mt-16 border-t border-border pt-6 text-xs text-subtle">
        Steve Wachira &middot; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
