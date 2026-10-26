import { isLive } from "../data/contacts";
import Icon from "./ui/Icon";
import SpotlightCard from "./ui/SpotlightCard";

// One contact entry. Entries without a link yet show "Coming soon".
// variant "card" (default): the spotlight card used by the Contact window.
// variant "row" / "row-quiet": plain editorial row used by the Contact section.
function ContactCard({ contact, variant = "card" }) {
  const live = isLive(contact);
  const external = live && contact.href.startsWith("http");

  const linkProps = live
    ? {
        href: contact.href,
        ...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {}),
      }
    : {};

  if (variant !== "card") {
    const quiet = variant === "row-quiet";
    const rowClass = `grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6 ${
      quiet ? "py-3" : "py-5"
    }`;

    const content = (
      <>
        <span className="text-sm text-slate-400">{contact.label}</span>

        <span className="min-w-0">
          <span
            className={`block break-words font-medium ${
              live
                ? `${
                    quiet ? "text-base text-slate-200" : "text-lg text-slate-100"
                  } transition-colors group-hover:text-cyan-300 motion-reduce:transition-none`
                : "text-base text-slate-400"
            }`}
          >
            {live ? contact.display : "Coming soon"}
          </span>

          {live && contact.hint && (
            <span className="mt-0.5 block text-sm text-slate-400">
              {contact.hint}
            </span>
          )}
        </span>

        {external && <span className="sr-only">(opens in a new tab)</span>}
      </>
    );

    if (!live) {
      return <div className={rowClass}>{content}</div>;
    }

    return (
      <a
        {...linkProps}
        className={`group ${rowClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400`}
      >
        {content}
      </a>
    );
  }

  return (
    <SpotlightCard
      as={live ? "a" : "div"}
      {...linkProps}
      className={`flex items-center gap-4 p-4 sm:p-5 ${
        live
          ? `hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${contact.hover}`
          : "border-dashed"
      }`}
    >
      <span
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition group-hover:scale-105 ${
          live
            ? contact.tile
            : "border-slate-700 bg-slate-900 text-slate-400"
        }`}
      >
        <Icon name={contact.icon} className="h-6 w-6" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
          {contact.label}
        </span>

        <span
          className={`mt-1 block break-words text-sm font-semibold ${
            live ? "text-slate-100" : "text-slate-400"
          }`}
        >
          {live ? contact.display : "Coming soon"}
        </span>

        {live && contact.hint && (
          <span className="mt-0.5 block text-xs text-slate-400">
            {contact.hint}
          </span>
        )}
      </span>

      {live && (
        <Icon
          name="arrow-up-right"
          className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400"
        />
      )}

      {external && (
        <span className="sr-only">(opens in a new tab)</span>
      )}
    </SpotlightCard>
  );
}

export default ContactCard;