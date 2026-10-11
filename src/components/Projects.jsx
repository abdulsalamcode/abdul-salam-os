import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectCaseStudyWindow from "./ProjectCaseStudyWindow";
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
        <p className="text-sm font-medium tracking-wider text-cyan-400">
          FEATURED WORK
        </p>

        <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
          Projects I’ve Built
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          A selection of projects that demonstrate my development
          skills, problem-solving and continuous learning.
        </p>

        <div className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
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