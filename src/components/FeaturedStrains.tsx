
import { Button } from "@/components/ui/button";

const FeaturedStrains = () => {
  const strains = [
    {
      name: "Malana Cream",
      origin: "Ancient Malana Village",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&crop=center&q=90",
      path: "/strain/malana-cream"
    },
    {
      name: "Garhwali Gold",
      origin: "Sacred Garhwal Region",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop&crop=center&q=90",
      path: "/strain/garhwali-gold"
    },
    {
      name: "Kashmir Shiva",
      origin: "Paradise Valley Genetics",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop&crop=center&q=90",
      path: "/strain/kashmir-shiva"
    },
    {
      name: "Nepal Temple",
      origin: "Sacred Temple Heritage",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop&crop=center&q=90",
      path: "/strain/nepal-temple"
    },
    {
      name: "Manipur Hills",
      origin: "Eastern Frontier Genetics",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center&q=90",
      path: "/strain/manipur-hills"
    },
    {
      name: "Hindu Kush Classic",
      origin: "Legendary Mountain Genetics",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop&crop=center&q=90",
      path: "/strain/hindu-kush"
    }
  ];

  return (
    <section className="premium-spacing bg-background">
      <div className="swiss-grid">
        {/* Section Header */}
        <div className="col-span-12 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-wide">
            Featured Heritage Strains
          </h2>
          <p className="editorial-text mx-auto">
            Carefully preserved genetics from traditional Himalayan cultivation regions, 
            maintained for educational and research purposes.
          </p>
        </div>

        {/* Archival Grid of Strain Cards */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {strains.map((strain, index) => (
            <div
              key={index}
              className="group cursor-pointer subtle-lift gentle-fade-in"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Clean Archival Card */}
              <div className="bg-background overflow-hidden">
                {/* High-Quality Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={strain.image}
                    alt={strain.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                
                {/* Clean Content - No Background */}
                <div className="pt-6">
                  <h3 className="text-xl font-medium text-foreground mb-2 tracking-wide">
                    {strain.name}
                  </h3>
                  <p className="text-muted-foreground font-light tracking-wide">
                    {strain.origin}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStrains;
