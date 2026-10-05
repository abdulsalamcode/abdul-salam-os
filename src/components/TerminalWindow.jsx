import { useState } from "react";
import Window from "./Window";

function TerminalWindow({
  onClose,
  onMinimize,
  onOpenWindow,
}) {
  const [input, setInput] = useState("");

  const [history, setHistory] = useState([
    {
      type: "system",
      text: "Welcome to Abdul Salam OS Terminal.",
    },
    {
      type: "system",
      text: 'Type "help" to see available commands.',
    },
  ]);

  const handleCommand = (event) => {
    event.preventDefault();

    const command = input.trim().toLowerCase();

    if (!command) {
      return;
    }

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let response = "";

    switch (command) {
      case "help":
        response =
          "Available commands: help, about, skills, projects, contact, resume, github, clear";
        break;

      case "about":
        response = "Opening About window...";
        break;

      case "skills":
        response = "Opening Stack window...";
        break;

      case "projects":
        response = "Opening Projects window...";
        break;

      case "resume":
        response = "Opening Resume window...";
        break;

      case "contact":
        response = "Opening Contact window...";
        break;

      case "github":
        response = "Opening GitHub...";

        window.open(
          "https://github.com/abdulsalamcode",
          "_blank",
          "noopener,noreferrer"
        );
        break;

      default:
        response = `Command not found: ${command}`;
        break;
    }

    setHistory((previousHistory) => [
      ...previousHistory,
      {
        type: "command",
        text: command,
      },
      {
        type: "response",
        text: response,
      },
    ]);

    setInput("");

    if (command === "about") {
      onOpenWindow("about");
    }

    if (command === "skills") {
      onOpenWindow("stack");
    }

    if (command === "projects") {
      onOpenWindow("projects");
    }

    if (command === "resume") {
      onOpenWindow("resume");
    }

    if (command === "contact") {
      onOpenWindow("contact");
    }
  };

  return (
    <Window
      title="Terminal"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div className="rounded-lg border border-slate-800 bg-slate-950 p-5 font-mono text-sm">

        <div className="text-slate-500">
          Abdul Salam OS Terminal
        </div>

        <div className="mt-6 space-y-3">

          {history.map((item, index) => (
            <div key={index}>

              {item.type === "system" && (
                <p className="text-slate-400">
                  {item.text}
                </p>
              )}

              {item.type === "command" && (
                <p className="text-emerald-400">
                  abdul@portfolio:~$ {item.text}
                </p>
              )}

              {item.type === "response" && (
                <p className="text-slate-300">
                  {item.text}
                </p>
              )}

            </div>
          ))}

        </div>

        <form
          onSubmit={handleCommand}
          className="mt-6 flex items-center gap-2"
        >
          <span className="shrink-0 text-emerald-400">
            abdul@portfolio:~$
          </span>

          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            autoFocus
            placeholder="type a command..."
            className="min-w-0 flex-1 bg-transparent text-slate-200 outline-none placeholder:text-slate-700"
          />
        </form>

      </div>
    </Window>
  );
}

export default TerminalWindow;