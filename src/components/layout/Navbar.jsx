"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import navLinks from "@/data/navlinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (link) => {
    if (pathname === "/") {
      const section = document.getElementById(link.to);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        router.push(link.href);
      }
    } else {
      router.push(link.href);
    }

    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 w-full flex items-center justify-between px-4 md:px-6 py-3
      bg-black/70 backdrop-blur-xl border-b border-cyan-500/20
      shadow-[0_0_25px_#00ffff22] font-mono"
    >
      {/* Logo */}
      <div
        onClick={() => router.push("/")}
        className="flex items-center gap-3 cursor-pointer"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Archlinux-icon-crystal-64.svg"
          alt="Arch"
          width={24}
          height={24}
        />
        <span className="text-cyan-400 tracking-widest drop-shadow-[0_0_8px_#00ffff] text-sm md:text-base">
          ram@arch:~$
        </span>
        <span className="animate-pulse text-cyan-400">█</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-xs uppercase tracking-wider">
        {navLinks.map((link) => (
          <NavItem
            key={link.to}
            label={link.text}
            onClick={() => handleNavigation(link)}
          />
        ))}
      </nav>

      {/* System Info */}
      <div className="text-xs text-cyan-400 hidden lg:block tracking-widest">
        Arch Linux • x86_64
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-cyan-400"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl
            border-b border-cyan-500/20 flex flex-col items-center py-6 gap-5 md:hidden"
          >
            {navLinks.map((link) => (
              <NavItem
                key={link.to}
                label={link.text}
                onClick={() => handleNavigation(link)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavItem = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="relative group text-cyan-300">
      <span className="group-hover:text-white transition duration-300">
        {label}
      </span>

      {/* underline */}
      <span
        className="absolute left-0 -bottom-1 w-full h-[2px]
        bg-cyan-400 scale-x-0 group-hover:scale-x-100
        origin-left transition-transform duration-300"
      />

      {/* glow */}
      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100
        blur-md bg-cyan-400/20 transition duration-300"
      />
    </button>
  );
};

export default Navbar;