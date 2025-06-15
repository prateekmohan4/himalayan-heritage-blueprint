
import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, Package, Shield, CreditCard, User, BookOpen } from "lucide-react";

const Support = () => {
  const quickLinks = [
    { title: "Orders", icon: Package },
    { title: "Quality", icon: Shield },
    { title: "Payments", icon: CreditCard },
    { title: "Account", icon: User },
    { title: "Education", icon: BookOpen },
  ];

  const faqs = [
    { q: "What are landrace cannabis seeds?", a: "Landrace seeds are from cannabis varieties that have adapted naturally to specific geographic regions without cross-breeding." },
    { q: "How do you authenticate genetics?", a: "We use field verification, morphological analysis, and genetic testing to ensure authenticity." },
    { q: "Do you ship internationally?", a: "Yes, we ship worldwide. Please check your local regulations before ordering." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />
      <main>
        {/* Clean Hero */}
        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-extralight text-slate-900 mb-12 tracking-tight">
              Support
            </h1>
            <div className="max-w-md mx-auto relative">
              <Input 
                placeholder="Search for help..." 
                className="h-14 pl-14 rounded-full border-slate-200 bg-slate-50/50 text-lg"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {quickLinks.map((link) => (
                <Card key={link.title} className="border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white/80">
                  <CardContent className="p-6 text-center">
                    <link.icon className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                    <p className="text-sm font-medium text-slate-700">{link.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Clean FAQ */}
        <section className="py-20 bg-slate-50/30">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-light text-center text-slate-900 mb-12">Common Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-xl px-6 bg-white">
                  <AccordionTrigger className="text-left font-medium text-slate-900 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 font-light leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
