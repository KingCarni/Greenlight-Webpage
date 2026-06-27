# Greenlight Studio — Marketing Website

The public marketing website for **Greenlight Studio**, an AI-powered production management platform for film, television, commercials, photography, and creative productions.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and lightweight CSS-driven scroll animations. Optimized for Vercel deployment.

---

## Quick Start

```bash
yarn install
yarn dev      # http://localhost:3000
yarn build
yarn start
```

## Project Structure

```
app/
├── app/
│   ├── layout.tsx       # Root layout + fonts + metadata
│   ├── page.tsx         # Landing page (composition only)
│   └── globals.css      # Theme tokens, utilities, animations
├── components/          # Reusable sections
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── ProductPreview.tsx
│   ├── FeatureGrid.tsx
│   ├── Philosophy.tsx
│   ├── Roadmap.tsx
│   ├── Pricing.tsx
│   ├── Download.tsx
│   ├── Footer.tsx
│   └── Reveal.tsx       # Scroll-reveal primitive (IntersectionObserver)
├── lib/
│   └── content.ts       # ALL copy & links — edit text here
├── public/
│   ├── logo/            # Drop a new logo here as greenlight-logo.png
│   └── screenshots/     # Drop new screenshots here (sign-in.jpg, library.jpg, marketplace.jpg)
├── next.config.ts
└── tsconfig.json
```

## How to Customize

### Replace the logo
Drop a new image into `public/logo/greenlight-logo.png`. No code changes required.

### Replace screenshots
Add new files into `public/screenshots/` and update the `SCREENSHOTS` array in `lib/content.ts`.

### Update copy
All text lives in `lib/content.ts` — headlines, features, roadmap items, footer links, APK URL, etc. Components consume from there.

### Update the APK download
Edit `SITE.apk` and `SITE.apkVersion` in `lib/content.ts`.

## Design System

* **Theme**: Dark, cinematic. Background `#050505`, surface elevations, single bright Greenlight accent `~#2ddc6a`.
* **Fonts**: Bricolage Grotesque (headlines), Instrument Serif (display italics), Geist (body), Geist Mono (mono tags).
* **Motion**: A lightweight `<Reveal>` component using `IntersectionObserver` + CSS transitions. Buttons and cards animate via CSS.

## Future-Proofing

The structure is ready to expand with:

* `app/docs/` — Documentation
* `app/blog/` — Blog / Changelog
* `app/pricing/` — Detailed pricing plans
* `app/app/` — Dashboard / customer portal (place inside its own route group)
* `app/(auth)/` — Authentication routes

Add new routes as folders under `app/`. Share the existing components in `components/` and tokens in `app/globals.css`.

## Deploy

This is a pure static-first Next.js app, ideal for Vercel:

```bash
# Push to GitHub, then import on vercel.com.
# No env vars are required for the marketing site as it stands.
```
