"use client";

import {
  Apple,
  Download as DownloadIcon,
  Monitor,
  Smartphone,
} from "lucide-react";
import { SITE } from "@/lib/content";
import { SectionHeader } from "./FeatureGrid";
import Reveal from "./Reveal";

export default function Download() {
  return (
    <section
      id="download"
      data-testid="download-section"
      className="relative py-24 md:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Download"
          title="Get Greenlight Studio."
          subtitle="Available today on Android as a public beta. iOS and Desktop are landing soon."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Reveal
            duration={650}
            data-testid="download-android"
            className="gl-card p-7 relative overflow-hidden"
          >
            <span
              aria-hidden
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(45,220,106,0.6), transparent 70%)",
              }}
            />
            <div className="flex items-center justify-between">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gl-400/40 bg-gl-400/10 text-gl-300">
                <Smartphone className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-gl-300">
                Available
              </span>
            </div>
            <h3 className="mt-6 font-grotesk text-2xl font-semibold tracking-tight">
              Android
            </h3>
            <p className="mt-2 text-[13.5px] text-fg-muted">
              Public beta — sideload the latest APK direct from EAS.
            </p>

            <div className="mt-5 rounded-lg border border-border bg-bg-elev-1/60 p-3 font-mono text-[11.5px]">
              <div className="flex items-center justify-between text-fg-muted">
                <span>Version</span>
                <span className="text-fg">{SITE.apkVersion}</span>
              </div>
              <div className="mt-2 pt-2 border-t border-border text-fg-subtle">
                {SITE.apkReleaseNote}
              </div>
            </div>

            <a
              href={SITE.apk}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="download-apk-button"
              className="gl-btn gl-btn-primary w-full mt-6 py-3 text-[14px]"
            >
              <DownloadIcon className="h-4 w-4" />
              Download Latest APK
            </a>
          </Reveal>

          <ComingSoonCard
            icon={<Apple className="h-5 w-5" strokeWidth={1.6} />}
            title="iOS"
            blurb="TestFlight build in progress. Reserve your spot below."
            testId="download-ios"
            delay={80}
          />

          <ComingSoonCard
            icon={<Monitor className="h-5 w-5" strokeWidth={1.6} />}
            title="Desktop"
            blurb="Mac & Windows companion app for production HQ."
            testId="download-desktop"
            delay={160}
          />
        </div>
      </div>
    </section>
  );
}

function ComingSoonCard({
  icon,
  title,
  blurb,
  testId,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  blurb: string;
  testId: string;
  delay?: number;
}) {
  return (
    <Reveal duration={650} delay={delay} className="gl-card p-7" data-testid={testId}>
      <div className="flex items-center justify-between">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-strong bg-bg-elev-1 text-fg-muted">
          {icon}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
          Coming Soon
        </span>
      </div>
      <h3 className="mt-6 font-grotesk text-2xl font-semibold tracking-tight text-fg">
        {title}
      </h3>
      <p className="mt-2 text-[13.5px] text-fg-muted">{blurb}</p>
      <button
        disabled
        className="gl-btn gl-btn-secondary w-full mt-6 py-3 text-[14px] opacity-60 cursor-not-allowed"
      >
        Notify Me
      </button>
    </Reveal>
  );
}
