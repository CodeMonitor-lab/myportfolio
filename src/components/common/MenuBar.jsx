"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "@/json/navlink.json";

export default function MenuBar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => {
        const isActive = pathname === link.to;

        return (
          <Link
            key={link.to}
            href={link.to}
            className="relative text-sm font-medium group"
          >
            <span
              className={`transition-colors duration-300 ${
                isActive
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {link.text}
            </span>

            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-purple-500 transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
}
