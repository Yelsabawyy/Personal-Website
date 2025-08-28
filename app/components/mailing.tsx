"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Mailing() {
  const [formData, setFormData] = useState({
    firstName: "",
    country: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-[#FAF3E9]">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center ">
        <h1 className="text-5xl md:text-6xl font-serif mb-8 text-balance">
          Let’s Stay in Touch
        </h1>

        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          {`Got an idea, a project, or just want to say hi? Drop me a message — I’d love to hear from you.`}
        </p>

        <form onSubmit={handleSubmit} className="space-y-8 max-w-md mx-auto">
          <div className="space-y-2">
            <Label
              htmlFor="firstName"
              className="text-left block text-base font-medium"
            >
              First Name
            </Label>
            <Input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 py-3 focus:border-black focus:ring-0 text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="country"
              className="text-left block text-base font-medium"
            >
              Country
            </Label>
            <Input
              id="country"
              type="text"
              value={formData.country}
              onChange={(e) => handleChange("country", e.target.value)}
              className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 py-3 focus:border-black focus:ring-0 text-base"
              required
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-left block text-base font-medium"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 py-3 focus:border-black focus:ring-0 text-base"
              required
            />
          </div>

          <div className="pt-8">
            <Button
              type="submit"
              className="bg-black hover:bg-gray-800 text-white px-8 py-6 rounded-full text-base font-medium w-full max-w-xs"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
