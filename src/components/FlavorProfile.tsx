
import React from 'react';

interface FlavorProfileProps {
  flavors: string[];
  className?: string;
}

const FlavorProfile: React.FC<FlavorProfileProps> = ({ flavors, className = '' }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="font-semibold text-gray-900">Flavor Profile</h3>
      <div className="flex flex-wrap gap-2">
        {flavors.map((flavor, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200"
          >
            {flavor}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FlavorProfile;
