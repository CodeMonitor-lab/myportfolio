import React from "react";
import Link from "next/link";

const HireMe = () => {
  return (
    <Link
      href="/Contact"
      className="px-5 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
    >
      Hire Me
    </Link>
  );
};

export default HireMe;
