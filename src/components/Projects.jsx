import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      type: "Full-Stack Web Application",
      title: "Employee Management System",
      description:
        "A web application for managing employee information and administrative operations.",
      stack: "React · Laravel · MySQL",
    },

    {
      type: "Management Platform",
      title: "Jamia Umar Management Portal",
      description:
        "A digital platform designed to organize and manage institutional information and workflows.",
      stack: "React · JavaScript · MySQL",
    },
  ];

  return (
    <section
      id="work"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <p className="text-sm font-medium tracking-wider text-cyan-400">
        FEATURED WORK
      </p>

      <h2 className="mt-3 text-3xl font-semibold">
        Projects I’ve Built
      </h2>

      <p className="mt-4 max-w-2xl text-slate-400">
        A selection of projects that demonstrate my development
        skills, problem-solving and continuous learning.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            type={project.type}
            title={project.title}
            description={project.description}
            stack={project.stack}
          />
        ))}

      </div>
    </section>
  );
}

export default Projects;