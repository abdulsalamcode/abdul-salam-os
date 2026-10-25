// Tech stack shown in the Tech Stack section and the Stack window.
// To add a technology, just add its name to the right list.
const STACK = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    description: "Responsive, component-based interfaces",
    items: [
      "React JS",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    description: "Server-side logic and APIs",
    items: ["PHP", "Laravel", "REST APIs"],
  },
  {
    id: "database",
    title: "Database",
    icon: "database",
    description: "Storing and querying data",
    items: ["MySQL", "SQL"],
  },
  {
    id: "development",
    title: "Development",
    icon: "wrench",
    description: "Tools and everyday workflow",
    items: ["Git", "GitHub", "VS Code", "AI-Assisted Development"],
  },
];

export const ALL_TECH = STACK.flatMap((group) => group.items);

// Items that are a way of working rather than a language or framework.
export const WORKFLOW = ["AI-Assisted Development"];

// Short names shown in the "Used in" lines. Keys are ids from projects.js.
export const PROJECT_LABELS = {
  "jamia-umar": "Jamia Umar",
  kisanrai: "KisanRai",
  boxverse: "BoxVerse",
  "banking-gateway": "Banking Gateway",
  "abdul-salam-os": "Abdul Salam OS",
};

const ALL_PROJECTS = Object.keys(PROJECT_LABELS);

// Which projects a technology is used in. A technology with no entry
// shows no "Used in" line.
export const USED_IN = {
  "React JS": ["jamia-umar", "kisanrai", "boxverse", "abdul-salam-os"],
  JavaScript: ["boxverse", "abdul-salam-os", "banking-gateway"],
  HTML: ["banking-gateway"],
  CSS: ["banking-gateway"],
  "Tailwind CSS": ["jamia-umar", "kisanrai", "boxverse", "abdul-salam-os"],
  Zustand: ["boxverse"],
  PHP: ["jamia-umar", "kisanrai", "banking-gateway"],
  Laravel: ["kisanrai"],
  "REST APIs": ["jamia-umar", "kisanrai"],
  MySQL: ["jamia-umar", "kisanrai", "banking-gateway"],
  SQL: ["jamia-umar", "kisanrai"],
  Git: ["abdul-salam-os", "kisanrai"],
  GitHub: ALL_PROJECTS,
  "VS Code": ALL_PROJECTS,
  "AI-Assisted Development": ["abdul-salam-os"],
};

export default STACK;