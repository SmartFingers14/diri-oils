import type { Metadata, Viewport } from "next";
import { Lora, Raleway } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";


const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Diri Oils — Pure Cold-Pressed Mustard Oil",
    template: "%s — Diri Oils",
  },
  description:
    "Diri Oils crafts pure, cold-pressed (Kachi Ghani) mustard oil from single-origin farms. Nothing added, nothing refined — just honest oil the way nature intended.",
  keywords: [
    "mustard oil",
    "cold pressed mustard oil",
    "kachi ghani",
    "organic mustard oil",
    "Diri Oils",
    "pure mustard oil",
  ],
  openGraph: {
    title: "Diri Oils — Pure Cold-Pressed Mustard Oil",
    description:
      "Single-origin, cold-pressed mustard oil. Nothing added, nothing refined.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#223318",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${raleway.variable} antialiased`}
      >
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />

      </body>
    </html>
  );
}
