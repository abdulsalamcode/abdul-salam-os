import useInView from "../../hooks/useInView";

// Fades and slides its children in when they scroll into view.
// direction: "up" | "left" | "right" | "scale"
function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${direction} ${
        inView ? "is-visible" : ""
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export default Reveal;