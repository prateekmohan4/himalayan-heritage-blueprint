
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center&q=90)',
        }}
      />
      
      {/* Sophisticated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-8 gentle-fade-in">
        {/* Primary Headline */}
        <h1 className="display-text text-white mb-8 font-light">
          Guardians of Himalayan
          <span className="block font-normal">Landrace Genetics</span>
        </h1>
        
        {/* Sophisticated Subheading */}
        <p className="editorial-text text-white/90 mb-12 mx-auto max-w-2xl">
          A botanical archive preserving ancient cannabis genetics from the sacred peaks 
          of the Himalayas through scientific research and cultural reverence.
        </p>
        
        {/* Single, Clear CTA */}
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-medium tracking-wide transition-all duration-300 soft-shadow-hover">
          Explore the Collection
        </Button>
        
        {/* Minimal Trust Indicators */}
        <div className="mt-16 flex justify-center items-center gap-8 text-sm text-white/70 font-sans">
          <span>Scientific Research</span>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
          <span>Cultural Preservation</span>
          <div className="w-1 h-1 bg-white/40 rounded-full"></div>
          <span>Educational Archive</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
