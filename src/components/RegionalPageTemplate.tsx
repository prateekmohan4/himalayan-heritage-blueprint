
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';

interface RegionCard {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  path: string;
}

interface RegionalPageTemplateProps {
  regionName: string;
  tagline: string;
  heroImage: string;
  introHeading: string;
  introText: string;
  regionCards: RegionCard[];
}

const RegionalPageTemplate: React.FC<RegionalPageTemplateProps> = ({
  regionName,
  tagline,
  heroImage,
  introHeading,
  introText,
  regionCards
}) => {
  const navigate = useNavigate();

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{ backgroundColor: '#F8F7F4', minHeight: '100vh' }}>
      <SharedHeader />
      
      {/* Regional Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroImage})`
          }}
        />
        
        {/* Solid Banner Overlay */}
        <div 
          className="relative z-10 text-center px-12 py-16 mx-6 rounded-lg"
          style={{
            backgroundColor: 'rgba(90, 110, 90, 0.9)',
            maxWidth: '800px'
          }}
        >
          <h1 
            className="text-6xl font-bold mb-6"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#FFFFFF',
              letterSpacing: '-0.025em'
            }}
          >
            {regionName}
          </h1>
          <h2 
            className="text-xl font-light leading-relaxed"
            style={{ 
              fontFamily: 'Lora, serif',
              color: '#EFEFEF'
            }}
          >
            {tagline}
          </h2>
        </div>
      </div>

      {/* Introductory Section */}
      <div className="py-20" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 
            className="text-4xl font-bold mb-8"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#333333'
            }}
          >
            {introHeading}
          </h2>
          <p 
            className="text-lg leading-relaxed"
            style={{ 
              fontFamily: 'Lora, serif',
              color: '#333333'
            }}
          >
            {introText}
          </p>
        </div>
      </div>

      {/* Grid of Sub-Regions */}
      <div className="py-16" style={{ backgroundColor: '#F8F7F4' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionCards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.path)}
                className="group cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div 
                  className="overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 
                      className="text-xl font-bold mb-2"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        color: '#333333'
                      }}
                    >
                      {card.name}
                    </h3>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ 
                        fontFamily: 'Lora, serif',
                        color: '#666666'
                      }}
                    >
                      {card.subtitle}
                    </p>
                  </div>
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

export default RegionalPageTemplate;
