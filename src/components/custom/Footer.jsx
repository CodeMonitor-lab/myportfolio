import React from 'react';

export default function App() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      {/* Main content area that pushes footer to bottom */}
      <main className="flex-1 flex flex-col justify-center items-center py-12 px-4 sm:py-16">
        {/* Social Icons Section */}
        <ul className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-10">
          {[
            { platform: 'GitHub', icon: '🐱', color: 'hover:text-[#6e40c9]', link: 'https://github.com/yourusername' },
            { platform: 'LinkedIn', icon: '💼', color: 'hover:text-[#0a66c2]', link: 'https://linkedin.com/in/yourusername' },
            { platform: 'Twitter', icon: '🐦', color: 'hover:text-[#1da1f2]', link: 'https://twitter.com/yourusername' },
            { platform: 'Instagram', icon: '📸', color: 'hover:text-[#e1306c]', link: 'https://instagram.com/yourusername' },
            { platform: 'Email', icon: '✉️', color: 'hover:text-[#ea4335]', link: 'mailto:you@example.com' }
          ].map((social) => (
            <li key={social.platform}>
              <a 
                href={social.link} 
                aria-label={social.platform}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-4xl sm:text-5xl transition-all duration-300 transform hover:scale-125 ${social.color}`}
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Tagline Section */}
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Building scalable solutions with clean code.
          </h1>
          <p className="text-xl font-bold text-purple-200 flex items-center justify-center gap-3">
            In love <span aria-label="heart" className="text-red-400 animate-pulse">❤️</span> with code
          </p>
        </div>
      </main>
      
      {/* Footer Section */}
      <footer className="border-t border-purple-800/70 bg-gray-900/50 w-full  py-5 mt-auto">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <span className="font-light text-purple-300 text-sm mb-2 sm:mb-0">
            &copy;{currentYear} Developer Portfolio. All Rights Reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="/privacy" className="text-purple-300 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-purple-300 hover:text-white transition-colors">Terms of Service</a>
            <a href="/contact" className="text-purple-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
