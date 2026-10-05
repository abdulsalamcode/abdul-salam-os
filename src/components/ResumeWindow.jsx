import Window from "./Window";

function ResumeWindow({ onClose, onMinimize }) {
  return (
    <Window
      title="Resume"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div>
        <h2 className="text-2xl font-semibold">
          Abdul Salam
        </h2>

        <p className="mt-2 text-slate-400">
          Full-Stack Web Developer
        </p>

        <p className="mt-6 text-slate-400">
          Resume window is working.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-cyan-400 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
        >
          Open Resume PDF
        </a>
      </div>
    </Window>
  );
}

export default ResumeWindow;