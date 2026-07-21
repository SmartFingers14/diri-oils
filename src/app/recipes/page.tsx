import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SmartImage from "@/components/SmartImage";
import { Clock } from "lucide-react";
import { recipes, img } from "@/lib/site";

const recipeImages = [
  "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1626508035297-0cd27c397d67?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1568600891621-50f2b2350cc8?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
];


export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Traditional Indian recipes that come alive with pure, cold-pressed Diri mustard oil — from Sarson Ka Saag to Bengali fish curry.",
};

export default function RecipesPage() {
  return (
    <>
      <PageHero
        eyebrow="From Our Kitchen"
        title="Dishes that love mustard oil"
        subtitle="The unmistakable pungency of cold-pressed mustard oil is the secret behind some of India's most beloved dishes. Here are a few to try."
        image={img.cooking}
      />


      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-leaf-100 bg-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                {/* food image banner */}
                <div className="relative h-48 overflow-hidden">
                  <SmartImage
                    src={recipeImages[i % recipeImages.length]}
                    alt={r.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-leaf-900/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/85 px-3 py-1 text-xs font-semibold text-leaf-700 backdrop-blur">
                    {r.tag}
                  </span>
                </div>


                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-semibold text-leaf-800 transition-colors duration-200 group-hover:text-leaf-600">
                    {r.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {r.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-leaf-600">
                    <Clock size={14} /> {r.time}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-20 text-center">
        <Reveal>
          <p className="text-sm leading-relaxed text-muted">
            New recipes are added to our kitchen journal regularly. Follow Diri
            Oils on social media for fresh ideas, cooking tips and the stories
            behind every dish.
          </p>
        </Reveal>
      </section>
    </>
  );
}
