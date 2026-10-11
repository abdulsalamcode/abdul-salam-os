import { useEffect, useRef, useState } from "react";
import { CONTACTS } from "../data/contacts";
import PROFILE from "../data/profile";
import ContactCard from "./ContactCard";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";

const PROFESSIONAL = CONTACTS.filter(
  (contact) => contact.group === "professional"
);
const DIRECT = CONTACTS.filter((contact) => contact.group === "direct");

function Contact() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard can be blocked; the mailto button still works.
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      {/* Call to action panel */}
      <Reveal direction="scale">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900/70 to-cyan-950/40 p-6 sm:p-12">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl motion-safe:animate-pulse"
            aria-hidden="true"
          />

          <div className="relative max-w-2xl">
            <p className="flex items-center gap-3 text-sm font-medium tracking-wider text-cyan-400">
              <span className="font-mono text-xs text-slate-400">
                06
              </span>
              <span
                className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent"
                aria-hidden="true"
              />
              CONTACT
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Let's Build Something
            </h2>

            <p className="mt-4 text-slate-300 sm:text-lg sm:leading-8">
              Interested in working together, discussing a project,
              or simply connecting? Feel free to reach out.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to internships
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <Icon name="send" className="h-4 w-4" />
                Send an Email
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Icon
                  name={copied ? "check" : "copy"}
                  className={`h-4 w-4 ${copied ? "text-emerald-400" : ""}`}
                />
                {copied ? "Email copied" : "Copy email"}
              </button>

              <a
                href={PROFILE.resume}
                download={PROFILE.resumeFileName}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-slate-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Icon name="download" className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            <p className="sr-only" role="status">
              {copied ? "Email address copied to clipboard" : ""}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Professional links */}
      <Reveal className="mt-12">
        <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400">
          Professional
        </h3>
      </Reveal>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROFESSIONAL.map((contact, index) => (
          <Reveal key={contact.id} delay={index * 90}>
            <ContactCard contact={contact} />
          </Reveal>
        ))}
      </div>

      {/* Direct and social */}
      <Reveal className="mt-10">
        <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400">
          Direct &amp; social
        </h3>
      </Reveal>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DIRECT.map((contact, index) => (
          <Reveal key={contact.id} delay={index * 90}>
            <ContactCard contact={contact} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Contact;