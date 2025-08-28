import React from "react";
import Footer from "../components/footer";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white  flex flex-col">
      <div className="flex flex-wrap gap-4 p-4">
        <Link
          href="/"
          className="cursor-pointer text-sm border border-black bg-black text-white px-4 py-2 rounded-full font-medium hover:border-[#FAF3E9] transition-colors"
        >
          Youssef Elsabawy
        </Link>
        <Link
          href="/about"
          className="text-sm border border-black text-black px-4 py-2 rounded-full font-medium transition-colors bg-gray-100"
        >
          About
        </Link>
      </div>

      {/* Main About Content */}
      <div className="flex-1 flex flex-col items-start p-12 space-y-12 max-w-5xl mx-auto">
        {/* About Header */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Hi, I’m <span className="font-semibold">Youssef Elsabawy</span>. My
            journey has been shaped by dedication, discipline, and curiosity.
            From sports to academics, military service, and professional work,
            each stage has taught me valuable lessons that guide who I am today.
          </p>
        </div>

        {/* Life Story Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">My Life Story</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            I grew up in Alexandria, Egypt, where I played basketball
            passionately for over 10 years. Through sports, I learned
            discipline, teamwork, perseverance, and how to push my limits.
            Basketball wasn’t just a game—it was a way to develop focus and
            dedication that I carry into all areas of life.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            In 2017, I started studying Computer Science, a field that quickly
            became my passion. Over four years of study, I explored programming,
            problem-solving, and building digital solutions, graduating in 2021
            with a strong foundation in technology and creativity.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            After my graduation, I joined the Egyptian Army, specifically the
            Naval Security. This experience instilled discipline, resilience,
            and the ability to perform under pressure. It shaped my mindset and
            prepared me for challenges in both life and work.
          </p>
          <p className="text-gray-700 leading-relaxed">
            After completing my service, I began my professional career at
            TechHive. Here, I apply my skills and passion to real-world
            projects, constantly learning and growing. Each day brings new
            challenges and opportunities to contribute meaningfully, and I
            strive to make a positive impact through my work.
          </p>
        </div>

        {/* Personal Reflection */}
        <div>
          <h2 className="text-3xl font-bold mb-4">A Personal Reflection</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            Life has taught me that discipline, curiosity, and perseverance are
            key to growth. Sports taught me teamwork, education taught me
            critical thinking, military service taught me resilience, and my
            career taught me problem-solving. Together, these experiences define
            who I am today: a person committed to learning, growing, and
            contributing positively.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond work, I enjoy reading, exploring new technologies, and
            staying active. I believe that balance in life, continuous learning,
            and staying curious are essential to personal and professional
            fulfillment.
          </p>
        </div>

        {/* Closing Statement */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Looking Forward</h2>
          <p className="text-gray-700 leading-relaxed">
            My journey is ongoing. I aim to keep growing, take on new
            challenges, and make a meaningful impact in my career and personal
            life. Each experience, from the basketball courts of Alexandria to
            my time in the army and now my professional career, has prepared me
            for the future I am building every day.
          </p>
        </div>
      </div>
    </div>
  );
}
