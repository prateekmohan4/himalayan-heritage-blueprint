
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MapPin, Mountain } from 'lucide-react';

interface RelatedStrain {
  id: number;
  name: string;
  origin: string;
  region: string;
  altitude: string;
  image: string;
  availability: string;
}

interface RelatedStrainsProps {
  strains: RelatedStrain[];
}

const RelatedStrains: React.FC<RelatedStrainsProps> = ({ strains }) => {
  const getRegionBadgeColor = (region: string) => {
    const colors = {
      "High Himalayas": "bg-blue-500",
      "Middle Hills": "bg-emerald-500",
      "Foothills": "bg-amber-500",
      "Kashmir Valley": "bg-purple-500"
    };
    return colors[region] || "bg-slate-500";
  };

  return (
    <div className="mt-16">
      <h3 
        className="text-2xl font-bold mb-8"
        style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
      >
        You Might Also Like
      </h3>
      
      <Carousel className="w-full">
        <CarouselContent className="-ml-2 md:-ml-4">
          {strains.map((strain) => (
            <CarouselItem key={strain.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={strain.image}
                    alt={strain.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className={`${getRegionBadgeColor(strain.region)} text-white border-0 text-xs`}>
                      {strain.region}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">
                    {strain.name}
                  </h4>
                  <p className="text-sm text-slate-600 mb-1 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {strain.origin}
                  </p>
                  <p className="text-sm text-slate-600 mb-4 flex items-center">
                    <Mountain className="h-3 w-3 mr-1" />
                    {strain.altitude}
                  </p>
                  
                  <Button size="sm" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default RelatedStrains;
