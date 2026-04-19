'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [time, setTime] = useState('');
  const [typedText, setTypedText] = useState('');

  const fullText = "NITESH KUMAR RAM";

  // Clock
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typing Effect
  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <main className="h-screen w-screen bg-black text-cyan-400 font-mono overflow-hidden relative">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)]" />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center h-[80%] text-center px-4">

        {/* Typing Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 
        drop-shadow-[0_0_25px_#00ffff] mb-4">

          {typedText}
          <span className="animate-pulse ml-1">|</span>

        </h1>

        <h2 className="text-xl md:text-2xl text-cyan-300 mb-6">
          Full Stack Developer • Arch Linux Enthusiast
        </h2>

        <p className="max-w-2xl text-cyan-200/70 mb-8">
          Building futuristic web applications with MERN, Next.js and Tailwind.
          Focused on performance, clean UI and hacker-style experiences.
        </p>

        <div className="flex gap-4">
          <a
            href="https://www.codemonitor.online/"
            target="_blank"
            className="px-6 py-2 border border-cyan-400 rounded-lg 
            hover:bg-cyan-400 hover:text-black transition 
            shadow-[0_0_10px_#00ffff]"
          >
            Launch Portfolio
          </a>

          <a
            href="mailto:niteshcse3333@gmail.com"
            className="px-6 py-2 border border-cyan-400/40 rounded-lg 
            hover:border-cyan-400 transition"
          >
            Contact
          </a>
        </div>

        {/* Terminal Preview */}
        <div className="mt-10 w-full max-w-xl bg-black/70 border border-cyan-500/30 
        rounded-lg p-4 text-left text-sm shadow-[0_0_20px_#00ffff33]">

          <div className="text-cyan-400">ram@arch:~$ neofetch</div>

          <div className="text-cyan-200 mt-2">
            OS: Arch Linux x86_64 <br />
            Host: Developer Machine <br />
            Shell: zsh <br />
            Stack: MERN + Next.js
          </div>

        </div>

      </section>

      {/* Footer / Taskbar */}
      <footer className="absolute bottom-0 w-full flex items-center justify-between px-4 py-2 
      border-t border-cyan-500/20 text-sm backdrop-blur-md">

        <span className="drop-shadow-[0_0_6px_#00ffff]">
          ⚡ ARCH SYSTEM
        </span>

        <span className="text-cyan-300 drop-shadow-[0_0_6px_#00ffff]">
          {time}
        </span>

      </footer>

    </main>
  );
}