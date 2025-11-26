"use client";

import { usePathname } from "next/navigation";
import ProjectCard from "../projectcard/ProjectCard";
import SectionHeading from "../section-heading/SectionHeading";

export interface Project {
  name: string;
  description: string;
  image: string;
  url: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    name: "Accelbyte",
    description:
      "AccelByte provides backend-as-a-service tools for game studios to build, scale, and manage live multiplayer games with features like matchmaking, user accounts, and storefronts.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1751144584/accelbyte_vxobha.png",
    url: "https://accelbyte.io/",
    techStack: ["React", "TypeScript", "Electron", "Go"],
  },
  {
    name: "Cuvris",
    description:
      "Cuvris is a health compliance platform that helps organizations stay aligned with regulatory standards by simplifying compliance workflows, risk tracking, and documentation.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1751144584/cuvris_koapmq.png",
    url: "https://www.cuvris.com/",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Azure",
    ],
  },
  {
    name: "SunFi",
    description:
      "SunFi is a fintech platform that helps users access and finance clean solar energy solutions through tailored plans and trusted energy provider matching.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1751144584/sunfi_oohibx.png",
    url: "https://www.sunfi.co/",
    techStack: ["React", "Sass", "Javascript", "Jenkins"],
  },
  {
    name: "Github Finds",
    description:
      "GitHub Finds is a personal project that allows users to discover GitHub users or organizations — with shareable filtered links.",
    image:
      "https://res.cloudinary.com/dt9pwfpi5/image/upload/v1751144584/gtsearch_qgdiaq.png",
    url: "https://githubfinds.netlify.app/",
    techStack: ["React", "Typescript", "Tailwind CSS", "GitHub API", "Netlify"],
  },
];

const Projects = () => {
  const pathname = usePathname();

  // Double-proof: filter out undefined/null items
  const validProjects = projects.filter((project) => project && project.name && project.url);

  return (
    <div className="flex justify-center bg-white py-12 md:py-20">
      <div className="max-w-[117rem] w-full px-4 md:px-8">
        {pathname === "/" && <SectionHeading sectionName="Selected Projects" />}

        <div className="flex flex-col gap-28 md:gap-20 sm:gap-8">
          {validProjects.map((project, index) => (
            <ProjectCard
              key={project.name || index}
              projectName={project.name || "Untitled Project"}
              image={project.image || ""}
              description={project.description || "No description available."}
              link={project.url || "#"}
              index={index + 1}
              techStack={project.techStack || []}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
