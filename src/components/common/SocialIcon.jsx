"use client";

import Link from "next/link";
import { Github, Facebook, Instagram, Linkedin } from "lucide-react";

const SocialIcon = () => {
  return (
    <ul className="flex gap-5">
      
      <li>
        <Link href="#" className="group">
          <Instagram
            size={28}
            className="text-rose-600 transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
      </li>

      <li>
        <Link href="#" className="group">
          <Github
            size={28}
            className="text-black transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
      </li>

      <li>
        <Link href="#" className="group">
          <Facebook
            size={28}
            className="text-blue-600 transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
      </li>

      <li>
        <Link href="#" className="group">
          <Linkedin
            size={28}
            className="text-blue-700 transition-transform duration-300 group-hover:scale-110"
          />
        </Link>
      </li>

    </ul>
  );
};

export default SocialIcon;
