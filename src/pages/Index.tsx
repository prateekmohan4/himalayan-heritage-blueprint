
import SharedHeader from "@/components/SharedHeader";
import HeroSection from "@/components/HeroSection";
import RegionalCategories from "@/components/RegionalCategories";
import FeaturedStrains from "@/components/FeaturedStrains";
import CompanyInfo from "@/components/CompanyInfo";
import Newsletter from "@/components/Newsletter";
import EnhancedFooter from "@/components/EnhancedFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />
      <HeroSection />
      <RegionalCategories />
      <FeaturedStrains />
      <CompanyInfo />
      <Newsletter />
      <EnhancedFooter />
    </div>
  );
};

export default Index;
