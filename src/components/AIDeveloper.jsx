import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const WHAT_I_DO = [
  "Understand the requirement and decide what to build.",
  "Review what AI suggests and make sure I understand the code.",
  "Check that the result works as intended.",
  "Integrate it into the project and keep improving it.",
];

const WHERE_AI_HELPS = [
  "Explore different ways to solve a problem.",
  "Suggest ideas and first drafts to work from.",
];

function AIDeveloper() {
  return (
    <section
      id="ai"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: heading and intro */}
        <div className="min-w-0 lg:col-span-5">
          <SectionHeading
            eyebrow="AI × DEVELOPER"
            title="AI-Assisted Development"
            description="I use AI to explore solutions and draft ideas. I decide what to build, review suggestions, and take responsibility for the final result."
          />
        </div>

        {/* Right: who does what */}
        <div className="min-w-0 space-y-12 lg:col-span-7">
          <Reveal>
            <div className="border-t-2 border-cyan-400 pt-5">
              <h3 className="text-xl font-semibold text-slate-100">
                What I do
              </h3>

              {/* role="list": Tailwind removes list markers, and Safari then drops list semantics */}
              <ul role="list" className="mt-4 divide-y divide-slate-800">
                {WHAT_I_DO.map((point) => (
                  <li
                    key={point}
                    className="py-4 text-lg leading-7 text-slate-100 first:pt-0 last:pb-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="border-t border-slate-700 pt-5">
              <h3 className="text-xl font-semibold text-slate-100">
                Where AI helps
              </h3>

              <ul role="list" className="mt-4 divide-y divide-slate-800">
                {WHERE_AI_HELPS.map((point) => (
                  <li
                    key={point}
                    className="py-3 text-base leading-7 text-slate-300 first:pt-0 last:pb-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AIDeveloper;