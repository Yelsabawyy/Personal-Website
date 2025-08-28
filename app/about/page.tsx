"use client";
import siteData from "@/data/site-data.json";

export default function AboutMe() {
  const { whoIs, story, reflection, Technical } = siteData.aboutPage;

  return (
    <div className="space-y-8 max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-bold">{`Who's ${whoIs}?`}</h1>

      {/* Story Section */}
      <p className="text-lg leading-8">{story}</p>

      {/* Reflection Section */}
      <h2 className="text-2xl font-semibold mt-6">A Personal Reflection</h2>
      <p className="text-lg leading-8">{reflection}</p>
      
      {/* Reflection Section */}
      <h2 className="text-2xl font-semibold mt-6">Crafting Web Experiences</h2>
      <p className="text-lg leading-8">{Technical}</p>
    </div>
  );
}
