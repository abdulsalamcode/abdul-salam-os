import { AI_STEPS } from "../data/process";
import Icon from "./ui/Icon";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

function AIDeveloper() {
  return (
    <section
      id="ai"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: text and steps */}
        <div>
          <SectionHeading
            index="03"
            eyebrow="AI × DEVELOPER"
            title="AI-Assisted Development"
            description="I use AI to accelerate development while keeping understanding, review and testing at the center of the process."
          />

          <ol className="mt-8 space-y-3">
            {AI_STEPS.map((step, index) => (
              <Reveal
                as="li"
                key={step.id}
                delay={index * 100}
                direction="left"
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-slate-600"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon name={step.icon} className="h-5 w-5" />
                </span>

                <div className="min-w-0">
                  <h3 className="font-semibold text-white">
                    <span className="mr-2 font-mono text-xs text-cyan-400">
                      0{index + 1}
                    </span>
                    {step.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Right: terminal-style workflow log */}
        <Reveal direction="right" delay={150}>
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-3xl bg-cyan-400/5 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl shadow-black/40">
              <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900/70 px-4 py-3">
                <div
                  className="flex items-center gap-1.5"
                  aria-hidden="true"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>

                <p className="font-mono text-xs text-slate-400">
                  ai-workflow.log
                </p>
              </div>

              <div className="space-y-4 p-5 font-mono text-sm sm:p-6">
                {AI_STEPS.map((step, index) => (
                  <div
                    key={step.id}
                    className="log-line"
                    style={{ "--d": `${400 + index * 650}ms` }}
                  >
                    <p className="break-words text-emerald-400">
                      $ {step.command}
                    </p>

                    <p className="mt-1 break-words pl-4 text-slate-400">
                      <span className="text-cyan-400">✓</span>{" "}
                      {step.result}
                    </p>
                  </div>
                ))}

                <p
                  className="log-line text-emerald-400"
                  style={{ "--d": `${400 + AI_STEPS.length * 650}ms` }}
                  aria-hidden="true"
                >
                  ${" "}
                  <span className="inline-block h-4 w-2 translate-y-0.5 bg-emerald-400 motion-safe:animate-pulse" />
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AIDeveloper;