
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SharedHeader = () => {
  const location = useLocation();

  const navigationLinks = [
    { path: '/shop', label: 'Shop' },
    { path: '/expeditions', label: 'Expeditions' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header style={{ backgroundColor: 'transparent' }} className="border-b border-border/40 sticky top-0 z-50">
      <div className="swiss-grid py-8">
        <div className="col-span-12 flex justify-between items-center">
          {/* Refined Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: '#4A5D5A' }}>
              <span className="text-white font-medium text-sm tracking-wider">H</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-light tracking-wider" style={{ color: '#2D2D2A' }}>
                Himalayan Heritage
              </span>
              <span className="text-xs font-light tracking-widest uppercase" style={{ color: '#737373' }}>
                Botanical Archive
              </span>
            </div>
          </Link>
          
          {/* Clean Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navigationLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm font-light tracking-wider transition-colors duration-200`}
                style={{ 
                  color: location.pathname === link.path ? '#4A5D5A' : '#2D2D2A'
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Minimal Support Button */}
          <Button 
            variant="outline" 
            size="sm" 
            className="font-light tracking-wider px-6"
            style={{
              borderColor: '#4A5D5A',
              color: '#4A5D5A',
              backgroundColor: 'transparent'
            }}
          >
            Support
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SharedHeader;
