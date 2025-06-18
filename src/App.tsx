
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import StrainDetail from "./pages/StrainDetail";
import Expeditions from "./pages/Expeditions";
import Journal from "./pages/Journal";
import ArticleDetail from "./pages/ArticleDetail";
import Blog from "./pages/Blog";
import Community from "./pages/Community";
import Learn from "./pages/Learn";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import Himachal from "./pages/Himachal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkout";
import AccountDashboard from "./pages/AccountDashboard";
import AccountOrders from "./pages/AccountOrders";
import AccountAddresses from "./pages/AccountAddresses";
import FAQ from "./pages/FAQ";
import TermsOfService from "./pages/TermsOfService";
import ShippingPolicy from "./pages/ShippingPolicy";
import LegalDisclaimer from "./pages/LegalDisclaimer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/strains/:slug" element={<StrainDetail />} />
          <Route path="/expeditions" element={<Expeditions />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<ArticleDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support" element={<Support />} />
          <Route path="/himachal" element={<Himachal />} />
          <Route path="/regions/:slug" element={<Himachal />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          
          {/* E-commerce routes */}
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Account routes */}
          <Route path="/account/dashboard" element={<AccountDashboard />} />
          <Route path="/account/orders" element={<AccountOrders />} />
          <Route path="/account/addresses" element={<AccountAddresses />} />
          
          {/* Legal pages */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
