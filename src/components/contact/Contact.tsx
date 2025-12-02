"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import AnimatedText from "@/components/animatedText/AnimatedText";

// Import social icons from react-icons
import { SiGithub, SiInstagram, SiLinkedin, SiTiktok } from "react-icons/si";

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
      <div className="flex gap-6 mb-8">
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <SiGithub
  size={30}
  className="text-gray-900 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
/>

        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <SiInstagram size={30} className="text-pink-500 hover:text-pink-600 transition-colors" />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <SiLinkedin size={30} className="text-blue-700 hover:text-blue-800 transition-colors" />
        </a>
        <a
          href="https://tiktok.com/@yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <SiTiktok size={30} className="text-black hover:text-gray-800 transition-colors" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
