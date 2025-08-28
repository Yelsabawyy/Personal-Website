"use client";
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import siteData from "@/data/site-data.json";


export default function Header() {
  const pathname = usePathname();

  const hiddenPaths = ["/"];
  const showHeaderButtons = !hiddenPaths.includes(pathname);

  const getRouteName = (path: string) => {
    if (path === "/") return "Home";
    if (path === "/resume") return "Resume";
    if (path === "/about") return "About";
    return path.replace("/", "").replace("-", " ").replace(/\b\w/g, c => c.toUpperCase());
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

      <button className="fixed top-8 right-8 w-12 h-12 bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform z-10">
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
