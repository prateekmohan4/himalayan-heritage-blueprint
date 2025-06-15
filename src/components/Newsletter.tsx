
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  const quickLinks = [
    { title: "Heritage Education", href: "#" },
    { title: "Growing Guides", href: "#" },
    { title: "Strain Profiles", href: "#" },
    { title: "Research Papers", href: "#" },
    { title: "Community Forums", href: "#" },
    { title: "Expedition Updates", href: "#" },
    { title: "Conservation Efforts", href: "#" },
    { title: "Traditional Methods", href: "#" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Links Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Explore More Resources
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-md transition-all duration-300 text-center"
              >
                <span className="text-slate-700 group-hover:text-emerald-600 font-medium text-sm">
                  {link.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-amber-100 rounded-3xl opacity-50"></div>
          
          {/* Content */}
          <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200 rounded-3xl p-12 text-center shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Stay Connected with <span className="text-emerald-600">Himalayan Cannabis Heritage</span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg max-w-2xl mx-auto">
              Join our community of researchers, educators, and heritage enthusiasts. Get updates on new strains, expeditions, and preservation efforts.
            </p>
            
            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-6 py-4 rounded-xl inline-block max-w-md">
                <p className="font-semibold">Thanks for joining our community!</p>
                <p className="text-sm">We'll keep you updated on our heritage preservation work.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-white border border-slate-300 rounded-xl text-slate-700 placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl text-white font-semibold hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 hover:shadow-lg"
                >
                  Join Community
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
