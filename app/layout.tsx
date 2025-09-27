import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Minimal metadata: only SEO title + description
export const metadata: Metadata = {
  title: "Youssef Elsabawy",
  description: "Create Website Egypt",
  // remove openGraph, twitter, robots — Next.js will not output OG tags
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Optional: force no index for social crawlers, just in case */}
        <meta name="robots" content="index, follow, noimageindex" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-serif`}
      >
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
