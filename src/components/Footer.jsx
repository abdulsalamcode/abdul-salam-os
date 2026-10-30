import { CONTACTS, isLive } from "../data/contacts";

const YEAR = new Date().getFullYear();

const NAV_LINKS = [
  { label: "Projects", href: "#work" },
  { label: "Tech Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Only these three are shown here; the Contact section lists everything.
const CONNECT_IDS = ["email", "linkedin", "github"];
const CONNECT = CONNECT_IDS.map((id) =>
  CONTACTS.find((contact) => contact.id === id)
).filter((contact) => contact && isLive(contact));

const LINK =
  "inline-block rounded-sm py-1 text-slate-300 transition-colors hover:text-cyan-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400";

function Footer() {
  return (
    <footer className="border-t border-slate-700">
      {/* The page wrapper in App.jsx already reserves the taskbar height */}
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-6">
            <a
              href="#top"
              className="inline-block rounded-sm text-xl font-semibold text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              Abdul Salam
            </a>
            <p className="mt-1 text-sm font-medium text-cyan-400">
              Full-Stack Web Developer
            </p>
            <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
              Building web applications and continuing to improve as a
              developer.
            </p>
          </div>

          <nav aria-labelledby="footer-navigate" className="lg:col-span-3">
            <h2
              id="footer-navigate"
              className="text-sm font-semibold text-slate-100"
            >
              Navigate
            </h2>
            <ul role="list" className="mt-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={LINK}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-slate-100">Connect</h2>
            <ul role="list" className="mt-3 space-y-1">
              {CONNECT.map((contact) => {
                const external = contact.href.startsWith("http");
                return (
                  <li key={contact.id}>
                    <a
                      href={contact.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={LINK}
                    >
                      {contact.label}
                      {external && (
                        <span className="sr-only"> (opens in a new tab)</span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-700 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} Abdul Salam</p>
          <a href="#top" className={`${LINK} w-fit`}>
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;