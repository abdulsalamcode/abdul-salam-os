function HowIBuild() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <p className="text-sm font-medium tracking-wider text-cyan-400">
        HOW I BUILD
      </p>

      <h2 className="mt-3 text-3xl font-semibold">
        From Idea to Product
      </h2>

      <p className="mt-4 max-w-2xl text-slate-400">
        My development process focuses on understanding the
        problem first, then building, testing and improving the solution.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <span className="text-sm text-cyan-400">01</span>
          <h3 className="mt-3 font-semibold">Understand</h3>
          <p className="mt-2 text-sm text-slate-400">
            Understand the requirements and define the problem.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <span className="text-sm text-cyan-400">02</span>
          <h3 className="mt-3 font-semibold">Plan</h3>
          <p className="mt-2 text-sm text-slate-400">
            Plan the UI, components, data flow and application structure.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <span className="text-sm text-cyan-400">03</span>
          <h3 className="mt-3 font-semibold">Build</h3>
          <p className="mt-2 text-sm text-slate-400">
            Build the interface, APIs, database and required functionality.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <span className="text-sm text-cyan-400">04</span>
          <h3 className="mt-3 font-semibold">Test & Improve</h3>
          <p className="mt-2 text-sm text-slate-400">
            Test the product, fix issues and continuously improve it.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowIBuild;