import { BUILD_STEPS } from "../data/process";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

function HowIBuild() {
  return (
    <section
      id="process"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <SectionHeading
        eyebrow="HOW I BUILD"
        title="How I Approach a Project"
        description="I follow a structured development process that helps me turn requirements into functional, maintainable web applications. From understanding the problem to testing the final implementation, each step has a clear purpose."
      />

      {/* role="list": Tailwind removes list markers, and Safari then drops list semantics */}
      <ol role="list" className="mt-10 border-b border-slate-700">
        {BUILD_STEPS.map((step) => (
          <li key={step.id} className="border-t border-slate-700">
            <Reveal>
              <div className="grid gap-3 py-8 lg:grid-cols-12 lg:gap-8">
                <h3 className="text-xl font-semibold text-slate-100 lg:col-span-4">
                  {step.title}
                </h3>

                <p className="min-w-0 max-w-2xl text-base leading-7 text-slate-300 lg:col-span-8">
                  {step.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default HowIBuild;