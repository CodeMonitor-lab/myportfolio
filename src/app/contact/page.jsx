import PageTransition from "@/components/common/PageTransition";

export default function Contact() {
  return (
    <PageTransition>
    <main className="min-w-full h-screen bg-black text-cyan-400 font-mono overflow-hidden relative snap-start shrink-0">
      <section
        id="contact"
        className="min-h-screen bg-black text-cyan-400 px-6 py-20 flex items-center justify-center"
      >
        <div className="max-w-xl w-full text-center">
          <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
          <input
            className="w-full p-3 mb-4 rounded bg-zinc-900"
            placeholder="Your Name"
          />
          <input
            className="w-full p-3 mb-4 rounded bg-zinc-900"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-3 mb-4 rounded bg-zinc-900"
            placeholder="Message"
          />
          <button className="px-6 py-3 rounded bg-cyan-400 text-black font-bold">
            Send
          </button>
        </div>
      </section>
    </main>
    </PageTransition>
  );
}
