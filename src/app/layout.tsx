import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Continuum Browser – Resume Your Work, Not Your Tabs",
  description: "Continuum is a task-first, privacy-native browser that preserves context and lets you resume work exactly where you left off. Available for macOS, Windows, and Linux.",
  keywords: [
    "Continuum Browser",
    "task-based browser",
    "productivity browser",
    "privacy browser",
    "macOS browser",
    "Windows browser",
    "Linux browser",
  ],
  authors: [{ name: "Continuum Team" }],
  creator: "Continuum",
  publisher: "Continuum",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.globalcontinuum.app/",
    siteName: "Continuum Browser",
    title: "Continuum Browser – Resume Your Work, Not Your Tabs",
    description: "Continuum is a task-first, privacy-native browser that preserves context and lets you resume work exactly where you left off. Available for macOS, Windows, and Linux.",
    images: [
      {
        url: "/screenshot-hero.png",
        width: 1200,
        height: 630,
        alt: "Continuum Browser - Resume Your Work, Not Your Tabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Continuum Browser – Resume Your Work, Not Your Tabs",
    description: "Continuum is a task-first, privacy-native browser that preserves context and lets you resume work exactly where you left off. Available for macOS, Windows, and Linux.",
    images: ["/screenshot-hero.png"],
    creator: "@continuum",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json", // We'll create this next
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.globalcontinuum.app/" /> {/* Replace with your actual domain */}
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
