// A card with a soft light that follows the mouse pointer.
// Use `as` to render it as another element (for example "a").
function SpotlightCard({
  as: Tag = "div",
  children,
  className = "",
  ...rest
}) {
  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--mx",
      `${event.clientX - rect.left}px`
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <Tag
      onPointerMove={handlePointerMove}
      className={`spotlight group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition duration-300 hover:border-slate-600 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default SpotlightCard;