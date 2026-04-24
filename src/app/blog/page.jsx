import PageTransition from "@/components/common/PageTransition";

export default function BlogPage() {
  const blogs = [
    {
      title: "Building a Futuristic Portfolio",
      desc: "How I designed and developed a cyberpunk-inspired personal portfolio using Next.js and Tailwind CSS.",
      date: "Apr 2026",
      category: "Design",
    },
    {
      title: "Mastering Framer Motion",
      desc: "Learn how to add smooth animations and page transitions in React applications.",
      date: "Mar 2026",
      category: "Animation",
    },
    {
      title: "Next.js Performance Tips",
      desc: "Best practices to optimize performance, SEO, and loading speed in modern web apps.",
      date: "Feb 2026",
      category: "Development",
    },
    {
      title: "Creating Cyberpunk UI",
      desc: "Step-by-step guide to designing glowing neon interfaces with Tailwind CSS.",
      date: "Jan 2026",
      category: "UI/UX",
    },
    {
      title: "Full Stack App Architecture",
      desc: "Scalable architecture for MERN and Next.js applications.",
      date: "Dec 2025",
      category: "Backend",
    },
    {
      title: "Deploying Apps Easily",
      desc: "Deploy your Next.js apps seamlessly using Vercel and Docker.",
      date: "Nov 2025",
      category: "DevOps",
    },
  ];

  return (
    <PageTransition>
      <main className="min-w-full min-h-screen bg-black text-cyan-400 font-mono overflow-hidden relative snap-start shrink-0">
        {/* Hero */}
        <section className="relative px-6 py-20 text-center border-b border-cyan-500/20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-cyan-300">
            BLOG SYSTEM
          </h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Explore insights, tutorials, and futuristic ideas about design,
            development, and digital experiences.
          </p>
        </section>

        {/* Blog Grid */}
        <section className="px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.title}
                className="group p-6 rounded-2xl bg-zinc-900/80 border border-cyan-500/20 hover:border-cyan-400 hover:scale-[1.03] transition-all duration-300 shadow-[0_0_20px_#00ffff11]"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-pink-400">{blog.category}</span>
                  <span className="text-xs text-zinc-500">{blog.date}</span>
                </div>

                <h2 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition">
                  {blog.title}
                </h2>

                <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
                  {blog.desc}
                </p>

                <button className="mt-6 text-cyan-400 hover:text-cyan-300 text-sm">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}