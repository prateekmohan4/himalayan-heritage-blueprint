
import { Button } from "@/components/ui/button";

const FeaturedStrains = () => {
  const strains = [
    {
      name: "Malana Heritage",
      region: "Malana Valley",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Ancient genetics preserved through generations",
      characteristics: [
        "Ancient genetics",
        "High altitude adaptation",
        "Traditional cultivation"
      ]
    },
    {
      name: "Parvati Gold",
      region: "Parvati Valley",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Golden resin producers from the sacred valley",
      characteristics: [
        "Golden resin production",
        "Mountain resilience",
        "Heritage lineage"
      ]
    },
    {
      name: "Kashmir Cream",
      region: "Kashmir Valley",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Creamy terpenes from the valley of paradise",
      characteristics: [
        "Creamy terpene profile",
        "Cold climate adapted",
        "Traditional methods"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-amber-400">Heritage Strains</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Carefully preserved genetics from traditional Himalayan cultivation regions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strains.map((strain, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 hover:border-amber-400/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Strain Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={strain.image}
                  alt={strain.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full text-amber-300 text-sm font-medium">
                    {strain.region}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{strain.name}</h3>
                <p className="text-slate-400 mb-4">{strain.description}</p>
                
                {/* Characteristics */}
                <div className="space-y-2 mb-6">
                  {strain.characteristics.map((char, charIndex) => (
                    <div key={charIndex} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                      {char}
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl text-white font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/25">
                  Learn More
                </button>
              </div>
              
              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStrains;
