function ProjectCard({ type, title, description, stack }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
      <p className="text-sm text-cyan-400">
        {type}
      </p>

      <h3 className="mt-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-slate-400">
        {description}
      </p>

      <p className="mt-5 text-sm text-slate-500">
        {stack}
      </p>
    </article>
  );
}

export default ProjectCard;