function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:py-24">
      <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.15fr_0.85fr]">

        {/* Left Side */}
        <div>
          {/* Availability */}
          <div
            className="hero-item mb-6 flex items-center gap-2 text-sm text-emerald-400"
            style={{ "--d": "0ms" }}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span>Available for Internship</span>
          </div>

          {/* Eyebrow */}
          <p
            className="hero-item mb-4 text-sm font-medium tracking-[0.25em] text-cyan-400"
            style={{ "--d": "90ms" }}
          >
            BUILDING DIGITAL PRODUCTS
          </p>

          {/* Name */}
          <h1
            className="hero-item max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ "--d": "180ms" }}
          >
            Abdul Salam
          </h1>

          {/* Role */}
          <p
            className="hero-item mt-4 text-xl font-medium text-slate-300 sm:mt-5 sm:text-3xl"
            style={{ "--d": "270ms" }}
          >
            Full-Stack Web Developer
          </p>

          {/* Description */}
          <p
            className="hero-item mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            style={{ "--d": "360ms" }}
          >
            I build modern web applications and digital
            experiences using React, Laravel, MySQL and
            AI-assisted development.
          </p>

          {/* Tech Line */}
          <div
            className="hero-item mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500"
            style={{ "--d": "450ms" }}
          >
            <span>React</span>
            <span aria-hidden="true">•</span>
            <span>JavaScript</span>
            <span aria-hidden="true">•</span>
            <span>Laravel</span>
            <span aria-hidden="true">•</span>
            <span>MySQL</span>
          </div>

          {/* Actions */}
          <div
            className="hero-item mt-8 flex flex-col gap-3 sm:flex-row"
            style={{ "--d": "540ms" }}
          >
            <a
              href="#work"
              className="rounded-lg bg-cyan-400 px-5 py-3 text-center font-medium text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Explore Work
            </a>

            <a
              href="/resume.pdf"
              download="Abdul-Salam-Resume.pdf"
              className="rounded-lg border border-slate-700 px-5 py-3 text-center font-medium text-slate-200 transition hover:border-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side - Profile */}
        <div
          className="hero-item relative mx-auto w-full max-w-md lg:ml-auto"
          style={{ "--d": "320ms" }}
        >

          {/* Subtle Glow */}
          <div
            className="absolute -inset-4 rounded-3xl bg-cyan-400/10 blur-2xl motion-safe:animate-pulse"
            aria-hidden="true"
          ></div>

          {/* Profile Card */}
          <div className="float-slow relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-2xl">

            {/* Card Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full bg-red-400"
                  aria-hidden="true"
                ></span>

                <span
                  className="h-2.5 w-2.5 rounded-full bg-yellow-400"
                  aria-hidden="true"
                ></span>

                <span
                  className="h-2.5 w-2.5 rounded-full bg-emerald-400"
                  aria-hidden="true"
                ></span>
              </div>

              <p className="font-mono text-xs text-slate-600">
                abdul-salam.profile
              </p>
            </div>

            {/* Photo */}
            <div className="bg-slate-950 p-3">
              <img
                src="/abdul-salam.png"
                alt="Abdul Salam - Full-Stack Web Developer"
                width="720"
                height="900"
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] w-full rounded-xl object-cover object-top"
              />
            </div>

            {/* Card Footer */}
            <div className="border-t border-slate-800 px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-200">
                    Abdul Salam
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Full-Stack Web Developer
                  </p>
                </div>

                <div className="rounded-md border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1.5">
                  <p className="text-xs text-emerald-400">
                    Available
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;