
import React from 'react';
import { useParams } from 'react-router-dom';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import KeyDataSection from '@/components/KeyDataSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mountain, Calendar, Leaf } from 'lucide-react';

const StrainDetail = () => {
  const { slug } = useParams();

  // Sample strain data - ready for API integration
  const strain = {
    name: "Malana Heritage",
    subtitle: "Traditional landrace from the sacred Malana Village",
    region: "Parvati Valley, Himachal Pradesh",
    altitude: "2652m",
    harvestSeason: "October - November",
    traditionalUse: "Sacred charas production",
    description: `This exceptional landrace variety has been cultivated in the sacred village of Malana for over a millennium. Known for its unique terpene profile and resinous qualities, this strain represents one of the purest genetic lineages in the Himalayan region.

The cultivation practices remain unchanged from ancient times, with local farmers using traditional methods passed down through generations. The high altitude and specific microclimate of Malana village contribute to the distinctive characteristics that make this strain highly sought after by researchers and cultivators worldwide.`,
    images: [
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    keyData: [
      { label: "Region", value: "Parvati Valley", icon: MapPin },
      { label: "Altitude", value: "2652m", icon: Mountain },
      { label: "Harvest", value: "October - November", icon: Calendar },
      { label: "Type", value: "100% Landrace", icon: Leaf }
    ],
    characteristics: [
      "High resin production",
      "Traditional charas variety", 
      "Mountain adapted genetics",
      "Sacred cultivation heritage",
      "Unique terpene profile"
    ],
    availability: "Limited Stock",
    tags: ["100% Landrace", "Traditional Cultivation", "Sacred Heritage"]
  };

  return (
    <div style={{ backgroundColor: '#F8F7F4', minHeight: '100vh' }}>
      <SharedHeader />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Image Gallery */}
            <div>
              <ImageGallery images={strain.images} alt={strain.name} />
            </div>
            
            {/* Right Column - Product Info */}
            <div>
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {strain.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  <Badge 
                    className={`text-xs ${
                      strain.availability === 'In Stock' 
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {strain.availability}
                  </Badge>
                </div>
                
                <h1 
                  className="text-4xl font-bold mb-2"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#333333',
                    letterSpacing: '-0.025em'
                  }}
                >
                  {strain.name}
                </h1>
                
                <h2 
                  className="text-xl text-gray-600 mb-6"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  {strain.subtitle}
                </h2>
              </div>
              
              {/* Key Data Section */}
              <KeyDataSection data={strain.keyData} />
              
              {/* Characteristics */}
              <div className="mb-8">
                <h3 
                  className="text-lg font-semibold mb-4"
                  style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
                >
                  Key Characteristics
                </h3>
                <ul className="space-y-2">
                  {strain.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span style={{ fontFamily: 'Lora, serif', color: '#555555' }}>
                        {char}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h3 
                  className="text-lg font-semibold mb-4"
                  style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
                >
                  Description
                </h3>
                <div 
                  className="prose prose-lg max-w-none"
                  style={{
                    fontFamily: 'Lora, serif',
                    lineHeight: '1.7',
                    color: '#555555'
                  }}
                >
                  {strain.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* CTA Button */}
              <Button 
                size="lg"
                className="w-full text-white"
                style={{ backgroundColor: '#5a6e5a' }}
              >
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StrainDetail;
