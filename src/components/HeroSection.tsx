
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1000ms'}}></div>
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Title */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-emerald-200 to-amber-200 bg-clip-text text-transparent leading-tight">
            India's First Himalayan
            <span className="block mt-2 text-emerald-400">Landrace Cannabis Seedbank</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mt-6 mb-8 font-light">
            Pure landrace cannabis seeds from the Indian Himalayas
          </p>
          
          {/* Enhanced CTA Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl text-white font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Explore Strains</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {['Educational Purposes', 'Genetic Preservation', 'Traditional Knowledge'].map((item) => (
              <span key={item} className="px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-300 text-sm">
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
