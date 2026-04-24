import React from "react";

const Timeline = () => {
  const logs = [
    { time: "00:01", event: "BOOT SEQUENCE INITIATED" },
    { time: "00:03", event: "REACT CORE LOADED" },
    { time: "00:07", event: "MOTION ENGINE SYNCHRONIZED" },
    { time: "00:12", event: "NEURAL UI NETWORK ONLINE" },
  ];

  return (
    <section className="py-24 px-6 bg-black flex justify-center relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.12),transparent_60%)] blur-2xl" />

      {/* Container */}
      <div className="relative max-w-3xl w-full border border-cyan-500/30 p-8 rounded-2xl bg-black/60 shadow-[0_0_30px_#00ffff11]">

        {/* Title */}
        <h2 className="text-cyan-300 text-xl mb-8 tracking-[0.35em] text-center">
          SYSTEM LOG
        </h2>

        {/* Timeline */}
        <div className="space-y-6">

          {logs.map((log, i) => (
            <div
              key={i}
              className="relative pl-6 border-l border-cyan-400/40"
            >
              {/* Dot */}
              <div className="absolute -left-[5px] top-1 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#00ffff] animate-pulse" />

              {/* Content */}
              <div className="text-xs text-gray-400 font-mono">
                <span className="text-pink-300">{log.time}</span>{" "}
                <span className="text-cyan-200">→</span>{" "}
                {log.event}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Timeline;