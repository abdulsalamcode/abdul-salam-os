import WorkspaceCard from "./WorkspaceCard";

function Workspace() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">

      <div className="mb-6">
        <p className="text-sm font-medium tracking-wider text-slate-500">
          WORKSPACE
        </p>

        <h2 className="mt-2 text-2xl font-semibold">
          Explore Abdul Salam OS
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        <WorkspaceCard
          title="Work"
          description="Projects & case studies"
          href="#work"
        />

        <WorkspaceCard
          title="Stack"
          description="Technologies & tools"
          href="#stack"
        />

        <WorkspaceCard
          title="Resume"
          description="View my CV"
        />

        <WorkspaceCard
          title="About"
          description="My journey"
          href="#about"
        />

        <WorkspaceCard
          title="Terminal"
          description="Explore with commands"
        />

        <WorkspaceCard
          title="Contact"
          description="Let's connect"
          href="#contact"
        />

      </div>

    </section>
  );
}

export default Workspace;