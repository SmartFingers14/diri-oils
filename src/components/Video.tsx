"use client";

type VideoProps = {
  src: string;
  className?: string;
  poster?: string;
};

/** Autoplaying, muted, looping background-style video. */
export default function Video({ src, className = "", poster }: VideoProps) {
  return (
    <video
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}
