import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { legalDocs, legalNav } from "@/lib/site";

export function generateStaticParams() {
  return legalDocs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = legalDocs.find((d) => d.slug === slug);
  if (!doc) return { title: "Not Found" };
  return {
    title: doc.title,
    description: doc.intro,
  };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = legalDocs.find((d) => d.slug === slug);
  if (!doc) notFound();

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={doc.title}
        subtitle={`Last updated ${doc.updated}`}
      />

      <section className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* Side nav */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Policies
            </p>
            <ul className="flex flex-wrap gap-2 lg:flex-col">
              {legalNav.map((l) => {
                const active = l.href === `/legal/${doc.slug}`;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`inline-block rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer lg:rounded-xl ${
                        active
                          ? "bg-leaf-100 text-leaf-800"
                          : "text-muted hover:bg-leaf-50 hover:text-leaf-700"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Body */}
          <div>
            <Reveal>
              <p className="text-base leading-relaxed text-muted">
                {doc.intro}
              </p>
            </Reveal>

            <div className="mt-10 space-y-10">
              {doc.sections.map((s, i) => (
                <Reveal key={s.heading} delay={i * 0.05}>
                  <div>
                    <h2 className="font-serif text-xl font-semibold text-leaf-900 sm:text-2xl">
                      {s.heading}
                    </h2>
                    <div className="mt-3 space-y-3">
                      {s.body.map((p, j) => (
                        <p
                          key={j}
                          className="text-sm leading-relaxed text-muted sm:text-base"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-14">
              <div className="rounded-3xl bg-leaf-50 p-8 text-center">
                <p className="text-sm leading-relaxed text-muted">
                  Have a question about our policies? We&apos;re always happy to
                  help.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex rounded-full bg-leaf-600 px-6 py-3 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-leaf-700 cursor-pointer"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
