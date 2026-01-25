import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Continuum Browser | Fast, Secure, Modern",
  description: "A fast, secure, modern browser built for focus. Download Continuum for Windows, macOS, and Linux.",
  keywords: ["browser", "web browser", "fast browser", "secure browser", "privacy browser"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
