"use client";

import Image from "next/image";
import siteData from "@/data/site-data.json";

export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="grid">
        <div className="flex flex-col justify-center py-32 px-8 bg-[#FAF3E9]">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light mb-8 text-black leading-tight">
              {siteData.name}
            </h1>
            <p
              className="text-lg lg:text-xl text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: siteData.heroSection.bio }}
            />
          </div>
        </div>

        {/* Infinite Scrolling Section */}
        {/* <HappyClient/> */}
      </div>
    </div>
  );
}

export function HappyClient() {
  return (
    <section className="bg-black py-7 md:py-5 px-8 lg:px-16 overflow-hidden">
      <div className="flex animate-infinite-scroll gap-14 lg:gap-28 min-w-max">
        {[...Array(200)].map((_, setIndex) => (
          <div
            key={setIndex}
            className="flex items-center gap-14 lg:gap-28 min-w-max"
          >
            <Image
              src={"/1.webp"}
              width={120}
              height={0}
              alt={"Paintiro"}
              className={`flex-shrink-0 h-auto`}
            />
            <Image
              src={"/2.webp"}
              width={130}
              height={0}
              alt={"goinvoice"}
              className={`flex-shrink-0 h-auto`}
            />
            <Image
              src={"/3.webp"}
              width={120}
              height={0}
              alt={"Eontech"}
              className={`flex-shrink-0 h-auto`}
            />
            <Image
              src={"/4.webp"}
              width={150}
              height={0}
              alt={"Joumana Co"}
              className={`flex-shrink-0 h-auto`}
            />
            <Image
              src={"/5.webp"}
              width={140}
              height={0}
              alt={"Sentiomail"}
              className={`-mt-4 flex-shrink-0 h-auto`}
            />
            <Image
              src={"/6.webp"}
              width={125}
              height={0}
              alt={"Ingenium Pros"}
              className={`mt-1 flex-shrink-0 h-auto`}
            />
            <Image
              src={"/7.png"}
              width={60}
              height={0}
              alt={"laser"}
              className={` flex-shrink-0 h-auto`}
            />
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
  );
}
