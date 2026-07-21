"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import { site, videos } from "@/lib/site";


const details = [
  { icon: MapPin, label: "Visit Us", value: site.address },
  { icon: Phone, label: "Call Us", value: site.phone, href: `tel:${site.phone}` },
  { icon: Mail, label: "Email Us", value: site.email, href: `mailto:${site.email}` },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Say Hello"
        title="Let's talk mustard oil"
        subtitle="Whether you're a home cook, a retailer or simply curious about our oil, we'd love to hear from you."
        video={videos.farm}
      />


      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-10">

          {/* Contact details */}
          <div className="space-y-5">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.08}>
                <div className="flex items-start gap-4 rounded-3xl border border-leaf-100 bg-cream p-6 shadow-sm">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-600">
                    <d.icon size={22} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1 block font-medium text-leaf-800 transition-colors hover:text-leaf-600 cursor-pointer"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-medium text-leaf-800">{d.value}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.25}>
              <div className="overflow-hidden rounded-3xl border border-leaf-100 shadow-sm">
                <div className="flex h-48 items-center justify-center leaf-gradient">
                  <div className="text-center">
                    <MapPin className="mx-auto text-leaf-600" size={32} />
                    <p className="mt-2 text-sm font-medium text-leaf-700">
                      Village Barwala, Hisar
                    </p>
                    <p className="text-xs text-muted">Haryana, India</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-leaf-100 bg-cream p-6 shadow-sm sm:p-8">

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-leaf-100 text-leaf-600">
                    <Check size={32} />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-leaf-800">
                    Thank you!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
                    Your message has been noted. Our team will get back to you
                    shortly. (This is a demo form — no data is actually sent.)
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 rounded-full border border-leaf-300 px-5 py-2.5 text-sm font-semibold text-leaf-700 transition-colors hover:bg-leaf-100 cursor-pointer"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <h3 className="font-serif text-2xl font-semibold text-leaf-800">
                    Send us a message
                  </h3>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Name" id="name">
                      <input
                        id="name"
                        required
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-leaf-200 bg-cream px-4 py-3 text-sm text-leaf-900 outline-none transition-colors placeholder:text-muted/60 focus:border-leaf-500"
                      />
                    </Field>
                    <Field label="Phone" id="phone">
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Your phone"
                        className="w-full rounded-2xl border border-leaf-200 bg-cream px-4 py-3 text-sm text-leaf-900 outline-none transition-colors placeholder:text-muted/60 focus:border-leaf-500"
                      />
                    </Field>
                  </div>
                  <Field label="Email" id="email">
                    <input
                      id="email"
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-leaf-200 bg-cream px-4 py-3 text-sm text-leaf-900 outline-none transition-colors placeholder:text-muted/60 focus:border-leaf-500"
                    />
                  </Field>
                  <Field label="Enquiry Type" id="type">
                    <select
                      id="type"
                      className="w-full rounded-2xl border border-leaf-200 bg-cream px-4 py-3 text-sm text-leaf-900 outline-none transition-colors focus:border-leaf-500 cursor-pointer"
                    >
                      <option>General question</option>
                      <option>Where to buy / stockist</option>
                      <option>Wholesale / bulk enquiry</option>
                      <option>Partnership</option>
                    </select>
                  </Field>
                  <Field label="Message" id="message">
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="How can we help?"
                      className="w-full resize-none rounded-2xl border border-leaf-200 bg-cream px-4 py-3 text-sm text-leaf-900 outline-none transition-colors placeholder:text-muted/60 focus:border-leaf-500"
                    />
                  </Field>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-leaf-600 px-6 py-3.5 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-leaf-700 cursor-pointer"
                  >
                    Send Message
                    <Send
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-leaf-800"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
