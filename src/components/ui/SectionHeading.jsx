import Reveal from "./Reveal";

function SectionHeading({ index, eyebrow, title, description }) {
  return (
    <Reveal className="max-w-2xl">
      <p className="flex items-center gap-3 text-sm font-medium tracking-wider text-cyan-400">
        {index && (
          <span className="font-mono text-xs text-slate-400">
            {index}
          </span>
        )}

        <span
          className="h-px w-10 bg-gradient-to-r from-cyan-400 to-transparent"
          aria-hidden="true"
        />

        {eyebrow}
      </p>

      <h2 className="mt-3 text-2xl font-semibold text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-slate-400 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </Reveal>
  );
}

export default SectionHeading;