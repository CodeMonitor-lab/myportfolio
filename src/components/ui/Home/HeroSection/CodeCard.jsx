import React from "react";

const CodeCard = () => {
  return (
    <div className="
      relative rounded-2xl overflow-hidden
      bg-white/70 border border-slate-200 shadow-xl
      dark:bg-slate-900/80 dark:border-slate-800 dark:shadow-2xl
      backdrop-blur-xl transition-all duration-500
      hover:scale-[1.02] hover:shadow-indigo-500/10
    ">
      {/* Terminal Header */}
      <div className="
        flex items-center justify-between px-4 py-3
        border-b border-slate-200
        bg-slate-100
        dark:border-slate-800 dark:bg-slate-950
        transition-colors duration-300
      ">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
          developer@portfolio
        </div>
      </div>

      {/* Code Content */}
      <div className="p-6 font-mono text-sm overflow-x-auto">
        <div className="space-y-2 leading-relaxed">

          <div className="text-indigo-500 dark:text-indigo-400">
            &lt;<span className="text-pink-500 dark:text-pink-400">section</span>{" "}
            <span className="text-amber-500 dark:text-amber-400">className</span>=
            <span className="text-green-500 dark:text-green-400">"hero"</span>&gt;
          </div>

          <div className="pl-4 text-slate-600 dark:text-slate-400">
            &lt;<span className="text-pink-500 dark:text-pink-400">div</span>{" "}
            <span className="text-amber-500 dark:text-amber-400">className</span>=
            <span className="text-green-500 dark:text-green-400">"content"</span>&gt;
          </div>

          <div className="pl-8 text-slate-700 dark:text-slate-300">
            <span className="text-cyan-600 dark:text-cyan-400">&lt;h1&gt;</span>
            <span className="text-rose-500 dark:text-rose-400">
              {" "}Hello, I'm RAM
            </span>
            <span className="text-cyan-600 dark:text-cyan-400">&lt;/h1&gt;</span>
          </div>

          <div className="pl-8 text-slate-700 dark:text-slate-300">
            <span className="text-cyan-600 dark:text-cyan-400">&lt;p&gt;</span>
            <span className="text-amber-600 dark:text-amber-300">
              {" "}Building exceptional digital experiences
            </span>
            <span className="text-cyan-600 dark:text-cyan-400">&lt;/p&gt;</span>
          </div>

          <div className="pl-4 text-slate-600 dark:text-slate-400">
            &lt;/<span className="text-pink-500 dark:text-pink-400">div</span>&gt;
          </div>

          <div className="text-indigo-500 dark:text-indigo-400">
            &lt;/<span className="text-pink-500 dark:text-pink-400">section</span>&gt;
          </div>

          {/* Terminal Command */}
          <div className="
            mt-4 pt-4 border-t border-slate-200
            dark:border-slate-800 text-emerald-600 dark:text-emerald-400
          ">
            <span className="animate-pulse">█</span> npm run deploy
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-bl-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full pointer-events-none" />
    </div>
  );
};

export default CodeCard;
