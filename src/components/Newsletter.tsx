
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
    <section className="py-20 bg-green-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Stay Connected with Himalayan Cannabis Heritage
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of cannabis heritage enthusiasts and receive updates on new strains, preservation efforts, and educational content.
        </p>

        {isSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg inline-block">
            <p className="font-semibold">Thanks for submitting!</p>
            <p className="text-sm">We'll keep you updated on our heritage preservation work.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 text-base rounded-lg border-gray-300 focus:border-green-700 focus:ring-green-700"
                required
              />
              <Button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-base font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                Join Community
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
