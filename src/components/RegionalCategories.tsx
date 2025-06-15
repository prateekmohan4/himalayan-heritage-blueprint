
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Seeds by Region
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover heritage cannabis genetics from distinct Himalayan ecosystems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <Card key={index} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={region.image}
                  alt={region.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {region.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {region.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-colors duration-200"
                >
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalCategories;
