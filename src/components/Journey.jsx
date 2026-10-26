import JOURNEY from "../data/journey";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

// "done" milestones get no label. Anything else not listed here gets none either.
const STATUS_LABEL = {
  current: { text: "In progress", className: "text-cyan-400" },
  next: { text: "Upcoming", className: "text-slate-400" },
};

function Journey() {
  return (
    <section
      id="journey"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24"
    >
      <SectionHeading
        eyebrow="JOURNEY"
        title="Learning, Building, Growing"
        description="A continuous journey of learning software development, building projects and improving through practice."
      />

      {/* role="list": Tailwind removes list markers, and Safari then drops list semantics */}
      <ol role="list" className="mt-10 border-b border-slate-700">
        {JOURNEY.map((item) => {
          const status = STATUS_LABEL[item.status];

          return (
            <li key={item.id} className="border-t border-slate-700">
              <Reveal>
                <div className="grid gap-3 py-8 lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-3">
                    <p className="text-sm font-medium text-slate-400">
                      {item.period}
                    </p>
                    {status && (
                      <p
                        className={`mt-1 text-sm font-medium ${status.className}`}
                      >
                        {status.text}
                      </p>
                    )}
                  </div>

                  <div className="min-w-0 lg:col-span-9">
                    <h3 className="text-xl font-semibold text-slate-100">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

export default Journey;