import { useEffect, useRef, useState } from "react";
import * as profileModule from "../data/profile";

// Works whether profile.js uses `export const PROFILE` or `export default`.
const PROFILE = profileModule.PROFILE ?? profileModule.default;

const ROLE = "Full-Stack Web Developer";

const NAV_LINKS = [
  { id: "work", label: "Projects" },
  { id: "stack", label: "Tech Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

// Elements whose own Escape / click handling must never be hijacked by the header.
const FOREIGN_UI = '[role="dialog"], #start-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Scroll-spy: mark the section currently crossing the reading line.
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      const y = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (y < 200) setActiveId("");
      else if (maxScroll > 0 && maxScroll - y < 8) setActiveId("contact");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the mobile menu when the viewport grows to the desktop layout.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = (event) => {
      if (event.matches) setIsMenuOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Escape + outside click, only while the menu is open.
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      // Escape belongs to a focused window / Start menu: leave it alone.
      if (event.target instanceof Element && event.target.closest(FOREIGN_UI)) return;

      const focusInsideHeader = headerRef.current?.contains(document.activeElement);
      setIsMenuOpen(false);
      if (focusInsideHeader) menuButtonRef.current?.focus();
    };

    // Observe only: no preventDefault / stopPropagation, so the click still
    // reaches links, taskbar controls and windows exactly as before.
    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const desktopLink = (active) =>
    `relative inline-flex h-16 items-center px-3 text-sm font-medium transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400 ${
      active
        ? "text-slate-100 after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-cyan-400"
        : "text-slate-300 hover:text-slate-100"
    }`;

  const resumeLink =
    "inline-flex items-center justify-center rounded-sm border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-400 hover:text-cyan-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400";

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950"
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="#top"
          aria-label={`${PROFILE.name}, ${ROLE} — back to top`}
          className="min-w-0 rounded-sm py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <span className="block truncate text-base font-semibold leading-tight text-slate-100">
            {PROFILE.name}
          </span>
          <span className="block truncate text-xs leading-tight text-slate-400">{ROLE}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center md:flex">
          <ul className="flex items-center">
            {NAV_LINKS.map((link) => {
              const active = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={active ? "location" : undefined}
                    className={desktopLink(active)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={PROFILE.resume}
            download={PROFILE.resumeFileName}
            aria-label="Download resume (PDF)"
            className={`${resumeLink} ml-4`}
          >
            Resume
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="shrink-0 rounded-sm border border-slate-600 px-3 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-400 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:hidden"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem-var(--taskbar-h,3.5rem))] overflow-y-auto border-b border-slate-800 bg-slate-950 md:hidden"
        >
          <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => {
              const active = activeId === link.id;
              return (
                <li key={link.id} className="border-b border-slate-800 last:border-b-0">
                  <a
                    href={`#${link.id}`}
                    onClick={closeMenu}
                    aria-current={active ? "location" : undefined}
                    className={`flex min-h-12 items-center rounded-sm px-1 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400 ${
                      active ? "text-cyan-300" : "text-slate-200"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mx-auto max-w-7xl px-4 pb-4 pt-2 sm:px-6">
            <a
              href={PROFILE.resume}
              download={PROFILE.resumeFileName}
              onClick={closeMenu}
              aria-label="Download resume (PDF)"
              className={`${resumeLink} min-h-12 w-full`}
            >
              Resume (PDF)
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}