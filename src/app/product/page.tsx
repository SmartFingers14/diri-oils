"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Reveal, { stagger, item } from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";
import Video from "@/components/Video";
import { product, img, videos } from "@/lib/site";


export default function ProductPage() {
  return (
    <>
      {/* HERO / PRODUCT SHOWCASE */}
      <section className="relative overflow-hidden leaf-gradient pt-36 pb-20 sm:pt-40">
        <div className="pointer-events-none absolute -right-16 top-24 h-72 w-72 blob bg-gold-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 blob-2 bg-leaf-300/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <SmartImage
              src={img.oilBottle}
              alt="Diri Kachi Ghani mustard oil bottle"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 -left-5 overflow-hidden rounded-3xl shadow-lg ring-4 ring-cream">
              <SmartImage
                src={img.drops}
                alt="Golden oil droplets"
                className="h-28 w-28 object-cover sm:h-36 sm:w-36"
              />
            </div>
          </motion.div>


          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-full bg-cream/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-leaf-700 backdrop-blur"
            >
              The Flagship
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 font-serif text-4xl font-semibold leading-tight text-leaf-900 sm:text-5xl"
            >
              {product.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 text-sm font-semibold uppercase tracking-wider text-gold-600"
            >
              {product.subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 leading-relaxed text-muted"
            >
              {product.description}
            </motion.p>

            <motion.ul
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mt-7 grid gap-3 sm:grid-cols-2"
            >
              {product.highlights.map((h) => (
                <motion.li
                  key={h}
                  variants={item}
                  className="flex items-center gap-2.5 text-sm font-medium text-leaf-800"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                    <Check size={14} />
                  </span>
                  {h}
                </motion.li>
              ))}
            </motion.ul>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-leaf-600 px-6 py-3 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-leaf-700 cursor-pointer"
            >
              Enquire About Stock
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            The Details
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-leaf-900 sm:text-4xl">
            Everything you&apos;d want to know
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-leaf-100 bg-cream shadow-sm">
              {product.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i % 2 === 0 ? "bg-leaf-50" : "bg-cream"
                  }`}
                >
                  <span className="text-sm font-medium text-muted">
                    {s.label}
                  </span>
                  <span className="text-right text-sm font-semibold text-leaf-800">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl bg-leaf-900 p-8 text-cream">
              <h3 className="font-serif text-2xl font-semibold">
                Available Sizes
              </h3>
              <p className="mt-2 text-sm text-leaf-200">
                One honest oil, packed to suit every kitchen — from the family
                table to the neighbourhood restaurant.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {product.sizes.map((s) => (
                  <div
                    key={s.size}
                    className="rounded-2xl bg-leaf-800 p-5 transition-colors duration-200 hover:bg-leaf-700"
                  >
                    <p className="font-serif text-2xl font-bold text-gold-400">
                      {s.size}
                    </p>
                    <p className="mt-1 text-xs text-leaf-200">{s.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="relative h-[60vh] min-h-[380px] overflow-hidden">
        <Video
          src={videos.seeds}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-leaf-900/85 via-leaf-900/40 to-leaf-900/50" />
        <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-end px-5 pb-14 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold text-cream drop-shadow-lg sm:text-4xl">
              Single-origin seed, nothing else
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/90 drop-shadow">
              Every bottle traces back to plump, hand-picked mustard seeds from
              our partner farms in Haryana.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-leaf-50 py-24">

        <div className="mx-auto max-w-4xl px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Why It&apos;s Different
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-leaf-900 sm:text-4xl">
              Diri vs. ordinary refined oil
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-3xl border border-leaf-100 bg-cream shadow-sm">
              <div className="grid grid-cols-3 bg-leaf-900 text-cream">
                <div className="px-5 py-4 text-sm font-semibold">Feature</div>
                <div className="px-5 py-4 text-center text-sm font-semibold text-gold-400">
                  Diri Oils
                </div>
                <div className="px-5 py-4 text-center text-sm font-semibold text-leaf-200">
                  Refined Oil
                </div>
              </div>
              {[
                ["Extraction", "Cold wooden press", "High-heat + solvent"],
                ["Nutrients", "Fully retained", "Largely stripped"],
                ["Additives", "None", "Often present"],
                ["Aroma & pungency", "Natural, strong", "Removed"],
                ["Colour", "Deep golden", "Pale, bleached"],
              ].map((row, i) => (
                <div
                  key={row[0]}
                  className={`grid grid-cols-3 items-center ${
                    i % 2 === 0 ? "bg-leaf-50" : "bg-cream"
                  }`}
                >
                  <div className="px-5 py-4 text-sm font-medium text-leaf-800">
                    {row[0]}
                  </div>
                  <div className="px-5 py-4 text-center text-sm font-semibold text-leaf-700">
                    {row[1]}
                  </div>
                  <div className="px-5 py-4 text-center text-sm text-muted">
                    {row[2]}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
