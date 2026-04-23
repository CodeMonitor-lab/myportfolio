import React from "react";

export default function TerminalPreview() {
  return (
    <div
      className="mt-10 w-full max-w-xl bg-black/70 border border-cyan-500/30 
    rounded-lg p-4 text-left text-sm shadow-[0_0_20px_#00ffff33]"
    >
      <div className="text-cyan-400">ram@arch:~$ neofetch</div>

      <div className="text-cyan-200 mt-2">
        OS: Arch Linux x86_64 <br />
        Host: Developer Machine <br />
        Shell: zsh <br />
        Stack: MERN + Next.js
      </div>
    </div>
  );
}
