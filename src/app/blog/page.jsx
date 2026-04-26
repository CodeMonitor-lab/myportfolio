import Link from "next/link";
import PageTransition from "@/components/common/PageTransition";
import { Terminal } from "lucide-react";
import blogs from "@/data/blogs.json";

export default function BlogPage() {
  return (
    <PageTransition>
      <main className="min-w-full min-h-screen bg-black text-cyan-400 font-mono overflow-hidden relative snap-start shrink-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <section className="relative z-10 px-6 py-20 text-center border-b border-cyan-500/20">
          <div className="inline-flex items-center gap-3 border border-cyan-500/30 bg-zinc-900/70 rounded-full px-5 py-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <p className="text-green-400 text-xs sm:text-sm">
              root@portfolio:~$ open ./blogs
            </p>
          </div>

        </section>

        <section className="relative z-10 px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group relative overflow-hidden p-6 rounded-3xl bg-zinc-900/70 border border-cyan-500/20 hover:border-pink-400 transition-all duration-500"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>

                <p className="text-green-400 text-xs">
                  root@blog:~$ open article_{i + 1}
                </p>

                <div className="mt-3 space-y-3">
                  <p className="text-cyan-400 text-xs">├── title:</p>
                  <h2 className="text-lg font-semibold text-white pl-4 border-l border-cyan-500/30">
                    {blog.title}
                  </h2>

                  <p className="text-cyan-400 text-xs">├── description:</p>
                  <p className="text-zinc-400 text-sm pl-4 border-l border-pink-500/20">
                    {blog.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}