import Window from "./Window";

function StackWindow({ onClose, onMinimize }) {
  return (
    <Window
      title="Tech Stack"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div>

        <p className="text-sm font-medium tracking-wider text-cyan-400">
          TECH STACK
        </p>

        <h2 className="mt-2 text-2xl font-semibold">
          Technologies I Work With
        </h2>

        <p className="mt-3 max-w-2xl text-slate-400">
          Tools and technologies I use to build modern web
          applications and digital experiences.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">
            <h3 className="font-semibold">
              Frontend
            </h3>

            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>React JS</p>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>Tailwind CSS</p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">
            <h3 className="font-semibold">
              Backend
            </h3>

            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>PHP</p>
              <p>Laravel</p>
              <p>REST APIs</p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">
            <h3 className="font-semibold">
              Database
            </h3>

            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>MySQL</p>
              <p>SQL</p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-5">
            <h3 className="font-semibold">
              Development
            </h3>

            <div className="mt-4 space-y-2 text-sm text-slate-400">
              <p>Git</p>
              <p>GitHub</p>
              <p>VS Code</p>
              <p>AI-Assisted Development</p>
            </div>
          </div>

        </div>

      </div>
    </Window>
  );
}

export default StackWindow;