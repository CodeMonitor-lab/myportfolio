import PageTransition from "@/components/common/PageTransition";


export default function Projects() {
  const projects = ["Portfolio Website", "E-Commerce App", "Dashboard UI"];
  return (
    <PageTransition>
    <main className="min-w-full h-screen bg-black text-cyan-400 font-mono overflow-hidden relative snap-start shrink-0">
      <section
        id="projects"
        className="min-h-screen bg-zinc-950 text-white px-6 py-20"
      >
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p}
              className="p-6 rounded-2xl bg-zinc-900 border border-cyan-500/20 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold">{p}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
    </PageTransition>
  );
}
