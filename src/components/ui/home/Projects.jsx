import React from "react";
import items from "@/data/projects.json";

const Projects = () => {

  return (
    <section className="py-24 px-6 bg-black">
      <h2 className="text-center text-cyan-300 text-xl mb-12 tracking-[0.35em]">
        PROJECT MATRIX
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-cyan-500/30 bg-black/60 hover:shadow-[0_0_25px_#00ffff22] transition"
          >
            <h3 className="text-pink-300 tracking-widest mb-2">{item.title}</h3>
            <p className="text-gray-500 text-xs">
          {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;