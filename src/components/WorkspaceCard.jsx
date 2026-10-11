const cardClass =
  "block w-full rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-left transition hover:border-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:p-6";

function CardContent({ title, description }) {
  return (
    <>
      <span className="block font-semibold text-slate-100">
        {title}
      </span>

      <span className="mt-2 block text-sm text-slate-400">
        {description}
      </span>
    </>
  );
}

function WorkspaceCard({ title, description, href, onClick }) {
  if (href) {
    return (
      <a href={href} className={cardClass}>
        <CardContent title={title} description={description} />
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cardClass}>
      <CardContent title={title} description={description} />
    </button>
  );
}

export default WorkspaceCard;