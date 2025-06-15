
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home", "Shop", "Support", "Expeditions", "Blog", "Community", "Learn", "About", "Contact"
  ];

  const additionalLinks = [
    "Heritage Education", "Growing Guides", "Strain Profiles", "Research", "Forums", "Events"
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-white py-2 px-4 text-center text-sm">
        <span>Contact: </span>
        <a href="mailto:himalayaseeds@protonmail.com" className="text-emerald-400 hover:text-emerald-300">
          himalayaseeds@protonmail.com
        </a>
      </div>

      <header className="bg-white/95 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-emerald-600 bg-clip-text text-transparent">
                Himalayan Heritage Seeds
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-50 rounded-lg"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:bg-slate-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-slate-200 rounded-b-lg shadow-lg">
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-slate-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-slate-50 rounded-lg"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Additional Links Bar */}
        <div className="border-t border-slate-100 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 py-3">
              {additionalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-slate-600 hover:text-emerald-600 font-medium transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
