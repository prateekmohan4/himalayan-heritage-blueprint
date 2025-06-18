
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import ShoppingCartComponent from '@/components/ShoppingCart';

const SharedHeader = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemCount] = useState(2); // This would come from cart state

  const navigationLinks = [
    { path: '/shop', label: 'Shop' },
    { path: '/journal', label: 'Journal' },
    { path: '/expeditions', label: 'Expeditions' },
    { path: '/himachal', label: 'Regions' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`border-b sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md scrolled' 
            : 'bg-transparent'
        }`}
        style={{ 
          borderColor: isScrolled ? '#EAEAEA' : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center space-x-3">
              <div 
                className="w-8 h-8 flex items-center justify-center rounded"
                style={{ backgroundColor: '#16A34A' }}
              >
                <span className="text-white font-semibold text-sm">H</span>
              </div>
              <div className="flex flex-col">
                <span 
                  className="text-lg font-semibold tracking-tight"
                  style={{ 
                    color: '#1A1A1A',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Himalayan Heritage
                </span>
                <span 
                  className="text-xs font-normal tracking-wider uppercase"
                  style={{ 
                    color: '#737373',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Botanical Archive
                </span>
              </div>
            </Link>
            
            {/* Navigation - Center */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="text-sm font-medium tracking-wide transition-colors duration-200"
                  style={{ 
                    color: location.pathname === link.path ? '#16A34A' : '#1A1A1A',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Learn Dropdown */}
              <div className="relative group">
                <span 
                  className="text-sm font-medium tracking-wide cursor-pointer transition-colors duration-200"
                  style={{ 
                    color: '#1A1A1A',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Learn
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <Link to="/blog" className="block px-4 py-3 text-sm hover:bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>Blog</Link>
                  <Link to="/faq" className="block px-4 py-3 text-sm hover:bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>FAQ</Link>
                </div>
              </div>
              
              {/* Community Dropdown */}
              <div className="relative group">
                <span 
                  className="text-sm font-medium tracking-wide cursor-pointer transition-colors duration-200"
                  style={{ 
                    color: '#1A1A1A',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Community
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <Link to="/about" className="block px-4 py-3 text-sm hover:bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>Our Mission</Link>
                  <Link to="/community" className="block px-4 py-3 text-sm hover:bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>Research Community</Link>
                </div>
              </div>
            </nav>
            
            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Support Button */}
              <Link to="/support">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="font-medium tracking-wide px-6"
                  style={{
                    borderColor: '#EAEAEA',
                    color: '#1A1A1A',
                    backgroundColor: '#F2F2F2',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Support
                </Button>
              </Link>

              {/* Enhanced Cart Icon with Badge */}
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" style={{ color: '#1A1A1A' }} />
                {cartItemCount > 0 && (
                  <span 
                    className="absolute -top-1 -right-1 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium"
                    style={{ backgroundColor: '#16A34A', fontSize: '0.7rem' }}
                  >
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Shopping Cart */}
      <ShoppingCartComponent 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default SharedHeader;
