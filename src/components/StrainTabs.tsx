
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface StrainTabsProps {
  description: string;
  cultivationData: {
    floweringTime: string;
    yield: string;
    difficulty: string;
    harvestSeason: string;
  };
  terpeneProfile: {
    primary: string[];
    aroma: string;
    effects: string[];
  };
}

const StrainTabs: React.FC<StrainTabsProps> = ({ description, cultivationData, terpeneProfile }) => {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="cultivation">Cultivation Data</TabsTrigger>
        <TabsTrigger value="terpenes">Terpene Profile</TabsTrigger>
      </TabsList>
      
      <TabsContent value="description" className="mt-6">
        <div 
          className="prose prose-lg max-w-none"
          style={{
            fontFamily: 'Lora, serif',
            lineHeight: '1.7',
            color: '#555555'
          }}
        >
          {description.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </TabsContent>
      
      <TabsContent value="cultivation" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Flowering Time</h4>
            <p className="text-slate-600">{cultivationData.floweringTime}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Expected Yield</h4>
            <p className="text-slate-600">{cultivationData.yield}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Difficulty Level</h4>
            <p className="text-slate-600">{cultivationData.difficulty}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">Harvest Season</h4>
            <p className="text-slate-600">{cultivationData.harvestSeason}</p>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="terpenes" className="mt-6">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Primary Terpenes</h4>
            <div className="flex flex-wrap gap-2">
              {terpeneProfile.primary.map((terpene, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                >
                  {terpene}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Aroma Profile</h4>
            <p className="text-slate-600">{terpeneProfile.aroma}</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Traditional Effects</h4>
            <ul className="space-y-2">
              {terpeneProfile.effects.map((effect, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span className="text-slate-600">{effect}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default StrainTabs;
