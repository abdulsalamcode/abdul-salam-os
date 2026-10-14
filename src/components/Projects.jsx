import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCaseStudyWindow from "./ProjectCaseStudyWindow";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import projects from "../data/projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeCaseStudy = () => setSelectedProject(null);

  return (
    <>
      <section
        id="work"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
      >
        <SectionHeading
          eyebrow="FEATURED WORK"
          title="Projects I’ve Built"
          description="A selection of projects that demonstrate my development skills, problem-solving and continuous learning."
        />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 2) * 100}
              className="h-full"
            >
              <ProjectCard
                project={project}
                onOpen={setSelectedProject}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectCaseStudyWindow
          project={selectedProject}
          onClose={closeCaseStudy}
          onMinimize={closeCaseStudy}
        />
      )}
    </>
  );
}

export default Projects;