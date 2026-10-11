import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DesktopContext } from "./DesktopContext";

// Keeps track of every window: { id, minimized, cascade }.
// The array order is the stacking order (last = on top).
function DesktopProvider({ children }) {
  const [windows, setWindows] = useState([]);
  const windowsRef = useRef(windows);
  const cascadeRef = useRef(0);

  useEffect(() => {
    windowsRef.current = windows;
  }, [windows]);

  const open = useCallback((id) => {
    // New windows are offset a little so they do not stack exactly.
    const cascade = cascadeRef.current % 4;
    cascadeRef.current += 1;

    setWindows((previous) => {
      const existing = previous.find((item) => item.id === id);
      const others = previous.filter((item) => item.id !== id);

      return [
        ...others,
        existing
          ? { ...existing, minimized: false }
          : { id, minimized: false, cascade },
      ];
    });
  }, []);

  const focus = useCallback((id) => {
    setWindows((previous) => {
      const target = previous.find((item) => item.id === id);

      if (!target || previous[previous.length - 1].id === id) {
        return previous;
      }

      return [...previous.filter((item) => item.id !== id), target];
    });
  }, []);

  const minimize = useCallback((id) => {
    setWindows((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, minimized: true } : item
      )
    );
  }, []);

  const close = useCallback((id) => {
    setWindows((previous) =>
      previous.filter((item) => item.id !== id)
    );
  }, []);

  // Taskbar button behaviour (same as a real OS):
  // closed -> open, minimized -> restore, behind -> bring to front,
  // already on top -> minimize.
  const toggle = useCallback(
    (id) => {
      const list = windowsRef.current;
      const target = list.find((item) => item.id === id);

      if (!target || target.minimized) {
        open(id);
        return;
      }

      const topVisible = [...list]
        .reverse()
        .find((item) => !item.minimized);

      if (topVisible && topVisible.id === id) {
        minimize(id);
      } else {
        focus(id);
      }
    },
    [open, minimize, focus]
  );

  // "Show desktop": minimize everything, or bring everything back.
  const showDesktop = useCallback(() => {
    const anyVisible = windowsRef.current.some(
      (item) => !item.minimized
    );

    setWindows((previous) =>
      previous.map((item) => ({ ...item, minimized: anyVisible }))
    );
  }, []);

  const focusedId = useMemo(() => {
    const visible = windows.filter((item) => !item.minimized);
    return visible.length > 0 ? visible[visible.length - 1].id : null;
  }, [windows]);

  const value = useMemo(
    () => ({
      windows,
      focusedId,
      open,
      focus,
      minimize,
      close,
      toggle,
      showDesktop,
    }),
    [windows, focusedId, open, focus, minimize, close, toggle, showDesktop]
  );

  return (
    <DesktopContext.Provider value={value}>
      {children}
    </DesktopContext.Provider>
  );
}

export default DesktopProvider;