import { createContext, useContext } from "react";

// Shared desktop state (open windows, focus, actions).
export const DesktopContext = createContext(null);

// Per-window info supplied by WindowLayer to each managed window.
export const WindowSlotContext = createContext(null);

export function useDesktop() {
  const value = useContext(DesktopContext);

  if (!value) {
    throw new Error("useDesktop must be used inside <DesktopProvider>");
  }

  return value;
}