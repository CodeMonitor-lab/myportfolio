import React from "react";

const PlayContent = ({ slug }) => {
  const formattedSlug = slug ? slug.replace(/-/g, " ") : "Select Experiment";

  return (
    <main className="flex-1 p-6 text-cyan-300 font-mono">
      <h1 className="text-3xl font-bold mb-4 capitalize">{formattedSlug}</h1>

      <p className="text-zinc-400">
        This is the preview page for{" "}
        <span className="text-green-400">{slug || "an experiment"}</span>.
      </p>
    </main>
  );
};

export default PlayContent;