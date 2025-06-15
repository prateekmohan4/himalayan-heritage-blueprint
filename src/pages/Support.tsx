
import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardTitle, CardHeader } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, LifeBuoy, Truck, ShieldCheck, CreditCard, User, BookOpen } from "lucide-react";

const Support = () => {
  const quickLinks = [
    { title: "Order Status & Tracking", icon: Truck },
    { title: "Shipping & Returns", icon: LifeBuoy },
    { title: "Quality Guarantee", icon: ShieldCheck },
    { title: "Payment Methods", icon: CreditCard },
    { title: "Account Management", icon: User },
    { title: "Educational Resources", icon: BookOpen },
  ];

  const faqs = {
    "Seeds & Genetics": [
      { q: "What are landrace cannabis seeds?", a: "Landrace seeds are from cannabis varieties that have adapted over time to a specific geographic region, without being cross-bred with other varieties." },
      { q: "How do you authenticate strain genetics?", a: "We use a combination of field verification with local cultivators, morphological analysis, and genetic testing to authenticate our strains." },
    ],
    "Ordering & Shipping": [
      { q: "How to place an order?", a: "You can place an order directly through our website's shop section. Simply add products to your cart and proceed to checkout." },
      { q: "Do you ship internationally?", a: "Yes, we ship worldwide. Please be aware of your local laws and regulations regarding cannabis seeds before ordering." },
    ],
    "Payment & Pricing": [
      { q: "What payment methods are accepted?", a: "We accept various payment methods including credit/debit cards and cryptocurrencies for privacy." },
      { q: "Are there discounts for bulk orders?", a: "Yes, we offer discounts for bulk and research-focused orders. Please contact us for more information." },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-slate-100 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900">How Can We Help You?</h1>
            <div className="mt-8 max-w-xl mx-auto relative">
              <Input placeholder="Search support articles..." className="h-12 pl-12" />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {quickLinks.map((link) => (
                <Card key={link.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <link.icon className="h-8 w-8 text-emerald-600" />
                    <CardTitle className="text-lg">{link.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {Object.entries(faqs).map(([category, questions]) => (
                  <div key={category}>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4 mt-8 border-b pb-2">{category}</h3>
                    {questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${category}-${index}`}>
                        <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-slate-600">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
