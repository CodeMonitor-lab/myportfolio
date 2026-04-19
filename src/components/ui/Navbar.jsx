"use client";

import Image from "next/image";
import Link from "next/link";
import navLinks from "@/json/navlinks.json";




const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between px-6 py-3 
    bg-black/60 backdrop-blur-md border-b border-cyan-500/20 
    shadow-[0_0_20px_#00ffff22] font-mono">

      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Archlinux-icon-crystal-64.svg"
          alt="Arch"
          width={24}
          height={24}
        />
        <span className="text-cyan-400 tracking-widest drop-shadow-[0_0_8px_#00ffff]">
          ram@arch:~$
        </span>
        <span className="animate-pulse text-cyan-400">█</span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex gap-8 text-xs uppercase tracking-wider">
        {navLinks.map((link) => (
          <NavItem key={link.to} to={link.to} label={link.text} />
        ))}
      </nav>

      {/* System Info */}
      <div className="text-xs text-cyan-400 drop-shadow-[0_0_6px_#00ffff] hidden md:block">
        Arch Linux • x86_64
      </div>
    </header>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <Link href={to} className="relative group text-cyan-300">

      {/* Text */}
      <span className="drop-shadow-[0_0_6px_#00ffff] group-hover:text-white transition">
        {label}
      </span>

      {/* Glow underline */}
      <span className="absolute left-0 -bottom-1 w-full h-[2px] 
      bg-cyan-400 opacity-70 
      shadow-[0_0_12px_#00ffff] 
      scale-x-0 group-hover:scale-x-100 
      origin-left transition-transform duration-300"></span>

    </Link>
  );
};

export default Navbar;