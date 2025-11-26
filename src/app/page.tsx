

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";
import ProjectCard from "@/components/projectcard/ProjectCard";
import SectionHeading from "@/components/section-heading/SectionHeading";
import Skills from "@/components/skills/Skills";
import SkillsCard from "@/components/skills/SkillsCard";
import Contact from "@/components/contact/Contact";

import Socials from "@/components/socials/Socials";




export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Hero />
        <Projects/>
        <ProjectCard/>
        <SectionHeading/>
        <Skills/>
        <SkillsCard/>
        <Contact/>
        <Socials/>
        
      </main>
    </>
  );
}
