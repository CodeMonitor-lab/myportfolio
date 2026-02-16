import React from "react";

export default function App() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { platform: "GitHub", icon: "🐱", color: "hover:text-[#6e40c9]", link: "https://github.com/yourusername" },
    { platform: "LinkedIn", icon: "💼", color: "hover:text-[#0a66c2]", link: "https://linkedin.com/in/yourusername" },
    { platform: "Twitter", icon: "🐦", color: "hover:text-[#1da1f2]", link: "https://twitter.com/yourusername" },
    { platform: "Instagram", icon: "📸", color: "hover:text-[#e1306c]", link: "https://instagram.com/yourusername" },
    { platform: "Email", icon: "✉️", color: "hover:text-[#ea4335]", link: "mailto:you@example.com" },
  ];

  return (
    <div
      className="
        min-h-screen flex flex-col
        bg-gradient-to-br 
        from-gray-50 to-purple-100
        dark:from-gray-900 dark:to-purple-950
        text-gray-800 dark:text-white
        transition-colors duration-300
      "
    >
      {/* Main */}
      <main className="flex-1 flex flex-col justify-center items-center py-16 px-4">
        
        {/* Social Icons */}
        <ul className="flex flex-wrap justify-center gap-10 mb-12">
          {socials.map((social) => (
            <li key={social.platform}>
              <a
                href={social.link}
                aria-label={social.platform}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  text-4xl sm:text-5xl
                  transition-all duration-300
                  transform hover:scale-125
                  text-gray-600 dark:text-gray-300
                  ${social.color}
                `}
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Tagline */}
        <div className="text-center max-w-3xl mx-auto">
          <h1
            className="
              text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4
              bg-clip-text text-transparent
              bg-gradient-to-r
              from-purple-600 to-pink-600
              dark:from-purple-400 dark:to-pink-500
            "
          >
            Building scalable solutions with clean code.
          </h1>

          <p className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-purple-200 flex items-center justify-center gap-3">
            In love
            <span className="text-red-500 animate-pulse">❤️</span>
            with code
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="
          border-t 
          border-gray-200 dark:border-purple-800/70
          bg-white/60 dark:bg-gray-900/60
          backdrop-blur-md
          w-full py-6
        "
      >
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          
          <span className="text-sm text-gray-500 dark:text-purple-300">
            &copy; {currentYear} Developer Portfolio. All Rights Reserved.
          </span>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="/privacy" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/Services" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Services
            </a>
            <a href="/Contact" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}
