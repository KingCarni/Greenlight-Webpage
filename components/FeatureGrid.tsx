"use client";

import {
  Boxes,
  ScanLine,
  Clapperboard,
  Sparkles,
  CloudCog,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FEATURES } from "@/lib/content";
import Reveal from "./Reveal";

const ICON_MAP: Record<string, LucideIcon> = {
  Boxes,
  ScanLine,
  Clapperboard,
  Sparkles,
  CloudCog,
  Users,
};

export default function FeatureGrid() {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Features"
          title="Everything a production needs."
          subtitle="A single workspace that replaces the spreadsheets, group chats and storage rooms — purpose-built for creative teams."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f, i) => {
            const Icon = ICON_MAP[f.icon] ?? Sparkles;
            return (
              <Reveal
                as="article"
                key={f.title}
                delay={i * 70}
                duration={650}
                data-testid={`feature-card-${f.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="gl-card p-6 md:p-7"
                onMouseMove={(e: React.MouseEvent<HTMLElement>) => {
                  const target = e.currentTarget as HTMLElement;
                  const r = target.getBoundingClientRect();
                  target.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  target.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-bg-elev-1 text-gl-400">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-grotesk text-[22px] md:text-[24px] font-semibold tracking-tight text-fg">
                  {f.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-fg-muted">
                  {f.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`${
        align === "center" ? "text-center mx-auto" : "text-left"
      } max-w-2xl`}
    >
      {eyebrow && (
        <Reveal
          as="span"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-gl-400"
        >
          <span className="h-px w-6 bg-gl-400/60" />
          {eyebrow}
        </Reveal>
      )}
      <Reveal
        as="h2"
        delay={80}
        className="mt-4 font-grotesk text-3xl md:text-5xl font-semibold tracking-[-0.025em] gl-grad-text"
      >
        {title}
      </Reveal>
      {subtitle && (
        <Reveal
          as="p"
          delay={160}
          className="mt-4 text-[15.5px] md:text-base leading-relaxed text-fg-muted"
        >
          {subtitle}
        </Reveal>
      )}
    </div>
  );
}
