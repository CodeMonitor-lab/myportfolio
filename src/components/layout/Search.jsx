"use client";

import React from "react";
import { Search as SearchIcon, Command } from "lucide-react";

const Search = () => {
  const handleOpen = () => {
    console.log("Open search modal / command palette");
  };

  return (
    <button
      onClick={handleOpen}
      className="w-36 sm:w-44 flex items-center justify-between gap-2
      px-3 py-1.5 rounded-md
      border border-cyan-500/30 bg-black/40 backdrop-blur-md
      text-cyan-200 shadow-[0_0_8px_rgba(0,255,255,0.2)]
      hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(0,255,255,0.4)]
      transition-all duration-300"
    >
      {/* Left */}
      <div className="flex items-center gap-2">
        <SearchIcon size={14} className="text-cyan-400" />
        <span className="text-xs sm:text-sm text-cyan-500/70">Search</span>
      </div>

      {/* Shortcut */}
      <div
        className="hidden sm:flex items-center gap-1 px-1.5 py-0.5 rounded
        border border-cyan-500/20 text-[10px] text-cyan-300/70"
      >
        <Command size={10} />
        <span>K</span>
      </div>
    </button>
  );
};

export default Search;