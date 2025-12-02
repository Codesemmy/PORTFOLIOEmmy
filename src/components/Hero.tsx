"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex justify-center items-center bg-white min-h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full px-6 md:px-16 py-16 md:py-24">
        
        {/* Left Section */}
        <div className="flex flex-col items-start text-left md:w-1/2">
          <p className="text-lg md:text-xl font-light text-gray-700">
            Hello <span className="inline-block animate-wave">👋</span>
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            I’m Emmanuel Ogunbajo
          </h2>

          <p className="text-base md:text-lg text-gray-700 max-w-xl mt-5 mb-8 leading-relaxed">
            I’m a Frontend Developer passionate about building fast,
            user-friendly, and accessible web applications that create
            lasting experiences.
          </p>

          <div className="flex gap-4">
            <a
              href="mailto:ogunbajoemmanuel2020@gmail.com"
              className="px-6 py-3 rounded-xl bg-[#135fdc] text-white font-medium flex items-center gap-2 hover:bg-blue-700 transition"
            >
              Send a Mail <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-[#135fdc] text-[#135fdc] font-medium flex items-center gap-2 hover:bg-blue-50 transition"
            >
              Resumé <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Section (Profile Image with clean border) */}
        <div className="flex justify-end mt-12 md:mt-0 md:w-1/2">
          <motion.div
            className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full border-4 border-blue-200 transition-all duration-300 hover:border-blue-400 overflow-hidden"
            initial={{ y: -5 }}
            animate={{ y: 5 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            <img
  src="https://res.cloudinary.com/dbntcnbpv/image/upload/e_background_removal/b_rgb:135FDC/f_png/v1764674964/newporfoliopics_ajntdf.jpg"
  alt="Profile"
  draggable={false}
  className="w-full h-full object-cover rounded-full"
/>

          </motion.div>
        </div>
      </div>
    </section>
  );
}