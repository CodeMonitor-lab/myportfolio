import test from "@/json/HeroBannerData.json";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Label */}
        <p className="text-center sm:text-left text-sm tracking-widest uppercase font-semibold text-purple-700">
          {test.article_1.title}
        </p>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Heading */}
          <div>
            <h1 className="text-3xl sm:text-6xl font-extrabold text-purple-950 leading-tight">
              {test.article_1.heading}
            </h1>
          </div>

          {/* Paragraph Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {test.article_1.para1}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {test.article_1.para2}
            </p>

            <button className="mt-4 inline-flex items-center gap-2 bg-purple-900 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Our Design
            </button>
          </div>
        </div>

        {/* Specialties Section */}
        <div className="pt-10 border-t border-purple-100">
          <h2 className="text-center sm:text-left text-xl font-semibold text-purple-800 mb-8">
            Our Specialties
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Brand Strategy",
              "Identity Systems",
              "Digital Experiences",
              "Next-Gen Innovation",
            ].map((item, index) => (
              <div
                key={index}
                className="text-3xl sm:text-5xl font-extrabold text-purple-950 hover:text-purple-700 transition-colors duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;
