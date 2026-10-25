import STACK, { PROJECT_LABELS, USED_IN, WORKFLOW } from "../data/stack";
import projects from "../data/projects";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const PROJECT_IDS = new Set(projects.map((project) => project.id));

// Short project names for a technology. Ids that are not in projects.js
// are ignored, so a "Used in" line can never point at a missing project.
function getUsedIn(tech) {
  return (USED_IN[tech] ?? [])
    .filter((id) => PROJECT_IDS.has(id) && PROJECT_LABELS[id])
    .map((id) => PROJECT_LABELS[id]);
}

function TechStack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <SectionHeading
        eyebrow="TECH STACK"
        title="Technologies I Work With"
        description="The technologies I've used in my projects."
      />

      <ul className="mt-10 border-b border-slate-700">
        {STACK.map((group) => (
          <li key={group.id} className="border-t border-slate-700">
            <Reveal>
              <div className="grid gap-4 py-8 lg:grid-cols-12 lg:gap-8">
                <h3 className="text-xl font-semibold text-slate-100 lg:col-span-3">
                  {group.title}
                </h3>

                <ul
                  aria-label={`${group.title} technologies`}
                  className="min-w-0 divide-y divide-slate-800 lg:col-span-9"
                >
                  {group.items.map((tech) => {
                    const usedIn = getUsedIn(tech);

                    return (
                      <li
                        key={tech}
                        className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-6"
                      >
                        <p className="shrink-0 font-medium text-slate-100 sm:w-60">
                          {tech}
                          {WORKFLOW.includes(tech) && (
                            <>
                              {" "}
                              <span className="ml-1 text-xs font-normal text-slate-400">
                                Workflow
                              </span>
                            </>
                          )}
                        </p>

                        {usedIn.length > 0 && (
                          <p className="min-w-0 break-words text-sm text-slate-400">
                            Used in:{" "}
                            <span className="text-slate-300">
                              {usedIn.join(", ")}
                            </span>
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TechStack;