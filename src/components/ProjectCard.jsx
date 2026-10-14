import ProjectActions from "./ProjectActions";
import SpotlightCard from "./ui/SpotlightCard";

function ProjectCard({ project, onOpen }) {
  return (
    <SpotlightCard
      as="article"
      className="flex h-full flex-col p-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 sm:p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <p className="text-sm text-cyan-400">{project.category}</p>

        {project.status && (
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-xs text-emerald-400">
            {project.status}
          </span>
        )}
      </div>

      <h3 className="mt-3 text-xl font-semibold text-slate-100">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-md border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs text-slate-400"
          >
            {technology}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <ProjectActions project={project} onOpen={onOpen} />
      </div>
    </SpotlightCard>
  );
}

export default ProjectCard;