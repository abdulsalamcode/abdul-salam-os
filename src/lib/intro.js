const STORAGE_KEY = "abdul-salam-os-intro-seen";

// The intro plays once per browser tab session.
// Add ?intro to the URL (e.g. localhost:5173/?intro) to replay it.
export function shouldPlayIntro() {
  try {
    if (new URLSearchParams(window.location.search).has("intro")) {
      return true;
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return false;
    }

    return window.sessionStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return false;
  }
}

export function markIntroSeen() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Storage can be blocked; the intro just plays again next time.
  }
}