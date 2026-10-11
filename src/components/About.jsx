import projects from "../data/projects";
import { ALL_TECH } from "../data/stack";
import useCountUp from "../hooks/useCountUp";
import useInView from "../hooks/useInView";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

const FOCUS = [
  "Full-stack web apps",
  "Clean, responsive interfaces",
  "AI-assisted workflow",
];

// One tile: numbers count up, text values just show.
function StatTile({ value, label, icon }) {
  const [ref, inView] = useInView();
  const isNumber = typeof value === "number";
  const counted = useCountUp(isNumber ? value : 0, inView && isNumber);

  return (
    <div ref={ref} className="h-full">
      <SpotlightCard className="flex h-full flex-col justify-between p-5 hover:-translate-y-1">
        <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
          <Icon name={icon} className="h-5 w-5" />
        </span>

        <div className="mt-6">
          <p className="text-3xl font-bold text-white sm:text-4xl">
            {isNumber ? counted : value}
          </p>

          <p className="mt-1 text-sm text-slate-400">{label}</p>
        </div>
      </SpotlightCard>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left: story */}
        <div>
          <SectionHeading
            index="05"
            eyebrow="ABOUT"
            title="Building, Learning, Improving"
          />

          <Reveal delay={100}>
            <div className="mt-8 space-y-5 text-slate-400 sm:text-lg sm:leading-8">
              <p>
                I'm{" "}
                <span className="font-medium text-white">
                  Abdul Salam
                </span>
                , a Computer Science graduate focused on building
                modern web applications and improving my
                full-stack development skills.
              </p>

              <p>
                My current development stack includes React,
                JavaScript, Tailwind CSS, PHP, Laravel, MySQL and
                REST APIs.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <blockquote className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-6">
              <p className="text-lg leading-8 text-slate-200">
                “I enjoy turning ideas into practical digital
                products while continuously learning better
                development practices.”
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={300}>
            <ul className="mt-6 flex flex-wrap gap-2">
              {FOCUS.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-1.5 text-sm text-slate-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Right: quick facts */}
        <Reveal direction="scale" delay={150}>
          <div className="grid h-full grid-cols-2 gap-4">
            <StatTile
              value={projects.length}
              label="Featured projects"
              icon="code"
            />
            <StatTile
              value={ALL_TECH.length}
              label="Tools & technologies"
              icon="layout"
            />
            <StatTile
              value="BS CS"
              label="Computer Science"
              icon="graduation"
            />
            <StatTile
              value="Open"
              label="To internships"
              icon="rocket"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;