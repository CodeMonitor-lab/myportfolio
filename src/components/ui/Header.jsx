"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import navLinks from "@/json/navlink.json";
import Logo from "@/components/common/Logo";
import ThemeToggle from "@/components/common/ThemeToggle";
import { usePathname } from "next/navigation";
import HireMe from "@/components/common/HireMe";
import { LayoutGrid, LayoutPanelLeft } from "lucide-react";

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

        {/* LEFT (Desktop) */}
        <div className="hidden md:block">
          <Logo />
        </div>

        {/* CENTER (Desktop NavLinks) */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-sm font-medium transition ${
                pathname === link.to
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-purple-500"
              }`}
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* RIGHT (Logo) */}
        <div className="hidden md:flex items-center gap-4">
          <HireMe />
          <ThemeToggle />
        </div>
    

        {/* MOBILE HEADER */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Logo />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-gray-800 dark:text-white"
          >
            {isMenuOpen ? <LayoutPanelLeft /> : <LayoutGrid />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-white/95 dark:bg-black/90">
          <div className="flex flex-col px-6 py-6 gap-6">

            {navLinks.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium ${
                  pathname === link.to
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {link.text}
              </Link>
            ))}

            <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col gap-4">
              <ThemeToggle />
              <HireMe />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
