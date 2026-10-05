import { useState } from "react";

function Window({ title, children, onClose, onMinimize }) {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => {
    setIsMaximized((previous) => !previous);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">

      <div
        className={
          isMaximized
            ? "h-full w-full overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl"
            : "w-full max-w-3xl overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl"
        }
      >

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">

          <div className="flex items-center gap-3">

            {/* Red - Minimize */}
            <button
              type="button"
              onClick={onMinimize}
              className="h-3 w-3 rounded-full bg-red-400 transition hover:bg-red-300"
              aria-label="Minimize window"
            />

            {/* Yellow - Reserved */}
            <span
              className="h-3 w-3 rounded-full bg-yellow-400"
              aria-hidden="true"
            />

            {/* Green - Maximize / Restore */}
            <button
              type="button"
              onClick={handleMaximize}
              className="h-3 w-3 rounded-full bg-emerald-400 transition hover:bg-emerald-300"
              aria-label={
                isMaximized
                  ? "Restore window"
                  : "Maximize window"
              }
            />

            <h2 className="ml-2 text-sm font-medium text-slate-200">
              {title}
            </h2>

          </div>

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="text-lg text-slate-400 transition hover:text-white"
            aria-label="Close window"
          >
            ×
          </button>

        </div>

        {/* Content */}
        <div
          className={
            isMaximized
              ? "h-[calc(100vh-57px)] overflow-y-auto p-6"
              : "max-h-[80vh] overflow-y-auto p-6"
          }
        >
          {children}
        </div>

      </div>

    </div>
  );
}

export default Window;