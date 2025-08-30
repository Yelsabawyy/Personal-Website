"use client";

import Image from "next/image";
import siteData from "@/data/site-data.json";

export default function HeroSection() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
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

        {/* Infinite Scrolling Section */}
        <section className="bg-black py-7 md:py-5 px-8 lg:px-16 overflow-hidden">
          <div className="flex animate-infinite-scroll gap-14 lg:gap-28 min-w-max">
            {/* Duplicate the set of clients twice for seamless scroll */}
            {[...Array(200)].map((_, setIndex) => (
              <div
                key={setIndex}
                className="flex items-center gap-14 lg:gap-28 min-w-max"
              >
                {siteData.heroSection.happyClients.map((client, idx) => (
                  <Image
                    key={`client-${setIndex}-${idx}`}
                    src={client.pictureUrl}
                    width={client.width}
                    height={0}
                    alt={client.alt}
                    className={`${client?.class} flex-shrink-0 h-auto`}
                  />
                ))}
              </div>
            ))}
          </div>

          <style jsx>{`
            @keyframes infinite-scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-infinite-scroll {
              display: flex;
              animation: infinite-scroll 1000s linear infinite;
            }

            @media (min-width: 768px) {
              .animate-infinite-scroll {
                animation-duration: 1000s;
              }
            }
          `}</style>
        </section>
      </div>
    </div>
  );
}
