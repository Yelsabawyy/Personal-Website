import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  openGraph: {
    title: "Youssef Elsabawy",
    description:
      "Youssef Elsabawy is a professional software engineer specializing in creating modern, high performance websites and applications. He focuses on delivering scalable and user centric solutions for businesses in Egypt and worldwide, with a strong passion for clean code, seamless user experiences, and innovative digital products.",
  },
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
