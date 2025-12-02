"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 w-full z-[1000] bg-white shadow-[0_2px_12px_0_rgba(196,214,222,0.25)] transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 md:px-10 py-4">
        {/* Logo */}
        <div className="cursor-pointer group inline-flex flex-col sm:flex-row items-center">
  <div className="flex items-center text-xl sm:text-2xl md:text-3xl font-bold font-[Poppins]">
    <span className="text-[#135fdc] group-hover:text-black transition-colors duration-300">
      Emmanuel
    </span>
    <span className="text-black group-hover:text-[#135fdc] transition-colors duration-300">
      .dev
    </span>
  </div>
  {/* Optional underline effect */}
  <div className="h-1 w-0 group-hover:w-full bg-[#135fdc] rounded transition-all duration-500 mt-1 sm:mt-0 sm:ml-2"></div>
</div>


        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#home" className="text-blue-900 hover:text-blue-500 text-base font-medium">
            Home
          </a>
          <a href="#about" className="text-gray-900 hover:text-blue-500 text-base font-medium">
            About Me
          </a>
          <a href="#projects" className="text-gray-900 hover:text-blue-500 text-base font-medium">
            Projects
          </a>
          <a href="#contact" className="text-gray-900 hover:text-blue-500 text-base font-medium">
            Contact Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden p-3 rounded-md focus:outline-none">
          {menuOpen ? (
            <X className="text-gray-800 w-6 h-6" />
          ) : (
            <Menu className="text-gray-800 w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center gap-6 py-6 transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } bg-white`}
      >
        <a
          href="#home"
          onClick={toggleMenu}
          className="text-gray-800 hover:text-blue-500 text-lg font-medium"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={toggleMenu}
          className="text-gray-800 hover:text-blue-500 text-lg font-medium"
        >
          About me
        </a>
        <a
          href="#projects"
          onClick={toggleMenu}
          className="text-gray-800 hover:text-blue-500 text-lg font-medium"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={toggleMenu}
          className="text-gray-800 hover:text-blue-500 text-lg font-medium"
        >
          Contact me
        </a>
      </div>
    </header>
  );
}
