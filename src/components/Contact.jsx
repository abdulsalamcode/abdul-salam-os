import { useEffect, useRef, useState } from "react";
import { CONTACTS } from "../data/contacts";
import PROFILE from "../data/profile";
import ContactCard from "./ContactCard";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const PROFESSIONAL = CONTACTS.filter(
  (contact) => contact.group === "professional"
);
const DIRECT = CONTACTS.filter((contact) => contact.group === "direct");

const BUTTON =
  "inline-flex min-h-12 items-center justify-center rounded-sm px-6 py-3 text-center text-base font-semibold transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";
const BUTTON_PRIMARY = `${BUTTON} bg-cyan-400 text-slate-950 hover:bg-cyan-300`;
const BUTTON_QUIET = `${BUTTON} border border-slate-600 text-slate-100 hover:border-cyan-400 hover:text-cyan-300`;

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
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: invitation and primary actions */}
        <div className="min-w-0 lg:col-span-5">
          <SectionHeading
            eyebrow="CONTACT"
            title="Let's Build Something"
            description="I'm looking for a web development internship and I'm happy to talk about opportunities or project collaboration. Email is the best way to reach me."
          />

          <Reveal>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href={`mailto:${PROFILE.email}`} className={BUTTON_PRIMARY}>
                Send an Email
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className={BUTTON_QUIET}
              >
                {copied ? "Email copied" : "Copy email"}
              </button>

              <a
                href={PROFILE.resume}
                download={PROFILE.resumeFileName}
                className={BUTTON_QUIET}
              >
                Download Resume
              </a>
            </div>

            <p className="sr-only" role="status">
              {copied ? "Email address copied to clipboard" : ""}
            </p>
          </Reveal>
        </div>

        {/* Right: contact details */}
        <div className="min-w-0 space-y-12 lg:col-span-7">
          <Reveal>
            <h3 className="text-xl font-semibold text-slate-100">
              Professional
            </h3>

            {/* role="list": Tailwind removes list markers, and Safari then drops list semantics */}
            <ul role="list" className="mt-4 border-b border-slate-700">
              {PROFESSIONAL.map((contact) => (
                <li key={contact.id} className="border-t border-slate-700">
                  <ContactCard contact={contact} variant="row" />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h3 className="text-base font-semibold text-slate-300">
              Direct &amp; social
            </h3>

            <ul role="list" className="mt-3 border-b border-slate-800">
              {DIRECT.map((contact) => (
                <li key={contact.id} className="border-t border-slate-800">
                  <ContactCard contact={contact} variant="row-quiet" />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;