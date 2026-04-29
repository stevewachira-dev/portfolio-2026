interface VideoPlayerProps {
  slug: string;
  poster: string;
  captionsSrc?: string;
  className?: string;
}

export default function VideoPlayer({ slug, poster, captionsSrc, className = "" }: VideoPlayerProps) {
  return (
    <div className={`aspect-9/16 overflow-hidden bg-fg/5 ${className}`.trim()}>
      <video controls playsInline poster={poster} className="w-full h-full object-cover">
        <source src={`/video/${slug}.webm`} type="video/webm" />
        <source src={`/video/${slug}.mp4`} type="video/mp4" />
        {captionsSrc && (
          <track kind="captions" src={captionsSrc} srcLang="en" label="English" />
        )}
      </video>
    </div>
  );
}
