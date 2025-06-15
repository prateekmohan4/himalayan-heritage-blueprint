
import { Button } from "@/components/ui/button";

const RegionalCategories = () => {
  const regions = [
    {
      title: "Seeds from the High Himalayas",
      description: "3000m+ altitude strains",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Seeds from the Middle Hills",
      description: "1500-3000m traditional zones",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Seeds from the Foothills",
      description: "500-1500m heritage varieties",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Seeds from Kashmir Valley",
      description: "Traditional valley genetics",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Seeds by <span className="text-emerald-400">Region</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover heritage cannabis genetics from distinct Himalayan ecosystems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-400/30 transition-all duration-500 hover:scale-105"
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={region.image}
                  alt={region.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8 h-80 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {region.title}
                </h3>
                <p className="text-slate-300 mb-6">
                  {region.description}
                </p>
                
                <button className="self-start px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white font-medium hover:bg-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                  Explore
                </button>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalCategories;
