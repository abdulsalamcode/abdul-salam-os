import WorkspaceCard from "./WorkspaceCard";
import { APPS } from "./desktop/apps";
import { useDesktop } from "./desktop/DesktopContext";

function Workspace() {
  const { windows, open } = useDesktop();

  const isMinimized = (id) =>
    windows.some((item) => item.id === id && item.minimized);

  return (
    <section
      id="workspace"
      className="mx-auto max-w-7xl px-4 pb-4 pt-2 sm:px-6"
    >
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-medium tracking-wider text-cyan-400">
          WORKSPACE
        </p>

        <h2 className="mt-3 text-2xl font-semibold text-slate-100 sm:text-3xl">
          Explore Abdul Salam OS
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
          Explore my projects, technologies, background, resume
          and contact details through this interactive workspace.
          Everything is also available from the taskbar below.
        </p>
      </div>

      {/* Desktop panel */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl shadow-black/30">
        {/* Soft glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"
          aria-hidden="true"
        />

        {/* Title bar */}
        <div className="relative flex items-center justify-between gap-4 border-b border-slate-800 bg-slate-900/70 px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="flex shrink-0 items-center gap-1.5"
              aria-hidden="true"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>

            <p className="truncate font-mono text-xs text-slate-400">
              abdul-salam-os / workspace
            </p>
          </div>

          <p className="shrink-0 font-mono text-xs text-slate-400">
            {APPS.length} apps
          </p>
        </div>

        {/* App grid */}
        <div
          className="relative p-4 sm:p-6"
          style={{
            backgroundImage:
              "radial-gradient(rgba(163, 156, 140, 0.10) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {APPS.map((app) => (
              <WorkspaceCard
                key={app.id}
                id={`workspace-card-${app.id}`}
                title={app.title}
                description={app.description}
                icon={app.icon}
                badge={app.badge}
                isHighlighted={app.isHighlighted}
                isMinimized={isMinimized(app.id)}
                onClick={() => open(app.id)}
              />
            ))}
          </div>
        </div>

        {/* Hint bar */}
        <div className="relative border-t border-slate-800 bg-slate-900/70 px-4 py-3">
          <p className="font-mono text-xs text-slate-400">
            <span className="sm:hidden">
              Tap an app to open it
            </span>
            <span className="hidden sm:inline">
              Click an app to open it · drag windows by the title bar ·
              Esc closes the active window
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Workspace;