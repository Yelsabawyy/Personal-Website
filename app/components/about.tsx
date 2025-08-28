"use client";

import { Button } from "@/components/ui/button";

export default function AboutMe() {
  const startYear = 2021;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - startYear;

  return (
    <div className="min-h-screen bg-[#94b49649] flex items-center justify-center px-8 md:py-16">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="space-y-8 text-left text-black">
            <h1 className="text-4xl md:text-6xl font-light leading-tight">
              {`Who's Youssef ?`}
            </h1>
            <div className="space-y-6 max-w-lg leading-12 text-lg opacity-90">
              I’m Youssef Elsabawy, a Full Stack Engineer with
              <span className="font-semibold px-2">{yearsOfExperience}+ years</span> 
              of experience in both frontend and backend development, creating
              digital products that perform, scale, and inspire.
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center justify-center">
            <Button
              type="button"
              className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-full text-base font-medium w-full max-w-xs"
            >
              More Details ...
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
