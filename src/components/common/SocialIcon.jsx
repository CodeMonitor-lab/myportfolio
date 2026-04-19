"use client";

import Link from "next/link";
import { Github, Facebook, Instagram, Linkedin } from "lucide-react";

const SocialIcon = () => {
  return (
    <ul className="flex gap-5">
      {[Instagram, Github, Facebook, Linkedin].map((Icon, i) => (
        <li key={i}>
          <Link href="#" className="group">
            <Icon
              size={18}
              className="text-green-400 
              drop-shadow-[0_0_6px_#00ff88] 
              hover:text-white 
              hover:drop-shadow-[0_0_10px_#00ff88] 
              transition-all duration-300 
              group-hover:scale-110"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcon;