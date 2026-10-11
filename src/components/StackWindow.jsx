import Window from "./Window";
import Icon from "./ui/Icon";
import STACK from "../data/stack";

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
          {STACK.map((group) => (
            <div
              key={group.id}
              className="rounded-lg border border-slate-800 bg-slate-950/50 p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon name={group.icon} className="h-5 w-5" />
                </span>

                <h3 className="font-semibold">{group.title}</h3>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

export default StackWindow;