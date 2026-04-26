"use client";

import React from "react";
import { Menu, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const PlayHeader = ({ slug, open, setOpen }) => {
  const formatted = slug ? slug.replace(/-/g, " ") : "select experiment";

  const toggleMenu = () => {
    if (typeof setOpen === "function") {
      setOpen(!open);
    }
  };

  return (
    <div className="w-full flex items-center justify-between px-6 py-4 border-b border-cyan-500/20 bg-zinc-950/80 backdrop-blur-xl">
      {/* Left */}
      <div className="flex items-center gap-3">
        <Terminal className="text-cyan-400 w-5 h-5" />
        <div>
          <p className="text-green-400 text-xs">root@playground:~$ run</p>
          <h1 className="text-xl font-bold text-cyan-300 capitalize">
            {formatted}
          </h1>
        </div>
      </div>

      {/* Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleMenu}
        className="p-2 rounded-lg bg-zinc-900 border border-cyan-500/20 md:hidden"
      >
        <Menu className="w-5 h-5 text-cyan-400" />
      </motion.button>
    </div>
  );
};

export default PlayHeader;