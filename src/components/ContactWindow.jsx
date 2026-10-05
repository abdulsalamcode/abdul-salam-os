import Window from "./Window";

function ContactWindow({ onClose, onMinimize }) {
  return (
    <Window
      title="Contact"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div>

        <p className="text-sm font-medium tracking-wider text-cyan-400">
          CONTACT
        </p>

        <h2 className="mt-2 text-2xl font-semibold">
          Let's Connect
        </h2>

        <p className="mt-3 max-w-2xl text-slate-400">
          Interested in working together, discussing a project,
          or connecting professionally? Feel free to reach out.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          {/* Email */}
          <a
            href="mailto:itsabdulsalam2@gmail.com"
            className="rounded-lg border border-slate-800 bg-slate-950/50 p-5 transition hover:border-slate-600"
          >
            <p className="text-sm text-slate-500">
              Email
            </p>

            <h3 className="mt-2 font-medium">
              itsabdulsalam2@gmail.com
            </h3>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/abdul-salam-0b0759276"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-800 bg-slate-950/50 p-5 transition hover:border-slate-600"
          >
            <p className="text-sm text-slate-500">
              LinkedIn
            </p>

            <h3 className="mt-2 font-medium">
              Connect on LinkedIn
            </h3>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/abdulsalamcode"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-800 bg-slate-950/50 p-5 transition hover:border-slate-600"
          >
            <p className="text-sm text-slate-500">
              GitHub
            </p>

            <h3 className="mt-2 font-medium">
              View GitHub
            </h3>
          </a>

        </div>

      </div>
    </Window>
  );
}

export default ContactWindow;