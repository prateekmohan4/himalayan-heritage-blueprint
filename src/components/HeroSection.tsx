
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          India's First Himalayan Landrace Cannabis Seedbank
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
          Pure landrace cannabis seeds from the Indian Himalayas
        </p>
        <Button 
          size="lg" 
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Explore Strains
        </Button>
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            Educational Purposes
          </span>
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            Genetic Preservation
          </span>
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            Traditional Knowledge
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
