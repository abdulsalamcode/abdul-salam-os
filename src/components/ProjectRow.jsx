import ProjectActions from "./ProjectActions";
import Reveal from "./ui/Reveal";

// One editorial row in Featured Work. Shows the same content the old card
// showed: category, status, title, description, technologies and actions.
function ProjectRow({ project, index, onOpen }) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="border-t border-slate-700 last:border-b">
      <Reveal>
        <article className="grid gap-4 py-8 sm:py-10 lg:grid-cols-12 lg:gap-8">
          <p className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1 text-sm lg:col-span-3 lg:flex-col lg:items-start lg:gap-y-2">
            <span aria-hidden="true" className="font-mono text-slate-400">
              {number}
            </span>

            <span className="text-cyan-400">{project.category}</span>

            {project.status && (
              <span className="text-emerald-400">
                <span className="sr-only">Status: </span>
                {project.status}
              </span>
            )}
          </p>

          <div className="min-w-0 lg:col-span-9">
            <h3 className="break-words text-xl font-semibold leading-snug text-slate-100 sm:text-2xl">
              {project.title}
            </h3>

            <p className="mt-3 max-w-prose text-base leading-7 text-slate-300">
              {project.description}
            </p>

            <ul
              aria-label={`Technologies used in ${project.title}`}
              className="mt-5 flex flex-wrap gap-x-2 gap-y-1 text-sm text-slate-400"
            >
              {project.technologies.map((technology, i) => (
                <li key={technology}>
                  {technology}
                  {i < project.technologies.length - 1 && (
                    <span aria-hidden="true"> ·</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <ProjectActions
                project={project}
                onOpen={onOpen}
                variant="editorial"
              />
            </div>
          </div>
        </article>
      </Reveal>
    </li>
  );
}

export default ProjectRow;