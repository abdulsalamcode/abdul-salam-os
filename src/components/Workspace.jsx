import { useState } from "react";
import WorkspaceCard from "./WorkspaceCard";
import ResumeWindow from "./ResumeWindow";
import ProjectsWindow from "./ProjectsWindow";
import StackWindow from "./StackWindow";
import AboutWindow from "./AboutWindow";
import ContactWindow from "./ContactWindow";
import TerminalWindow from "./TerminalWindow";

function Workspace() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isResumeMinimized, setIsResumeMinimized] = useState(false);

  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isProjectsMinimized, setIsProjectsMinimized] = useState(false);

  const [isStackOpen, setIsStackOpen] = useState(false);
  const [isStackMinimized, setIsStackMinimized] = useState(false);

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isAboutMinimized, setIsAboutMinimized] = useState(false);

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isContactMinimized, setIsContactMinimized] = useState(false);

  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isTerminalMinimized, setIsTerminalMinimized] = useState(false);

  const openWindowFromTerminal = (windowName) => {
    if (windowName === "about") {
      setIsAboutOpen(true);
      setIsAboutMinimized(false);
    }

    if (windowName === "stack") {
      setIsStackOpen(true);
      setIsStackMinimized(false);
    }

    if (windowName === "projects") {
      setIsProjectsOpen(true);
      setIsProjectsMinimized(false);
    }

    if (windowName === "resume") {
      setIsResumeOpen(true);
      setIsResumeMinimized(false);
    }

    if (windowName === "contact") {
      setIsContactOpen(true);
      setIsContactMinimized(false);
    }
  };

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

          {/* Work */}
          <WorkspaceCard
            title="Work"
            description="Projects & case studies"
            onClick={() => {
              setIsProjectsOpen(true);
              setIsProjectsMinimized(false);
            }}
          />

          {/* Stack */}
          <WorkspaceCard
            title="Stack"
            description="Technologies & tools"
            onClick={() => {
              setIsStackOpen(true);
              setIsStackMinimized(false);
            }}
          />

          {/* Resume */}
          <WorkspaceCard
            title="Resume"
            description="View my CV"
            onClick={() => {
              setIsResumeOpen(true);
              setIsResumeMinimized(false);
            }}
          />

          {/* About */}
          <WorkspaceCard
            title="About"
            description="My journey"
            onClick={() => {
              setIsAboutOpen(true);
              setIsAboutMinimized(false);
            }}
          />

          {/* Terminal */}
          <WorkspaceCard
            title="Terminal"
            description="Explore with commands"
            onClick={() => {
              setIsTerminalOpen(true);
              setIsTerminalMinimized(false);
            }}
          />

          {/* Contact */}
          <WorkspaceCard
            title="Contact"
            description="Let's connect"
            onClick={() => {
              setIsContactOpen(true);
              setIsContactMinimized(false);
            }}
          />

        </div>

      </section>

      {/* Resume */}
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

      {/* Projects */}
      {isProjectsOpen && !isProjectsMinimized && (
        <ProjectsWindow
          onClose={() => {
            setIsProjectsOpen(false);
            setIsProjectsMinimized(false);
          }}
          onMinimize={() => {
            setIsProjectsMinimized(true);
          }}
        />
      )}

      {/* Stack */}
      {isStackOpen && !isStackMinimized && (
        <StackWindow
          onClose={() => {
            setIsStackOpen(false);
            setIsStackMinimized(false);
          }}
          onMinimize={() => {
            setIsStackMinimized(true);
          }}
        />
      )}

      {/* About */}
      {isAboutOpen && !isAboutMinimized && (
        <AboutWindow
          onClose={() => {
            setIsAboutOpen(false);
            setIsAboutMinimized(false);
          }}
          onMinimize={() => {
            setIsAboutMinimized(true);
          }}
        />
      )}

      {/* Contact */}
      {isContactOpen && !isContactMinimized && (
        <ContactWindow
          onClose={() => {
            setIsContactOpen(false);
            setIsContactMinimized(false);
          }}
          onMinimize={() => {
            setIsContactMinimized(true);
          }}
        />
      )}

      {/* Terminal */}
      {isTerminalOpen && !isTerminalMinimized && (
        <TerminalWindow
          onClose={() => {
            setIsTerminalOpen(false);
            setIsTerminalMinimized(false);
          }}
          onMinimize={() => {
            setIsTerminalMinimized(true);
          }}
          onOpenWindow={openWindowFromTerminal}
        />
      )}

    </>
  );
}

export default Workspace;