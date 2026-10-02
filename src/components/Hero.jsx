function Hero() {
  return (
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
  );
}

export default Hero;