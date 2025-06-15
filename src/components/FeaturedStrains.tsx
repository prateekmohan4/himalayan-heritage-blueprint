
import { Button } from "@/components/ui/button";

const FeaturedStrains = () => {
  const strains = [
    {
      name: "Malana Cream",
      region: "Himachal Pradesh",
      subRegion: "Parvati Valley",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sacred genetics from the ancient Malana village, preserved through generations of traditional cultivation",
      characteristics: [
        "Ancient genetic lineage",
        "High altitude adaptation (2,650m)",
        "Ceremonial cultivation methods",
        "Creamy terpene profile"
      ],
      altitude: "2,650m",
      type: "Landrace Indica"
    },
    {
      name: "Garhwali Gold",
      region: "Uttarakhand",
      subRegion: "Garhwali Hills",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Golden resin producers from the sacred Garhwal region, known for exceptional terpene diversity",
      characteristics: [
        "Golden resin production",
        "Sacred geography genetics",
        "Traditional hill cultivation",
        "Complex terpene matrix"
      ],
      altitude: "1,800m",
      type: "Landrace Hybrid"
    },
    {
      name: "Kashmir Shiva",
      region: "Kashmir & Ladakh",
      subRegion: "Kashmir Valley",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Paradise valley genetics with exceptional cold climate adaptation and spiritual significance",
      characteristics: [
        "Paradise valley origin",
        "Cold climate resilience",
        "Cultural ceremonial use",
        "Balanced cannabinoid profile"
      ],
      altitude: "1,600m",
      type: "Landrace Sativa"
    },
    {
      name: "Nepal Temple",
      region: "Nepal Himalayas",
      subRegion: "Central Nepal",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Sacred temple genetics from the roof of the world, traditionally used in spiritual practices",
      characteristics: [
        "Temple cultivation heritage",
        "Extreme altitude adaptation",
        "Spiritual significance",
        "Unique terpene expression"
      ],
      altitude: "3,200m",
      type: "Landrace Sativa"
    },
    {
      name: "Manipur Hills",
      region: "Northeast India",
      subRegion: "Manipur Hills",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Unique genetics from India's eastern frontiers with distinct Southeast Asian influences",
      characteristics: [
        "Southeast Asian influence",
        "Monsoon adaptation",
        "Tribal cultivation methods",
        "Distinctive flavor profile"
      ],
      altitude: "1,400m",
      type: "Landrace Hybrid"
    },
    {
      name: "Hindu Kush Classic",
      region: "Hindu Kush",
      subRegion: "Chitral Valley",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Ancient genetics from the legendary Hindu Kush mountains, prized for their resilience and potency",
      characteristics: [
        "Ancient mountain genetics",
        "Legendary potency",
        "Extreme weather adaptation",
        "Historic trade route origins"
      ],
      altitude: "2,400m",
      type: "Landrace Indica"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Featured <span className="text-amber-600">Heritage Strains</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Carefully preserved genetics from traditional Himalayan and Hindu Kush cultivation regions, maintained for educational and research purposes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strains.map((strain, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Strain Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={strain.image}
                  alt={strain.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm border border-amber-200 rounded-full text-amber-700 text-sm font-medium">
                    {strain.region}
                  </span>
                  <span className="px-2 py-1 bg-slate-800/80 text-white text-xs rounded-md">
                    {strain.subRegion}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="px-2 py-1 bg-slate-800/80 text-white text-xs rounded-md">
                    {strain.altitude}
                  </span>
                  <span className="px-2 py-1 bg-slate-800/80 text-white text-xs rounded-md">
                    {strain.type}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{strain.name}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{strain.description}</p>
                
                {/* Characteristics */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Key Characteristics</h4>
                  {strain.characteristics.map((char, charIndex) => (
                    <div key={charIndex} className="flex items-center text-slate-600">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{char}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl text-white font-semibold hover:from-amber-400 hover:to-amber-500 transition-all duration-300 hover:shadow-lg">
                  Learn More
                </button>
              </div>
              
              {/* Subtle Border Animation */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{
                     background: 'linear-gradient(45deg, transparent, rgba(245, 158, 11, 0.1), transparent)',
                   }}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStrains;
