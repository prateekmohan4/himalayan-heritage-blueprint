import React, { useState } from 'react';
import { Search, Filter, Grid, List, MapPin, Mountain, Heart, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SharedHeader from '@/components/SharedHeader';

const Shop = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    regions: [],
    altitude: [],
    traditionalUse: [],
    availability: []
  });
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('region');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sample strain data for blueprint
  const strains = [
    {
      id: 1,
      name: "Malana Heritage",
      origin: "Malana Village, Parvati Valley",
      region: "High Himalayas",
      altitude: "2652m",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traditionalUse: "Used for centuries in sacred rituals and traditional charas production",
      characteristics: ["Traditional charas variety", "High resin production", "Mountain adapted genetics"],
      availability: "In Stock",
      ethicallySourced: true,
      communityPartnership: true,
      badges: ["100% Landrace", "Traditional Cultivation"]
    },
    {
      id: 2,
      name: "Kullu Premium",
      origin: "Kullu Valley, Himachal Pradesh",
      region: "Middle Hills",
      altitude: "1800m",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traditionalUse: "Cultivated for ceremonial purposes and traditional medicine",
      characteristics: ["Ceremonial grade quality", "Medicinal properties", "Hardy mountain strain"],
      availability: "Limited Stock",
      ethicallySourced: true,
      communityPartnership: false,
      badges: ["100% Landrace", "Ceremonial Grade"]
    },
    {
      id: 3,
      name: "Kashmir Gold",
      origin: "Srinagar, Kashmir Valley",
      region: "Kashmir Valley",
      altitude: "1600m",
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traditionalUse: "Heritage strain used in traditional Kashmiri practices",
      characteristics: ["Valley adapted genetics", "Golden resin production", "Cool climate specialist"],
      availability: "In Stock",
      ethicallySourced: true,
      communityPartnership: true,
      badges: ["100% Landrace", "Heritage Preserved"]
    },
    {
      id: 4,
      name: "Dehradun Valley",
      origin: "Dehradun, Uttarakhand",
      region: "Foothills",
      altitude: "700m",
      image: "https://images.unsplash.com/photo-1565520651265-3d5f1b5d9e87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traditionalUse: "Traditional ganja cultivation for spiritual and medicinal use",
      characteristics: ["Lower altitude adaptation", "Fast flowering variety", "Traditional cultivation methods"],
      availability: "Coming Soon",
      ethicallySourced: true,
      communityPartnership: true,
      badges: ["100% Landrace", "Fast Flowering"]
    },
    {
      id: 5,
      name: "Spiti Special",
      origin: "Pin Valley, Spiti",
      region: "High Himalayas",
      altitude: "3200m",
      image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traditionalUse: "Sacred strain from the high-altitude desert regions",
      characteristics: ["Extreme altitude adaptation", "Desert climate hardy", "Sacred monastery cultivation"],
      availability: "Limited Stock",
      ethicallySourced: true,
      communityPartnership: true,
      badges: ["100% Landrace", "Sacred Cultivation"]
    },
    {
      id: 6,
      name: "Chamba Green",
      origin: "Chamba District, Himachal Pradesh",
      region: "Middle Hills",
      altitude: "1800m",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      traditionalUse: "Traditional strain used in local festivals and ceremonies",
      characteristics: ["Festival grade quality", "Green phenotype", "Traditional hash making"],
      availability: "In Stock",
      ethicallySourced: true,
      communityPartnership: false,
      badges: ["100% Landrace", "Festival Grade"]
    }
  ];

  const getRegionBadgeColor = (region) => {
    const colors = {
      "High Himalayas": "bg-blue-500",
      "Middle Hills": "bg-emerald-500",
      "Foothills": "bg-amber-500",
      "Kashmir Valley": "bg-purple-500"
    };
    return colors[region] || "bg-slate-500";
  };

  const getAvailabilityColor = (availability) => {
    const colors = {
      "In Stock": "text-emerald-600 bg-emerald-50",
      "Limited Stock": "text-amber-600 bg-amber-50",
      "Coming Soon": "text-slate-600 bg-slate-50"
    };
    return colors[availability] || "text-slate-600 bg-slate-50";
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedHeader />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <span className="text-slate-500">Home</span>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-900 font-medium">Shop</span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Himalayan Heritage Strains
            </h1>
            <p className="text-lg text-slate-600">
              Traditional landrace genetics from the Indian Himalayas
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search strains..."
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            />
          </div>
          
          {/* Results Count */}
          <p className="text-center mt-4 text-slate-600">
            Showing <span className="font-semibold">{strains.length}</span> of <span className="font-semibold">53</span> strains
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Filters</h3>
              
              {/* Region Filters */}
              <div className="mb-6">
                <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                  <span className="mr-2">🌍</span> Region
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">Seeds from the High Himalayas (12)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">Seeds from the Middle Hills (18)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">Seeds from the Foothills (15)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">Seeds from Kashmir Valley (8)</span>
                  </label>
                </div>
              </div>

              {/* Altitude Range */}
              <div className="mb-6">
                <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                  <span className="mr-2">🏔️</span> Altitude Range
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">3000m+ (12)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">2000-3000m (20)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">1000-2000m (15)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">Below 1000m (6)</span>
                  </label>
                </div>
              </div>

              {/* Traditional Use */}
              <div className="mb-6">
                <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                  <span className="mr-2">🌿</span> Traditional Use
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">Charas Production (25)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">Ceremonial Use (10)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">Traditional Medicine (8)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">Heritage Preservation (15)</span>
                  </label>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                  <span className="mr-2">📦</span> Availability
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">In Stock (35)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">Limited Stock (15)</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                    <span className="ml-2 text-sm text-slate-700">Coming Soon (8)</span>
                  </label>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Clear All Filters
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button & Sort Options */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <Button
                variant="outline"
                className="lg:hidden"
                onClick={() => setShowMobileFilters(true)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              
              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg bg-white text-sm"
                >
                  <option value="region">Sort by Region</option>
                  <option value="name">Name A-Z</option>
                  <option value="altitude">Altitude</option>
                  <option value="availability">Availability</option>
                </select>
                
                <div className="flex items-center border border-slate-300 rounded-lg bg-white">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-emerald-50 text-emerald-600' : 'text-slate-400'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-emerald-50 text-emerald-600' : 'text-slate-400'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
              {strains.map((strain) => (
                <div
                  key={strain.id}
                  className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={strain.image}
                      alt={strain.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    
                    {/* Region Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className={`${getRegionBadgeColor(strain.region)} text-white border-0 text-xs`}>
                        📍 {strain.region}
                      </Badge>
                    </div>
                    
                    {/* Availability Badge */}
                    <div className="absolute bottom-3 left-3">
                      <Badge className={`${getAvailabilityColor(strain.availability)} border-0 text-xs`}>
                        {strain.availability}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {strain.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-2 flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {strain.origin}
                    </p>
                    <p className="text-sm text-slate-600 mb-4 flex items-center">
                      <Mountain className="h-3 w-3 mr-1" />
                      Altitude: {strain.altitude}
                    </p>
                    
                    {/* Characteristics */}
                    <ul className="space-y-1 mb-4">
                      {strain.characteristics.map((char, index) => (
                        <li key={index} className="text-sm text-slate-600 flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          {char}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Traditional Use */}
                    <blockquote className="text-sm text-slate-600 italic mb-4 pl-3 border-l-2 border-emerald-200">
                      "{strain.traditionalUse}"
                    </blockquote>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {strain.badges.map((badge, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      ))}
                      {strain.ethicallySourced && (
                        <Badge variant="outline" className="text-xs text-emerald-600 border-emerald-200">
                          Ethically Sourced
                        </Badge>
                      )}
                      {strain.communityPartnership && (
                        <Badge variant="outline" className="text-xs text-blue-600 border-blue-200">
                          Community Partnership
                        </Badge>
                      )}
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Learn More
                      </Button>
                      <Button size="sm" variant="outline" className="px-3">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Filters</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileFilters(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4 overflow-y-auto h-full pb-20">
              {/* Mobile filters content - same as desktop sidebar */}
              <div className="space-y-6">
                {/* Region Filters */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                    <span className="mr-2">🌍</span> Region
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">Seeds from the High Himalayas (12)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">Seeds from the Middle Hills (18)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">Seeds from the Foothills (15)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">Seeds from Kashmir Valley (8)</span>
                    </label>
                  </div>
                </div>

                {/* Altitude Range */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                    <span className="mr-2">🏔️</span> Altitude Range
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">3000m+ (12)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">2000-3000m (20)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">1000-2000m (15)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">Below 1000m (6)</span>
                    </label>
                  </div>
                </div>

                {/* Traditional Use */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                    <span className="mr-2">🌿</span> Traditional Use
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">Charas Production (25)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">Ceremonial Use (10)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">Traditional Medicine (8)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">Heritage Preservation (15)</span>
                    </label>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h4 className="font-medium text-slate-900 mb-3 flex items-center">
                    <span className="mr-2">📦</span> Availability
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">In Stock (35)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">Limited Stock (15)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                      <span className="ml-2 text-sm text-slate-700">Coming Soon (8)</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
              <Button variant="outline" className="w-full">
                Clear All Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
