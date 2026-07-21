"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Plain <img> with a graceful organic-gradient fallback so the layout
 * never breaks if a remote image fails to load.
 */
export default function SmartImage({ src, alt, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`leaf-gradient flex items-center justify-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg width="56" height="56" viewBox="0 0 40 40" aria-hidden="true">
          <path
            d="M20 8 c8 2 13 9 13 17 c-9 0 -15 -7 -15 -15 c0 8 -6 15 -15 15 c0 -8 5 -15 13 -17 c1 -0.5 3 -0.5 4 0 z"
            fill="#7fa953"
            opacity="0.6"
          />
        </svg>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
