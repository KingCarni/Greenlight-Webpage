"use client";

import Image from "next/image";
import { ArrowDownToLine, ArrowRight, Sparkles } from "lucide-react";
import { HERO } from "@/lib/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative isolate pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden grain"
    >
      <div aria-hidden className="absolute inset-0 -z-20 grid-bg opacity-60" />
      <div aria-hidden className="absolute inset-0 -z-10 gl-radial" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[640px] w-[1100px] rounded-full -z-10 blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(45,220,106,0.35), rgba(45,220,106,0) 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 md:px-8 text-center">
        <Reveal className="flex justify-center mb-8" delay={0}>
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 blur-2xl opacity-70"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(45,220,106,0.55), transparent 70%)",
              }}
            />
            <Image
              src="/logo/greenlight-logo.png"
              alt="Greenlight Studio"
              width={220}
              height={220}
              priority
              className="h-28 w-28 md:h-36 md:w-36 object-contain drop-shadow-[0_0_40px_rgba(45,220,106,0.35)]"
            />
          </div>
        </Reveal>

        <Reveal className="flex justify-center mb-7" delay={80}>
          <span
            data-testid="hero-eyebrow"
            className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-elev-1/60 backdrop-blur px-3.5 py-1.5 text-[11.5px] font-mono uppercase tracking-[0.18em] text-fg-muted"
          >
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gl-400 pulse-dot" />
            {HERO.eyebrow}
          </span>
        </Reveal>

        <Reveal
          as="h1"
          delay={160}
          data-testid="hero-headline"
          className="font-grotesk font-semibold tracking-[-0.035em] text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          <span className="gl-grad-text">{HERO.headlineLine1}</span>
          <br />
          <span className="font-display italic font-normal text-[1.08em] tracking-tight gl-green-text">
            {HERO.headlineLine2}
          </span>
        </Reveal>

        <Reveal
          as="p"
          delay={260}
          data-testid="hero-subhead"
          className="mx-auto mt-7 max-w-2xl text-[17px] md:text-lg leading-relaxed text-fg-muted"
        >
          {HERO.subhead}
        </Reveal>

        <Reveal
          delay={340}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={HERO.primaryCta.href}
            data-testid="hero-primary-cta"
            className="gl-btn gl-btn-primary px-6 py-3 text-[15px]"
          >
            <ArrowDownToLine className="h-4 w-4" />
            {HERO.primaryCta.label}
          </a>
          <a
            href={HERO.secondaryCta.href}
            data-testid="hero-secondary-cta"
            className="gl-btn gl-btn-secondary px-6 py-3 text-[15px]"
          >
            {HERO.secondaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal
          as="p"
          delay={420}
          data-testid="hero-small-text"
          className="mt-6 flex items-center justify-center gap-2 text-[13px] text-fg-subtle"
        >
          <Sparkles className="h-3.5 w-3.5 text-gl-400" />
          {HERO.smallText}
        </Reveal>
      </div>
    </section>
  );
}
