"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    title: "Brand Identity & Systems",
    content:
      "Comprehensive brand development from logo design to complete visual identity systems that establish your unique market presence.",
  },
  {
    title: "Campaigns & Launches",
    content:
      "Strategic campaign development and product launch support that creates buzz and drives meaningful engagement with your audience.",
  },
  {
    title: "Web & Digital Design",
    content:
      "Modern, responsive web design and digital experiences that convert visitors into customers and reflect your brand values.",
  },
  {
    title: "Content & Creative Direction",
    content:
      "Strategic content creation and creative direction that tells your story authentically and connects with your target audience.",
  },
  {
    title: "Events & Activations",
    content:
      "Memorable event experiences and brand activations that create lasting impressions and strengthen customer relationships.",
  },
  {
    title: "Strategic Collaboration",
    content:
      "Long-term partnership approach to help your business grow through strategic design thinking and collaborative problem-solving.",
  },
];

export default function ToggleComponent() {
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
                Design, develop, and launch end-to-end.
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  From the first line of code to a polished live product — I
                  build websites that perform, scale, and inspire.
                </p>
                <p>
                  Whether starting from scratch or transforming what exists, I
                  craft digital experiences that deliver at every stage.
                </p>
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
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-foreground flex items-center justify-center transition-transform group-hover:scale-110">
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
