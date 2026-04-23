"use client";

import React, { useState, useEffect } from "react";
import Search from "./Search";
import { Cpu, Clock3 } from "lucide-react";

const Taskbar = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="absolute bottom-0 left-0 z-50 w-full 
      flex items-center justify-between gap-4
      px-4 md:px-6 py-2
      border-t border-cyan-500/20
      bg-black/30 backdrop-blur-md"
    >
      {/* Left */}
      <div
        className="flex items-center gap-2 text-neutral-300 
        drop-shadow-[0_0_6px_#00ffff]"
      >
        <Cpu size={16} className="text-cyan-400" />
        <span className="hidden sm:inline tracking-widest">
           ARCH SYSTEM
        </span>
      </div>

      {/* Center */}
      <div className="flex-1 max-w-md flex justify-center">
        <Search />
      </div>

      {/* Right */}
      <div
        className="flex items-center gap-2 text-cyan-300 
        drop-shadow-[0_0_6px_#00ffff]"
      >
        <Clock3 size={16} />
        <span>{time}</span>
      </div>
    </footer>
  );
};

export default Taskbar;