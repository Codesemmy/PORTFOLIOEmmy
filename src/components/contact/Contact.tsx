"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useTheme } from "@/Context/ThemeContext";
import AnimatedText from "@/components/animatedText/AnimatedText";
import Socials from "@/components/socials/Socials";
import {
  GoldRects,
  GreenRects,
  PinkRects,
  PurpleRects,
} from "@/assets/icons/icons";

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center px-8 sm:px-12 md:px-16 py-12 lg:py-24 ${
        isDark ? "bg-[#061122] text-white" : "bg-[#fafcfe] text-gray-900"
      }`}
      style={{
        backgroundImage: isDark
          ? "url('https://res.cloudinary.com/dt9pwfpi5/image/upload/v1702285932/three_ehzwtb.png')"
          : "url('https://res.cloudinary.com/dt9pwfpi5/image/upload/v1700223294/Vector-bg_ijfifv.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Heading */}
      <AnimatedText
        text="Want us to work"
        className="mb-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center"
      />
      <AnimatedText
        text="together?"
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8"
      />

      {/* CTA Button */}
      <button
        onClick={handleContactClick}
        className="mb-16 rounded-full border-2 border-blue-600 bg-blue-600 px-8 sm:px-10 py-3 text-white hover:bg-blue-700 transition-colors"
        aria-label="contact me"
      >
        Contact Me
      </button>

      {/* Social Links */}
      <Socials />

      {/* Decorative Rectangles */}
      <div className="absolute top-16 sm:top-16 left-10 sm:left-40 md:left-64">
        <PurpleRects />
      </div>
      <div className="absolute top-16 sm:top-16 right-10 sm:right-40 md:right-64">
        <GreenRects />
      </div>
      <div className="absolute top-64 md:top-48 left-20 md:left-[500px]">
        <GoldRects />
      </div>
      <div className="absolute top-64 md:top-48 right-20 md:right-[500px]">
        <PinkRects />
      </div>
    </div>
  );
};

export default Contact;
