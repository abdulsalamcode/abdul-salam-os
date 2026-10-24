import PROFILE from "../data/profile";

const STACK = [
  "React",
  "JavaScript",
  "PHP",
  "Laravel",
  "MySQL",
  "Tailwind CSS",
];

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16">
        {/* Text: comes first on every screen size */}
        <div className="min-w-0">
          <div className="hero-item" style={{ "--d": "0ms" }}>
            <p className="text-sm font-medium text-cyan-400">
              Computer Science Graduate · Pakistan
            </p>

            <h1 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
              I build full-stack web apps with React, PHP and MySQL.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              I&apos;m a BSCS graduate seeking my first web development
              internship. I&apos;ve built a university management system and a
              Laravel-based review platform, and I continue to strengthen my
              full-stack skills through hands-on projects.
            </p>
          </div>

          <div className="hero-item" style={{ "--d": "120ms" }}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-cyan-400 px-6 py-3 text-center text-base font-semibold text-slate-950 transition-colors hover:bg-cyan-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                View Projects
              </a>

              <a
                href={PROFILE.resume}
                download={PROFILE.resumeFileName}
                aria-label="Download resume (PDF)"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-slate-600 px-6 py-3 text-center text-base font-semibold text-slate-100 transition-colors hover:border-cyan-400 hover:text-cyan-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Resume
              </a>
            </div>

            <ul
              aria-label="Technologies"
              className="mt-8 flex flex-wrap gap-x-2 gap-y-1 text-sm text-slate-400"
            >
              {STACK.map((tech, index) => (
                <li key={tech}>
                  {tech}
                  {index < STACK.length - 1 && (
                    <span aria-hidden="true"> ·</span>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-xl text-sm leading-6 text-slate-400">
              This site also has a built-in desktop. Use the taskbar at the
              bottom to open apps.
            </p>
          </div>
        </div>

        {/* Portrait: plain framed photo, no decoration */}
        <figure
          className="hero-item mx-auto w-full max-w-[16rem] sm:max-w-xs lg:ml-auto lg:mr-0 lg:max-w-sm"
          style={{ "--d": "240ms" }}
        >
          <div className="rounded-sm border border-slate-700 bg-slate-900 p-2">
            <img
              src="/abdul-salam.png"
              alt="Abdul Salam - Full-Stack Web Developer"
              width="720"
              height="900"
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full rounded-sm object-cover object-top"
            />
          </div>
          <figcaption className="mt-2 text-sm text-slate-400">
            Abdul Salam
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;