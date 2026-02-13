"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 select-none">
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold shadow-md"
      >
        8
      </motion.div>

      <motion.span
        whileHover={{ x: 2 }}
        className="text-lg font-semibold tracking-tight bg-gradient-to-r from-purple-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
      >
        fx
      </motion.span>
    </Link>
  );
}
