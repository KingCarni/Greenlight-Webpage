"use client";

import { SectionHeader } from "./FeatureGrid";
import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <section
      id="why"
      data-testid="philosophy-section"
      className="relative py-24 md:py-32 border-t border-border overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -left-40 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 -z-10"
        style={{
          background:
            "radial-gradient(closest-side, rgba(45,220,106,0.35), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Why Greenlight"
            title="Built for creative teams, not spreadsheets."
          />
        </div>
        <Reveal duration={900} className="lg:col-span-7 space-y-6">
          <p className="text-[17px] md:text-[18px] leading-relaxed text-fg-muted">
            Production companies waste countless hours tracking props, searching
            storage units, organizing photos, and maintaining spreadsheets.
          </p>
          <p className="text-[17px] md:text-[18px] leading-relaxed text-fg">
            <span className="font-display italic text-[1.15em] gl-green-text">
              Greenlight
            </span>{" "}
            replaces fragmented workflows with a single production platform
            built specifically for creative teams.
          </p>

          <div className="grid grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border mt-8">
            {[
              { value: "1", label: "Platform" },
              { value: "∞", label: "Productions" },
              { value: "AI", label: "Powered" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-bg-elev-1/60 px-5 py-6 text-center"
              >
                <div className="font-display text-4xl md:text-5xl gl-green-text leading-none">
                  {stat.value}
                </div>
                <div className="mt-2 font-mono text-[10.5px] uppercase tracking-[0.22em] text-fg-subtle">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
