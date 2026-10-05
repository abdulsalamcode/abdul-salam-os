import { useEffect, useState } from "react";

function Window({ title, children, onClose, onMinimize }) {
  const [isMaximized, setIsMaximized] = useState(false);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isDragging, setIsDragging] = useState(false);

  const [dragStart, setDragStart] = useState({
    x: 0,
    y: 0,
  });

  const [startPosition, setStartPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isDragging || isMaximized) {
        return;
      }

      const deltaX = event.clientX - dragStart.x;
      const deltaY = event.clientY - dragStart.y;

      setPosition({
        x: startPosition.x + deltaX,
        y: startPosition.y + deltaY,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [
    isDragging,
    isMaximized,
    dragStart,
    startPosition,
  ]);

  const handleDragStart = (event) => {
    if (isMaximized) {
      return;
    }

    setIsDragging(true);

    setDragStart({
      x: event.clientX,
      y: event.clientY,
    });

    setStartPosition({
      x: position.x,
      y: position.y,
    });
  };

  const handleMaximize = () => {
    setIsMaximized((previous) => !previous);
    setIsDragging(false);
  };

  const handleMinimize = () => {
    setIsDragging(false);

    if (onMinimize) {
      onMinimize();
    }
  };

  const handleClose = () => {
    setIsDragging(false);

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">

      <div
        className={
          isMaximized
            ? "h-full w-full overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl"
            : "w-full max-w-3xl overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl"
        }
        style={{
          transform: isMaximized
            ? "none"
            : `translate(${position.x}px, ${position.y}px)`,
        }}
      >

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">

          {/* Left Side */}
          <div className="flex items-center gap-3">

            {/* Window Controls */}
            <div className="flex items-center gap-2">

              {/* Red - Minimize */}
              <button
                type="button"
                onClick={handleMinimize}
                className="h-3 w-3 cursor-pointer rounded-full bg-red-400 transition hover:bg-red-300"
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
                className="h-3 w-3 cursor-pointer rounded-full bg-emerald-400 transition hover:bg-emerald-300"
                aria-label={
                  isMaximized
                    ? "Restore window"
                    : "Maximize window"
                }
              />

            </div>

            {/* Draggable Title */}
            <div
              onMouseDown={handleDragStart}
              className="cursor-move select-none"
            >
              <h2 className="text-sm font-medium text-slate-200">
                {title}
              </h2>
            </div>

          </div>

          {/* Close */}
          <button
            type="button"
            onClick={handleClose}
            className="px-2 text-lg text-slate-400 transition hover:text-white"
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