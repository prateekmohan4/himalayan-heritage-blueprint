
const CompanyInfo = () => {
  const features = [
    {
      title: "Heritage Preservation",
      description: "Safeguarding traditional cannabis genetics from the Indian Himalayas for future generations",
      icon: "🏔️"
    },
    {
      title: "Educational Focus",
      description: "Promoting understanding of cannabis biodiversity and traditional cultivation methods",
      icon: "📚"
    },
    {
      title: "Research Support",
      description: "Providing authentic landrace genetics for scientific research and academic studies",
      icon: "🔬"
    },
    {
      title: "Cultural Documentation",
      description: "Recording and preserving traditional knowledge from Himalayan cannabis communities",
      icon: "📝"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Our <span className="text-emerald-600">Mission</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dedicated to preserving India's cannabis heritage while supporting education, research, and cultural documentation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Story Section */}
        <div className="mt-20 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-6">
            Preserving Himalayan Cannabis Heritage
          </h3>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Founded with a deep respect for traditional knowledge and biodiversity conservation, 
            Himalayan Heritage Seeds represents the first systematic effort to document and preserve 
            India's indigenous cannabis genetics. Our work bridges ancient wisdom with modern science, 
            ensuring these irreplaceable genetic resources remain available for education, research, 
            and cultural preservation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
