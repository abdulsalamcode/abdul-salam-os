import { useState } from "react";
import Window from "./Window";
import ProjectCaseStudyWindow from "./ProjectCaseStudyWindow";
import projects from "../data/projects";

function ProjectsWindow({ onClose, onMinimize }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCaseStudyClose = () => {
    setSelectedProject(null);
  };

  return (
    <>
      {!selectedProject && (
        <Window
          title="Projects"
          onClose={onClose}
          onMinimize={onMinimize}
        >
          <div>
            <p className="text-sm font-medium tracking-wider text-cyan-400">
              PROJECTS
            </p>

            <h2 className="mt-2 text-2xl font-semibold">
              Selected Work
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              A selection of projects that demonstrate my development
              skills, problem-solving and continuous learning.
            </p>

            <div className="mt-8 space-y-4">
              {projects.map((project) => (
                <article
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className="cursor-pointer rounded-xl border border-slate-800 bg-slate-950/50 p-5 transition hover:border-slate-600 hover:bg-slate-950"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm text-cyan-400">
                        {project.category}
                      </p>

                      <h3 className="mt-2 text-lg font-semibold text-slate-100">
                        {project.title}
                      </h3>
                    </div>

                    <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-xs text-emerald-400">
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-wider text-slate-600">
                      Technologies
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs uppercase tracking-wider text-slate-600">
                      Highlights
                    </p>

                    <div className="mt-2 space-y-1.5">
                      {project.features.map((feature) => (
                        <p
                          key={feature}
                          className="text-sm text-slate-400"
                        >
                          • {feature}
                        </p>
                      ))}
                    </div>
                  </div>

                  <p className="mt-5 text-xs font-medium text-cyan-400">
                    Click to view case study →
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Window>
      )}

      {selectedProject && (
        <ProjectCaseStudyWindow
          project={selectedProject}
          onClose={handleCaseStudyClose}
          onMinimize={handleCaseStudyClose}
        />
      )}
    </>
  );
}

export default ProjectsWindow;