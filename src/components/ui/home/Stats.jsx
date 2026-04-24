import React from "react";

const Stats = () => {
  const stats = [
    { label: "PROJECTS DEPLOYED", value: "25+", status: "ACTIVE" },
    { label: "SYSTEM UPTIME", value: "99.99%", status: "STABLE" },
    { label: "LATENCY", value: "<8ms", status: "OPTIMAL" },
    { label: "AI MODULES", value: "12", status: "RUNNING" },
    { label: "DEPLOYMENTS", value: "LIVE", status: "SYNCED" },
    { label: "ERROR RATE", value: "0.02%", status: "CONTROLLED" },
  ];

  return (
    <section className="py-24 px-6 bg-black text-center relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_60%)] blur-2xl" />

      {/* Title */}
      <h2 className="relative text-cyan-300 text-xl mb-12 tracking-[0.35em]">
        SYSTEM METRICS DASHBOARD
      </h2>

      {/* Grid */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {stats.map((s, i) => (
          <div
            key={i}
            className="relative p-6 rounded-2xl border border-cyan-500/30 bg-black/60 shadow-[0_0_25px_#00ffff11] hover:shadow-[0_0_35px_#00ffff22] transition"
          >
            {/* Top status indicator */}
            <div className="absolute top-3 right-3 text-[10px] text-green-400 tracking-widest animate-pulse">
              ● {s.status}
            </div>

            {/* Value */}
            <div className="text-pink-300 text-3xl font-bold">
              {s.value}
            </div>

            {/* Label */}
            <div className="text-gray-500 text-[10px] mt-2 tracking-[0.2em]">
              {s.label}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Stats;