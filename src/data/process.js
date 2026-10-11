// Steps for the "How I Build" and "AI x Developer" sections.
export const BUILD_STEPS = [
  {
    id: "understand",
    title: "Understand",
    icon: "search",
    description: "Understand the requirements and define the problem.",
  },
  {
    id: "plan",
    title: "Plan",
    icon: "compass",
    description:
      "Plan the UI, components, data flow and application structure.",
  },
  {
    id: "build",
    title: "Build",
    icon: "code",
    description:
      "Build the interface, APIs, database and required functionality.",
  },
  {
    id: "test",
    title: "Test & Improve",
    icon: "check-circle",
    description:
      "Test the product, fix issues and continuously improve it.",
  },
];

// `command` and `result` are shown in the terminal-style log.
export const AI_STEPS = [
  {
    id: "understand",
    title: "Understand",
    icon: "search",
    description:
      "Understand the requirement and decide what needs to be built.",
    command: "understand requirement",
    result: "scope is clear",
  },
  {
    id: "ask",
    title: "Ask AI",
    icon: "sparkles",
    description:
      "Use AI to explore solutions, generate ideas and accelerate development.",
    command: "ask-ai explore options",
    result: "ideas and drafts generated",
  },
  {
    id: "review",
    title: "Review & Test",
    icon: "eye",
    description:
      "Review the generated work, understand the code and test the result.",
    command: "review && test",
    result: "code understood, result tested",
  },
  {
    id: "improve",
    title: "Build & Improve",
    icon: "loop",
    description:
      "Integrate the solution and improve it through real development.",
    command: "integrate && improve",
    result: "iterating through real development",
  },
];