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

// ✅ Completely disable social media previews
export const metadata: Metadata = {
  title: "Youssef Elsabawy",
  description: "Create Website Egypt",
  // Explicitly disable Open Graph
  openGraph: {
    title: undefined,
    description: undefined,
    images: undefined,
    url: undefined,
  },
  // Explicitly disable Twitter cards
  twitter: {
    card: undefined,
    title: undefined,
    description: undefined,
    images: undefined,
  },
  // Disable other social metadata
  other: {
    // Block Facebook/Meta crawlers
    'og:title': '',
    'og:description': '',
    'og:image': '',
    'og:url': '',
    'og:type': '',
    // Block Twitter cards
    'twitter:card': '',
    'twitter:title': '',
    'twitter:description': '',
    'twitter:image': '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Block social media crawlers and image indexing */}
        <meta name="robots" content="index, follow, noimageindex" />
        
        {/* Explicitly block Open Graph tags */}
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="" />
        
        {/* Block Twitter cards */}
        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
        
        {/* Block other social platforms */}
        <meta property="fb:app_id" content="" />
        <meta name="linkedin:card" content="" />
        
        {/* Alternative: Use nosnippet to prevent preview generation */}
        <meta name="googlebot" content="index, follow, nosnippet, noimageindex" />
        <meta name="bingbot" content="index, follow, nosnippet, noimageindex" />
        
        {/* Block specific social crawlers (optional, more aggressive) */}
        {/* Uncomment these if you want to completely block social crawlers */}
        {/*
        <meta name="facebookexternalhit" content="noindex, nofollow" />
        <meta name="twitterbot" content="noindex, nofollow" />
        <meta name="linkedinbot" content="noindex, nofollow" />
        */}
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