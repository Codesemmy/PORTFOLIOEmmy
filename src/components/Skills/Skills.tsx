"use client";
import React from "react";
import SectionHeading from "../section-heading/SectionHeading";
import SkillsCard from "./SkillsCard";
import { useTheme } from "../../context/ThemeContext";

import { 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiSass, 
  SiReact, 
  SiRedux, 
  SiTailwindcss, 
  SiBootstrap, 
  SiElectron, 
  SiJquery, 
  SiAntdesign, 
  SiGit, 
  SiFirebase, 
  SiFigma, 
  SiNetlify, 
  SiVercel, 
  SiWebpack 
} from "react-icons/si";

// Skill type
type Skill = { name: string; icon: React.ReactNode };

const Skills: React.FC = () => {
  const { isDark } = useTheme();

  const programmingSkills: Skill[] = [
    { name: "Typescript", icon: <SiTypescript className="w-6 h-6" color="#3178C6" /> },
    { name: "Javascript", icon: <SiJavascript className="w-6 h-6" color="#F7DF1E" /> },
    { name: "HTML", icon: <SiHtml5 className="w-6 h-6" color="#E34F26" /> },
    { name: "Sass", icon: <SiSass className="w-6 h-6" color="#CC6699" /> },
  ];

  const libraryFrameworks: Skill[] = [
    { name: "React", icon: <SiReact className="w-6 h-6" color="#61DAFB" /> },
    { name: "Redux", icon: <SiRedux className="w-6 h-6" color="#764ABC" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" color="#06B6D4" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="w-6 h-6" color="#7952B3" /> },
    { name: "Electron", icon: <SiElectron className="w-6 h-6" color="#47848F" /> },
    { name: "jQuery", icon: <SiJquery className="w-6 h-6" color="#0769AD" /> },
    { name: "Ant Design", icon: <SiAntdesign className="w-6 h-6" color="#0170FE" /> },
  ];

  const toolsSkills: Skill[] = [
    { name: "Git", icon: <SiGit className="w-6 h-6" color="#F05032" /> },
    { name: "Firebase", icon: <SiFirebase className="w-6 h-6" color="#FFCA28" /> },
    { name: "Figma", icon: <SiFigma className="w-6 h-6" color="#F24E1E" /> },
    { name: "Netlify", icon: <SiNetlify className="w-6 h-6" color="#00C7B7" /> },
    { name: "Vercel", icon: <SiVercel className="w-6 h-6" color="#000000" /> },
    { name: "Webpack", icon: <SiWebpack className="w-6 h-6" color="#8DD6F9" /> },
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
