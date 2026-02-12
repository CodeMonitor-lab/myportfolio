"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import navlink from "@/json/navlink.json";
import Logo from "@/components/common/Logo";
import MenuBar from "@/components/common/MenuBar";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navlink.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`transition-colors duration-200 ${
                pathname === link.to
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <MenuBar
          isOpen={isOpen}
          toggle={toggleMenu}
          className="md:hidden"
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navlink.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setIsOpen(false)}
                className={`transition-colors ${
                  pathname === link.to
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
