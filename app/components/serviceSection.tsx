"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import siteData from "@/data/site-data.json";

const services = siteData.serviceSection.services;

export default function ServicesSection() {
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
    <div className="min-h-screen bg-background px-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-light leading-tight text-balance">
                {siteData.serviceSection.title}
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>{siteData.serviceSection.bio1}</p>
                <p>{siteData.serviceSection.bio2}</p>
              </div>
            </div>
          </div>

          {/* Right Content - Toggle List */}
          <div className="space-y-1">
            {services.map((service, index) => (
              <div key={index} className="border-b border-border">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between py-6 text-left hover:bg-muted/50 transition-colors group"
                >
                  <span className="text-lg font-medium pr-4">
                    {service.title}
                  </span>
                  <div className="flex-shrink-0 cursor-pointer w-8 h-8 rounded-full border border-foreground flex items-center justify-center transition-transform group-hover:scale-110">
                    {expandedItems.has(index) ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {expandedItems.has(index) && (
                  <div className="pb-6 pr-12 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
