
import React, { useState } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ShopControlsProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedRegions: string[];
  onRegionChange: (regions: string[]) => void;
  selectedGenetics: string[];
  onGeneticsChange: (genetics: string[]) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

const ShopControls: React.FC<ShopControlsProps> = ({
  searchTerm,
  onSearchChange,
  selectedRegions,
  onRegionChange,
  selectedGenetics,
  onGeneticsChange,
  sortBy,
  onSortChange,
}) => {
  const regions = ['High Himalayas', 'Middle Hills', 'Foothills', 'Kashmir Valley'];
  const genetics = ['Sativa', 'Indica', 'Hybrid', '100% Landrace'];

  const handleRegionToggle = (region: string) => {
    if (selectedRegions.includes(region)) {
      onRegionChange(selectedRegions.filter(r => r !== region));
    } else {
      onRegionChange([...selectedRegions, region]);
    }
  };

  const handleGeneticsToggle = (genetic: string) => {
    if (selectedGenetics.includes(genetic)) {
      onGeneticsChange(selectedGenetics.filter(g => g !== genetic));
    } else {
      onGeneticsChange([...selectedGenetics, genetic]);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search strains..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>

        {/* Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full lg:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filter by...
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Regions</DropdownMenuLabel>
            {regions.map((region) => (
              <DropdownMenuCheckboxItem
                key={region}
                checked={selectedRegions.includes(region)}
                onCheckedChange={() => handleRegionToggle(region)}
              >
                {region}
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Genetics</DropdownMenuLabel>
            {genetics.map((genetic) => (
              <DropdownMenuCheckboxItem
                key={genetic}
                checked={selectedGenetics.includes(genetic)}
                onCheckedChange={() => handleGeneticsToggle(genetic)}
              >
                {genetic}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Sort Dropdown */}
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-full lg:w-48">
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc">Name: A-Z</SelectItem>
            <SelectItem value="name-desc">Name: Z-A</SelectItem>
            <SelectItem value="altitude-high">Altitude: High to Low</SelectItem>
            <SelectItem value="altitude-low">Altitude: Low to High</SelectItem>
            <SelectItem value="region">Region</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ShopControls;
