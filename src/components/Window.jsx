import { useContext, useEffect, useId, useRef, useState } from "react";
import { WindowSlotContext } from "./desktop/DesktopContext";

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(",");

// Keep in sync with --taskbar-h (3.5rem) in index.css
const TASKBAR_PX = 56;

// How much of a dragged window must stay on screen
const VISIBLE_EDGE = 80;

/*
  Two modes:
  - Managed (default inside the desktop): a normal, non-modal desktop
    window. It sits above the page but below the taskbar, can be
    focused, minimized to the taskbar and stacked with other windows.
  - Modal (modal prop, e.g. case studies): a dialog that covers
    everything, traps focus and locks page scrolling.
*/
function Window({
  title,
  children,
  onClose,
  onMinimize,
  modal = false,
}) {
  const slot = useContext(WindowSlotContext);

  const isManaged = Boolean(slot) && !modal;
  const isMinimized = isManaged && slot.minimized;
  const isFocused = !isManaged || slot.focused;
  const slotId = isManaged ? slot.id : null;
  const focusWindow = isManaged ? slot.focus : undefined;

  const [isMaximized, setIsMaximized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const dialogRef = useRef(null);
  const dragRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const wasMinimizedRef = useRef(isMinimized);
  const titleId = useId();

  // Always call the latest onClose without re-running the focus effect
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Responsive screen detection
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const updateScreenSize = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateScreenSize();
    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenSize);
    };
  }, []);

  // Initial focus, Escape, and (modal only) focus trap + scroll lock
  useEffect(() => {
    const dialog = dialogRef.current;
    const previouslyFocused = document.activeElement;
    const previousBodyOverflow = document.body.style.overflow;

    if (!isManaged) {
      document.body.style.overflow = "hidden";
    }

    dialog?.focus({ preventScroll: true });

    const getFocusableElements = () => {
      if (!dialog) {
        return [];
      }

      return Array.from(
        dialog.querySelectorAll(FOCUSABLE_SELECTOR)
      ).filter((element) => element.getClientRects().length > 0);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        onCloseRef.current?.();
        return;
      }

      if (isManaged || event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements();

      if (focusableElements.length === 0) {
        event.preventDefault();
        dialog?.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      const activeElement = document.activeElement;

      if (event.shiftKey) {
        if (
          activeElement === firstElement ||
          activeElement === dialog
        ) {
          event.preventDefault();
          lastElement.focus();
        }
      } else if (
        activeElement === lastElement ||
        activeElement === dialog
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    dialog?.addEventListener("keydown", handleKeyDown);

    return () => {
      dialog?.removeEventListener("keydown", handleKeyDown);

      if (!isManaged) {
        document.body.style.overflow = previousBodyOverflow;
      }

      // Return focus to whatever opened this window.
      if (
        previouslyFocused instanceof HTMLElement &&
        previouslyFocused !== document.body &&
        previouslyFocused.isConnected
      ) {
        previouslyFocused.focus({ preventScroll: true });
      } else if (isManaged) {
        document
          .getElementById("taskbar-start")
          ?.focus({ preventScroll: true });
      }
    };
  }, [isManaged]);

  // After a browser resize a dragged window could end up off screen,
  // so put it back to its default spot.
  useEffect(() => {
    const resetPosition = () => setPosition({ x: 0, y: 0 });

    window.addEventListener("resize", resetPosition);

    return () => window.removeEventListener("resize", resetPosition);
  }, []);

  // Restored from the taskbar: move focus into the window again
  useEffect(() => {
    if (wasMinimizedRef.current && !isMinimized) {
      dialogRef.current?.focus({ preventScroll: true });
    }

    wasMinimizedRef.current = isMinimized;
  }, [isMinimized]);

  // Dragging (mouse, pen and touch), kept inside the screen
  useEffect(() => {
    if (!isDragging) {
      return;
    }

    const handleMove = (event) => {
      const drag = dragRef.current;

      if (!drag) {
        return;
      }

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const bottomLimit = viewportHeight - (isManaged ? TASKBAR_PX : 0);

      let x = drag.originX + event.clientX - drag.startX;
      let y = drag.originY + event.clientY - drag.startY;

      x = Math.min(
        Math.max(x, VISIBLE_EDGE - drag.width - drag.baseLeft),
        viewportWidth - VISIBLE_EDGE - drag.baseLeft
      );

      y = Math.min(
        Math.max(y, -drag.baseTop),
        bottomLimit - 48 - drag.baseTop
      );

      setPosition({ x, y });
    };

    const handleUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    window.addEventListener("pointercancel", handleUp);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
    };
  }, [isDragging, isManaged]);

  const handleDragStart = (event) => {
    if (isMobile || isMaximized || event.button !== 0) {
      return;
    }

    const rect = dialogRef.current?.getBoundingClientRect();

    if (!rect) {
      return;
    }

    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
      baseLeft: rect.left - position.x,
      baseTop: rect.top - position.y,
      width: rect.width,
    };

    setIsDragging(true);
  };

  const handleMaximize = () => {
    if (isMobile) {
      return;
    }

    setIsDragging(false);
    setIsMaximized((previous) => !previous);
  };

  const handleMinimize = () => {
    setIsDragging(false);
    onMinimize?.();

    // Hand focus to this window's taskbar button
    if (isManaged) {
      document
        .getElementById(`taskbar-app-${slotId}`)
        ?.focus({ preventScroll: true });
    }
  };

  const handleClose = () => {
    setIsDragging(false);
    onClose?.();
  };

  const isFullscreen = isMobile || isMaximized;

  let containerClass;
  let windowClass;

  if (isManaged) {
    containerClass = `pointer-events-none fixed inset-x-0 top-0 bottom-[var(--taskbar-h)] ${
      isMinimized ? "hidden" : "flex"
    } ${isFullscreen ? "items-stretch" : "items-center justify-center p-4"}`;

    windowClass = `pointer-events-auto flex flex-col overflow-hidden border bg-slate-900 ${
      isFullscreen
        ? "h-full w-full"
        : "max-h-[min(100%,40rem)] w-full max-w-3xl rounded-xl"
    } ${
      isFocused
        ? "border-slate-600 shadow-2xl shadow-black/60"
        : "border-slate-800 shadow-xl shadow-black/30"
    }`;
  } else {
    containerClass = isFullscreen
      ? "fixed inset-0 z-[120] flex h-dvh w-screen items-stretch justify-stretch bg-slate-950 p-0"
      : "fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/70 p-4";

    windowClass = isMobile
      ? "flex h-dvh w-full flex-col overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl"
      : isMaximized
        ? "flex h-full w-full flex-col overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl"
        : "flex max-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl";
  }

  return (
    <div
      className={containerClass}
      style={
        isManaged
          ? {
              zIndex: slot.zIndex,
              // Each new window sits a little lower and to the right.
              // Done with padding so a window can never leave the screen.
              ...(isFullscreen
                ? {}
                : {
                    paddingTop: 16 + slot.cascade * 56,
                    paddingLeft: 16 + slot.cascade * 64,
                  }),
            }
          : undefined
      }
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal={!isManaged}
        aria-labelledby={titleId}
        tabIndex={-1}
        onMouseDownCapture={focusWindow}
        onFocus={focusWindow}
        className={`${windowClass} focus:outline-none`}
        style={{
          transform: isFullscreen
            ? "none"
            : `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        {/* Window Header */}
        <div
          className={`flex shrink-0 items-center justify-between gap-3 border-b border-slate-800 px-4 py-2 transition-colors ${
            isFocused ? "bg-slate-900" : "bg-slate-900/60"
          }`}
        >
          <div className="flex min-w-0 items-center gap-3">
            {/* Desktop controls: close, minimize, maximize */}
            <div className="hidden shrink-0 items-center gap-1 sm:flex">
              <button
                type="button"
                onClick={handleClose}
                className="group inline-flex h-7 w-7 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
                aria-label={`Close ${title} window`}
              >
                <span className="h-3 w-3 rounded-full bg-red-400 transition group-hover:bg-red-300" />
              </button>

              {isManaged ? (
                <button
                  type="button"
                  onClick={handleMinimize}
                  className="group inline-flex h-7 w-7 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
                  aria-label={`Minimize ${title} window`}
                >
                  <span className="h-3 w-3 rounded-full bg-yellow-400 transition group-hover:bg-yellow-300" />
                </button>
              ) : (
                <span
                  className="inline-flex h-7 w-7 items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="h-3 w-3 rounded-full bg-yellow-400/50" />
                </span>
              )}

              <button
                type="button"
                onClick={handleMaximize}
                className="group inline-flex h-7 w-7 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                aria-label={
                  isMaximized ? "Restore window" : "Maximize window"
                }
              >
                <span className="h-3 w-3 rounded-full bg-emerald-400 transition group-hover:bg-emerald-300" />
              </button>
            </div>

            {/* Draggable Title (double-click to maximize) */}
            <div
              onPointerDown={handleDragStart}
              onDoubleClick={handleMaximize}
              className={`min-w-0 select-none touch-none ${
                isFullscreen ? "cursor-default" : "cursor-move"
              }`}
            >
              <h2
                id={titleId}
                className={`truncate text-sm font-medium ${
                  isFocused ? "text-slate-100" : "text-slate-400"
                }`}
              >
                {title}
              </h2>
            </div>
          </div>

          {/* Mobile controls */}
          <div className="flex shrink-0 items-center gap-1 sm:hidden">
            {isManaged && (
              <button
                type="button"
                onClick={handleMinimize}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label={`Minimize ${title} window`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M5 18h14" />
                </svg>
              </button>
            )}

            <button
              type="button"
              onClick={handleClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md text-xl leading-none text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={`Close ${title} window`}
            >
              ×
            </button>
          </div>
        </div>

        {/* Scrollable Content (keyboard focusable so it can be scrolled) */}
        <div
          tabIndex={0}
          role="region"
          aria-label={`${title} content`}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400/50 sm:p-6"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Window;