import blogs from "@/data/blogs.json";
import { notFound } from "next/navigation";
import { Terminal } from "lucide-react";

export default async function BlogDetails({ params }) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <main className="min-h-screen bg-black text-cyan-400 font-mono relative overflow-hidden px-6 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <section className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-3 border border-cyan-500/30 bg-zinc-900/70 rounded-full px-5 py-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <p className="text-green-400 text-xs sm:text-sm">
            root@blog:~$ cat {blog.slug}.md
          </p>
        </div>

        <h1 className="mt-8 text-4xl md:text-6xl font-bold text-white">
          {blog.title}
        </h1>

        <div className="flex gap-4 mt-4 text-sm">
          <span className="text-pink-400">{blog.category}</span>
          <span className="text-zinc-500">{blog.date}</span>
        </div>

        <p className="mt-6 text-zinc-400 text-lg">{blog.desc}</p>

        <article className="mt-10 bg-zinc-900/70 border border-cyan-500/20 rounded-3xl p-8 leading-8 text-zinc-300">
          {blog.content}
        </article>
      </section>
    </main>
  );
}