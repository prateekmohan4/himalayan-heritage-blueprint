
import React from 'react';
import { Calendar, Sun, Droplets, TrendingUp } from 'lucide-react';

interface CultivationData {
  floweringTime: string;
  yield: string;
  difficulty: string;
  harvestSeason: string;
}

interface CultivationInfoProps {
  data: CultivationData;
  className?: string;
}

const CultivationInfo: React.FC<CultivationInfoProps> = ({ data, className = '' }) => {
  const items = [
    { icon: Sun, label: 'Flowering Time', value: data.floweringTime },
    { icon: TrendingUp, label: 'Expected Yield', value: data.yield },
    { icon: Droplets, label: 'Difficulty', value: data.difficulty },
    { icon: Calendar, label: 'Harvest Season', value: data.harvestSeason },
  ];

  return (
    <div className={`space-y-4 ${className}`}>
      <h3 className="font-semibold text-gray-900">Cultivation Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <item.icon className="h-5 w-5 text-green-600" />
            <div>
              <p className="text-sm font-medium text-gray-900">{item.label}</p>
              <p className="text-sm text-gray-600">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CultivationInfo;
