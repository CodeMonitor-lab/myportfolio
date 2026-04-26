import projects from "@/data/projects.json";
import { notFound } from "next/navigation";
import { Terminal, ShieldCheck, ExternalLink } from "lucide-react";

export default async function ProjectDetails({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" />

      <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15),rgba(0,0,0,0.15)_1px,transparent_1px,transparent_3px)]" />

      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto flex items-center gap-3 mb-8 border border-cyan-500/30 bg-zinc-900/70 rounded-xl px-4 py-3 shadow-lg shadow-cyan-500/10">
          <Terminal className="w-5 h-5 text-cyan-400" />
          <p className="text-green-400">
            root@portfolio:~$ open ./{project.slug}
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-10">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-7 h-7 text-green-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400">
              {project.title}
            </h1>
          </div>

          <p className="text-zinc-400 mt-4 text-lg">{project.desc}</p>

          <div className="mt-8 bg-zinc-900/80 border border-green-400/20 rounded-2xl p-6">
            <p className="text-green-400 mb-4">cat project-details.txt</p>
            <p className="leading-8 text-zinc-300">{project.content}</p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-cyan-500 text-black rounded-xl font-semibold hover:bg-green-400 hover:scale-105 transition-all duration-300"
          >
            <ExternalLink className="w-5 h-5" />
            Visit Live Site
          </a>
        </div>
      </section>
    </main>
  );
}