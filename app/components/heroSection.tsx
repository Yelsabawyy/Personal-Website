"use client";

import Image from "next/image";
import siteData from "@/data/site-data.json";

export default function HeroSection() {
  return (
    <div className=" bg-white  ">
      <div className="grid">
        <div className="relative bg-gray-100 flex items-center justify-center p-8">
          <div className="relative">
            <Image
              src={siteData.heroSection.myPicture}
              alt={siteData.name}
              className="w-full max-w-md h-[35vh] object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center p-8 bg-white">
          <div className="max-w-lg">
            <h1 className="text-5xl md:text-6xl font-light mb-8 text-black leading-tight">
              {siteData.name}
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              {siteData.heroSection.bio}
            </p>
          </div>
        </div>
        <div className="bg-black py-7 px-8 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
            {siteData.heroSection.happyClients.map((data, idx) => {
              return (
                <Image
                  key={idx}
                  src={data.pictureUrl}
                  width={110}
                  height={0}
                  alt={data.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
