
import { Button } from "@/components/ui/button";

const RegionalCategories = () => {
  const regions = [
    {
      title: "Himachal Pradesh",
      strainCount: 15,
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop&crop=center&q=90",
      path: "/himachal"
    },
    {
      title: "Uttarakhand Region",
      strainCount: 12,
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop&crop=center&q=90",
      path: "/uttarakhand"
    },
    {
      title: "Kashmir & Ladakh",
      strainCount: 10,
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop&crop=center&q=90",
      path: "/kashmir"
    },
    {
      title: "Nepal Himalayas",
      strainCount: 8,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&crop=center&q=90",
      path: "/nepal"
    },
    {
      title: "Northeast India",
      strainCount: 6,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center&q=90",
      path: "/northeast"
    },
    {
      title: "Hindu Kush Region",
      strainCount: 5,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center&q=90",
      path: "/hindu-kush"
    }
  ];

  return (
    <section className="premium-spacing">
      <div className="swiss-grid">
        {/* Section Header */}
        <div className="col-span-12 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-wide">
            Seeds by Geographic Region
          </h2>
          <p className="editorial-text mx-auto">
            Discover authentic landrace cannabis genetics from distinct Himalayan ecosystems, 
            each preserved from traditional cultivation regions.
          </p>
        </div>

        {/* Clean Grid of Cards */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {regions.map((region, index) => (
            <div
              key={index}
              className="group cursor-pointer subtle-lift gentle-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Clean Card Structure */}
              <div className="bg-card overflow-hidden soft-shadow">
                {/* High-Quality Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={region.image}
                    alt={region.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Strain Count on Hover */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-foreground text-sm font-medium tracking-wide">
                      {region.strainCount} Strains
                    </span>
                  </div>
                </div>
                
                {/* Minimal Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-light text-foreground tracking-wide">
                    {region.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalCategories;
