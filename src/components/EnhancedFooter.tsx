
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CreditCard } from 'lucide-react';

const EnhancedFooter = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    // Add newsletter signup logic here
  };

  const sections = [
    { title: "Explore", links: [
      { text: "Collection", href: "/shop" },
      { text: "Regions", href: "/himachal" },
      { text: "Our Origins", href: "/origins" }
    ]},
    { title: "Learn", links: [
      { text: "Education", href: "/learn" },
      { text: "Glossary", href: "/guides/glossary" },
      { text: "FAQ", href: "/faq" },
      { text: "Blog", href: "/blog" }
    ]},
    { title: "Help & Support", links: [
      { text: "Contact", href: "/contact" },
      { text: "Support", href: "/support" },
      { text: "Shipping Policy", href: "/shipping-policy" },
      { text: "FAQ", href: "/faq" }
    ]},
    { title: "Our Company", links: [
      { text: "About Us", href: "/about" },
      { text: "Community", href: "/community" },
      { text: "Terms of Service", href: "/terms-of-service" },
      { text: "Privacy Policy", href: "/privacy-policy" },
      { text: "Legal Disclaimer", href: "/legal-disclaimer" }
    ]}
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Get updates on new harvests, cultivation guides, and exclusive access to rare landrace varieties.
            </p>
          </div>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-green-500"
                required
              />
              <Button 
                type="submit"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-light mb-4 text-white">
              Himalayan Heritage
            </h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
              Preserving traditional cannabis genetics for educational and research purposes.
            </p>
            
            {/* Payment Methods */}
            <div>
              <p className="text-sm font-medium text-slate-300 mb-3">We Accept</p>
              <div className="flex items-center space-x-3">
                <div className="bg-white rounded p-2">
                  <CreditCard className="h-6 w-6 text-gray-700" />
                </div>
                <div className="bg-blue-600 rounded p-2 text-white text-xs font-bold">
                  VISA
                </div>
                <div className="bg-red-600 rounded p-2 text-white text-xs font-bold">
                  MC
                </div>
                <div className="bg-blue-500 rounded p-2 text-white text-xs font-bold">
                  AMEX
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-slate-300">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.href} 
                      className="text-slate-400 hover:text-white transition-colors text-sm font-light"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-slate-400 text-sm font-light">
                Contact: <span className="text-emerald-400">himalayaseeds@protonmail.com</span>
              </p>
            </div>
            <div className="text-center">
              <p className="text-slate-500 text-xs">
                © 2024 Himalayan Heritage • Educational purposes only
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
