
import { Link } from 'react-router-dom';

const Footer = () => {
  const sections = [
    { title: "Explore", links: [
      { text: "Collection", href: "/shop" },
      { text: "Regions", href: "/himachal" },
      { text: "Research", href: "/research" }
    ]},
    { title: "Learn", links: [
      { text: "Education", href: "/learn" },
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
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-light mb-4 text-white">
              Himalayan Heritage
            </h3>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              Preserving traditional cannabis genetics for educational and research purposes.
            </p>
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

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm font-light">
            Contact: <span className="text-emerald-400">himalayaseeds@protonmail.com</span>
          </p>
          <p className="text-slate-500 text-xs mt-2">
            © 2024 • Educational purposes only
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
