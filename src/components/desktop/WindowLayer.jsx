import { useEffect } from "react";
import { APPS } from "./apps";
import { useDesktop, WindowSlotContext } from "./DesktopContext";

// Renders every open window. Windows are always rendered in the same
// (APPS) order so React never moves their DOM nodes; stacking is done
// with z-index instead, which keeps focus and scroll positions intact.
function WindowLayer() {
  const { windows, focusedId, open, close, minimize, focus } =
    useDesktop();

  const hasVisibleWindow = windows.some((item) => !item.minimized);

  // On phones a window covers the whole page, so lock page scrolling.
  useEffect(() => {
    if (!hasVisibleWindow) {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const previousOverflow = document.body.style.overflow;

    const apply = () => {
      document.body.style.overflow = mediaQuery.matches
        ? "hidden"
        : previousOverflow;
    };

    apply();
    mediaQuery.addEventListener("change", apply);

    return () => {
      mediaQuery.removeEventListener("change", apply);
      document.body.style.overflow = previousOverflow;
    };
  }, [hasVisibleWindow]);

  return APPS.map((app) => {
    const index = windows.findIndex((item) => item.id === app.id);

    if (index === -1) {
      return null;
    }

    const entry = windows[index];
    const AppWindow = app.Window;

    const slot = {
      id: app.id,
      minimized: entry.minimized,
      focused: focusedId === app.id,
      zIndex: 50 + index,
      cascade: entry.cascade,
      focus: () => focus(app.id),
    };

    return (
      <WindowSlotContext.Provider key={app.id} value={slot}>
        <AppWindow
          onClose={() => close(app.id)}
          onMinimize={() => minimize(app.id)}
          {...(app.id === "terminal" ? { onOpenWindow: open } : {})}
        />
      </WindowSlotContext.Provider>
    );
  });
}

export default WindowLayer;