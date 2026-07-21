"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { faqs, videos } from "@/lib/site";


export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="Good to Know"
        title="Frequently asked questions"
        subtitle="Everything you might want to ask about our oil, its purity and how to use it. Still curious? We're just a message away."
        video={videos.seeds}
      />


      <section className="mx-auto max-w-3xl px-5 py-20">
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-3xl border transition-colors duration-200 ${
                    isOpen
                      ? "border-leaf-300 bg-cream"
                      : "border-leaf-100 bg-cream"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="font-serif text-lg font-semibold text-leaf-800">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                        isOpen
                          ? "bg-leaf-600 text-cream"
                          : "bg-leaf-100 text-leaf-600"
                      }`}
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="px-6 pb-6 leading-relaxed text-muted">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 text-center">
          <div className="rounded-3xl bg-leaf-50 p-10">
            <h2 className="font-serif text-2xl font-semibold text-leaf-900">
              Still have a question?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              Our team is always happy to help with anything about our oil,
              sourcing or stockists.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-leaf-600 px-6 py-3 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-leaf-700 cursor-pointer"
            >
              Get in Touch
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
