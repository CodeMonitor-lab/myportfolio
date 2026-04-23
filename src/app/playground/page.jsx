import PageTransition from "@/components/common/PageTransition";


export default function Playground() {
  return (
<PageTransition>    
    <main className="min-w-full h-screen bg-black text-cyan-400 font-mono overflow-hidden relative snap-start shrink-0">
    <section id="playground" className="min-h-screen bg-black text-cyan-300 px-6 py-20">
      <h2 className="text-4xl font-bold mb-8">Playground</h2>
      <p>Experiments, animations, and mini builds.</p>
    </section>
    </main>
    </PageTransition>
  );
}