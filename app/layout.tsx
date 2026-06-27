import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Greenlight Studio — Production Management. Reinvented.",
  description:
    "An AI-powered production platform for film, TV, commercials and photography teams. Organize assets, scan locations, manage productions and collaborate with your entire crew from a single workspace.",
  metadataBase: new URL("https://greenlight-studio.ca"),
  openGraph: {
    title: "Greenlight Studio — Production Management. Reinvented.",
    description:
      "AI-powered production management for film, TV, commercials, photography & creative teams.",
    url: "https://greenlight-studio.ca",
    siteName: "Greenlight Studio",
    images: ["/logo/greenlight-logo.png"],
    type: "website",
  },
  icons: {
    icon: "/logo/greenlight-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${bricolage.variable}`}
      data-theme="dark"
    >
      <body className="min-h-screen bg-bg text-fg">{children}</body>
    </html>
  );
}
