
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';

const StrainCardSkeleton: React.FC = () => {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Skeleton className="h-56 w-full" />
        <div className="absolute top-3 right-3">
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <div className="absolute bottom-3 left-3">
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>
      
      <CardContent className="p-6">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        
        <div className="space-y-2 mb-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/5" />
        </div>
        
        <Skeleton className="h-16 w-full mb-4" />
        
        <div className="flex gap-2 mb-4">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
        </div>
        
        <div className="flex gap-2">
          <Skeleton className="h-9 flex-1" />
          <Skeleton className="h-9 w-12" />
        </div>
      </CardContent>
    </Card>
  );
};

export default StrainCardSkeleton;
