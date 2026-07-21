"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  Droplets,
  ShieldCheck,
  Sprout,
  HeartPulse,
  Flame,
  ArrowRight,
  Star,
  Play,
} from "lucide-react";
import Reveal, { stagger, item } from "@/components/Reveal";
import Video from "@/components/Video";
import SmartImage from "@/components/SmartImage";
import Parallax from "@/components/Parallax";
import { benefits, process, product, videos, img, gallery } from "@/lib/site";


const trust = [
  { icon: Leaf, label: "100% Natural" },
  { icon: Droplets, label: "Cold Pressed" },
  { icon: ShieldCheck, label: "No Chemicals" },
  { icon: Sprout, label: "Single Origin" },
];

const benefitIcons = [HeartPulse, ShieldCheck, Sprout, Leaf, Droplets, Flame];

export default function Home() {
  return (
    <>
      {/* CINEMATIC VIDEO HERO */}
      <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden">
        <div className="absolute inset-0">
          <Video
            src={videos.hero}
            className="h-full w-full object-cover"
          />
        </div>
        {/* readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-leaf-900/70 via-leaf-900/40 to-leaf-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-900/60 to-transparent" />

        <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-16 pt-28 sm:pb-20 sm:pt-32">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-cream/15 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur-md sm:px-4 sm:text-xs"
          >
            <Leaf size={14} /> Farm-to-Kitchen Purity
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 max-w-3xl font-serif text-[2.25rem] font-semibold leading-[1.08] text-cream drop-shadow-lg xs:text-[2.6rem] sm:mt-6 sm:text-6xl md:text-7xl"
          >
            The honest oil,
            <br />
            <span className="text-gold-300">pressed by nature.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-cream/90 drop-shadow sm:mt-6 sm:text-lg"
          >
            Pure, cold-pressed mustard oil from single-origin farms. Nothing
            added, nothing refined — just the golden goodness your kitchen
            deserves.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap"
          >
            <Link
              href="/product"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-semibold text-leaf-900 shadow-lg transition-colors duration-200 hover:bg-gold-300 cursor-pointer sm:px-7"
            >
              Discover the Oil
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/process"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-6 py-3.5 text-sm font-semibold text-cream backdrop-blur-md transition-colors duration-200 hover:bg-cream/20 cursor-pointer sm:px-7"
            >
              <Play size={15} /> How It&apos;s Made
            </Link>
          </motion.div>

          <motion.ul
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5 sm:mt-12 sm:gap-x-6 sm:gap-y-3"
          >
            {trust.map((t) => (
              <motion.li
                key={t.label}
                variants={item}
                className="flex items-center gap-2 text-xs font-medium text-cream/90 sm:text-sm"
              >
                <span className="rounded-full bg-cream/15 p-1.5 text-gold-300 backdrop-blur">
                  <t.icon size={15} />
                </span>
                {t.label}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* scroll cue — hidden on small screens to avoid crowding */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-cream/70 sm:block"
        >
          <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-cream/50 p-1">
            <div className="h-2 w-1 rounded-full bg-cream/70" />
          </div>
        </motion.div>
      </section>


      {/* MARQUEE STRIP */}
      <div className="border-y border-leaf-800 bg-leaf-900 py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 text-sm font-medium text-leaf-100">
          {product.highlights.map((h) => (
            <span key={h} className="flex items-center gap-2">
              <Star size={13} className="text-gold-400" /> {h}
            </span>
          ))}
        </div>
      </div>

      {/* STORY / INTRO — image + text split */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-12">

          <Reveal>
            <div className="relative">
              <SmartImage
                src={img.mustardField}
                alt="Golden mustard fields stretching to the horizon"
                className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-4 overflow-hidden rounded-3xl shadow-lg ring-4 ring-cream">
                <SmartImage
                  src={img.seeds}
                  alt="Freshly harvested mustard seeds"
                  className="h-32 w-32 object-cover sm:h-40 sm:w-40"
                />
              </div>
              <div className="absolute -left-4 -top-4 rounded-2xl bg-cream px-5 py-3 shadow-lg">
                <p className="font-serif text-2xl font-bold text-leaf-700">100%</p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted">
                  Pure & Unrefined
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Our Promise
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-leaf-900 sm:text-4xl">
              Oil the way it was always meant to be
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              In a world of refined, over-processed oils, Diri goes back to the
              roots. We press whole mustard seeds slowly and cold in a
              traditional wooden ghani — never heating, bleaching or chemically
              treating a single drop.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              The result is a deep-golden oil with the natural pungency, aroma
              and nutrients that make mustard oil a treasured part of every
              Indian kitchen.
            </p>
            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-leaf-700 transition-colors hover:text-leaf-900 cursor-pointer"
            >
              Read our story
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FULL-BLEED VIDEO BREAK — the pour */}
      <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
        <Parallax speed={50} className="absolute inset-0 h-[120%] w-full">
          <Video
            src={videos.pour}
            className="h-full w-full object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-leaf-900/55" />

        <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-5 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-cream drop-shadow-lg sm:text-5xl">
              Watch purity pour
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-cream/90 drop-shadow">
              Deep golden, richly aromatic and completely unrefined — this is
              what real cold-pressed mustard oil looks like.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS with image accent */}
      <section className="bg-leaf-50 py-16 sm:py-24">

        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Wellness in Every Drop
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-leaf-900 sm:text-4xl">
              Good for your food, great for you
            </h2>
          </Reveal>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3"

          >
            {benefits.slice(0, 6).map((b, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <motion.div
                  key={b.title}
                  variants={item}
                  className="group rounded-3xl border border-leaf-100 bg-cream p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                >
                  <span className="inline-flex rounded-2xl bg-leaf-100 p-3 text-leaf-600 transition-colors duration-200 group-hover:bg-gold-300 group-hover:text-leaf-900">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-leaf-800">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {b.body}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <Reveal className="mt-12 text-center">
            <Link
              href="/benefits"
              className="group inline-flex items-center gap-2 rounded-full border border-leaf-300 px-6 py-3 text-sm font-semibold text-leaf-700 transition-colors duration-200 hover:bg-leaf-100 cursor-pointer"
            >
              Explore all benefits
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROCESS with video */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <Video
                src={videos.press}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              From Seed to Bottle
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-leaf-900 sm:text-4xl">
              Slow-crafted in four honest steps
            </h2>
            <div className="mt-8 space-y-5">
              {process.map((p) => (
                <div key={p.step} className="flex gap-4">
                  <span className="font-serif text-2xl font-bold text-gold-500">
                    {p.step}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-leaf-800">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-leaf-50 py-16 sm:py-24">

        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              A Glimpse
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-leaf-900 sm:text-4xl">
              From our fields to your table
            </h2>
          </Reveal>

          <div className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal
                key={g.src}
                delay={(i % 4) * 0.06}
                className={`${g.tall ? "row-span-2" : ""} ${
                  i === 0 ? "col-span-2" : ""
                }`}
              >
                <div className="group h-full overflow-hidden rounded-3xl shadow-sm">
                  <SmartImage
                    src={g.src}
                    alt={g.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with cooking video */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:rounded-[2.5rem] sm:px-16 sm:py-20">

            <div className="absolute inset-0">
              <Video
                src={videos.cooking}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-leaf-900/85 to-leaf-800/80" />
            <div className="relative">
              <h2 className="font-serif text-3xl font-semibold text-cream sm:text-4xl">
                Bring home the taste of purity
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-cream/90">
                Discover the flagship Diri Kachi Ghani mustard oil, or reach out
                for stockist and wholesale enquiries.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-semibold text-leaf-900 transition-colors duration-200 hover:bg-gold-300 cursor-pointer"
                >
                  View the Product
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-cream/10 cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
