import { useEffect, useRef, useState } from "react";
import { markIntroSeen } from "../lib/intro";

const BOOT_LINES = [
  "Booting Abdul Salam OS",
  "Loading workspace",
  "Starting portfolio",
];

const PLAY_MS = 2400; // how long the boot animation runs
const EXIT_MS = 700; // how long the curtain takes to lift

function IntroScreen({ onReveal, onDone }) {
  const [leaving, setLeaving] = useState(false);

  const skipRef = useRef(null);
  const finishedRef = useRef(false);
  const onRevealRef = useRef(onReveal);
  const onDoneRef = useRef(onDone);

  useEffect(() => {
    onRevealRef.current = onReveal;
    onDoneRef.current = onDone;
  }, [onReveal, onDone]);

  const leave = () => {
    if (finishedRef.current) {
      return;
    }

    finishedRef.current = true;
    markIntroSeen();
    setLeaving(true);
    onRevealRef.current?.();
  };

  // Auto-finish after the animation, and allow skipping with the keyboard
  useEffect(() => {
    const timer = setTimeout(leave, PLAY_MS);

    const handleKeyDown = (event) => {
      if (event.key === "Tab") {
        // Keep focus on the skip button while the intro is showing
        event.preventDefault();
        skipRef.current?.focus();
        return;
      }

      if (["Escape", "Enter", " "].includes(event.key)) {
        event.preventDefault();
        leave();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Remove the screen after the exit animation
  useEffect(() => {
    if (!leaving) {
      return;
    }

    const timer = setTimeout(() => onDoneRef.current?.(), EXIT_MS);

    return () => clearTimeout(timer);
  }, [leaving]);

  // Lock page scroll and focus the skip button while it is showing
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    skipRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Loading Abdul Salam OS"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0b1120] px-6 transition duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] ${
        leaving ? "-translate-y-full opacity-0" : ""
      }`}
    >
      {/* Soft glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Monogram with a ring that draws itself */}
      <div className="intro-pop relative flex h-24 w-24 items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full -rotate-90"
          aria-hidden="true"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="rgba(148, 163, 184, 0.18)"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2.5"
            strokeLinecap="round"
            pathLength="1"
            className="intro-ring"
          />
        </svg>

        <span className="font-mono text-3xl font-bold text-cyan-400">
          AS
        </span>
      </div>

      <h1 className="intro-fade mt-6 text-2xl font-semibold text-white sm:text-3xl">
        Abdul Salam
      </h1>

      <p className="intro-fade mt-1 font-mono text-xs tracking-[0.25em] text-slate-400 [animation-delay:200ms]">
        FULL-STACK WEB DEVELOPER
      </p>

      {/* Boot lines */}
      <ul className="mt-8 space-y-2 font-mono text-sm text-slate-400">
        {BOOT_LINES.map((line, index) => (
          <li
            key={line}
            className="intro-line flex items-center gap-2"
            style={{ animationDelay: `${500 + index * 550}ms` }}
          >
            <span className="text-emerald-400" aria-hidden="true">
              ✓
            </span>
            {line}
          </li>
        ))}
      </ul>

      {/* Progress bar */}
      <div
        className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-slate-800"
        aria-hidden="true"
      >
        <div className="intro-bar h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
      </div>

      <button
        ref={skipRef}
        type="button"
        onClick={leave}
        className="absolute bottom-6 right-6 rounded-lg border border-slate-700 px-3 py-2 font-mono text-xs text-slate-300 transition hover:border-slate-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      >
        Skip intro
      </button>
    </div>
  );
}

export default IntroScreen;