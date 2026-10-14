// Tech stack shown in the Tech Stack section and the Stack window.
// To add a technology, just add its name to the right list.
const STACK = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    description: "Responsive, component-based interfaces",
    items: ["React JS", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
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

export default STACK;