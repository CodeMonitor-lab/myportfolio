import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white from-slate-950 via-purple-900 to-slate-900 text-white">

      {/* Glow Background Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="space-y-8 text-center md:text-left">

          <h1 className="text-3xl sm:text-5xl md:text-5xl font-extrabold leading-tight 
                        bg-indigo-800  from-white via-purple-200 to-blue-300 
                         bg-clip-text text-transparent">
            Craft full stack web solutions that merge thoughtful design with powerful functionality — from responsive interfaces to scalable APIs.
          </h1>

          <p className="text-indigo-900 text-lg sm:text-xl">
            As a full stack developer, I enjoy bridging the gap between elegant user interfaces and efficient backend systems, creating seamless digital experiences.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="group flex items-center gap-3 bg-white text-slate-900 
                               px-8 py-3 rounded-full font-semibold shadow-xl 
                               hover:shadow-2xl hover:scale-105 
                               transition-all duration-300">
              Discover Profile
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>

        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end">

          <div className="relative">

            {/* Soft Glow Behind Image */}
            <div className="absolute inset-0  from-purple-500 to-blue-500 blur-2xl opacity-30 rounded-3xl" />

            <Image
              src="/works.jpg"
              alt="Profile Image"
              width={420}
              height={420}
              className="relative rounded-3xl shadow-2xl border border-white/10"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
