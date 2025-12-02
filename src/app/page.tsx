import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";

import SectionHeading from "@/components/section-heading/SectionHeading";
import Skills from "@/components/Skills/Skills";

import Contact from "@/components/contact/Contact";

import Socials from "@/components/socials/Socials";




export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Hero />
        <Projects/>
        
        <SectionHeading sectionName="Selected Projects" />
        <Skills/>
        
        
        <Contact/>
        <Socials/>
        
      </main>
    </>
  );
}
