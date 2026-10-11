import { BUILD_STEPS } from "../data/process";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

function HowIBuild() {
  return (
    <section
      id="process"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <SectionHeading
        index="02"
        eyebrow="HOW I BUILD"
        title="From Idea to Product"
        description="My development process focuses on understanding the problem first, then building, testing and improving the solution."
      />

      <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {BUILD_STEPS.map((step, index) => (
          <Reveal
            as="li"
            key={step.id}
            delay={index * 120}
            className="relative"
          >
            <SpotlightCard className="h-full p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30">
              {/* Big faint step number */}
              <span
                className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-7xl font-bold text-slate-800/60"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition group-hover:scale-105">
                <Icon name={step.icon} className="h-6 w-6" />
              </span>

              <p className="relative mt-5 font-mono text-xs text-cyan-400">
                STEP {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="relative mt-1 text-lg font-semibold text-white">
                {step.title}
              </h3>

              <p className="relative mt-2 text-sm leading-6 text-slate-400">
                {step.description}
              </p>
            </SpotlightCard>

            {/* Connector to the next step (large screens) */}
            {index < BUILD_STEPS.length - 1 && (
              <span
                className="absolute -right-6 top-14 hidden h-px w-6 bg-gradient-to-r from-cyan-400/60 to-transparent lg:block"
                aria-hidden="true"
              />
            )}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export default HowIBuild;