import { useEffect, useRef, useState } from "react";
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
      text: 'Type "help" or "?" to see available commands.',
    },
  ]);

  const [commandHistory, setCommandHistory] = useState([]);

  const [historyIndex, setHistoryIndex] = useState(-1);

  const terminalEndRef = useRef(null);

  const commands = [
    "help",
    "about",
    "skills",
    "projects",
    "resume",
    "contact",
    "github",
    "clear",
  ];

  const aliases = {
    "?": "help",
    whoami: "about",
    stack: "skills",
    work: "projects",
    cv: "resume",
    mail: "contact",
    gh: "github",
    cls: "clear",
  };

  const suggestion =
    input.trim() &&
    commands.find((command) =>
      command.startsWith(input.trim().toLowerCase())
    );

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [history]);

  const handleCommand = (event) => {
    event.preventDefault();

    const enteredCommand = input.trim().toLowerCase();

    if (!enteredCommand) {
      return;
    }

    const command =
      aliases[enteredCommand] || enteredCommand;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      setHistoryIndex(-1);
      return;
    }

    let response = "";

    switch (command) {
      case "help":
        response =
          `Available commands:

help      Show available commands
about     Open About window
skills    Open Tech Stack window
projects  Open Projects window
resume    Open Resume
contact   Open Contact window
github    Open GitHub
clear     Clear terminal

Aliases:

?         → help
whoami    → about
stack     → skills
work      → projects
cv        → resume
mail      → contact
gh        → github
cls       → clear`;
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
        break;

      default:
        response =
          `Command not found: ${enteredCommand}

Type "help" or "?" to see available commands.`;
        break;
    }

    setCommandHistory((previousCommands) => [
      ...previousCommands,
      enteredCommand,
    ]);

    setHistory((previousHistory) => [
      ...previousHistory,
      {
        type: "command",
        text: enteredCommand,
      },
      {
        type: "response",
        text: response,
      },
    ]);

    setInput("");
    setHistoryIndex(-1);

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

    if (command === "github") {
      window.open(
        "https://github.com/abdulsalamcode",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Tab" && suggestion) {
      event.preventDefault();

      setInput(suggestion);

      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (commandHistory.length === 0) {
        return;
      }

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(historyIndex - 1, 0);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);

      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (historyIndex === -1) {
        return;
      }

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }
  };

  return (
    <Window
      title="Terminal"
      onClose={onClose}
      onMinimize={onMinimize}
    >
      <div className="flex h-[60vh] min-h-[360px] flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-950 font-mono text-sm">

        {/* Terminal Header */}
        <div className="border-b border-slate-800 px-4 py-3">
          <p className="text-xs uppercase tracking-wider text-slate-600">
            Abdul Salam OS Terminal
          </p>
        </div>

        {/* Terminal Output */}
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
          <div className="space-y-3">

            {history.map((item, index) => (
              <div key={index}>

                {item.type === "system" && (
                  <p className="text-slate-500">
                    {item.text}
                  </p>
                )}

                {item.type === "command" && (
                  <p className="break-words text-emerald-400">
                    abdul@portfolio:~$ {item.text}
                  </p>
                )}

                {item.type === "response" && (
                  <p className="whitespace-pre-line break-words text-slate-300">
                    {item.text}
                  </p>
                )}

              </div>
            ))}

            <div ref={terminalEndRef} />

          </div>
        </div>

        {/* Suggestion */}
        {suggestion &&
          suggestion !== input.trim().toLowerCase() && (
            <div className="border-t border-slate-900 px-5 py-2 text-xs text-slate-600">
              Press{" "}
              <span className="text-slate-400">
                Tab
              </span>{" "}
              to complete:{" "}
              <span className="text-cyan-400">
                {suggestion}
              </span>
            </div>
          )}

        {/* Command Input */}
        <form
          onSubmit={handleCommand}
          className="border-t border-slate-800 px-5 py-4"
        >
          <div className="flex items-center gap-2">

            <span className="shrink-0 text-emerald-400">
              abdul@portfolio:~$
            </span>

            <input
              type="text"
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
                setHistoryIndex(-1);
              }}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck="false"
              autoComplete="off"
              placeholder="type a command..."
              className="min-w-0 flex-1 bg-transparent text-slate-200 outline-none placeholder:text-slate-700"
            />

          </div>
        </form>

      </div>
    </Window>
  );
}

export default TerminalWindow;