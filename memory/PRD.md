# Greenlight Studio — Marketing Website (PRD)

## Original Problem Statement
Build the public marketing website for **Greenlight Studio**, an AI-powered production management platform for film, TV, commercials, photography, and creative productions. Separate from the mobile app, optimized for Vercel deployment. Tech: Next.js App Router + TypeScript + Tailwind. Design: modern, premium, cinematic, dark theme with green Greenlight branding. Inspirations: Linear, Vercel, Notion, Stripe, Framer.

## Architecture
* **Framework**: Next.js 16 (App Router) at `/app` root
* **Language**: TypeScript (strict)
* **Styling**: Tailwind CSS v4 + custom CSS tokens in `app/globals.css`
* **Animations**: Custom `<Reveal>` IntersectionObserver primitive + CSS transitions (Framer Motion installed but bypassed for SSR/cross-origin reliability)
* **Icons**: `lucide-react` + inline SVGs (e.g., GitHub)
* **Fonts**: Geist + Geist Mono (body), Bricolage Grotesque (display headlines), Instrument Serif (italic accents)
* **Deploy target**: Vercel (no backend required)
* **Hosting in preview**: Supervisor runs `yarn dev -p 3000` from `/app`

## User Personas
* **Production manager** — needs to track assets, scenes, crew, locations
* **Filmmaker / Director** — wants AI-assisted production planning
* **Photographer / Creative team** — needs an organized asset library
* **Beta tester** — wants to download the Android APK + follow the roadmap

## Core Requirements (Static)
* Hero with logo, headline ("Production Management. Reinvented."), subhead, primary/secondary CTAs, small text
* Product Preview with phone mockups (3 screenshots)
* Feature Grid (6 cards: Asset Library, Room Scanner, Project Dashboard, AI Assistant, Cloud Sync, Team Collaboration)
* Why Greenlight philosophy section
* Roadmap timeline (8 items with statuses: shipped / in progress / planned)
* Pricing placeholder (Early Access — Request Early Access CTA)
* Download section (Android APK + iOS/Desktop coming-soon cards)
* Footer (Product / Legal / Community links, GitHub, copyright)
* All copy centralized in `lib/content.ts` for easy editing
* Logo replaceable via `public/logo/greenlight-logo.png`
* Screenshots replaceable via `public/screenshots/*.jpg`

## Implemented (Jan 2026)
✅ Full landing page with all 9 sections (Navbar + 8 content sections + Footer)
✅ Centralized content in `lib/content.ts`
✅ Dark cinematic theme with Greenlight green accents and CSS tokens
✅ Custom scroll-reveal animations (IntersectionObserver-based, lightweight)
✅ Responsive layout (desktop / tablet / mobile)
✅ APK download wired to https://expo.dev/artifacts/eas/fq0q6eIotkCO3GuwP9JXMhvlnf7rtPB64EZyA-BvYjQ.apk
✅ GitHub footer + navbar link to https://github.com/KingCarni/Greenlight-Webpage
✅ Data-testid attributes on every interactive element
✅ Phone-mockup carousel/staggered layout with 3 screenshots
✅ Roadmap horizontal timeline with status dots (green/amber/gray)
✅ next.config.ts: `allowedDevOrigins` for the Emergent preview domain + remote image patterns
✅ Tested 98% pass-rate via testing_agent_v3 (iteration_1.json)

## Tech Notes / Quirks
* **Initial dev-server failure**: cross-origin block from preview domain — fixed by adding `allowedDevOrigins` to `next.config.ts`. Without this, client hydration was failing silently and animations never ran.
* **Framer Motion replaced**: installed (12.42.0) but client `whileInView`/`animate` did not trigger reliably under React 19 + Next 16 + Turbopack in the dev preview. Replaced with a small `<Reveal>` component using `IntersectionObserver` + CSS transitions. More reliable and lighter weight. Framer Motion left as a dep in case future complex motion is needed.
* **Lucide v1.21 brand icons**: the version installed does not export `Github` (lucide removed brand icons). Used an inline SVG `GithubIcon` component instead.
* **Supervisor**: `/etc/supervisor/conf.d/supervisord.conf` was updated so the `frontend` program now runs `yarn dev` from `/app` (not `/app/frontend`).

## Prioritized Backlog
### P0 (next session if user asks)
* Hook up `Request Early Access` button to a real form or email capture (currently links to #download)
* Wire `Notify Me` buttons on iOS/Desktop cards to an email list
* Add a real `/privacy` and `/terms` page (currently placeholder hashes)

### P1
* Add documentation route group `app/(docs)/docs/`
* Add a blog/changelog route `app/blog/`
* Hook up an analytics provider (Plausible/Vercel Analytics)
* Add OpenGraph/Twitter card image
* Add a sitemap.xml + robots.txt

### P2
* Customer portal (authenticated route group)
* Web dashboard application
* Pricing plans with Stripe checkout
* Support center / FAQ
* I18n (English / French — given the .ca TLD)

## Next Tasks List
1. Confirm with user that the design direction is right
2. Capture remaining app screenshots (Scene Editor, Room Scanner) when available
3. Wire early-access form to email capture (Resend / SendGrid / Mailchimp)
4. Add Privacy & Terms pages
5. Deploy to Vercel and connect the greenlight-studio.ca domain
