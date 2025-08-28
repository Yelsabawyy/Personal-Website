"use client"
import React from "react";
import siteData from "@/data/site-data.json";
import Link from "next/link";

export default function page() {
  return (
    <div className=" px-5 md:px-20 min-h-screen pb-20">
      <h1 className="text-5xl md:text-6xl font-light my-15 text-black leading-tight ">
        Selected Projects
      </h1>

      {siteData.project.map((project, index) => {
        return (
          <div key={index}>
            <Link href={project.url} target="_blank">
              <h1 className="text-4xl font-light my-15 text-black leading-tight cursor-pointer ">
                {project.title}
              </h1>
            </Link>
            <p className="text-md lg:text-xl -mt-10 pb-10 text-gray-700 leading-relaxed ">
              {project.Description}
            </p>
            <div
              onClick={() => window.open(project.url, "_blank")}
              className="cursor-pointer relative w-[90vw] h-[90vh] border rounded-none overflow-hidden"
            >
              {/* Overlay to capture clicks */}
              <div className="absolute inset-0 z-10"></div>

              {/* The iframe preview */}
              <iframe
                src={project.url}
                title={project.title}
                className="w-full h-full pointer-events-none"
                scrolling="no"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
