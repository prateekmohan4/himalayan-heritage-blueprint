
import { Button } from "@/components/ui/button";

const RegionalCategories = () => {
  const regions = [
    {
      title: "Himachal Pradesh",
      subtitle: "Parvati Valley • Kullu • Chamba • Kangra • Kinnaur • Spiti",
      description: "15 heritage strains from the heart of the Indian Himalayas",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      altitude: "1000-4200m",
      strainCount: 15,
      color: "emerald"
    },
    {
      title: "Uttarakhand Region",
      subtitle: "Garhwali Hills • Kumaoni Hills • Char Dham Circuit",
      description: "12 traditional strains from sacred mountain regions",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      altitude: "500-3000m",
      strainCount: 12,
      color: "blue"
    },
    {
      title: "Kashmir & Ladakh",
      subtitle: "Kashmir Valley • Ladakh Plateau • Zanskar Valley",
      description: "10 rare genetics from the paradise valleys",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      altitude: "1500-3500m",
      strainCount: 10,
      color: "purple"
    },
    {
      title: "Nepal Himalayas",
      subtitle: "Eastern • Central • Western Nepal Regions",
      description: "8 authentic strains from the roof of the world",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      altitude: "800-4000m",
      strainCount: 8,
      color: "amber"
    },
    {
      title: "Northeast India",
      subtitle: "Manipur Hills • Nagaland • Mizoram Traditional Areas",
      description: "6 unique genetics from India's eastern frontiers",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      altitude: "500-2500m",
      strainCount: 6,
      color: "teal"
    },
    {
      title: "Hindu Kush Region",
      subtitle: "Pakistan-Afghanistan Border • Chitral • Hunza",
      description: "5 ancient strains from the legendary Hindu Kush",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      altitude: "1200-3800m",
      strainCount: 5,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: "from-emerald-50 to-emerald-100 border-emerald-200 hover:border-emerald-300 text-emerald-700",
      blue: "from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300 text-blue-700",
      amber: "from-amber-50 to-amber-100 border-amber-200 hover:border-amber-300 text-amber-700",
      purple: "from-purple-50 to-purple-100 border-purple-200 hover:border-purple-300 text-purple-700",
      teal: "from-teal-50 to-teal-100 border-teal-200 hover:border-teal-300 text-teal-700",
      orange: "from-orange-50 to-orange-100 border-orange-200 hover:border-orange-300 text-orange-700"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.emerald;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Seeds by <span className="text-emerald-600">Geographic Region</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Discover authentic landrace cannabis genetics from distinct Himalayan and Hindu Kush ecosystems, each preserved from traditional cultivation regions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {regions.map((region, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${getColorClasses(region.color)} border-2 transition-all duration-500 hover:scale-105 hover:shadow-xl`}
              style={{animationDelay: `${index * 100}ms`}}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={region.image}
                  alt={region.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Strain Count Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full text-slate-700 text-sm font-bold">
                    {region.strainCount} Strains
                  </span>
                </div>
                
                {/* Altitude Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-slate-800/80 text-white text-xs rounded-md font-medium">
                    {region.altitude}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-1">
                  {region.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 mb-2 leading-relaxed">
                  {region.subtitle}
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  {region.description}
                </p>
                
                <button className="w-full py-2 px-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-lg text-slate-700 font-medium hover:bg-white hover:shadow-md transition-all duration-300">
                  Explore Collection
                </button>
              </div>
              
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalCategories;
