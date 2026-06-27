"use client";

import Image from "next/image";
import { SCREENSHOTS } from "@/lib/content";
import Reveal from "./Reveal";

export default function ProductPreview() {
  return (
    <section
      id="product-preview"
      data-testid="product-preview"
      className="relative pt-6 pb-24 md:pb-32 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[400px] blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(45,220,106,0.18), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative">
          <div className="relative mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 max-w-5xl">
            {SCREENSHOTS.map((shot, i) => {
              const isCenter = i === 1;
              const offsets = [
                "sm:translate-y-10",
                "sm:-translate-y-4",
                "sm:translate-y-10",
              ];
              const rotates = [
                "sm:-rotate-[3deg]",
                "sm:rotate-0",
                "sm:rotate-[3deg]",
              ];
              return (
                <Reveal
                  key={shot.src}
                  delay={120 * i}
                  y={60}
                  duration={900}
                  className={`relative ${offsets[i]} ${rotates[i]} ${
                    isCenter ? "z-10 sm:scale-[1.08]" : "z-0"
                  }`}
                  data-testid={`screenshot-${i}`}
                >
                  <PhoneMockup src={shot.src} alt={shot.alt} priority={isCenter} />
                  <div className="mt-4 flex items-center justify-center gap-2 text-[12px] font-mono uppercase tracking-[0.16em] text-fg-subtle">
                    <span className="h-px w-6 bg-border-strong" />
                    {shot.caption}
                    <span className="h-px w-6 bg-border-strong" />
                  </div>
                </Reveal>
              );
            })}
          </div>

          <div
            aria-hidden
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-[80%] blur-2xl opacity-60 -z-10"
            style={{
              background:
                "radial-gradient(closest-side, rgba(45,220,106,0.25), transparent 80%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function PhoneMockup({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative mx-auto w-full max-w-[240px] aspect-[9/19.5]">
      <div className="absolute inset-0 rounded-[36px] border border-border-strong bg-[#0a0a0a] shadow-[0_30px_80px_-30px_rgba(45,220,106,0.35),0_8px_20px_rgba(0,0,0,0.8)]">
        <div className="absolute inset-[6px] rounded-[30px] overflow-hidden bg-black border border-[#1a1a1a]">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-black z-10 border border-[#1a1a1a]" />
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 80vw, 240px"
            className="object-cover"
            priority={priority}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 40%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
