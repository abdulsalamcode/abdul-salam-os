function WorkspaceCard({ title, description, href }) {
  return (
    <a
      href={href}
      className="block rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-slate-600"
    >
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {description}
      </p>
    </a>
  );
}

export default WorkspaceCard;