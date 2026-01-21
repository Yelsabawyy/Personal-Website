import Link from "next/link";
import React, { JSX } from "react";
import siteData from "@/data/site-data.json";
import Image from "next/image";

export const iconMap: Record<string, (color?: string) => JSX.Element> = {
  email: (color = "white") => (
    <svg className="w-8 h-8" fill={color} viewBox="0 0 30 30">
      <path d="M12 13.065L2.002 6.66V18h19.996V6.66L12 13.065zM12 11l9-6H3l9 6z" />
    </svg>
  ),
  facebook: (color = "white") => (
    <svg className="w-8 h-8" fill={color} viewBox="0 0 30 30">
      <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.463h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
    </svg>
  ),
  instagram: (color = "white") => (
    <svg className="w-8 h-8" fill={color} viewBox="0 0 30 30">
      <path d="M7.75 2h8.5C19.55 2 22 4.46 22 7.75v8.5C22 19.54 19.54 22 16.25 22h-8.5C4.46 22 2 19.54 2 16.25v-8.5C2 4.46 4.46 2 7.75 2zm0 2C5.68 4 4 5.68 4 7.75v8.5C4 18.32 5.68 20 7.75 20h8.5C18.32 20 20 18.32 20 16.25v-8.5C20 5.68 18.32 4 16.25 4h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.5-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
    </svg>
  ),
  github: (color = "white") => (
    <svg className="w-7 h-7" fill={color} viewBox="0 0 30 30">
      <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.293 9.402 7.867 10.932.575.106.785-.25.785-.556 0-.274-.01-1.002-.016-1.968-3.2.695-3.878-1.543-3.878-1.543-.523-1.33-1.277-1.684-1.277-1.684-1.043-.714.08-.699.08-.699 1.154.082 1.76 1.185 1.76 1.185 1.026 1.758 2.694 1.25 3.35.955.104-.743.402-1.25.73-1.537-2.554-.29-5.236-1.276-5.236-5.683 0-1.256.448-2.283 1.183-3.087-.118-.292-.513-1.464.112-3.052 0 0 .964-.31 3.157 1.18.915-.254 1.895-.38 2.872-.385.976.005 1.957.13 2.873.385 2.19-1.49 3.15-1.18 3.15-1.18.627 1.588.233 2.76.115 3.052.737.804 1.183 1.83 1.183 3.087 0 4.417-2.688 5.39-5.25 5.676.414.36.782 1.075.782 2.168 0 1.566-.014 2.832-.014 3.216 0 .31.207.667.791.554C20.71 21.396 24 17.08 24 12c0-6.352-5.148-11.5-12-11.5z" />
    </svg>
  ),
  leetcode: (color = "white") => (
    <svg className="w-8 h-8" fill={color} viewBox="0 0 30 30">
      <path d="M6 3h18v18H6V3zm9 2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z" />
    </svg>
  ),
  snapchat: (color = "white") => (
    <svg className="w-8 h-8" fill={color} viewBox="0 0 30 30">
      <path d="M15 2C7.82 2 2 7.82 2 15c0 7.18 5.82 13 13 13s13-5.82 13-13C28 7.82 22.18 2 15 2z" />
    </svg>
  ),
  twitter: (color = "white") => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      className="bi bi-twitter-x w-8 h-8 mt-1.5"
      viewBox="0 0 30 30"
    >
      <path
        d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z"
        stroke-width="1"
      ></path>
    </svg>
  ),
};

export default function Footer() {
  return (
    <div className="bg-[#D5D2C8] min-h-screen flex flex-col justify-between p-8 lg:p-16 relative">
      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center max-w-4xl">
        <h2 className="text-4xl lg:text-6xl xl:text-7xl font-light text-black mb-8 leading-tight">
          Looking for a partner?
        </h2>
        <p className="text-lg lg:text-xl text-black/80 max-w-lg">
          {`Whether it’s building from scratch or scaling what you have, I’d love to collaborate.`}{" "}
        </p>

        <div className="flex flex-wrap gap-2 mt-8 items-center">
          {siteData.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                {iconMap[link.icon]?.("black")}
              </a>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-start gap-2">
        {/* <Image
          src="https://files.catbox.moe/v5d8jd.png"
          alt="icon"
          width={70}
          height={70}
          className="rounded-md mb-1"
          unoptimized
        /> */}
        <Image
          src="https://files.catbox.moe/11ssyp.png"
          alt="icon"
          width={70}
          height={70}
          className="rounded-md mb-1"
          unoptimized
        />
      </div>
      {/* Footer */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <p className="text-black/60 text-sm">
          {new Date().getFullYear()} © Youssef Elsabawy
        </p>

        <div className="flex gap-4">
          <Link href={"https://www.linkedin.com/in/yelsabawyy"} target="_blank">
            <button className="cursor-pointer bg-black text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-[#ff7648] hover:text-black duration-500 transition-colors">
              LinkedIn
            </button>
          </Link>
          <Link href={"/projects"}>
            <button className="cursor-pointer bg-black text-white px-4 py-2 rounded-full font-medium text-sm hover:bg-[#ff7648] hover:text-black duration-500 transition-colors">
              Projects
            </button>
          </Link>
          <Link href={"/resume"}>
            <button className="cursor-pointer border border-black text-black px-4 py-2 rounded-full font-medium text-sm hover:border-black transition-colors">
              Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
