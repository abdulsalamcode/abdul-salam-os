import { useState } from "react";
import WorkspaceCard from "./WorkspaceCard";
import ResumeWindow from "./ResumeWindow";

function Workspace() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isResumeMinimized, setIsResumeMinimized] = useState(false);

  return (
    <>
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
            onClick={() => {
              setIsResumeOpen(true);
              setIsResumeMinimized(false);
            }}
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

      {isResumeOpen && !isResumeMinimized && (
        <ResumeWindow
          onClose={() => {
            setIsResumeOpen(false);
            setIsResumeMinimized(false);
          }}
          onMinimize={() => {
            setIsResumeMinimized(true);
          }}
        />
      )}
    </>
  );
}

export default Workspace;