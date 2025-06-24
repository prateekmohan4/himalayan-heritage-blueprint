
import React from 'react';

interface ProductBadgeProps {
  type: 'new' | 'bestseller' | 'limited' | 'featured';
  className?: string;
}

const ProductBadge: React.FC<ProductBadgeProps> = ({ type, className = '' }) => {
  const getBadgeStyles = () => {
    switch (type) {
      case 'new':
        return 'bg-blue-500 text-white';
      case 'bestseller':
        return 'bg-orange-500 text-white';
      case 'limited':
        return 'bg-red-500 text-white';
      case 'featured':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getBadgeText = () => {
    switch (type) {
      case 'new':
        return 'New';
      case 'bestseller':
        return 'Bestseller';
      case 'limited':
        return 'Limited';
      case 'featured':
        return 'Featured';
      default:
        return '';
    }
  };

  return (
    <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full z-10 ${getBadgeStyles()} ${className}`}>
      {getBadgeText()}
    </div>
  );
};

export default ProductBadge;
