import Window from "./Window";

function ResumeWindow({ onClose, onMinimize }) {
  return (
    <Window
      title="Resume"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div>
        <p className="text-sm font-medium tracking-wider text-cyan-400">
          RESUME
        </p>

        <h2 className="mt-2 text-2xl font-semibold">
          Abdul Salam
        </h2>

        <p className="mt-2 text-slate-400">
          Full-Stack Web Developer
        </p>

        <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">
          View my resume in a new tab, or download a copy to
          review offline.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-400 px-4 py-3 text-center text-sm font-medium text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Open Resume PDF
          </a>

          <a
            href="/resume.pdf"
            download="Abdul-Salam-Resume.pdf"
            className="rounded-lg border border-slate-700 px-4 py-3 text-center text-sm font-medium text-slate-200 transition hover:border-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
          >
            Download
          </a>
        </div>
      </div>
    </Window>
  );
}

export default ResumeWindow;