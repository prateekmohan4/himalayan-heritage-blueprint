
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-amber-600/20 rounded-3xl blur-3xl"></div>
          
          {/* Glass Container */}
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Connected with <span className="text-emerald-400">Himalayan Cannabis Heritage</span>
            </h2>
            <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
              Join our community of cannabis heritage enthusiasts and get updates on new strains, expeditions, and traditional knowledge.
            </p>
            
            {isSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 px-6 py-4 rounded-xl inline-block backdrop-blur-sm">
                <p className="font-semibold">Thanks for joining our community!</p>
                <p className="text-sm">We'll keep you updated on our heritage preservation work.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/25"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-xl text-white font-semibold hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
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
