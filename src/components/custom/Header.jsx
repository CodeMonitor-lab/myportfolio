"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import navlink from "@/json/navlink.json";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          YourLogo
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navlink.map((link, index) => (
            <Link
              key={index}
              href={link.to}
              className={`transition-colors ${
                pathname === link.to
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col p-6 gap-4">
            {navlinks.map((link, index) => (
              <Link
                key={index}
                href={link.to}
                onClick={() => setIsOpen(false)}
                className={`${
                  pathname === link.to
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
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
