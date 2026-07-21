"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { nav } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "bg-cream/90 shadow-[0_8px_30px_rgba(34,51,24,0.10)] backdrop-blur-md"
            : "bg-cream/60 backdrop-blur-sm"
        }`}
      >
        <Link href="/" aria-label="Diri Oils home" className="cursor-pointer">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    active
                      ? "text-leaf-800"
                      : "text-muted hover:text-leaf-700"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-leaf-100"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-leaf-600 px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-colors duration-200 hover:bg-leaf-700 lg:inline-flex cursor-pointer"
        >
          Get in Touch
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="rounded-full p-2 text-leaf-800 transition-colors hover:bg-leaf-100 lg:hidden cursor-pointer"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl bg-cream/95 p-3 shadow-lg backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col">
              {nav.map((n) => {
                const active = pathname === n.href;
                return (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors duration-200 cursor-pointer ${
                        active
                          ? "bg-leaf-100 text-leaf-800"
                          : "text-muted hover:bg-leaf-50 hover:text-leaf-700"
                      }`}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
              <li className="mt-1 px-1">
                <Link
                  href="/contact"
                  className="block rounded-2xl bg-leaf-600 px-4 py-3 text-center text-base font-semibold text-cream transition-colors duration-200 hover:bg-leaf-700 cursor-pointer"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
