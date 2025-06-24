
import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, MapPin, Mountain } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  image: string;
  region: string;
  altitude: string;
  availability: string;
  characteristics: string[];
}

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-96">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-6">
            <DialogTitle className="sr-only">{product.name}</DialogTitle>
            
            <div className="mb-4">
              <Badge 
                className={`text-xs mb-2 ${
                  product.availability === 'In Stock' 
                    ? 'bg-green-100 text-green-700'
                    : 'bg-amber-100 text-amber-700'
                }`}
              >
                {product.availability}
              </Badge>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {product.name}
              </h2>
              
              <p className="text-gray-600 mb-4">
                {product.subtitle}
              </p>

              <div className="text-2xl font-bold text-gray-900 mb-4">
                ${product.price}
              </div>
            </div>

            {/* Key Data */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {product.region}
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Mountain className="h-4 w-4 mr-2" />
                {product.altitude}
              </div>
            </div>

            {/* Characteristics */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Key Characteristics</h3>
              <ul className="space-y-1">
                {product.characteristics.slice(0, 3).map((char, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <span className="text-green-500 mr-2">•</span>
                    {char}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button 
                className="w-full text-white font-semibold"
                style={{ backgroundColor: '#16A34A' }}
              >
                Add to Cart
              </Button>
              <Button 
                variant="outline"
                className="w-full font-semibold"
                onClick={onClose}
              >
                View Full Details
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewModal;
