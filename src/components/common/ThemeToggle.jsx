"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      className="w-9 h-9 rounded-xl flex items-center justify-center 
                 bg-gray-200 dark:bg-zinc-800 
                 transition-all duration-300 hover:scale-110"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTheme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {currentTheme === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
