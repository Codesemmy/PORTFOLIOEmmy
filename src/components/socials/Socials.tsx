"use client";

import React from "react";
import {
  GitIcon,        // placeholder for GitHub
  HtmlIcon,       // placeholder for Instagram
  JavascriptIcon, // placeholder for Twitter
  ReactIcon,      // placeholder for LinkedIn
} from "@/assets/icons/icons";

const Socials: React.FC = () => {
  return (
    <div className="flex gap-6">
      <a
        className="transition-transform hover:scale-110"
        href="https://github.com/Lakesxo"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Link to Lakes GitHub account"
      >
        <GitIcon />
      </a>

      <a
        className="transition-transform hover:scale-110"
        href="https://instagram.com/lakes_xo_"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Link to Lakes Instagram account"
      >
        <HtmlIcon />
      </a>

      <a
        className="transition-transform hover:scale-110"
        href="https://twitter.com/lakes__xo_"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Link to Lakes Twitter account"
      >
        <JavascriptIcon />
      </a>

      <a
        className="transition-transform hover:scale-110"
        href="https://linkedin.com/in/ridwan-ajanaku"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Link to Lakes LinkedIn account"
      >
        <ReactIcon />
      </a>
    </div>
  );
};

export default Socials;
