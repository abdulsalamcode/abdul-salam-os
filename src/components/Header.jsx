import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 3v12" />
      <path d="M7 11l5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function AvailabilityDot() {
  return (
    <span className="relative flex h-2 w-2" aria-hidden="true">
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 motion-safe:animate-ping" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
    </span>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const progressRef = useRef(null);

  // Scroll state: header style, progress line and page-edge active links
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      setIsScrolled(y > 8);

      if (progressRef.current) {
        const progress =
          maxScroll > 0 ? Math.min(y / maxScroll, 1) : 0;
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      if (y < 200) {
        setActiveId("");
      } else if (maxScroll - y < 8) {
        // The contact section is short, so highlight it at the page end
        setActiveId("contact");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Scroll-spy: highlight the nav link of the section in view
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1))
    ).filter(Boolean);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (href) => activeId === href.slice(1);

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-colors duration-300 ${
        isScrolled || isMenuOpen
          ? "border-slate-800 bg-slate-950/95 shadow-lg shadow-black/20"
          : "border-transparent bg-slate-950/40"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        {/* Brand */}
        <a
          href="#top"
          aria-label="Abdul Salam - back to top"
          className="group flex min-w-0 items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-slate-900 font-mono text-sm font-bold text-cyan-400 shadow-[0_0_18px_-6px_rgba(224,169,59,0.6)] transition group-hover:border-cyan-400/60"
            aria-hidden="true"
          >
            AS
          </span>

          <span className="flex min-w-0 flex-col leading-tight">
            <span className="flex items-center gap-2">
              <span className="truncate text-sm font-semibold tracking-wide text-slate-100">
                Abdul Salam
              </span>

              <span className="rounded border border-slate-700 px-1.5 py-px font-mono text-[10px] font-medium text-slate-400">
                OS
              </span>
            </span>

            <span className="truncate text-xs text-slate-400">
              Full-Stack Developer
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-slate-800 bg-slate-900/60 p-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "location" : undefined}
              className={`rounded-full px-4 py-1.5 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isActive(link.href)
                  ? "bg-slate-800 text-white shadow-inner"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-medium text-emerald-400 lg:flex">
            <AvailabilityDot />
            Open to internships
          </div>

          <a
            href="/resume.pdf"
            download="Abdul-Salam-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <DownloadIcon />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300 transition hover:border-slate-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile panel */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-slate-800 px-4 pb-5 pt-3 md:hidden"
        >
          <div className="space-y-1">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={
                  isActive(link.href) ? "location" : undefined
                }
                className={`flex items-center gap-4 rounded-xl px-3 py-3 text-base transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive(link.href)
                    ? "bg-slate-800/80 text-white"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <span className="font-mono text-xs text-cyan-400">
                  0{index + 1}
                </span>
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/resume.pdf"
            download="Abdul-Salam-Resume.pdf"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <DownloadIcon />
            Download Resume
          </a>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-emerald-400">
            <AvailabilityDot />
            Open to internships
          </div>
        </div>
      )}

      {/* Scroll progress */}
      <div
        ref={progressRef}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500"
        style={{ transform: "scaleX(0)" }}
        aria-hidden="true"
      />
    </header>
  );
}

export default Header;