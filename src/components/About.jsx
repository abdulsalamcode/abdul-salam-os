import projects from "../data/projects";
import { ALL_TECH } from "../data/stack";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const FOCUS = [
  "Full-stack web development",
  "Responsive UI engineering",
  "Backend integration",
  "Database-driven applications",
];

// Counts come from the real data, so they can never drift from the site.
const FACTS = [
  { label: "Featured projects", value: projects.length },
  { label: "Tools & technologies", value: ALL_TECH.length },
  { label: "Degree", value: "BS Computer Science" },
  {
    label: "Availability",
    value: "Open to Web Development Opportunities",
    className: "text-cyan-400",
  },
];

function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: introduction */}
        <div className="min-w-0 lg:col-span-7">
          <SectionHeading
            eyebrow="ABOUT"
            title="Building Practical Web Solutions"
          />

          <Reveal>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              <p>
                I&apos;m{" "}
                <span className="font-medium text-slate-100">Abdul Salam</span>
                , a Computer Science graduate with two years of hands-on
                development experience through independent and collaborative
                work. I focus on developing modern web applications, creating
                responsive interfaces, and building functional backend systems.
              </p>

              <p>
                My development work spans React, JavaScript, Tailwind CSS, PHP,
                Laravel, MySQL and REST APIs, with experience in application
                authentication, role-based access control, database management
                and frontend-backend integration.
              </p>

              <p>
                I approach development with a problem-solving mindset, an
                emphasis on clean and maintainable code, and a commitment to
                understanding the technologies behind what I build.
              </p>
            </div>

            <blockquote className="mt-8 max-w-2xl border-l-2 border-cyan-400 pl-5">
              <p className="text-lg leading-8 text-slate-100 sm:text-xl sm:leading-9">
                “I enjoy turning ideas into practical digital products while
                continuously learning better development practices.”
              </p>
            </blockquote>

            <p className="mt-8 max-w-2xl text-sm leading-6 text-slate-400">
              <span className="font-medium text-slate-300">Focus: </span>
              {FOCUS.join(" · ")}
            </p>
          </Reveal>
        </div>

        {/* Right: quick facts */}
        <div className="min-w-0 lg:col-span-5">
          <Reveal>
            <dl className="border-y border-slate-700 divide-y divide-slate-800">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-5"
                >
                  <dt className="text-sm text-slate-400">{fact.label}</dt>
                  <dd
                    className={`text-xl font-semibold sm:text-2xl ${
                      fact.className ?? "text-slate-100"
                    }`}
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;