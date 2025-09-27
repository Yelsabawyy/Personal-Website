"use client";

import { Button } from "@/components/ui/button";
import siteData from "@/data/site-data.json";
import Link from "next/link";

export default function AboutMe() {
  const startYear = siteData.aboutSection.startYear;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  // Split the bio by the placeholder
  const bioParts = siteData.aboutSection.bio.split("{yearsOfExperience}");

  return (
    <div className="min-h-screen bg-[#94b49649] flex items-center justify-center px-8 md:py-16">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="space-y-8 text-left text-black">
            <h1 className="text-4xl md:text-6xl font-light leading-tight">
              {`Who's ${siteData.aboutSection.whoIs} ?`}
            </h1>
            <div className="space-y-6 max-w-lg leading-12 text-lg opacity-90">
              {bioParts[0]}
              <span className="font-semibold px-1">{yearsOfExperience}+ years</span>
              {bioParts[1]}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center justify-center">
            <Link href={"/about"}>
              <Button
                type="button"
                className="bg-black cursor-pointer hover:bg-gray-800 text-white px-8 py-6 rounded-full text-base font-medium w-full max-w-xs"
              >
                More Details ...
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
