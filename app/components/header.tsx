"use client";
import { Plus, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import siteData from "@/data/site-data.json";
import { iconMap } from "./footer";

export default function Header() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const hiddenPaths = ["/"];
  const showHeaderButtons = !hiddenPaths.includes(pathname);

  const getRouteName = (path: string) => {
    if (path === "/") return "Home";
    if (path === "/resume") return "Resume";
    if (path === "/about") return "About";
    return path
      .replace("/", "")
      .replace("-", " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const routeName = getRouteName(pathname);

  return (
    <div className="relative">
      {showHeaderButtons && (
        <div className="flex flex-wrap gap-4 p-4">
          <Link
            href="/"
            className="cursor-pointer text-sm border border-black bg-black text-white px-4 py-2 rounded-full font-medium hover:border-[#FAF3E9] transition-colors"
          >
            {siteData.name}
          </Link>
          <button className="text-sm border border-black text-black px-4 py-2 rounded-full font-medium transition-colors">
            {routeName}
          </button>
        </div>
      )}

      {/* Plus Button */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="fixed top-8 cursor-pointer right-8 w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform z-20"
      >
        <Plus className="w-6 h-6 text-white" />
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-1000 z-30 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between p-4">
          <Link
            href="/"
            onClick={() => setDrawerOpen(false)}
            className="cursor-pointer text-sm border border-black bg-black text-white px-4 py-2 rounded-full font-medium hover:border-[#FAF3E9] transition-colors"
          >
            {siteData.name}
          </Link>
          <button onClick={() => setDrawerOpen(false)}>
            <X className="w-6 h-6 text-black cursor-pointer" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-6 space-y-4 text-6xl md:text-8xl">
          <Link
            href="/projects"
            onClick={() => setDrawerOpen(false)}
            className="block  text-gray-800 hover:opacity-80 transition-opacity"
          >
            Projects
          </Link>
          <Link
            href="/about"
            onClick={() => setDrawerOpen(false)}
            className="block  text-gray-800 hover:opacity-80 transition-opacity"
          >
            About
          </Link>
          <Link
            href="/resume"
            onClick={() => setDrawerOpen(false)}
            className="block  text-gray-800 hover:opacity-80 transition-opacity"
          >
            Resume
          </Link>

          <div className="flex flex-wrap gap-6 mt-12">
            {siteData.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                {iconMap[link.icon]?.("#1e2939")}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-20"
          onClick={() => setDrawerOpen(false)}
        />
      )}
    </div>
  );
}
