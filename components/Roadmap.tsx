"use client";

import { CheckCircle2, Hammer, Calendar, type LucideIcon } from "lucide-react";
import { ROADMAP } from "@/lib/content";
import { SectionHeader } from "./FeatureGrid";
import Reveal from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  CheckCircle2,
  Hammer,
  Calendar,
};

const STATUS_META: Record<
  "done" | "active" | "planned",
  { label: string; ring: string; dot: string; text: string }
> = {
  done: {
    label: "Shipped",
    ring: "border-gl-400/60",
    dot: "bg-gl-400 shadow-[0_0_18px_rgba(45,220,106,0.7)]",
    text: "text-gl-300",
  },
  active: {
    label: "In progress",
    ring: "border-amber-500/40",
    dot: "bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]",
    text: "text-amber-200",
  },
  planned: {
    label: "Planned",
    ring: "border-border-strong",
    dot: "bg-fg-subtle",
    text: "text-fg-subtle",
  },
};

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      data-testid="roadmap-section"
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Roadmap"
          title="What we're building, in the open."
          subtitle="A transparent timeline of where Greenlight Studio is today and where it's going next."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent"
          />
          <div
            aria-hidden
            className="md:hidden absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-gl-400/40 via-border-strong to-transparent"
          />

          <ol className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-y-10 md:gap-y-0 md:gap-x-3 relative">
            {ROADMAP.map((item, i) => {
              const Icon = ICONS[item.icon] ?? Calendar;
              const meta = STATUS_META[item.status];
              return (
                <Reveal
                  as="li"
                  key={item.label}
                  delay={i * 70}
                  duration={550}
                  data-testid={`roadmap-item-${i}`}
                  className="relative pl-12 md:pl-0 md:pt-12"
                >
                  <span
                    className={`absolute md:left-1/2 md:-translate-x-1/2 md:top-3.5 left-[15px] top-2 h-3 w-3 rounded-full ${meta.dot}`}
                  />
                  <div
                    className={`gl-card p-5 md:p-4 lg:p-5 ${meta.ring} border md:text-center`}
                  >
                    <div className="flex md:justify-center items-center gap-2">
                      <Icon
                        className={`h-4 w-4 ${meta.text}`}
                        strokeWidth={1.75}
                      />
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.2em] ${meta.text}`}
                      >
                        {meta.label}
                      </span>
                    </div>
                    <h3 className="mt-2 font-grotesk text-[15px] font-semibold tracking-tight text-fg">
                      {item.label}
                    </h3>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
