import Link from "next/link";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { nav, site, legalNav } from "@/lib/site";


export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-leaf-900 text-leaf-100">
      {/* organic top curve */}
      <svg
        className="absolute inset-x-0 -top-px w-full text-cream"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,80 480,0 720,20 C960,40 1200,90 1440,40 L1440,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>

      <div className="mx-auto max-w-6xl px-5 pb-10 pt-24">
        <div className="grid gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div className="sm:col-span-2 lg:col-span-1">

            <div className="rounded-2xl bg-cream/95 p-3 w-fit">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-leaf-200">
              Pure, cold-pressed mustard oil from single-origin farms. Nothing
              added, nothing refined — just honest goodness in every drop, the
              way nature intended.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-leaf-800 p-2.5 text-leaf-100 transition-colors duration-200 hover:bg-gold-500 hover:text-leaf-900 cursor-pointer"
              >
                <Instagram size={18} />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-leaf-800 p-2.5 text-leaf-100 transition-colors duration-200 hover:bg-gold-500 hover:text-leaf-900 cursor-pointer"
              >
                <Facebook size={18} />
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="rounded-full bg-leaf-800 p-2.5 text-leaf-100 transition-colors duration-200 hover:bg-gold-500 hover:text-leaf-900 cursor-pointer"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-cream">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-leaf-200 transition-colors duration-200 hover:text-gold-400 cursor-pointer"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-cream">Reach Us</h4>
            <ul className="mt-4 space-y-4 text-sm text-leaf-200">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold-400" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="shrink-0 text-gold-400" />
                <a href={`tel:${site.phone}`} className="transition-colors hover:text-gold-400 cursor-pointer">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="shrink-0 text-gold-400" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-400 cursor-pointer">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-cream">Legal</h4>
            <ul className="mt-4 space-y-2.5">
              {legalNav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-leaf-200 transition-colors duration-200 hover:text-gold-400 cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-leaf-800 pt-6 text-xs text-leaf-300 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Crafted with care since{" "}
            {site.established}.
          </p>
          <p>FSSAI Licensed · Agmark Certified</p>
        </div>
      </div>
    </footer>
  );
}
