import AppIcon from "./desktop/AppIcon";

const rowClass =
  "group flex min-h-16 w-full items-start gap-4 py-5 text-left transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400";

function CardContent({
  title,
  description,
  icon,
  badge,
  isHighlighted,
  isMinimized,
}) {
  return (
    <>
      {icon && (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-slate-700 text-cyan-400 transition-colors group-hover:border-cyan-400 motion-reduce:transition-none">
          <AppIcon app={{ icon }} className="h-5 w-5" />
        </span>
      )}

      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-semibold text-slate-100 transition-colors group-hover:text-cyan-300 motion-reduce:transition-none">
            {title}
          </span>

          {badge && (
            <span
              className={`text-xs font-medium ${
                isHighlighted ? "text-cyan-400" : "text-slate-400"
              }`}
            >
              {badge}
            </span>
          )}

          {isMinimized && (
            <span className="text-xs text-slate-400">Minimized</span>
          )}
        </span>

        <span className="mt-1 block text-sm leading-6 text-slate-400">
          {description}
        </span>
      </span>
    </>
  );
}

// One app in the Workspace launcher. Renders a button (opens a window) or,
// when `href` is given, a link.
function WorkspaceCard({
  id,
  title,
  description,
  href,
  onClick,
  icon,
  badge,
  isHighlighted = false,
  isMinimized = false,
}) {
  const content = (
    <CardContent
      title={title}
      description={description}
      icon={icon}
      badge={badge}
      isHighlighted={isHighlighted}
      isMinimized={isMinimized}
    />
  );

  if (href) {
    return (
      <a id={id} href={href} className={rowClass}>
        {content}
      </a>
    );
  }

  return (
    <button id={id} type="button" onClick={onClick} className={rowClass}>
      {content}
    </button>
  );
}

export default WorkspaceCard;