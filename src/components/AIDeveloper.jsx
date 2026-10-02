function AIDeveloper() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <p className="text-sm font-medium tracking-wider text-cyan-400">
        AI × DEVELOPER
      </p>

      <h2 className="mt-3 text-3xl font-semibold">
        AI-Assisted Development
      </h2>

      <p className="mt-4 max-w-2xl text-slate-400">
        I use AI to accelerate development while keeping
        understanding, review and testing at the center of the process.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-4">

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <span className="text-sm text-cyan-400">01</span>
          <h3 className="mt-3 font-semibold">Understand</h3>
          <p className="mt-2 text-sm text-slate-400">
            Understand the requirement and decide what needs to be built.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <span className="text-sm text-cyan-400">02</span>
          <h3 className="mt-3 font-semibold">Ask AI</h3>
          <p className="mt-2 text-sm text-slate-400">
            Use AI to explore solutions, generate ideas and accelerate development.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <span className="text-sm text-cyan-400">03</span>
          <h3 className="mt-3 font-semibold">Review & Test</h3>
          <p className="mt-2 text-sm text-slate-400">
            Review the generated work, understand the code and test the result.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
          <span className="text-sm text-cyan-400">04</span>
          <h3 className="mt-3 font-semibold">Build & Improve</h3>
          <p className="mt-2 text-sm text-slate-400">
            Integrate the solution and improve it through real development.
          </p>
        </div>

      </div>

    </section>
  );
}

export default AIDeveloper;