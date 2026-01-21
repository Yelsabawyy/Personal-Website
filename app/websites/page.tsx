"use client";
import React, { useState } from "react";
import siteData from "@/data/site-data.json";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";

export default function Page() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };
  return (
    <div className=" px-5 md:px-20 min-h-screen pb-20">
      <h1 className="text-5xl md:text-6xl font-light my-15 text-black leading-tight ">
        Selected Projects
      </h1>

      {siteData.project.map((project, index) => (
        <div key={index} className="border-b border-border">
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center cursor-pointer justify-between px-2 py-6 text-left hover:bg-muted/50 transition-colors group"
          >
            <span className="text-lg font-medium pr-4">{project.title}</span>
            <div className="flex-shrink-0  w-8 h-8 rounded-full border border-foreground flex items-center justify-center transition-transform group-hover:scale-110">
              {expandedItems.has(index) ? (
                <Minus className="w-4 h-4" />
              ) : (
                <Plus className="w-4 h-4" />
              )}
            </div>
          </button>

          {expandedItems.has(index) && (
            <div className="pb-6 pr-12 animate-in slide-in-from-top-2 duration-200 px-5 pt-12">
              <p className="text-md lg:text-xl -mt-10 pb-10 text-gray-700 leading-relaxed ">
                {project.Description}
              </p>
              <div
                onClick={() => window.open(project.url, "_blank")}
                className="cursor-pointer relative w-[80vw] h-[90vh] border rounded-none overflow-hidden"
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
          )}
        </div>
      ))}
    </div>
  );
}
