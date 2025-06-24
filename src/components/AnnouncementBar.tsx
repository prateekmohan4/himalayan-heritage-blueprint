
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-slate-900 text-white py-2 px-4 text-center text-sm relative">
      <span className="font-medium">
        🌿 Free shipping on orders over $150 • New Malana Cream harvest now in stock
      </span>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-white/20"
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default AnnouncementBar;
