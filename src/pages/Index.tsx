
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RegionalCategories from "@/components/RegionalCategories";
import FeaturedStrains from "@/components/FeaturedStrains";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <RegionalCategories />
      <FeaturedStrains />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
