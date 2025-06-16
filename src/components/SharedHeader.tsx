
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
    <header className="bg-background border-b border-border/40 sticky top-0 z-50">
      <div className="swiss-grid py-8">
        <div className="col-span-12 flex justify-between items-center">
          {/* Refined Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-medium text-sm tracking-wider">H</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-light text-foreground tracking-wider">
                Himalayan Heritage
              </span>
              <span className="text-xs text-muted-foreground font-light tracking-widest uppercase">
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
                className={`text-sm font-light tracking-wider transition-colors duration-200 ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Minimal Support Button */}
          <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-light tracking-wider px-6">
            Support
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SharedHeader;
