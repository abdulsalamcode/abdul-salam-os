import { useState } from "react";
import Window from "./Window";
import ProjectCaseStudyWindow from "./ProjectCaseStudyWindow";
import projects from "../data/projects";

function ProjectsWindow({ onClose, onMinimize }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenCaseStudy = (project) => {
    setSelectedProject(project);
  };

  const handleCloseCaseStudy = () => {
    setSelectedProject(null);
  };

  return (
    <>
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
                className="rounded-xl border border-slate-800 bg-slate-950/50 p-5 transition hover:border-slate-700"
              >
                {/* Project Header */}
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

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>

                {/* Technologies */}
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

                {/* Features */}
                <div className="mt-5">
                  <p className="text-xs uppercase tracking-wider text-slate-600">
                    Key Features
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

                {/* Case Study Button */}
                <button
                  type="button"
                  onClick={() => handleOpenCaseStudy(project)}
                  className="mt-6 rounded-lg border border-cyan-400/30 bg-cyan-400/5 px-4 py-2.5 text-sm font-medium text-cyan-400 transition hover:border-cyan-400/60 hover:bg-cyan-400/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                >
                  View Case Study
                </button>
              </article>
            ))}
          </div>
        </div>
      </Window>

      {/* Case Study Window */}
      {selectedProject && (
        <ProjectCaseStudyWindow
          project={selectedProject}
          onClose={handleCloseCaseStudy}
          onMinimize={handleCloseCaseStudy}
        />
      )}
    </>
  );
}

export default ProjectsWindow;