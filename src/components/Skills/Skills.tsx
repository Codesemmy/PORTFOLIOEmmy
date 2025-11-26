"use client";

import React from "react";
import SectionHeading from "../section-heading/SectionHeading";
import SkillsCard from "./SkillsCard";
import { useTheme } from "../../Context/ThemeContext";

// Placeholder icon in case your actual SVGs are missing
const PlaceholderIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <rect x="3" y="3" width="18" height="18" stroke="black" strokeWidth="2" />
    <path d="M6 12H18" stroke="black" strokeWidth="2" />
  </svg>
);

// Tech icons (use PlaceholderIcon for now)
export const TypescriptIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const JavascriptIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const HtmlIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const SassIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const ReduxIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const MaterialUiIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const BootstrapIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const ElectronIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const JqueryIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const AntDesignIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const GitIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const FirebaseIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const NetlifyIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;
export const WebpackIcon = (props: React.SVGProps<SVGSVGElement>) => <PlaceholderIcon {...props} />;

// Skill type
type Skill = { name: string; icon: React.ReactNode };

const Skills: React.FC = () => {
  const { isDark } = useTheme();

  const programmingSkills: Skill[] = [
    { name: "Typescript", icon: <TypescriptIcon /> },
    { name: "Javascript", icon: <JavascriptIcon /> },
    { name: "HTML", icon: <HtmlIcon /> },
    { name: "Sass", icon: <SassIcon /> },
  ];

  const libraryFrameworks: Skill[] = [
    { name: "React", icon: <ReactIcon /> },
    { name: "Redux", icon: <ReduxIcon /> },
    { name: "Material UI", icon: <MaterialUiIcon /> },
    { name: "Tailwind CSS", icon: <TailwindIcon /> },
    { name: "Bootstrap", icon: <BootstrapIcon /> },
    { name: "Electron", icon: <ElectronIcon /> },
    { name: "jQuery", icon: <JqueryIcon /> },
    { name: "Ant Design", icon: <AntDesignIcon /> },
  ];

  const toolsSkills: Skill[] = [
    { name: "Git", icon: <GitIcon /> },
    { name: "Firebase", icon: <FirebaseIcon /> },
    { name: "Figma", icon: <FigmaIcon /> },
    { name: "Netlify", icon: <NetlifyIcon /> },
    { name: "Vercel", icon: <VercelIcon /> },
    { name: "Webpack", icon: <WebpackIcon /> },
  ];

  return (
    <div className={`${isDark ? "bg-[#0d1727]" : "bg-[#fafcfe]"} flex justify-center`}>
      <div className="px-8 py-12 max-w-[117rem] w-full">
        <SectionHeading sectionName="Skills" />
        <div className="flex flex-col lg:flex-row justify-between gap-12 mt-8">
          <SkillGroup title="Programming Languages" skills={programmingSkills} />
          <SkillGroup title="Libraries & Frameworks" skills={libraryFrameworks} />
          <SkillGroup title="Tools & Platforms" skills={toolsSkills} />
        </div>
      </div>
    </div>
  );
};

const SkillGroup: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => (
  <div className="w-full lg:w-[28%]">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-6">
      {skills.map((skill) => (
        <SkillsCard key={skill.name} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  </div>
);

export default Skills;
