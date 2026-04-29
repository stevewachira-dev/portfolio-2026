import Image from "next/image";
import Header from "@/components/Header";
import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";
import VideoPlayer from "@/components/VideoPlayer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Steve Wachira — Tech Creator",
  description:
    "Tech content creator specializing in short-form and long-form video production, editing, and storytelling.",
};

const CALENDLY = "https://calendly.com/steve-stevewachira/30-minute-meeting-clone";

const logos = [
  { src: "/logos/surgent.webp",    alt: "Surgent",    width: 595, height: 160 },
  { src: "/logos/coderabbit.webp", alt: "CodeRabbit", width: 800, height: 235 },
  { src: "/logos/tplink.webp",     alt: "TP-Link",    width: 501, height: 333 },
  { src: "/logos/roccat.webp",     alt: "ROCCAT",     width: 612, height: 186 },
  { src: "/logos/skullcandy.webp", alt: "Skullcandy", width: 300, height: 168 },
  { src: "/logos/trender.webp",    alt: "Trender AI", width: 318, height: 159 },
];

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
    url: "https://www.tiktok.com/@.swachira/video/7216121152060591402",
    width: 338,
    height: 600,
  },
];

const haloVideos = [
  { slug: "ugc-surgent-9",       label: "Surgent" },
  { slug: "ugc-surgent-make100", label: "Surgent" },
  { slug: "ugc-surgent-11",      label: "Surgent" },
];

const tutorialSamples = [
  {
    href: "https://drive.google.com/file/d/1USczlx4ZbV1RnpTg4sWW4z57HNiGyQyZ/view",
    src: "/TrenderLinkedin.jpg",
    alt: "Trender AI — How to connect your LinkedIn account",
    title: "How to connect your LinkedIn account",
    company: "Trender AI",
  },
  {
    href: "https://drive.google.com/file/d/1OmxFPHzSThBGrCLrAyMniOZ7kCIAfYhO/view",
    src: "/TrenderSlack.jpg",
    alt: "Trender AI — How to integrate Slack into your workspace",
    title: "How to integrate Slack into your workspace",
    company: "Trender AI",
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

      {/* 750K stat + Intro Video */}
      <div className="mt-10 grid grid-cols-1 gap-y-6 gap-x-3 sm:grid-cols-3">
        {/* Left — stat + subtitle + CTA (spans 2 columns) */}
        <div className="sm:col-span-2 flex flex-col justify-center space-y-4">
          <div className="space-y-1">
            <p className="text-6xl sm:text-7xl font-bold leading-none tracking-tight text-fg">
              750,000+
            </p>
            <p className="text-3xl text-muted">views for tech companies</p>
          </div>
          <p className="text-sm leading-relaxed text-muted max-w-sm">
            Not as an influencer but as a software engineer who has spent 7 years shipping
            products. I understand what you&apos;re building and{" "}
            <strong className="text-fg">why it matters.</strong>
          </p>
          <ButtonLink href={CALENDLY} target="_blank" rel="noopener noreferrer" className="self-start">
            Book a Call
          </ButtonLink>
        </div>

        {/* Right — Intro video card */}
        <VideoPlayer
          slug="intro"
          poster="/video/intro-poster.jpg"
          captionsSrc="/video/intro-captions.vtt"
          className="border border-border"
        />
      </div>

      {/* Hidden transcript for SEO */}
      <p className="sr-only">
        Hi there, I&apos;m Steve, I&apos;m a tech content creator and software engineer based out here in
        Worcester, Massachusetts. And I&apos;m the best candidate for this contract because I&apos;ve
        genuinely brought in over 750,000 views across multiple tech companies, whether those are app
        builders, AI tools or even physical products. Even tutorials, yes, if you need it, I got it.
        And you can probably see that I&apos;ve decked out this whole entire space for content creation.
        Even got the fancy softbox with a C-stand or if you need some heavy duty work, I got you. All of my work is
        produced on time, I&apos;m a team player and if you need anything fixed on the video, I got
        you. All of this is just to show you a little bit of my personality and my work ethic and
        just to show you that I can actually get things done. And if you feel like we&apos;re a good
        match, let&apos;s get it done. I&apos;m Steve, I&apos;ll see you soon. bye.
      </p>

      {/* Logo Strip */}
      <div className="mt-8 overflow-hidden border-t border-border h-10 flex items-center">
        <div className="flex items-center gap-10 animate-marquee will-change-transform">
          {Array.from({ length: 6 }, () => logos)
            .flat()
            .map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={i < logos.length ? logo.alt : ""}
                aria-hidden={i >= logos.length}
                width={logo.width}
                height={logo.height}
                unoptimized
                className="h-5 w-auto shrink-0 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 dark:invert transition-all"
              />
            ))}
        </div>
      </div>

      {/* Featured Work */}
      <Section title="Featured Work" className="mt-12 space-y-6">
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
                <span className="text-xs font-medium text-fg">{video.platform}</span>
                <span className="text-xs text-muted">{video.views} views</span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Halo Work */}
      <Section title="Halo Work" className="mt-16 space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {haloVideos.map((video) => (
            <div key={video.slug} className="overflow-hidden border border-border">
              <VideoPlayer
                slug={video.slug}
                poster={`/video/${video.slug}-poster.jpg`}
              />
              <div className="flex items-center justify-between p-4">
                <span className="text-xs font-medium text-fg">UGC</span>
                <span className="text-xs text-muted">{video.label}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tutorial Samples */}
      <Section title="Tutorial Samples" className="mt-16 space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {tutorialSamples.map((sample) => (
            <a
              key={sample.href}
              href={sample.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden border border-border transition-all hover:border-border-hover"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-fg/5">
                <Image
                  src={sample.src}
                  alt={sample.alt}
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
                <p className="text-sm font-medium text-fg">{sample.title}</p>
                <p className="mt-1 text-xs text-muted">{sample.company}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section title="Contact" className="mt-16 space-y-4">
        <p className="text-sm text-fg">Interested in working together?</p>
        <ButtonLink href={CALENDLY} target="_blank" rel="noopener noreferrer">
          Book a Call
        </ButtonLink>
      </Section>

      <footer className="mt-16 border-t border-border pt-6 text-xs text-subtle">
        Steve Wachira &middot; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
