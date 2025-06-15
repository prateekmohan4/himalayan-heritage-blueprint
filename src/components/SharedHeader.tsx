
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
    { path: '/learn', label: 'Learn' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/support', label: 'Support' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Minimal Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-2xl font-light text-slate-900 tracking-tight">
              Himalayan Heritage
            </span>
          </Link>
          
          {/* Clean Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path 
                    ? 'text-emerald-600 scale-105' 
                    : 'text-slate-600 hover:text-slate-900 hover:scale-105'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Minimal CTA */}
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 rounded-full px-6">
            Explore
          </Button>
        </div>
      </div>
    </header>
  );
};

export default SharedHeader;
