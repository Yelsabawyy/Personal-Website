/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Make sure you have this component
import { useState } from "react";

// Define Zod schema including message
const mailingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  subject: z.string().min(1, "Subject is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type MailingFormData = z.infer<typeof mailingSchema>;

export function Mailing() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MailingFormData>({
    resolver: zodResolver(mailingSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (values: MailingFormData) => {
    setErrorMessage(null);
    setSubmitMessage(null);
    setIsLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: values.fullName,
          subject: values.subject,
          email: values.email,
          message: values.message,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitMessage(
          "Message submitted successfully! I will get back to you within 24 hours."
        );
        reset();
      } else {
        setErrorMessage(data.message || "Failed to submit message");
      }
    } catch (error: any) {
      setErrorMessage(error.message || "Failed to submit message");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#FAF3E9]">
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-serif mb-8 text-balance">
          Let’s Stay in Touch
        </h1>

        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          Got an idea, a project, or just want to say hi? Drop me a message —
          I’d love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 max-w-md mx-auto text-left"
        >
          {submitMessage && (
            <div
              className={`font-medium tracking-wider  text-sm  text-[#0b7e28] `}
            >
              {submitMessage}
            </div>
          )}
          {errorMessage && (
            <div
              className={`font-medium tracking-wider  text-sm  text-[#7E110B] `}
            >
              {errorMessage}
            </div>
          )}
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="block text-base font-medium">
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              {...register("fullName")}
              className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 py-3 text-base"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="block text-base font-medium">
              Subject
            </Label>
            <Input
              id="subject"
              type="text"
              {...register("subject")}
              className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 py-3 text-base"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="block text-base font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 py-3 text-base"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="block text-base font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              rows={5}
              className="border-0 border-b border-gray-300 rounded-none bg-transparent px-0 py-3 text-base resize-none focus:border-black focus:ring-0"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-8 flex flex-row justify-center">
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-black cursor-pointer hover:bg-gray-800 text-white px-8 py-6 rounded-full text-base font-medium w-full max-w-xs"
            >
              {isLoading ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
