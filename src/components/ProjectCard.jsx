function ProjectCard({ project, onOpen }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-slate-700 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-sm text-cyan-400">{project.category}</p>

        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-xs text-emerald-400">
          {project.status}
        </span>
      </div>

      <h3 className="mt-3 text-xl font-semibold text-slate-100">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-400"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={() => onOpen(project)}
          aria-label={`View case study: ${project.title}`}
          className="w-full rounded-lg border border-cyan-400/30 bg-cyan-400/5 px-4 py-3 text-sm font-medium text-cyan-400 transition hover:border-cyan-400/60 hover:bg-cyan-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 sm:w-auto"
        >
          View Case Study
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;