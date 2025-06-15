
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-slate-50/90"></div>
      </div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1000ms'}}></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-800 via-emerald-700 to-amber-600 bg-clip-text text-transparent leading-tight mb-6">
            India's First Himalayan
            <span className="block mt-2">Landrace Cannabis Seedbank</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 font-light max-w-3xl mx-auto">
            Pure landrace cannabis seeds from the Indian Himalayas for educational and research purposes
          </p>
          
          {/* CTA Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-8">
            <span className="relative z-10">Explore Heritage Strains</span>
          </button>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4">
            {['Educational Purposes', 'Genetic Preservation', 'Traditional Knowledge', 'Research Support'].map((item) => (
              <span key={item} className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-slate-700 text-sm font-medium shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
