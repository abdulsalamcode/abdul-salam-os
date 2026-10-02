function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="text-sm font-medium tracking-wider text-cyan-400">
        CONTACT
      </p>

      <h2 className="mt-3 text-3xl font-semibold">
        Let's Build Something
      </h2>

      <p className="mt-4 max-w-2xl text-slate-400">
        Interested in working together, discussing a project,
        or simply connecting? Feel free to reach out.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">

        <a
          href="mailto:itsabdulsalam2@gmail.com"
          className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-600"
        >
          <p className="text-sm text-slate-500">
            Email
          </p>

          <h3 className="mt-2 font-semibold">
            itsabdulsalam2@gmail.com
          </h3>
        </a>

        <a
          href="#"
          className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-600"
        >
          <p className="text-sm text-slate-500">
            LinkedIn
          </p>

          <h3 className="mt-2 font-semibold">
            Connect on LinkedIn
          </h3>
        </a>

        <a
          href="#"
          className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-600"
        >
          <p className="text-sm text-slate-500">
            GitHub
          </p>

          <h3 className="mt-2 font-semibold">
            View my GitHub
          </h3>
        </a>

      </div>

    </section>
  );
}

export default Contact;