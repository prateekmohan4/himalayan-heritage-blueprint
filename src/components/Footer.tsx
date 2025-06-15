
const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: ["High Himalayas", "Middle Hills", "Foothills", "Kashmir Valley"]
    },
    {
      title: "Learn",
      links: ["Heritage Education", "Growing Guides", "Strain Profiles", "Research"]
    },
    {
      title: "Community",
      links: ["Blog", "Forums", "Events", "Preservation"]
    },
    {
      title: "Support",
      links: ["Contact", "FAQ", "Shipping", "Returns"]
    }
  ];

  return (
    <footer className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              Himalayan Heritage Seeds
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Preserving traditional cannabis genetics from the Indian Himalayas for educational and research purposes.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-4 text-emerald-400">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors duration-200 text-sm hover:text-emerald-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm">
              <p>Contact: <span className="text-emerald-400">himalayaseeds@protonmail.com</span></p>
            </div>
            <div className="text-slate-400 text-sm mt-4 md:mt-0">
              <p>&copy; 2024 Himalayan Heritage Seeds. Educational purposes only.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
