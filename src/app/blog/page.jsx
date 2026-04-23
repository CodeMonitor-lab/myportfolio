import PageTransition from "@/components/common/PageTransition";


export default function Blog() {
  return (
    <PageTransition>

    <main className="min-w-full h-screen bg-black text-cyan-400 font-mono overflow-hidden relative snap-start shrink-0">

    <section id="blog" className="min-h-screen bg-zinc-950 text-white px-6 py-20">
      <h2 className="text-4xl font-bold mb-8">Blog</h2>
      <div className="space-y-4">
        <div className="p-5 bg-zinc-900 rounded-xl">How I built my portfolio</div>
        <div className="p-5 bg-zinc-900 rounded-xl">React mistakes I learned from</div>
      </div>
    </section>
    </main>
    </PageTransition>
  );
}
