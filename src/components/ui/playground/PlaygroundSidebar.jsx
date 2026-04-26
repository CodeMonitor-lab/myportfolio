"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const experiments = [
  "3d-card-hover",
  "typing-animation",
  "particle-background",
];

const PlaygroundSidebar = ({ currentSlug, open, setOpen }) => {
  return (
    <>
      {/* Desktop Sidebar (still visible on large screens) */}
      <aside className="hidden md:block w-64 min-h-screen bg-zinc-900 border-r border-cyan-500/20 p-4 text-cyan-400 font-mono">
        <h2 className="text-xl font-bold mb-6">Playground</h2>

        <ul className="space-y-3">
          {experiments.map((item) => (
            <li key={item}>
              <Link
                href={`/playground/${item}`}
                className={`block capitalize transition ${
                  currentSlug === item
                    ? "text-green-400"
                    : "hover:text-green-400"
                }`}
              >
                {item.replace(/-/g, " ")}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Mobile + Tablet Drawer (ALL SIZES) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 left-0 h-screen w-72 bg-zinc-950 border-r border-cyan-500/20 z-50"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-cyan-500/20">
                <h2 className="text-cyan-400 font-bold">Playground</h2>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg bg-zinc-900 border border-cyan-500/20"
                >
                  <X className="w-5 h-5 text-cyan-400" />
                </button>
              </div>

              {/* Links */}
              <ul className="p-6 space-y-6 text-lg">
                {experiments.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/playground/${item}`}
                      onClick={() => setOpen(false)}
                      className={`block capitalize transition ${
                        currentSlug === item
                          ? "text-green-400"
                          : "hover:text-green-400"
                      }`}
                    >
                      {item.replace(/-/g, " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PlaygroundSidebar;