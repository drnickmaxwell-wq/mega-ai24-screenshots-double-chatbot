
"use client";
import dynamic from "next/dynamic";
import SeoHomeJsonLd from "@/components/proposals/ai24/SeoHomeJsonLd";
import HeroAurora from "@/components/proposals/ai24/HeroAurora";
import CTASection from "@/components/proposals/ai24/CTASectionAi24";
import TreatmentsLux from "@/components/proposals/ai24/TreatmentsLux";
import TestimonialsCarousel from "@/components/proposals/ai24/TestimonialsCarousel";
import GradientBelt from "@/components/proposals/ai24/GradientBelt";
import ShimmerText from "@/components/fx/ShimmerText";

const Header     = dynamic(() => import("@/components/proposals/ai24/HeaderAi24").then(m => m.default ?? (m as any).HeaderAi24), { ssr:false });
const Footer     = dynamic(() => import("@/components/proposals/ai24/FooterAi24").then(m => m.default ?? (m as any).FooterAi24), { ssr:false });
const ActionDock = dynamic(() => import("@/components/layout/ActionDock").then(m => m.default ?? (m as any).ActionDock), { ssr:false });
const Hero       = dynamic(() => import("@/components/hero/HeroVideo").then(m => m.default ?? (m as any).HeroVideo), { ssr:false });
const Features   = dynamic(() => import("@/components/sections/FeaturesSection").then(m => m.default ?? (m as any).FeaturesSection), { ssr:false });

export default function Page() {
  return (
    <>
      <SeoHomeJsonLd />
      <Header />
      <main className="relative">
        <Hero videoSrc="/videos/hero/coastal-dental-hero.mp4" posterSrc="/videos/hero/hero-poster.jpg" />
        <HeroAurora />
        <div className="absolute inset-0 z-20 pointer-events-none"
             style={{ background: "linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.15))" }}
             aria-hidden />
      </main>

      <GradientBelt />
      <section className="mx-auto max-w-[var(--content)] px-6">
        <p className="text-sm opacity-80 mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          <ShimmerText shimmerColor="turquoise" soft>Advanced 3D Dentistry</ShimmerText>
          &nbsp;&nbsp;<ShimmerText shimmerColor="magenta" soft>AI-Powered Care</ShimmerText>
        </h2>
        <p className="opacity-80 max-w-[70ch]">Experience the future of dentistry with cutting-edge 3D technology, AI diagnostics, and luxury coastal comfort.</p>
      </section>

      <Features />
      <TreatmentsLux />
      <TestimonialsCarousel />
      <CTASection />
      <Footer />
      <ActionDock />
    </>
  );
}
