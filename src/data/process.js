// Steps for the "How I Build" and "AI x Developer" sections.
export const BUILD_STEPS = [
  {
    id: "understand",
    title: "Understand the Problem",
    icon: "search",
    description:
      "Analyze the requirements, identify the core problem, understand user needs and define the functionality the application should deliver.",
  },
  {
    id: "plan",
    title: "Plan the Solution",
    icon: "compass",
    description:
      "Determine the application structure, choose suitable technologies, organize components, plan data flow and outline the database design.",
  },
  {
    id: "build",
    title: "Develop & Integrate",
    icon: "code",
    description:
      "Build responsive user interfaces, implement application functionality, develop backend logic, integrate APIs and connect database operations.",
  },
  {
    id: "test",
    title: "Test & Refine",
    icon: "check-circle",
    description:
      "Test features and user interactions, identify bugs, troubleshoot issues, improve performance where needed and refine the application for a better user experience.",
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