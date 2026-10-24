import Icon from "./ui/Icon";

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition focus:outline-none focus-visible:ring-2";

// Editorial variant: used only by the Featured Work rows.
// Same buttons, same labels and same rules; only the look differs.
const EDITORIAL_FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
const EDITORIAL_BASE = `inline-flex min-h-12 items-center justify-center gap-1.5 rounded-sm text-sm font-semibold transition-colors motion-reduce:transition-none ${EDITORIAL_FOCUS}`;

// The buttons under a project: case study, live demo and GitHub.
// Live Demo and GitHub only show when the project has that link.
// variant "default" (or no variant) keeps the original look.
function ProjectActions({ project, onOpen, variant = "default" }) {
  const editorial = variant === "editorial";

  return (
    <div
      className={
        editorial
          ? "flex flex-wrap items-center gap-x-6 gap-y-2"
          : "flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      }
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`View case study: ${project.title}`}
        className={
          editorial
            ? `${EDITORIAL_BASE} border border-slate-600 px-5 py-2.5 text-slate-100 hover:border-cyan-400 hover:text-cyan-300`
            : `${BASE} border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 hover:border-cyan-400/60 hover:bg-cyan-400/10 focus-visible:ring-cyan-400`
        }
      >
        View Case Study
      </button>

      {project.liveDemo && (
        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo: ${project.title} (opens in a new tab)`}
          className={
            editorial
              ? `${EDITORIAL_BASE} text-cyan-400 underline-offset-4 hover:text-cyan-300 hover:underline`
              : `${BASE} bg-cyan-400 text-slate-950 hover:bg-cyan-300 focus-visible:ring-cyan-300`
          }
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
          className={
            editorial
              ? `${EDITORIAL_BASE} text-slate-200 underline-offset-4 hover:text-cyan-300 hover:underline`
              : `${BASE} border border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-800 focus-visible:ring-slate-400`
          }
        >
          GitHub
          <Icon name="arrow-up-right" className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

export default ProjectActions;