"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/content";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.17a11 11 0 0 1 5.79 0c2.2-1.48 3.17-1.17 3.17-1.17.63 1.58.24 2.75.12 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className="fixed top-0 inset-x-0 z-50"
      style={{
        backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
        transition: "backdrop-filter 0.3s ease",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 border-b border-border bg-bg/70"
        style={{
          opacity: scrolled ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-3.5 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          data-testid="navbar-logo"
        >
          <span className="relative inline-flex h-8 w-8 items-center justify-center">
            <Image
              src="/logo/greenlight-logo.png"
              alt="Greenlight Studio"
              width={64}
              height={64}
              className="h-8 w-8 object-contain"
              priority
            />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="text-[13px] font-semibold tracking-tight text-fg">
              Greenlight Studio
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-fg-subtle">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-3 py-1.5 text-[13.5px] text-fg-muted hover:text-fg transition-colors rounded-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            data-testid="navbar-github"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-fg-muted hover:text-fg hover:border-[#3a3a3a] transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="#download"
            data-testid="navbar-cta"
            className="gl-btn gl-btn-primary text-[13px] px-4 py-2"
          >
            Get the Beta
          </a>
        </div>
      </div>
    </header>
  );
}
