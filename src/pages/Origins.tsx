
import React, { useState } from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MapPin, Mountain, Leaf } from 'lucide-react';

interface Region {
  id: string;
  name: string;
  description: string;
  heritage: string;
  image: string;
  strainCount: number;
  position: { top: string; left: string };
}

const Origins = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const regions: Region[] = [
    {
      id: 'himachal',
      name: 'Himachal Pradesh',
      description: 'Home to the legendary Malana Cream and countless landrace varieties, this region has been cultivating cannabis for over a millennium.',
      heritage: 'Sacred cultivation traditions passed through generations in villages like Malana, Tosh, and Kasol.',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      strainCount: 12,
      position: { top: '35%', left: '45%' }
    },
    {
      id: 'kashmir',
      name: 'Kashmir Valley',
      description: 'The northern paradise known for its unique high-altitude varieties with exceptional resin production.',
      heritage: 'Ancient cultivation methods in the pristine valleys of Srinagar and surrounding mountains.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      strainCount: 8,
      position: { top: '25%', left: '38%' }
    },
    {
      id: 'uttarakhand',
      name: 'Uttarakhand',
      description: 'The spiritual heartland with diverse microclimates producing robust mountain genetics.',
      heritage: 'Traditional cultivation in the foothills and high valleys near sacred pilgrimage sites.',
      image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      strainCount: 15,
      position: { top: '45%', left: '52%' }
    },
    {
      id: 'nepal',
      name: 'Nepal Highlands',
      description: 'Ancient cultivation zones in the shadow of the worlds highest peaks, producing unique highland varieties.',
      heritage: 'Centuries-old farming traditions in remote mountain villages and terraced fields.',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      strainCount: 10,
      position: { top: '55%', left: '58%' }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />
      
      <main>
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-6">Our Origins</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Journey through the sacred valleys and ancient mountains where cannabis has been cultivated 
              for thousands of years. Discover the authentic heritage behind every seed in our collection.
            </p>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Himalayan Cannabis Heritage Map
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Click on the regions below to explore the unique cannabis cultivation traditions 
                and discover the landrace varieties that have thrived in these sacred mountains for millennia.
              </p>
            </div>

            {/* Map Container */}
            <div className="relative bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 min-h-[600px] overflow-hidden">
              {/* Mountain Background Illustration */}
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 1000 600" className="w-full h-full">
                  <path d="M0,400 Q200,300 400,350 T800,320 L1000,340 L1000,600 L0,600 Z" fill="#16A34A"/>
                  <path d="M0,450 Q300,350 600,380 T1000,400 L1000,600 L0,600 Z" fill="#10B981"/>
                </svg>
              </div>

              {/* Interactive Region Points */}
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{ top: region.position.top, left: region.position.left }}
                >
                  <div className="relative">
                    <div className="w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-200"></div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      <p className="text-sm font-semibold text-gray-900">{region.name}</p>
                      <p className="text-xs text-gray-600">{region.strainCount} varieties</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Region Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {regions.map((region) => (
                <div
                  key={region.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedRegion(region)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={region.image}
                      alt={region.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{region.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">{region.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        <Leaf className="h-4 w-4 mr-1" />
                        {region.strainCount} varieties
                      </span>
                      <span>Explore →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Region Detail Modal */}
      <Dialog open={!!selectedRegion} onOpenChange={() => setSelectedRegion(null)}>
        <DialogContent className="max-w-2xl">
          {selectedRegion && (
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900 mb-4">
                {selectedRegion.name}
              </DialogTitle>
              
              <div className="mb-6">
                <img
                  src={selectedRegion.image}
                  alt={selectedRegion.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600">{selectedRegion.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cultural Heritage</h3>
                  <p className="text-gray-600">{selectedRegion.heritage}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="flex items-center text-sm text-gray-500">
                    <Leaf className="h-4 w-4 mr-2" />
                    {selectedRegion.strainCount} unique varieties available
                  </div>
                  <Button
                    style={{ backgroundColor: '#16A34A' }}
                    className="text-white"
                  >
                    View Strains
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Origins;
