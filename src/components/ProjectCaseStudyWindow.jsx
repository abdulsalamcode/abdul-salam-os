import Window from "./Window";

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
      title={project.title}
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div>
        {/* Header */}
        <div>
          <p className="text-sm font-medium tracking-wider text-cyan-400">
            {project.category}
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h2 className="text-2xl font-semibold text-slate-100">
              {project.title}
            </h2>

            <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-xs text-emerald-400">
              {project.status}
            </span>
          </div>
        </div>

        {/* Overview */}
        <section className="mt-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Overview
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            {project.description}
          </p>
        </section>

        {/* Problem */}
        <section className="mt-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Problem
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            {project.problem}
          </p>
        </section>

        {/* Solution */}
        <section className="mt-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Solution
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            {project.solution}
          </p>
        </section>

        {/* Features */}
        <section className="mt-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Key Features
          </h3>

          <div className="mt-3 space-y-2">
            {project.features.map((feature) => (
              <p
                key={feature}
                className="text-sm leading-6 text-slate-400"
              >
                • {feature}
              </p>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="mt-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Technologies
          </h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* My Contribution */}
        <section className="mt-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
            My Contribution
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            {project.contribution}
          </p>
        </section>

        {/* What I Learned */}
        <section className="mt-8">
          <h3 className="text-sm font-medium uppercase tracking-wider text-slate-500">
            What I Learned
          </h3>

          <div className="mt-3 space-y-2">
            {project.learning.map((item) => (
              <p
                key={item}
                className="text-sm leading-6 text-slate-400"
              >
                • {item}
              </p>
            ))}
          </div>
        </section>

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