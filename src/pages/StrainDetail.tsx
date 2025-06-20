import React from 'react';
import { useParams } from 'react-router-dom';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import KeyDataSection from '@/components/KeyDataSection';
import StrainTabs from '@/components/StrainTabs';
import RelatedStrains from '@/components/RelatedStrains';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Mountain, Calendar, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    price: 85,
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
    cultivationData: {
      floweringTime: "65-75 days",
      yield: "Medium to High",
      difficulty: "Moderate",
      harvestSeason: "October - November"
    },
    terpeneProfile: {
      primary: ["Myrcene", "Pinene", "Limonene", "Caryophyllene"],
      aroma: "Earthy, pine, and citrus notes with hints of spice and traditional incense",
      effects: ["Deep relaxation", "Spiritual contemplation", "Pain relief", "Traditional ceremonial use"]
    },
    availability: "In Stock",
    tags: ["100% Landrace", "Traditional Cultivation", "Sacred Heritage"]
  };

  const relatedStrains = [
    {
      id: 2,
      name: "Kullu Premium",
      origin: "Kullu Valley",
      region: "Middle Hills",
      altitude: "1800m",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      availability: "In Stock"
    },
    {
      id: 3,
      name: "Kashmir Gold",
      origin: "Srinagar",
      region: "Kashmir Valley",
      altitude: "1600m",
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      availability: "In Stock"
    },
    {
      id: 4,
      name: "Dehradun Valley",
      origin: "Dehradun",
      region: "Foothills",
      altitude: "700m",
      image: "https://images.unsplash.com/photo-1565520651265-3d5f1b5d9e87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      availability: "Coming Soon"
    }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: strain.name }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />
      
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />
          
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
                        ? 'bg-green-100 text-green-700'
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
                    color: '#1A1A1A',
                    letterSpacing: '-0.025em'
                  }}
                >
                  {strain.name}
                </h1>
                
                <h2 
                  className="text-xl mb-4"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#737373'
                  }}
                >
                  {strain.subtitle}
                </h2>

                <div className="text-3xl font-bold mb-6" style={{ color: '#1A1A1A' }}>
                  ${strain.price}
                </div>
              </div>
              
              {/* Key Data Section */}
              <KeyDataSection data={strain.keyData} />
              
              {/* Characteristics */}
              <div className="mb-8">
                <h3 
                  className="text-lg font-semibold mb-4"
                  style={{ color: '#1A1A1A', fontFamily: 'Inter, sans-serif' }}
                >
                  Key Characteristics
                </h3>
                <ul className="space-y-2">
                  {strain.characteristics.map((char, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2" style={{ color: '#16A34A' }}>•</span>
                      <span style={{ fontFamily: 'Inter, sans-serif', color: '#737373' }}>
                        {char}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tabbed Information */}
              <div className="mb-8">
                <StrainTabs 
                  description={strain.description}
                  cultivationData={strain.cultivationData}
                  terpeneProfile={strain.terpeneProfile}
                />
              </div>
              
              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link to="/checkout">
                  <Button 
                    size="lg"
                    className="w-full text-white font-semibold"
                    style={{ backgroundColor: '#16A34A' }}
                  >
                    Buy Now - ${strain.price}
                  </Button>
                </Link>
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full font-semibold"
                  style={{ 
                    borderColor: '#EAEAEA',
                    backgroundColor: '#F2F2F2',
                    color: '#1A1A1A'
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
          
          {/* Related Strains */}
          <RelatedStrains strains={relatedStrains} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StrainDetail;
