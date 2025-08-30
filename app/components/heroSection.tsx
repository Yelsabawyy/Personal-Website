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
              width={400}
              height={0}
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
        <section className="bg-black py-7 md:py-5 px-8 lg:px-16 overflow-hidden">
          <div className="relative">
            {/* Scrolling container */}
            <div className="flex animate-scroll space-x-9 md:space-x-28">
              {/* First set of logos */}
              <div className="flex items-center justify-center gap-14 lg:gap-28 min-w-max">
                {siteData.heroSection.happyClients.map((data, idx) => {
                  return (
                    <Image
                      key={idx}
                      src={data.pictureUrl}
                      width={data.width}
                      height="0"
                      alt={data.alt}
                      className={`${data?.class} flex-shrink-0 h-auto`}
                    />
                  );
                })}
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center justify-center gap-14 lg:gap-28 min-w-max">
                {siteData.heroSection.happyClients.map((data, idx) => {
                  return (
                    <Image
                      key={`duplicate-${idx}`}
                      src={data.pictureUrl}
                      width={data.width}
                      height="0"
                      alt={data.alt}
                      className={`${data?.class} flex-shrink-0 h-auto`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-scroll {
              animation: scroll 10s linear infinite;
            }
            @media (min-width: 768px) {
              .animate-scroll {
                animation: scroll 30s linear infinite;
              }
            }
          `}</style>
        </section>
      </div>
    </div>
  );
}
