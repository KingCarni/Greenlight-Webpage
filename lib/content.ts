// Centralized content for the Greenlight Studio marketing site.
// Edit copy here — components consume from this single source.

export const SITE = {
  name: "Greenlight Studio",
  tagline: "AI Production Management",
  url: "https://greenlight-studio.ca",
  github: "https://github.com/KingCarni/Greenlight-Webpage",
  apk: "https://expo.dev/artifacts/eas/fHrEvJje1ZXxcXvXi2wclLoluTkk234xrSMG28XDHEo.apk",
  apkVersion: "v0.1.0-beta",
  apkReleaseNote: "Initial public beta — Asset Library, Room Scanner & Scene Editor previews.",
};

export const HERO = {
  eyebrow: "Now in Android Beta",
  headlineLine1: "Production Management.",
  headlineLine2: "Reinvented.",
  subhead:
    "Organize assets, scan locations, manage productions, and collaborate with your entire crew from one AI-powered platform.",
  primaryCta: { label: "Download Android Beta", href: "#download" },
  secondaryCta: { label: "View Features", href: "#features" },
  smallText:
    "Built for filmmakers, production companies, photographers and creative teams.",
};

export const SCREENSHOTS = [
  {
    src: "/screenshots/library.jpg",
    alt: "Greenlight Studio asset library on Android",
    caption: "Asset Library",
  },
  {
    src: "/screenshots/sign-in.jpg",
    alt: "Greenlight Studio sign in screen",
    caption: "Your Production, Your Vision",
  },
  {
    src: "/screenshots/marketplace.jpg",
    alt: "Greenlight Studio marketplace screen",
    caption: "Marketplace",
  },
];

export const FEATURES = [
  {
    icon: "Boxes",
    title: "Asset Library",
    body:
      "Store every production asset with photos, dimensions, categories, ownership and storage locations.",
  },
  {
    icon: "ScanLine",
    title: "Room Scanner",
    body:
      "Quickly document rooms, props and storage spaces using your phone — straight from set.",
  },
  {
    icon: "Clapperboard",
    title: "Project Dashboard",
    body:
      "Track scenes, locations, props, deadlines and production progress from one place.",
  },
  {
    icon: "Sparkles",
    title: "AI Assistant",
    body:
      "Generate metadata, remove image backgrounds, organize assets automatically — save hours of production work.",
  },
  {
    icon: "CloudCog",
    title: "Cloud Sync",
    body: "Access your production anywhere. Always in sync across devices and crew.",
  },
  {
    icon: "Users",
    title: "Team Collaboration",
    body:
      "Built for production teams with future support for permissions, approvals and live collaboration.",
  },
];

export const ROADMAP = [
  { status: "done", icon: "CheckCircle2", label: "Android Beta" },
  { status: "done", icon: "CheckCircle2", label: "Asset Library" },
  { status: "done", icon: "CheckCircle2", label: "Room Scanner" },
  { status: "active", icon: "Hammer", label: "Project Dashboard" },
  { status: "active", icon: "Hammer", label: "AI Automation" },
  { status: "planned", icon: "Calendar", label: "iOS App" },
  { status: "planned", icon: "Calendar", label: "Web Portal" },
  { status: "planned", icon: "Calendar", label: "Marketplace" },
] as const;

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Why Greenlight", href: "#why" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Pricing", href: "#pricing" },
  { label: "Download", href: "#download" },
];

export const FOOTER_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Download", href: "#download" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
  { label: "GitHub", href: "https://github.com/KingCarni/Greenlight-Webpage", external: true },
];
