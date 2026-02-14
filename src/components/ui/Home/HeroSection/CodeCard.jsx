import React from 'react'

const CodeCard = () => {
  return (
    <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
    {/* Terminal Header */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="text-xs text-slate-400">developer@portfolio</div>
    </div>
    
    {/* Code Content */}
    <div className="p-6 font-mono text-sm overflow-x-auto">
      <div className="space-y-2">
        <div className="text-indigo-400">&lt;<span className="text-pink-400">section</span> <span className="text-amber-400">className</span>=<span className="text-green-400">"hero"</span>&gt;</div>
        <div className="pl-4 text-slate-400">  &lt;<span className="text-pink-400">div</span> <span className="text-amber-400">className</span>=<span className="text-green-400">"content"</span>&gt;</div>
        <div className="pl-8 text-slate-300">    <span className="text-cyan-400">&lt;h1&gt;</span>
            <span className="text-rose-400">Hello, I'm RAM</span>
            <span className="text-cyan-400">&lt;/h1&gt;</span>
          </div>
        <div className="pl-8 text-slate-300">    <span className="text-cyan-400">&lt;p&gt;</span>
            <span className="text-amber-300">Building exceptional digital experiences</span>
            <span className="text-cyan-400">&lt;/p&gt;</span>
          </div>
        <div className="pl-4 text-slate-400">  &lt;/<span className="text-pink-400">div</span>&gt;</div>
        <div className="text-indigo-400">&lt;/<span className="text-pink-400">section</span>&gt;</div>
        
        <div className="mt-4 pt-4 border-t border-slate-800 text-emerald-400">
          <span className="animate-pulse">█</span> npm run deploy
        </div>
      </div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-900/50 to-transparent rounded-bl-full" />
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-900/50 to-transparent rounded-tr-full" />
  </div>
  )
}

export default CodeCard