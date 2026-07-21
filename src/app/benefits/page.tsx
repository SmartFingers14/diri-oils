import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { HeartPulse, ShieldCheck, Sprout, Leaf, Droplets, Flame } from "lucide-react";
import { benefits, img } from "@/lib/site";



export const metadata: Metadata = {
  title: "Health Benefits",
  description:
    "From heart health to natural immunity, discover why cold-pressed mustard oil has been a trusted wellness staple for generations.",
};

const icons = [HeartPulse, ShieldCheck, Sprout, Leaf, Droplets, Flame];

const nutrition = [
  { label: "Monounsaturated Fat", value: "60%" },
  { label: "Polyunsaturated Fat", value: "21%" },
  { label: "Saturated Fat", value: "12%" },
  { label: "Omega-3 (ALA)", value: "Rich" },
];

export default function BenefitsPage() {
  return (
    <>
      <PageHero
        eyebrow="Wellness"
        title="More than flavour — genuine goodness"
        subtitle="For centuries, mustard oil has been valued as both a culinary treasure and a natural remedy. Here's what makes it so good for you."
        image={img.drops}
      />


      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={b.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-3xl border border-leaf-100 bg-cream p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default">
                  <span className="inline-flex rounded-2xl bg-leaf-100 p-3 text-leaf-600 transition-colors duration-200 group-hover:bg-gold-300 group-hover:text-leaf-900">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-leaf-800">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* NUTRITION */}
      <section className="bg-leaf-50 py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Fatty Acid Profile
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-leaf-900 sm:text-4xl">
                A naturally balanced oil
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Mustard oil boasts one of the healthiest fatty-acid profiles of
                any edible oil — high in heart-friendly monounsaturated fats and
                naturally low in saturated fat, with a valuable dose of Omega-3.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5 rounded-3xl bg-cream p-8 shadow-sm">
                {nutrition.map((n) => (
                  <div key={n.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-leaf-800">
                        {n.label}
                      </span>
                      <span className="font-semibold text-leaf-600">
                        {n.value}
                      </span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-leaf-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-leaf-500 to-gold-400"
                        style={{
                          width: n.value.includes("%") ? n.value : "70%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <Reveal>
          <p className="font-serif text-2xl italic leading-relaxed text-leaf-800 sm:text-3xl">
            &ldquo;The kitchen is the first pharmacy — and mustard oil has always
            had a place on its shelf.&rdquo;
          </p>
          <p className="mt-5 text-sm font-medium uppercase tracking-wider text-muted">
            A note on nutrition
          </p>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted">
            The information here is for general awareness and reflects
            traditional use and common nutritional understanding. It is not
            medical advice — please consult a professional for dietary guidance.
          </p>
        </Reveal>
      </section>
    </>
  );
}
