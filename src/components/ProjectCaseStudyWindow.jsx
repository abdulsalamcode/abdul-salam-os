import Window from "./Window";
import Icon from "./ui/Icon";

function ProjectCaseStudyWindow({
  project,
  onClose,
  onMinimize,
}) {
  if (!project) {
    return null;
  }

  return (
    <Window
      modal
      title={project.title}
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div>
        {/* Project Header */}
        <div className="border-b border-slate-800 pb-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                Case Study
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-slate-100 sm:text-3xl">
                {project.title}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {project.category}
              </p>
            </div>

            {project.status && (
              <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs text-emerald-400">
                {project.status}
              </span>
            )}
          </div>

          {/* Technologies */}
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
        </div>

        {/* Quick Overview */}
        <section className="mt-6">
          <p className="text-sm leading-7 text-slate-400">
            {project.description}
          </p>
        </section>

        {/* Problem + Solution */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <section className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
              Problem
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              {project.problem}
            </p>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
              Solution
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              {project.solution}
            </p>
          </section>
        </div>

        {/* Key Features */}
        <section className="mt-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Key Features
          </h3>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="rounded-lg border border-slate-800 bg-slate-950/40 p-4"
              >
                <span className="font-mono text-xs text-cyan-400">
                  0{index + 1}
                </span>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Highlights */}
        {project.highlights?.length > 0 && (
          <section className="mt-8">
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
              Engineering Highlights
            </h3>

            <ul className="mt-4 space-y-3">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-lg border border-slate-800 bg-slate-950/40 p-4"
                >
                  <Icon
                    name="check"
                    className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400"
                    strokeWidth={2.5}
                  />

                  <p className="text-sm leading-6 text-slate-400">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* My Contribution */}
        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-950/40 p-5">
          <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
            My Contribution
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-400">
            {project.contribution}
          </p>
        </section>

        {/* What I Learned */}
        {project.learning?.length > 0 && (
          <section className="mt-8">
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
              What I Learned
            </h3>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.learning.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-slate-800 bg-slate-950/30 p-4"
                >
                  <p className="text-sm leading-6 text-slate-400">
                    • {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Project Links */}
        {(project.github || project.liveDemo) && (
          <section className="mt-10 border-t border-slate-800 pt-6">
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
              Project Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-700 px-4 py-2.5 text-center text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                >
                  GitHub Repository
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-cyan-400 px-4 py-2.5 text-center text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
                >
                  Live Demo
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </Window>
  );
}

export default ProjectCaseStudyWindow;