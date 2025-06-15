
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SharedHeader = () => {
  const location = useLocation();

  const navigationLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/expeditions', label: 'Expeditions' },
    { path: '/blog', label: 'Blog' },
    { path: '/community', label: 'Community' },
    { path: '/learn', label: 'Learn' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <span className="text-xl font-bold text-slate-900">
              Himalayan Heritage Seeds
            </span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-emerald-600' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </a>
          </nav>
          
          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
              Explore Collection
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SharedHeader;
