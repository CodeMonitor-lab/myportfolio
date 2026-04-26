import PageTransition from "@/components/common/PageTransition";
import { Terminal, Mail, User, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <PageTransition>
      <main className="min-w-full min-h-screen bg-black text-cyan-400 font-mono overflow-hidden relative snap-start shrink-0">
        {/* Cyber grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Glowing blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/10 blur-3xl rounded-full animate-pulse" />

        {/* Scanline */}
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_1px,transparent_1px,transparent_4px)]" />

        <section
          id="contact"
          className="relative z-10 min-h-screen px-6 py-20 flex items-center justify-center"
        >
          <div className="max-w-2xl w-full">
            {/* Terminal Header */}
            <div className="inline-flex items-center gap-3 border border-cyan-500/30 bg-zinc-900/70 rounded-full px-5 py-2 shadow-lg shadow-cyan-500/10 mb-8">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <p className="text-green-400 text-xs sm:text-sm">
                root@portfolio:~$ ./send-message.sh
              </p>
            </div>

            <p className="text-zinc-400 mb-10 text-sm sm:text-base">
              Want to collaborate, hire me, or just say hello? Drop a message
              into the terminal below.
            </p>

            {/* Form */}
            <div className="bg-zinc-900/70 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-6 sm:p-8 shadow-[0_0_30px_#00ffff11]">
              {/* Terminal top bar */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              {/* Name */}
              <div className="relative mb-4">
                <User className="absolute left-4 top-4 w-5 h-5 text-cyan-400" />
                <input
                  className="w-full pl-12 p-3 rounded-xl bg-black/60 border border-cyan-500/20 focus:border-green-400 outline-none text-white"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div className="relative mb-4">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-cyan-400" />
                <input
                  className="w-full pl-12 p-3 rounded-xl bg-black/60 border border-cyan-500/20 focus:border-green-400 outline-none text-white"
                  placeholder="Your Email"
                />
              </div>

              {/* Message */}
              <div className="relative mb-6">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-cyan-400" />
                <textarea
                  rows="5"
                  className="w-full pl-12 p-3 rounded-xl bg-black/60 border border-cyan-500/20 focus:border-green-400 outline-none text-white"
                  placeholder="Your Message"
                />
              </div>

              {/* Button */}
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-400 text-black font-bold hover:bg-green-400 hover:scale-[1.02] transition-all duration-300">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}