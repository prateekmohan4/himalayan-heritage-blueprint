
import SharedHeader from "@/components/SharedHeader";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Leaf, BookOpen, Heart, Globe } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Founder & Genetic Researcher",
      bio: "With a background in botany and genetics, our founder has spent years conducting research in the Himalayas.",
      image: "/placeholder.svg",
    },
    {
      name: "Cultural Liaison & Expedition Leader",
      bio: "Our liaison has deep connections with local communities and extensive knowledge of traditional practices.",
      image: "/placeholder.svg",
    },
    {
      name: "Education Director",
      bio: "Our director has a strong academic background and experience in developing educational workshops.",
      image: "/placeholder.svg",
    },
  ];

  const values = [
    { title: "Community Partnership", icon: Users },
    { title: "Genetic Conservation", icon: Leaf },
    { title: "Cultural Respect", icon: Heart },
    { title: "Educational Advancement", icon: BookOpen },
    { title: "Sustainable Practices", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-slate-100 py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
              Preserving Himalayan Cannabis Heritage
            </h1>
            <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Dedicated to conserving traditional landrace genetics and supporting local communities.
            </p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                We are committed to preserving traditional Himalayan cannabis varieties and the cultural knowledge associated with them. Through ethical collection, community partnerships, and educational initiatives, we aim to protect these irreplaceable genetic resources for future generations.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col items-center">
                  <div className="bg-emerald-100 rounded-full p-4">
                    <value.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-800">{value.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Profiles Section */}
        <section className="bg-slate-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900">Meet Our Team</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto bg-slate-200" />
                    <CardTitle className="mt-4">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{member.bio}</p>
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
