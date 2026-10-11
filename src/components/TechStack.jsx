import STACK, { ALL_TECH } from "../data/stack";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

function TechStack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <SectionHeading
        index="01"
        eyebrow="TECH STACK"
        title="Technologies I Work With"
        description="Tools and technologies I use to build modern web applications and digital experiences."
      />

      {/* Scrolling strip of every technology */}
      <Reveal className="mt-10" delay={100}>
        <div className="marquee overflow-hidden py-1">
          <div className="marquee-track">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className={`flex shrink-0 gap-3 pr-3 ${
                  copy === 1 ? "marquee-dup" : ""
                }`}
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                {ALL_TECH.map((tech) => (
                  <li
                    key={tech}
                    className="whitespace-nowrap rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-300"
                  >
                    <span
                      className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400"
                      aria-hidden="true"
                    />
                    {tech}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Category cards */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((group, index) => (
          <Reveal
            key={group.id}
            delay={index * 100}
            className="h-full"
          >
            <SpotlightCard className="flex h-full flex-col p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-105">
                  <Icon name={group.icon} className="h-6 w-6" />
                </span>

                <span className="font-mono text-xs text-slate-400">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {group.title}
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                {group.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-slate-800 bg-slate-950/60 px-2.5 py-1 text-xs text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default TechStack;