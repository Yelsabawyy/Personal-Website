"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="min-h-screen bg-white  ">
      <div className="grid">
        <div className="relative bg-gray-100 flex items-center justify-center p-8">
          <div className="relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-27%20153031-aWjTJfqsg36dB0ee2LoGifmOPHUXBz.png"
              alt="Youssef Elsabawy portrait"
              className="w-full max-w-md h-auto object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center p-8 bg-white">
          <div className="max-w-lg">
            <h1 className="text-5xl md:text-6xl font-light mb-8 text-black leading-tight">
              Youssef Elsabawy
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Versatile Full Stack Engineer shaping modern products and
              experiences that connect people, ideas, and technology.
            </p>
          </div>
        </div>
        <div className="bg-black py-6 px-8 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
            <Image src={"/companies/Eontech.png"} width={100} height={0} alt="Eontech logo" />
            <Image src={"/companies/Paintiro.png"} width={100} height={0} alt="Paintiro logo" />
            <Image src={"/companies/Ingenium.png"} width={140} height={0} alt="Ingenium logo" />
          </div>
        </div>
      </div>
    </div>
  );
}
