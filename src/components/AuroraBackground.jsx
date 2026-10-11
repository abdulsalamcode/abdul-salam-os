// Soft, slowly drifting colour glows and a faint grid behind the page.
function AuroraBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="aurora aurora-c" />
      <div className="bg-grid absolute inset-0" />
    </div>
  );
}

export default AuroraBackground;