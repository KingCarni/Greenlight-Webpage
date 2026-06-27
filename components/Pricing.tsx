"use client";

import { ArrowRight, Check } from "lucide-react";
import Reveal from "./Reveal";

const PERKS = [
  "Full access to the Android beta",
  "Influence the product roadmap",
  "Locked-in early-adopter pricing at launch",
  "Priority onboarding for your production team",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-24 md:py-32 border-t border-border overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[420px] blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(45,220,106,0.22), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal duration={900} className="relative gl-card p-8 md:p-12 text-center">
          {(["tl", "tr", "bl", "br"] as const).map((c) => (
            <span
              key={c}
              aria-hidden
              className={`absolute h-4 w-4 border-gl-400 ${
                c === "tl"
                  ? "top-3 left-3 border-t border-l"
                  : c === "tr"
                  ? "top-3 right-3 border-t border-r"
                  : c === "bl"
                  ? "bottom-3 left-3 border-b border-l"
                  : "bottom-3 right-3 border-b border-r"
              }`}
            />
          ))}

          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-gl-400">
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gl-400 pulse-dot" />
            Early Access
          </span>
          <h2 className="mt-5 font-grotesk text-4xl md:text-5xl font-semibold tracking-[-0.025em] gl-grad-text">
            Pricing will be announced
            <br />
            <span className="font-display italic font-normal gl-green-text">
              closer to launch.
            </span>
          </h2>
          <p className="mt-5 text-fg-muted text-[15.5px] max-w-xl mx-auto">
            Join the beta today and help shape the production platform of the
            next decade. Early supporters lock in special pricing and direct
            access to the team.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-left max-w-xl mx-auto">
            {PERKS.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-[14px] text-fg-muted"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gl-400/40 bg-gl-400/10 text-gl-300">
                  <Check className="h-3 w-3" strokeWidth={2.5} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <a
              href="#download"
              data-testid="pricing-cta"
              className="gl-btn gl-btn-primary px-6 py-3 text-[15px]"
            >
              Request Early Access
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
