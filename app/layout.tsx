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

export const metadata: Metadata = {
  title: "Youssef Elsabawy",
  description: "Create Website Egypt",
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Block social media crawlers and image indexing */}
        <meta
          name="robots"
          content="index, follow, noarchive, nosnippet, noimageindex"
        />

        {/* No Open Graph tags at all */}
        {/* No Twitter cards */}
        {/* No other social metadata */}
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
