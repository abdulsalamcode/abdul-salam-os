import ResumeWindow from "../ResumeWindow";
import ProjectsWindow from "../ProjectsWindow";
import StackWindow from "../StackWindow";
import AboutWindow from "../AboutWindow";
import ContactWindow from "../ContactWindow";
import TerminalWindow from "../TerminalWindow";

// Every desktop app in one place: the window it opens + how it looks
// on the workspace cards, the taskbar and the Start menu.
export const APPS = [
  {
    id: "projects",
    title: "Work",
    description: "Projects & case studies",
    badge: "Start here",
    isHighlighted: true,
    Window: ProjectsWindow,
    icon: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
        <path d="M3 12h18" />
      </>
    ),
  },
  {
    id: "stack",
    title: "Stack",
    description: "Technologies & tools",
    Window: StackWindow,
    icon: (
      <>
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 13l9 5 9-5" />
      </>
    ),
  },
  {
    id: "resume",
    title: "Resume",
    description: "View my CV",
    Window: ResumeWindow,
    icon: (
      <>
        <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h6" />
      </>
    ),
  },
  {
    id: "about",
    title: "About",
    description: "My journey",
    Window: AboutWindow,
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0116 0" />
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    description: "Let's connect",
    Window: ContactWindow,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    id: "terminal",
    title: "Terminal",
    description: "Explore with commands",
    Window: TerminalWindow,
    icon: (
      <>
        <path d="M4 17l6-6-6-6" />
        <path d="M12 19h8" />
      </>
    ),
  },
];