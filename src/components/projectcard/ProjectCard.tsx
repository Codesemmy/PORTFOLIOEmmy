"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import AnimatedText from "@/components/animatedText/AnimatedText";

interface ProjectCardProps {
  projectName: string;
  description: string;
  image?: string;
  link?: string;
  index?: number;
  techStack?: string[];
}

const cardVariants: Variants = {
  offscreen: { y: 400 },
  onscreen: {
    y: 0, // rests in natural position → no fake gap
    rotate: -4,
    transition: { type: "spring", bounce: 0.3, stiffness: 100 },
  },
};

const cardVariantsInvert: Variants = {
  offscreen: { y: 400 },
  onscreen: {
    y: 0, // same here for consistency
    rotate: 4,
    transition: { type: "spring", bounce: 0.3, stiffness: 100 },
  },
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  description,
  image,
  link = "#",
  index = 0,
  techStack = [],
}) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 500;

  // Don't render if essential props are missing
  if (!projectName || !description) return null;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      exit="offscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={`flex items-center overflow-hidden relative border-b border-gray-200 ${
        index % 2 === 0 ? "flex-row-reverse justify-between" : ""
      }`}
    >
      {/* Image Section */}
      <motion.div
        variants={index % 2 === 0 ? cardVariants : cardVariantsInvert}
        className="flex-shrink-0"
      >
        {image ? (
          <Image
            src={image}
            alt={`${projectName} preview`}
            width={500}
            height={300}
            placeholder="blur"
            blurDataURL="/placeholder.png"
          />
        ) : (
          <div className="w-[500px] h-[300px] flex items-center justify-center bg-gray-200 text-gray-600 font-medium text-center">
            No image available
          </div>
        )}
      </motion.div>

      {/* Text Section */}
      <div
        className={`pt-4 pb-3 px-4 md:pt-8 md:pb-4 md:px-8 lg:pt-12 lg:pb-6 lg:px-12 ${
          index % 2 === 0 ? "lg:pl-20" : ""
        } text-left`}
      >
        <AnimatedText
          text={projectName}
          className="font-bold text-3xl md:text-4xl leading-tight text-gray-900"
          duration={isMobile ? 0 : 0.05}
        />

        <p className="mt-3 text-base font-medium leading-relaxed text-gray-700">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3 mb-2">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-sm font-medium border transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-bold text-lg text-gray-900 hover:text-gray-700 no-underline"
          aria-label={`View more details about ${projectName}`}
        >
          <span>View more details</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
