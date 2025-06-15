
import SharedHeader from "@/components/SharedHeader";
import HeroSection from "@/components/HeroSection";
import RegionalCategories from "@/components/RegionalCategories";
import FeaturedStrains from "@/components/FeaturedStrains";
import CompanyInfo from "@/components/CompanyInfo";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />
      <HeroSection />
      <RegionalCategories />
      <FeaturedStrains />
      <CompanyInfo />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
