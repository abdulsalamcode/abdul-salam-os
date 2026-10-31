import { useEffect, useRef, useState } from "react";
import { APPS } from "./apps";
import AppIcon from "./AppIcon";
import { useDesktop } from "./DesktopContext";

const LINKS = [
  { label: "GitHub", href: "https://github.com/abdulsalamcode" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abdul-salam-0b0759276",
  },
  { label: "Email", href: "mailto:itsabdulsalam2@gmail.com" },
];

function useClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 15000);

    return () => clearInterval(timer);
  }, []);

  return now;
}

function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function Taskbar() {
  const { windows, focusedId, toggle, open, showDesktop } = useDesktop();

  const [isStartOpen, setIsStartOpen] = useState(false);

  const rootRef = useRef(null);
  const startButtonRef = useRef(null);
  const menuRef = useRef(null);

  const now = useClock();

  // Start menu: close on outside click and Escape, focus first item
  useEffect(() => {
    if (!isStartOpen) {
      return;
    }

    const handlePointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsStartOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsStartOpen(false);
        startButtonRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    menuRef.current?.querySelector("button, a")?.focus();

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isStartOpen]);

  // Leaving the menu with Tab closes it
  const handleMenuBlur = (event) => {
    const next = event.relatedTarget;

    if (next && rootRef.current && !rootRef.current.contains(next)) {
      setIsStartOpen(false);
    }
  };

  const launchFromStart = (id) => {
    setIsStartOpen(false);
    open(id);
  };

  const timeText = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  const dateText = now.toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });

  const fullDateText = now.toLocaleDateString([], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <nav
      aria-label="Taskbar"
      className="fixed inset-x-0 bottom-0 z-[100] h-[var(--taskbar-h)] border-t border-slate-800 bg-slate-950/85 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-cyan-400/40 before:to-transparent"
    >
      <div className="flex h-full items-center gap-1 pl-2 sm:gap-2 sm:pl-3">
        {/* Start button + menu */}
        <div ref={rootRef} className="relative shrink-0">
          <button
            ref={startButtonRef}
            id="taskbar-start"
            type="button"
            onClick={() => setIsStartOpen((previous) => !previous)}
            aria-expanded={isStartOpen}
            aria-controls="start-menu"
            aria-label="Start menu"
            className={`flex h-10 items-center gap-2 rounded-lg px-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              isStartOpen ? "bg-slate-800" : "hover:bg-slate-800/60"
            }`}
          >
            <span
              className="flex h-7 w-7 items-center justify-center rounded-md border border-cyan-400/40 bg-slate-900 font-mono text-xs font-bold text-cyan-400 shadow-[0_0_14px_-4px_rgba(224,169,59,0.7)]"
              aria-hidden="true"
            >
              AS
            </span>

            <span className="hidden text-sm font-semibold text-slate-100 sm:inline">
              Start
            </span>
          </button>

          {isStartOpen && (
            <div
              ref={menuRef}
              id="start-menu"
              role="dialog"
              aria-label="Start menu"
              onBlur={handleMenuBlur}
              className="fixed bottom-[calc(var(--taskbar-h)+0.5rem)] left-2 z-[110] max-h-[calc(100dvh-var(--taskbar-h)-1.5rem)] w-[min(24rem,calc(100vw-1rem))] overflow-y-auto overscroll-contain rounded-2xl border border-slate-700 bg-slate-900/95 shadow-2xl shadow-black/60 backdrop-blur-xl"
            >
              {/* Profile */}
              <div className="flex items-center gap-3 border-b border-slate-800 p-4">
                <img
                  src="/abdul-salam.png"
                  alt=""
                  width="40"
                  height="40"
                  loading="lazy"
                  className="h-10 w-10 shrink-0 rounded-full border border-slate-700 object-cover object-top"
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-100">
                    Abdul Salam
                  </p>

                  <p className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                      aria-hidden="true"
                    />
                    
                  </p>
                </div>
              </div>

              {/* Apps */}
              <div className="p-2">
                <p className="px-3 pb-1 pt-2 font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  Apps
                </p>

                {APPS.map((app) => (
                  <button
                    key={app.id}
                    type="button"
                    onClick={() => launchFromStart(app.id)}
                    className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-slate-800/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-cyan-400 transition group-hover:border-cyan-400/40">
                      <AppIcon app={app} className="h-4 w-4" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-slate-100">
                        {app.title}
                      </span>

                      <span className="block truncate text-xs text-slate-400">
                        {app.description}
                      </span>
                    </span>
                  </button>
                ))}
              </div>

              {/* Quick actions */}
              <div className="space-y-3 border-t border-slate-800 p-4">
                <a
                  href="/resume.pdf"
                  download="Abdul-Salam-Resume.pdf"
                  className="flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M12 3v12" />
                    <path d="M7 11l5 5 5-5" />
                    <path d="M5 21h14" />
                  </svg>
                  Download Resume
                </a>

                <div className="grid grid-cols-3 gap-2">
                  {LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      {...(link.href.startsWith("http")
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 px-2 py-2 text-xs font-medium text-slate-200 transition hover:border-cyan-400/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    >
                      {link.label}
                      <ExternalIcon />
                    </a>
                  ))}
                </div>
              </div>

              <p className="border-t border-slate-800 px-4 py-2.5 font-mono text-[11px] text-slate-400">
                Abdul Salam OS · Esc to close
              </p>
            </div>
          )}
        </div>

        <span
          className="h-6 w-px shrink-0 bg-slate-800"
          aria-hidden="true"
        />

        {/* Apps: pinned on larger screens, running windows everywhere */}
        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
          {APPS.map((app) => {
            const entry = windows.find((item) => item.id === app.id);
            const isRunning = Boolean(entry);
            const isMinimized = Boolean(entry?.minimized);
            const isActive = focusedId === app.id;

            const stateLabel = !isRunning
              ? ""
              : isMinimized
                ? ", minimized"
                : ", open";

            return (
              <button
                key={app.id}
                id={`taskbar-app-${app.id}`}
                type="button"
                onClick={() => toggle(app.id)}
                aria-label={`${app.title}${stateLabel}`}
                aria-pressed={isActive}
                title={app.title}
                className={`group relative h-10 shrink-0 items-center gap-2 rounded-lg px-2.5 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isRunning ? "flex" : "hidden sm:flex"
                } ${
                  isActive
                    ? "bg-slate-800 text-white"
                    : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                }`}
              >
                <AppIcon
                  app={app}
                  className={`h-5 w-5 transition ${
                    isActive
                      ? "text-cyan-400"
                      : isRunning
                        ? "text-slate-100"
                        : "text-slate-400 group-hover:text-cyan-400"
                  }`}
                />

                <span className="hidden lg:inline">{app.title}</span>

                <span
                  className={`absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full transition-all ${
                    !isRunning
                      ? "w-0"
                      : isActive
                        ? "w-5 bg-cyan-400"
                        : isMinimized
                          ? "w-1.5 bg-slate-500"
                          : "w-3 bg-slate-400"
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>

        {/* System tray */}
        <div className="flex shrink-0 items-center gap-2 pr-1 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-medium text-emerald-400 lg:flex">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Ready to Build & Collaborate
          </div>

          <time
            dateTime={now.toISOString()}
            title={fullDateText}
            className="px-1 text-right leading-tight"
          >
            <span className="block text-xs font-medium text-slate-100">
              {timeText}
            </span>

            <span className="hidden text-[11px] text-slate-400 sm:block">
              {dateText}
            </span>
          </time>

          {/* Show desktop */}
          <button
            type="button"
            onClick={showDesktop}
            aria-label="Show desktop"
            title="Show desktop"
            className="h-[var(--taskbar-h)] w-3 border-l border-slate-800 transition hover:bg-slate-700/50 focus:outline-none focus-visible:bg-slate-700/60 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400 sm:w-4"
          />
        </div>
      </div>
    </nav>
  );
}

export default Taskbar;