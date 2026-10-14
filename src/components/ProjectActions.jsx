import Icon from "./ui/Icon";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2";

// The buttons under a project: case study, live demo and GitHub.
// Live Demo and GitHub only show when the project has that link.
function ProjectActions({ project, onOpen }) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`View case study: ${project.title}`}
        className={`${BASE} border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 hover:border-cyan-400/60 hover:bg-cyan-400/10 focus-visible:ring-cyan-400/60`}
      >
        View Case Study
      </button>

      {project.liveDemo && (
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo: ${project.title} (opens in a new tab)`}
          className={`${BASE} bg-cyan-400 text-slate-950 hover:bg-cyan-300 focus-visible:ring-cyan-300`}
        >
          Live Demo
          <Icon name="arrow-up-right" className="h-4 w-4" />
        </a>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub repository: ${project.title} (opens in a new tab)`}
          className={`${BASE} border border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-800 focus-visible:ring-slate-400`}
        >
          GitHub
          <Icon name="arrow-up-right" className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

export default ProjectActions;