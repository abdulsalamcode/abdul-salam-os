import { CONTACTS } from "../data/contacts";
import ContactCard from "./ContactCard";
import Window from "./Window";

function ContactWindow({ onClose, onMinimize }) {
  return (
    <Window
      title="Contact"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div>
        <p className="text-sm font-medium tracking-wider text-cyan-400">
          CONTACT
        </p>

        <h2 className="mt-2 text-2xl font-semibold">
          Let's Connect
        </h2>

        <p className="mt-3 max-w-2xl text-slate-400">
          Interested in working together, discussing a project,
          or connecting professionally? Feel free to reach out.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CONTACTS.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
    </Window>
  );
}

export default ContactWindow;