"use client";

import { useEffect, useState } from "react";
import { Menu, CirclePower } from "lucide-react";
import SocialIcon from "@/components/common/SocialIcon";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Start Menu Popup */}
      {menuOpen && (
        <div
          className="
        fixed bottom-14 left-4 w-56 z-50
        bg-[#0d1117]/95 backdrop-blur-md
        border border-green-500/30 rounded-lg p-4
        shadow-[0_0_25px_#00ff8833]
        font-mono text-sm text-green-300
        "
        >
          <div className="flex flex-col gap-3">
            <button className="hover:text-white text-left">🖥️ Terminal</button>
            <button className="hover:text-white text-left">📁 Files</button>
            <button className="hover:text-white text-left">🌐 Browser</button>
            <button className="hover:text-white text-left">⚙️ Settings</button>
          </div>
        </div>
      )}

      {/* Footer Panel */}
      <footer
        className="
      fixed bottom-0 left-0 w-full z-50 
      flex items-center justify-between px-4 py-2
      bg-[#0d1117]/90 backdrop-blur-md 
      border-t border-green-500/20
      shadow-[0_0_20px_#00ff8822]
      font-mono text-xs text-green-400
      "
      >
        {/* Start Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex items-center gap-2 group"
        >
          <CirclePower
            size={18}
            className={`
              transition-all duration-300
              ${
                menuOpen
                  ? "text-white drop-shadow-[0_0_12px_#00ff88]"
                  : "text-green-400 drop-shadow-[0_0_6px_#00ff88]"
              }
            `}
          />
          <span className="hidden sm:inline group-hover:text-white transition">
            menu
          </span>
        </button>

        {/* Center (future apps) */}
        <div></div>

        {/* System Tray */}
        <div className="flex items-center gap-4">
          <SocialIcon />
          <a href="#">Download CV</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
