"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import navLinks from "@/json/navlink.json";
import Logo from "@/components/common/Logo";
import ThemeToggle from "@/components/common/ThemeToggle";
import { usePathname } from "next/navigation";
import HireMe from "@/components/common/HireMe";
import { LayoutGrid,LayoutPanelLeft } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/70 dark:bg-black/60 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Left */}
        <Logo />

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <HireMe />
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl text-gray-800 dark:text-white"
        >
          {isMenuOpen ?  <LayoutPanelLeft/> : <LayoutGrid/>}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden backdrop-blur-xl bg-white/95 dark:bg-black/90"
          >
            <div className="flex flex-col px-6 py-6 gap-6">

              {/* Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  href={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium transition ${
                    pathname === link.to
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {link.text}
                </Link>
              ))}

              {/* Actions */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col gap-4">
                <HireMe />
                <ThemeToggle />
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
