function App() {
  return (
    <main className="min-h-screen bg-[#0b1120] text-slate-100">
      
      {/* Header */}
      <header className="border-b border-slate-800 px-6 py-4">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          
          <h1 className="text-lg font-semibold tracking-wide">
            ABDUL SALAM OS
          </h1>

          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#work" className="hover:text-white">
              Work
            </a>

            <a href="#stack" className="hover:text-white">
              Stack
            </a>

            <a href="#about" className="hover:text-white">
              About
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>

        </nav>
      </header>


      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        
        <div className="mb-6 flex items-center gap-2 text-sm text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
          Available for Internship
        </div>

        <p className="mb-4 text-sm font-medium tracking-[0.25em] text-cyan-400">
          BUILDING DIGITAL PRODUCTS
        </p>

        <h2 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Abdul Salam
        </h2>

        <p className="mt-5 text-2xl text-slate-300">
          Full-Stack Web Developer
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          I build modern web experiences using React, Laravel,
          MySQL and AI-assisted development.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
            Explore Work
          </button>

          <button className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-slate-500">
            Download CV
          </button>
        </div>

      </section>


      {/* Desktop Workspace */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          
          <div className="mb-8">
            <p className="text-sm text-slate-500">
              WORKSPACE
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              Explore Abdul's Workspace
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            
            <button className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-left transition hover:border-cyan-400/50">
              <p className="text-lg font-medium">Work</p>
              <p className="mt-2 text-sm text-slate-500">
                Projects & case studies
              </p>
            </button>

            <button className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-left transition hover:border-cyan-400/50">
              <p className="text-lg font-medium">Stack</p>
              <p className="mt-2 text-sm text-slate-500">
                Technologies & tools
              </p>
            </button>

            <button className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-left transition hover:border-cyan-400/50">
              <p className="text-lg font-medium">Resume</p>
              <p className="mt-2 text-sm text-slate-500">
                View my CV
              </p>
            </button>

            <button className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-left transition hover:border-cyan-400/50">
              <p className="text-lg font-medium">About</p>
              <p className="mt-2 text-sm text-slate-500">
                My journey
              </p>
            </button>

            <button className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-left transition hover:border-cyan-400/50">
              <p className="text-lg font-medium">Terminal</p>
              <p className="mt-2 text-sm text-slate-500">
                Explore with commands
              </p>
            </button>

            <button className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-left transition hover:border-cyan-400/50">
              <p className="text-lg font-medium">Contact</p>
              <p className="mt-2 text-sm text-slate-500">
                Let's connect
              </p>
            </button>

          </div>
        </div>

      </section>

    </main>
  );
}

export default App;