"use client";

import { motion } from "framer-motion";
import Video from "./Video";
import SmartImage from "./SmartImage";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  video,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  video?: string;
}) {
  const hasMedia = Boolean(image || video);

  return (
    <section
      className={`relative overflow-hidden pt-28 pb-16 sm:pt-44 sm:pb-28 ${
        hasMedia ? "" : "leaf-gradient"
      }`}
    >

      {/* Background media */}
      {video ? (
        <div className="absolute inset-0">
          <Video src={video} className="h-full w-full object-cover" />
        </div>
      ) : image ? (
        <div className="absolute inset-0">
          <SmartImage src={image} alt="" className="h-full w-full object-cover" />
        </div>
      ) : null}

      {hasMedia && (
        <div className="absolute inset-0 bg-gradient-to-b from-leaf-900/75 via-leaf-900/55 to-leaf-900/80" />
      )}

      {/* organic blobs (only on non-media heroes) */}
      {!hasMedia && (
        <>
          <div className="pointer-events-none absolute -right-16 -top-10 h-64 w-64 blob bg-gold-300/30 blur-2xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 blob-2 bg-leaf-300/40 blur-2xl" />
        </>
      )}

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur ${
            hasMedia
              ? "bg-cream/15 text-cream"
              : "bg-cream/70 text-leaf-700"
          }`}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={`font-serif text-[2rem] font-semibold leading-[1.12] xs:text-4xl sm:text-5xl md:text-6xl ${
            hasMedia ? "text-cream drop-shadow-lg" : "text-leaf-900"
          }`}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:mt-6 sm:text-lg ${
            hasMedia ? "text-cream/90 drop-shadow" : "text-muted"
          }`}
        >

          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}
