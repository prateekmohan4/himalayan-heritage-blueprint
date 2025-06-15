
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50/50">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Clean Typography */}
        <h1 className="text-6xl md:text-8xl font-extralight text-slate-900 leading-none mb-8 tracking-tight">
          Himalayan
          <span className="block text-emerald-600 font-light">Heritage</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-500 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
          Preserving ancient cannabis genetics through modern science
        </p>
        
        {/* Minimal CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
            Explore Collection
          </Button>
          <Button variant="ghost" className="text-slate-600 hover:text-slate-900 px-8 py-6 rounded-full text-lg font-medium">
            Learn More →
          </Button>
        </div>
        
        {/* Clean Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-400 font-light">
          <span>Educational Research</span>
          <span>•</span>
          <span>Genetic Preservation</span>
          <span>•</span>
          <span>Traditional Knowledge</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
