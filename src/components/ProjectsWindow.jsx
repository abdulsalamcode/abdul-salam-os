import Window from "./Window";

function ProjectsWindow({ onClose, onMinimize }) {
  return (
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

          <article className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">

            <p className="text-sm text-cyan-400">
              Full-Stack Web Application
            </p>

            <h3 className="mt-2 text-lg font-semibold">
              Employee Management System
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              A web application for managing employee information
              and administrative operations.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              React · Laravel · MySQL
            </p>

          </article>

          <article className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">

            <p className="text-sm text-cyan-400">
              Management Platform
            </p>

            <h3 className="mt-2 text-lg font-semibold">
              Jamia Umar Management Portal
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              A digital platform designed to organize and manage
              institutional information and workflows.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              React · JavaScript · MySQL
            </p>

          </article>

        </div>

      </div>
    </Window>
  );
}

export default ProjectsWindow;