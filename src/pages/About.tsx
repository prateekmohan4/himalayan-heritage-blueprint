
import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Leaf, BookOpen, Heart, Globe } from "lucide-react";

const About = () => {
  const values = [
    { title: "Community", icon: Users },
    { title: "Conservation", icon: Leaf },
    { title: "Culture", icon: Heart },
    { title: "Education", icon: BookOpen },
    { title: "Sustainability", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />
      <main>
        {/* Minimal Hero */}
        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-extralight text-slate-900 mb-8 tracking-tight">
              Our Mission
            </h1>
            <p className="text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
              Preserving traditional Himalayan cannabis varieties and the cultural knowledge 
              associated with them through ethical collection and community partnerships.
            </p>
          </div>
        </section>

        {/* Clean Values */}
        <section className="py-20 bg-slate-50/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:shadow-md transition-shadow">
                    <value.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-sm font-medium text-slate-700">{value.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Minimal Team */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-light text-slate-900 mb-16">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { role: "Founder", specialty: "Genetic Research" },
                { role: "Cultural Liaison", specialty: "Community Relations" },
                { role: "Education Director", specialty: "Research Programs" },
              ].map((member, index) => (
                <Card key={index} className="border-0 shadow-sm bg-white/50">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full mx-auto mb-6"></div>
                    <h3 className="text-lg font-medium text-slate-900 mb-2">{member.role}</h3>
                    <p className="text-sm text-slate-500 font-light">{member.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
