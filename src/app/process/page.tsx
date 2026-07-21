import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { process, videos } from "@/lib/site";


export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From hand-picked seed to sealed bottle — see how Diri Oils cold-presses mustard oil the traditional way.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="From Seed to Bottle"
        title="The slow craft of cold-pressing"
        subtitle="Good oil can't be rushed. Every bottle of Diri travels a patient, four-step journey that keeps nature's goodness intact."
        video={videos.press}
      />


      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24">

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[27px] top-2 bottom-2 w-0.5 bg-leaf-200 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div
                  className={`relative flex items-start gap-6 md:gap-10 ${
                    i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  {/* node */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-leaf-600 font-serif text-lg font-bold text-cream shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
                    {p.step}
                  </div>

                  <div
                    className={`flex-1 rounded-3xl border border-leaf-100 bg-cream p-7 shadow-sm md:w-[calc(50%-3rem)] ${
                      i % 2 === 1 ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <h3 className="font-serif text-2xl font-semibold text-leaf-800">
                      {p.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-leaf-900 py-16 text-center text-cream sm:py-20">

        <div className="mx-auto max-w-2xl px-5">
          <Reveal>
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              No heat. No chemicals. No shortcuts.
            </h2>
            <p className="mt-5 leading-relaxed text-leaf-200">
              While industrial oils are extracted with high heat and solvents,
              our wooden ghani turns slowly at low temperatures. It takes longer
              and yields less — but it keeps the aroma, colour and nutrients
              exactly as nature made them.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
