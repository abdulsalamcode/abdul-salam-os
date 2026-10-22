import JOURNEY from "../data/journey";
import useInView from "../hooks/useInView";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import SpotlightCard from "./ui/SpotlightCard";

const STATUS_LABEL = {
  done: "Foundation",
  current: "In progress",
  next: "Up next",
};

function Journey() {
  // The timeline line draws itself when this block scrolls into view
  const [timelineRef, timelineInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="journey"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <SectionHeading
        index="04"
        eyebrow="JOURNEY"
        title="Learning, Building, Growing"
        description="A continuous journey of learning software development, building projects and improving through practice."
      />

      <div
        ref={timelineRef}
        className={`relative mt-12 max-w-3xl ${
          timelineInView ? "is-visible" : ""
        }`}
      >
        {/* Vertical line */}
        <div
          className="absolute bottom-0 left-6 top-0 w-px -translate-x-1/2 bg-slate-800"
          aria-hidden="true"
        >
          <div className="timeline-fill h-full w-full bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent" />
        </div>

        <ol className="space-y-6">
          {JOURNEY.map((item, index) => {
            const isCurrent = item.status === "current";

            return (
              <li key={item.id} className="relative pl-16">
                {/* Node */}
                <span
                  className={`absolute left-6 top-6 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border bg-slate-950 ${
                    isCurrent
                      ? "border-cyan-400 text-cyan-300"
                      : item.status === "next"
                        ? "border-slate-700 text-slate-300"
                        : "border-cyan-400/40 text-cyan-300"
                  }`}
                >
                  {isCurrent && (
                    <span
                      className="absolute inset-0 rounded-full border border-cyan-400/60 motion-safe:animate-ping"
                      aria-hidden="true"
                    />
                  )}

                  <Icon name={item.icon} className="h-5 w-5" />
                </span>

                <Reveal delay={index * 120} direction="right">
                  <SpotlightCard
                    className={`p-6 ${
                      isCurrent
                        ? "border-cyan-400/30 bg-cyan-400/[0.04]"
                        : ""
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-sm text-cyan-400">
                        {item.period}
                      </span>

                      <span
                        className={`rounded-full border px-2.5 py-px text-[11px] font-medium uppercase tracking-wider ${
                          isCurrent
                            ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                            : "border-slate-700 text-slate-400"
                        }`}
                      >
                        {STATUS_LABEL[item.status]}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </SpotlightCard>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Journey;