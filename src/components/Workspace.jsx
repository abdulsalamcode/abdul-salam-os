import WorkspaceCard from "./WorkspaceCard";
import SectionHeading from "./ui/SectionHeading";
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
      <SectionHeading
        eyebrow="WORKSPACE"
        title="Explore Abdul Salam OS"
        description="Explore my projects, technologies, background, resume and contact details through this interactive workspace. Everything is also available from the taskbar and Start menu below."
      />

      <ul
        aria-label="Desktop apps"
        className="mt-8 grid grid-cols-1 gap-x-8 border-b border-slate-700 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {APPS.map((app) => (
          <li key={app.id} className="border-t border-slate-700">
            <WorkspaceCard
              id={`workspace-card-${app.id}`}
              title={app.title}
              description={app.description}
              icon={app.icon}
              badge={app.badge}
              isHighlighted={app.isHighlighted}
              isMinimized={isMinimized(app.id)}
              onClick={() => open(app.id)}
            />
          </li>
        ))}
      </ul>

      <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-400">
        <span className="sm:hidden">
          Tap an app to open it. On phones, apps open full screen.
        </span>
        <span className="hidden sm:inline">
          Click an app to open it. Drag a window by its title bar. Press Esc
          inside a window to close it.
        </span>
      </p>
    </section>
  );
}

export default Workspace;