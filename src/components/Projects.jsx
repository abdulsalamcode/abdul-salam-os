import { useState } from "react";
import ProjectRow from "./ProjectRow";
import ProjectCaseStudyWindow from "./ProjectCaseStudyWindow";
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

        <ol className="mt-8 sm:mt-10">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </ol>
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