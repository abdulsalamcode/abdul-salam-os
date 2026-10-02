function TechStack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="text-sm font-medium tracking-wider text-cyan-400">
        TECH STACK
      </p>

      <h2 className="mt-3 text-3xl font-semibold">
        Technologies I Work With
      </h2>

      <p className="mt-4 max-w-2xl text-slate-400">
        Tools and technologies I use to build modern web
        applications and digital experiences.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="font-semibold">Frontend</h3>

          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>React JS</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="font-semibold">Backend</h3>

          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>PHP</li>
            <li>Laravel</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="font-semibold">Database</h3>

          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>MySQL</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
          <h3 className="font-semibold">Development</h3>

          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>AI-Assisted Development</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default TechStack;