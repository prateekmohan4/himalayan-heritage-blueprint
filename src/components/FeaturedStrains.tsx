
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FeaturedStrains = () => {
  const strains = [
    {
      name: "Malana Heritage",
      origin: "Malana Valley",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      characteristics: [
        "Ancient genetics",
        "High altitude adaptation",
        "Traditional cultivation"
      ]
    },
    {
      name: "Parvati Gold",
      origin: "Parvati Valley",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      characteristics: [
        "Golden resin production",
        "Mountain resilience",
        "Heritage lineage"
      ]
    },
    {
      name: "Kashmir Cream",
      origin: "Kashmir Valley",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      characteristics: [
        "Creamy terpene profile",
        "Cold climate adapted",
        "Traditional methods"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Heritage Strains
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully preserved genetics from traditional Himalayan cultivation regions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strains.map((strain, index) => (
            <Card key={index} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={strain.image}
                  alt={strain.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {strain.origin}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {strain.name}
                </h3>
                <ul className="space-y-2 mb-6">
                  {strain.characteristics.map((char, charIndex) => (
                    <li key={charIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-green-700 rounded-full mr-3"></div>
                      {char}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition-colors duration-200"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedStrains;
