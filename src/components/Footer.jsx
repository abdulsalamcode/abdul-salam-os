import { CONTACTS, isLive } from "../data/contacts";
import Icon from "./ui/Icon";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const YEAR = new Date().getFullYear();

function Footer() {
  const socials = CONTACTS.filter(isLive);

  return (
    <footer className="relative mt-8 border-t border-slate-800 bg-slate-950/40">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#top"
              className="inline-flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-slate-900 font-mono text-sm font-bold text-cyan-400 shadow-[0_0_18px_-6px_rgba(224,169,59,0.6)]"
                aria-hidden="true"
              >
                AS
              </span>

              <span>
                <span className="block font-semibold text-white">
                  Abdul Salam
                </span>
                <span className="block text-xs text-slate-400">
                  Full-Stack Web Developer
                </span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Building modern web applications with React, Laravel
              and MySQL, and always learning to build them better.
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer">
            <h2 className="font-mono text-xs uppercase tracking-wider text-slate-400">
              Navigate
            </h2>

            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-300 transition hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h2 className="font-mono text-xs uppercase tracking-wider text-slate-400">
              Connect
            </h2>

            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map((contact) => (
                <li key={contact.id}>
                  <a
                    href={contact.href}
                    aria-label={contact.label}
                    title={contact.label}
                    {...(contact.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <Icon name={contact.icon} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} Abdul Salam</p>

          <p className="flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            System Status: Online
          </p>

          <p>Built with React + Tailwind CSS</p>

          <a
            href="#top"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-800 px-3 py-1.5 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Back to top
            <Icon name="arrow-up" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;