import React from "react";
import Resume from "../components/resume";
import Link from "next/link";
import Footer from "../components/footer";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white  flex flex-col">
      {/* Fixed plus button */}

      {/* Top navigation buttons */}
      <div className="flex flex-wrap gap-4 p-4">
        <Link
          href="/"
          className="cursor-pointer text-sm border border-black bg-black text-white px-4 py-2 rounded-full font-medium hover:border-[#FAF3E9] transition-colors"
        >
          Youssef Elsabawy
        </Link>
        <button className="text-sm border border-black text-black px-4 py-2 rounded-full font-medium transition-colors hover:bg-gray-100">
          Resume
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <Resume />
      </div>
    </div>
  );
}
