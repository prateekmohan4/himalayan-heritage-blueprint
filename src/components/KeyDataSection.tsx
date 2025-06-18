
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface KeyDataItem {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface KeyDataSectionProps {
  data: KeyDataItem[];
}

const KeyDataSection: React.FC<KeyDataSectionProps> = ({ data }) => {
  return (
    <div className="mb-8">
      <h3 
        className="text-lg font-semibold mb-4"
        style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
      >
        Key Data
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {data.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className="flex items-center p-3 bg-white rounded-lg border"
              style={{ borderColor: '#e2e8f0' }}
            >
              <Icon className="h-4 w-4 mr-3" style={{ color: '#5a6e5a' }} />
              <div>
                <div 
                  className="text-xs text-gray-500 uppercase tracking-wide"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.label}
                </div>
                <div 
                  className="font-medium"
                  style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
                >
                  {item.value}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KeyDataSection;
