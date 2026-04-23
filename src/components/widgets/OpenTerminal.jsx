"use client";

import { useState } from "react";

const OpenTerminal = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "output", content: "Welcome to ram@arch terminal" },
    { type: "output", content: "Type 'help' to see commands" }
  ]);

  const commands = {
    help: () => [
      "Available commands:",
      "help, about, skills, projects, contact, clear"
    ],
    about: () => [
      "Nitesh Kumar Ram",
      "Full Stack Developer (MERN + Next.js)"
    ],
    skills: () => [
      "JavaScript, React, Next.js, Node.js, MongoDB"
    ],
    projects: () => [
      "https://www.codemonitor.online/"
    ],
    contact: () => [
      "Email: niteshcse3333@gmail.com"
    ],
    clear: () => "CLEAR"
  };

  const runCommand = () => {
    const cmd = input.trim().toLowerCase();

    setHistory((prev) => [...prev, { type: "input", content: input }]);

    if (commands[cmd]) {
      const result = commands[cmd]();

      if (result === "CLEAR") {
        setHistory([]);
      } else {
        setHistory((prev) => [
          ...prev,
          ...result.map((line) => ({
            type: "output",
            content: line
          }))
        ]);
      }
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "output", content: `command not found: ${cmd}` }
      ]);
    }

    setInput("");
  };

  return (
    <div className="absolute top-20 left-20 w-[600px] bg-black/90 border border-cyan-500/30 rounded-xl shadow-[0_0_25px_#00ffff33]">

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-cyan-500/20 bg-black/60">
        <span className="text-sm text-cyan-400">
          ram@arch:~$
        </span>
        <button onClick={onClose} className="hover:text-red-400">
          ✖
        </button>
      </div>

      {/* Body */}
      <div className="p-4 h-[350px] overflow-y-auto text-sm font-mono text-cyan-300">

        {history.map((item, index) => (
          <div key={index}>
            {item.type === "input" ? (
              <div className="flex">
                <span className="text-cyan-400 mr-2">
                  ram@arch:~$
                </span>
                {item.content}
              </div>
            ) : (
              <div className="ml-5 text-cyan-200/80">
                {item.content}
              </div>
            )}
          </div>
        ))}

        {/* Input line */}
        <div className="flex mt-2">
          <span className="text-cyan-400 mr-2">
            ram@arch:~$
          </span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && runCommand()}
            className="bg-transparent outline-none flex-1 text-cyan-300"
            autoFocus
          />
        </div>

      </div>
    </div>
  );
};

export default OpenTerminal;