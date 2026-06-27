"use client";

import Image from "next/image";
import { FOOTER_LINKS, SITE } from "@/lib/content";

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-border mt-10"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo/greenlight-logo.png"
                alt="Greenlight Studio"
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
              <div className="leading-tight">
                <div className="font-grotesk text-[17px] font-semibold tracking-tight text-fg">
                  Greenlight Studio
                </div>
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-fg-subtle">
                  {SITE.tagline}
                </div>
              </div>
            </div>
            <p className="mt-5 text-[14px] text-fg-muted max-w-md leading-relaxed">
              The production platform reinvented for filmmakers, photographers
              and creative teams. From first scout to final wrap — all in one
              place.
            </p>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol
              title="Product"
              links={FOOTER_LINKS.filter((l) =>
                ["Features", "Roadmap", "Download"].includes(l.label),
              )}
            />
            <FooterCol
              title="Legal"
              links={FOOTER_LINKS.filter((l) =>
                ["Privacy", "Terms"].includes(l.label),
              )}
            />
            <FooterCol
              title="Community"
              links={FOOTER_LINKS.filter((l) => l.label === "GitHub")}
            />
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[11.5px] uppercase tracking-[0.2em] text-fg-subtle">
            © 2026 Greenlight Studio
          </p>
          <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-fg-subtle">
            <span className="h-1.5 w-1.5 rounded-full bg-gl-400 pulse-dot" />
            Beta · v0.1
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-fg-subtle">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[14px] text-fg-muted hover:text-fg transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
