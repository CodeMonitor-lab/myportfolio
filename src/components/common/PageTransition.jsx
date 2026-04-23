// src/components/common/PageTransition.jsx
"use client";

import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full min-h-screen"
    >
      {children}
    </motion.div>
  );
}