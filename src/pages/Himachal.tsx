
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';

const Himachal = () => {
  const navigate = useNavigate();

  const regions = [
    {
      id: 'kinnaur',
      name: 'Kinnaur',
      subtitle: 'The Land of Apples and Ancient Monasteries',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/kinnaur'
    },
    {
      id: 'spiti-valley',
      name: 'Spiti Valley',
      subtitle: 'The Middle Land of High-Altitude Deserts',
      image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/spiti-valley'
    },
    {
      id: 'lahaul',
      name: 'Lahaul',
      subtitle: 'Hidden Valley of Ancient Trade Routes',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/lahaul'
    },
    {
      id: 'kullu',
      name: 'Kullu Valley',
      subtitle: 'Valley of the Gods and Sacred Herbs',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/kullu'
    },
    {
      id: 'parvati-valley',
      name: 'Parvati Valley',
      subtitle: 'Sacred River Valley of Traditional Knowledge',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/parvati-valley'
    },
    {
      id: 'chamba',
      name: 'Chamba',
      subtitle: 'Ancient Kingdom of Mountain Traditions',
      image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop&crop=center',
      path: '/himachal/chamba'
    }
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-background">
      <SharedHeader />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop&crop=center)'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="font-lora text-5xl md:text-7xl mb-8 font-light tracking-wide">
            Himachal Pradesh
          </h1>
          <h2 className="font-inter text-lg md:text-xl font-light leading-relaxed opacity-90">
            A journey through the land of gods, its people, and its botanical heritage.
          </h2>
        </div>
      </div>

      {/* Explore the Regions Section */}
      <div className="premium-spacing bg-background">
        <div className="swiss-grid">
          <div className="col-span-12 text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-wide">
              Explore the Regions
            </h2>
            <p className="editorial-text mx-auto">
              Each region holds centuries of traditional knowledge and unique genetic heritage, 
              carefully preserved by local communities through generations.
            </p>
          </div>
          
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {regions.map((region) => (
              <div
                key={region.id}
                onClick={() => handleCardClick(region.path)}
                className="group cursor-pointer subtle-lift gentle-fade-in"
              >
                {/* Clean Archival Card */}
                <div className="bg-background overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={region.image}
                      alt={region.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Clean Typography - No Background */}
                  <div className="pt-6">
                    <h3 className="text-2xl font-light text-foreground mb-3 tracking-wide">
                      {region.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {region.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Heritage & Research Section */}
      <div className="premium-spacing bg-background">
        <div className="swiss-grid">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-8 tracking-wide">
              Preserving Ancient Knowledge
            </h2>
            <p className="editorial-text mx-auto mb-12">
              Our work in Himachal Pradesh focuses on documenting and preserving traditional 
              cannabis varieties that have been cultivated in these mountains for millennia. 
              Through collaboration with local communities, we ensure this botanical heritage 
              is protected for future generations of researchers and educators.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-light text-foreground mb-2">12+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Documented Regions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-foreground mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Local Partnerships</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-foreground mb-2">8</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Years of Research</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Himachal;
