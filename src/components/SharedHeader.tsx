import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User } from 'lucide-react';
import ShoppingCartComponent from '@/components/ShoppingCart';
import AuthModals from '@/components/AuthModals';

const SharedHeader = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const handleSwitchToRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <>
      <header 
        className={`border-b sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#F8F7F4] shadow-sm' 
            : 'bg-transparent'
        }`}
        style={{ 
          borderColor: isScrolled ? 'rgba(226, 232, 240, 0.8)' : 'transparent',
          backdropFilter: isScrolled ? 'none' : 'blur(8px)'
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4">
              <div 
                className="w-8 h-8 flex items-center justify-center"
                style={{ backgroundColor: '#4A5D5A' }}
              >
                <span className="text-white font-medium text-sm tracking-wider">H</span>
              </div>
              <div className="flex flex-col">
                <span 
                  className="text-lg font-light tracking-wider"
                  style={{ 
                    color: '#2D2D2A',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Himalayan Heritage
                </span>
                <span 
                  className="text-xs font-light tracking-widest uppercase"
                  style={{ 
                    color: '#737373',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Botanical Archive
                </span>
              </div>
            </Link>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-12">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="text-sm font-light tracking-wider transition-colors duration-200"
                  style={{ 
                    color: location.pathname === link.path ? '#4A5D5A' : '#2D2D2A',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Learn Dropdown */}
              <div className="relative group">
                <span 
                  className="text-sm font-light tracking-wider cursor-pointer transition-colors duration-200"
                  style={{ 
                    color: '#2D2D2A',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Learn
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <Link to="/blog" className="block px-4 py-3 text-sm hover:bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>Blog</Link>
                  <Link to="/faq" className="block px-4 py-3 text-sm hover:bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>FAQ</Link>
                  <Link to="/research" className="block px-4 py-3 text-sm hover:bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>Research</Link>
                  <Link to="/guides" className="block px-4 py-3 text-sm hover:bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>Guides</Link>
                </div>
              </div>
              
              {/* Community Dropdown */}
              <div className="relative group">
                <span 
                  className="text-sm font-light tracking-wider cursor-pointer transition-colors duration-200"
                  style={{ 
                    color: '#2D2D2A',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Community
                </span>
                <div className="absolute top-full left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <Link to="/about" className="block px-4 py-3 text-sm hover:bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>Our Mission</Link>
                  <Link to="/community" className="block px-4 py-3 text-sm hover:bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>Research Community</Link>
                  <a href="#" className="block px-4 py-3 text-sm hover:bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>Discord</a>
                </div>
              </div>
            </nav>
            
            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon */}
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </Button>

              {/* User Account */}
              {isLoggedIn ? (
                <div className="relative group">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                  <div className="absolute top-full right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                    <Link to="/account/dashboard" className="block px-4 py-3 text-sm hover:bg-gray-50">Dashboard</Link>
                    <Link to="/account/orders" className="block px-4 py-3 text-sm hover:bg-gray-50">My Orders</Link>
                    <Link to="/account/addresses" className="block px-4 py-3 text-sm hover:bg-gray-50">Addresses</Link>
                    <button className="block w-full text-left px-4 py-3 text-sm hover:bg-gray-50">Logout</button>
                  </div>
                </div>
              ) : (
                <Button 
                  variant="ghost"
                  onClick={() => setIsLoginOpen(true)}
                  className="text-sm"
                >
                  Login
                </Button>
              )}

              {/* Support Button */}
              <Link to="/support">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="font-light tracking-wider px-6"
                  style={{
                    borderColor: '#4A5D5A',
                    color: '#4A5D5A',
                    backgroundColor: 'transparent',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Shopping Cart */}
      <ShoppingCartComponent 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />

      {/* Auth Modals */}
      <AuthModals
        isLoginOpen={isLoginOpen}
        isRegisterOpen={isRegisterOpen}
        onCloseLogin={() => setIsLoginOpen(false)}
        onCloseRegister={() => setIsRegisterOpen(false)}
        onSwitchToRegister={handleSwitchToRegister}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
};

export default SharedHeader;
