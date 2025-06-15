
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
    }
  ];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white">
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
        
        <div className="relative z-10 text-center text-white">
          <h1 className="font-serif text-6xl md:text-8xl mb-6 font-light tracking-wide" style={{ fontFamily: 'Lora, serif' }}>
            Himachal Pradesh
          </h1>
          <h2 className="font-sans text-lg md:text-xl max-w-2xl mx-auto px-6 font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px' }}>
            A journey through the land of gods, its people, and its botanical heritage.
          </h2>
        </div>
      </div>

      {/* Explore the Regions Section */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl md:text-5xl mb-16 font-light tracking-wide text-slate-900" style={{ fontFamily: 'Lora, serif' }}>
            Explore the Regions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {regions.map((region) => (
              <div
                key={region.id}
                onClick={() => handleCardClick(region.path)}
                className="bg-white cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                style={{ borderRadius: '0px' }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={region.image}
                    alt={region.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ borderRadius: '0px' }}
                  />
                </div>
                
                <div className="p-6" style={{ padding: '24px' }}>
                  <h3 
                    className="text-slate-900 mb-3 font-light tracking-wide"
                    style={{ fontFamily: 'Lora, serif', fontSize: '24px' }}
                  >
                    {region.name}
                  </h3>
                  <p 
                    className="text-slate-600 font-light leading-relaxed"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#6B7280' }}
                  >
                    {region.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Himachal;
