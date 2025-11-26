
"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedTextProps {
  text?: string; // make optional to prevent runtime errors
  className?: string;
  once?: boolean;
  duration?: number;
  staggerValue?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text = "", // default empty string
  className,
  once = true,
  duration = 0.06,
  staggerValue = 0.06,
}) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 500);
    }
  }, []);

  const defaultAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration },
    },
  };

  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        staggerChildren: isMobile ? staggerValue : 0.06,
      }}
      className={className}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block"
              variants={defaultAnimations}
            >
              {letter}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </motion.p>
  );
};

export default AnimatedText;
