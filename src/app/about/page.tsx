import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";
import { Sprout, Handshake, Recycle, Award } from "lucide-react";
import { site, videos, img } from "@/lib/site";


export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Diri Oils — a family commitment to pure, cold-pressed mustard oil made the traditional way.",
};

const values = [
  {
    icon: Sprout,
    title: "Purity First",
    body: "We never refine, bleach or add anything. What leaves the ghani is exactly what reaches your kitchen.",
  },
  {
    icon: Handshake,
    title: "Fair to Farmers",
    body: "We buy directly from partner farms at fair prices, building long-term relationships rooted in trust.",
  },
  {
    icon: Recycle,
    title: "Kind to Earth",
    body: "Traditional cold-pressing is low-energy and low-waste. Our glass packaging is designed to be reused.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    body: "Every batch is tested for purity and freshness before it earns the Diri name on its label.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Rooted in tradition, pressed with love"
        subtitle="Diri Oils began with a simple belief — that the oil in our food should be as honest and pure as the land it comes from."
        video={videos.farm}
      />

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted">
              It started in a small village in Haryana, where mustard fields
              stretch gold to the horizon. For generations, families here
              pressed their own oil in wooden <em>ghanis</em> — slow, cold and
              completely natural. Somewhere along the way, mass-produced refined
              oils pushed that tradition aside.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Diri Oils was born to bring it back. Since {site.established}, we
              have partnered with local farmers to press single-origin mustard
              seed the old way, so that every bottle carries the true aroma,
              colour and goodness of real mustard oil — nothing more, nothing
              less.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              We&apos;re not an oil factory. We&apos;re a small team obsessed
              with doing one thing exceptionally well: giving your family the
              purest mustard oil we possibly can.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <SmartImage
                src={img.farmer}
                alt="Farmer tending mustard crops"
                className="col-span-2 aspect-[16/10] w-full rounded-3xl object-cover shadow-lg"
              />
              <SmartImage
                src={img.yellowFlowers}
                alt="Blooming mustard flowers"
                className="aspect-square w-full rounded-3xl object-cover shadow-lg"
              />
              <SmartImage
                src={img.leaves}
                alt="Lush green mustard leaves"
                className="aspect-square w-full rounded-3xl object-cover shadow-lg"
              />
            </div>
          </Reveal>
        </div>
      </section>


      <section className="bg-leaf-50 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              What We Stand For
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-leaf-900 sm:text-4xl">
              The values in every bottle
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex h-full gap-5 rounded-3xl border border-leaf-100 bg-cream p-7 shadow-sm">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-600">
                    <v.icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-leaf-800">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 rounded-[2.5rem] bg-leaf-900 p-10 text-center text-cream sm:grid-cols-3 sm:p-14">
          <Reveal>
            <p className="font-serif text-4xl font-bold text-gold-400">100%</p>
            <p className="mt-1 text-sm text-leaf-200">Pure & Unrefined</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif text-4xl font-bold text-gold-400">0</p>
            <p className="mt-1 text-sm text-leaf-200">Chemicals or Additives</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-serif text-4xl font-bold text-gold-400">1</p>
            <p className="mt-1 text-sm text-leaf-200">Single-Origin Source</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
