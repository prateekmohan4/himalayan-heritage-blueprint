
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, MessageCircle, BookOpen, Award, Globe, Heart, Zap, Target } from 'lucide-react';

const Community = () => {
  const communityStats = [
    { label: "Active Researchers", value: "200+", icon: Users, verified: true },
    { label: "Traditional Cultivators", value: "50+", icon: Users, verified: false },
    { label: "Academic Institutions", value: "15+", icon: BookOpen, verified: true },
    { label: "Conservation Projects", value: "8", icon: Target, verified: false },
    { label: "Genetic Samples Preserved", value: "500+", icon: Award, verified: true },
    { label: "Research Publications", value: "24", icon: BookOpen, verified: false }
  ];

  const platforms = [
    {
      title: "Discord Research Server",
      description: "Real-time discussions, field updates, and collaborative research",
      members: "483+ Active Members",
      channels: [
        "Field research discussions",
        "Genetic analysis sharing",
        "Traditional knowledge exchange",
        "Expedition updates and Q&A",
        "Academic collaboration opportunities"
      ],
      icon: MessageCircle,
      color: "bg-indigo-600",
      cta: "Join Discord"
    },
    {
      title: "Patreon Research Community",
      description: "Exclusive access to expedition footage and research findings",
      members: "156+ Research Patrons",
      channels: [
        "Exclusive expedition footage",
        "Early access to research findings",
        "Direct communication with research teams",
        "Quarterly virtual research meetings",
        "Priority access to limited genetic materials"
      ],
      icon: Heart,
      color: "bg-orange-600",
      cta: "Become a Patron"
    },
    {
      title: "Academic Network",
      description: "Professional collaboration and publication development",
      members: "15+ University Partners",
      channels: [
        "Collaborative research projects",
        "Student research opportunities",
        "Publication development",
        "Conference presentations",
        "Peer review networks"
      ],
      icon: BookOpen,
      color: "bg-emerald-600",
      cta: "Academic Partnership"
    }
  ];

  const impactMetrics = [
    {
      title: "Research Collaboration",
      description: "Active partnerships across institutions",
      metrics: [
        { label: "University Partnerships", value: "15+" },
        { label: "Joint Publications", value: "24" },
        { label: "Student Researchers", value: "45+" }
      ]
    },
    {
      title: "Community Engagement",
      description: "Growing network of researchers and advocates",
      metrics: [
        { label: "Discord Members", value: "483+" },
        { label: "Patreon Supporters", value: "156+" },
        { label: "Newsletter Subscribers", value: "1,200+" }
      ]
    },
    {
      title: "Conservation Impact",
      description: "Tangible results in genetic preservation",
      metrics: [
        { label: "Genetic Samples", value: "500+" },
        { label: "Active Projects", value: "8" },
        { label: "Partner Communities", value: "25+" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-emerald-900 to-slate-800 text-white py-24">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Himalayan Cannabis Research Community
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Connecting researchers, traditional cultivators, and conservation advocates worldwide
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Join Research Community
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Discord Server
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Community Stats */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Community Impact</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our growing network of researchers and advocates is making a real difference in cannabis conservation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {communityStats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-full ${stat.verified ? 'bg-emerald-100' : 'bg-slate-100'}`}>
                    <stat.icon className={`h-6 w-6 ${stat.verified ? 'text-emerald-600' : 'text-slate-600'}`} />
                  </div>
                  {stat.verified && (
                    <div className="ml-2 p-1 bg-emerald-600 rounded-full">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </section>

        {/* Community Platforms */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Research Platforms</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Multiple ways to engage with our research community and contribute to conservation efforts
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${platform.color}`}>
                      <platform.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{platform.title}</CardTitle>
                      <div className="text-sm text-slate-600 flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {platform.members}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600">{platform.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {platform.channels.map((channel, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-700">{channel}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full">
                    {platform.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Metrics */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Research Impact</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Measurable outcomes from our community-driven research initiatives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactMetrics.map((section, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{section.title}</h3>
                  <p className="text-slate-600">{section.description}</p>
                </div>
                
                <div className="space-y-4">
                  {section.metrics.map((metric, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <span className="text-sm font-medium text-slate-700">{metric.label}</span>
                      <Badge variant="secondary" className="font-semibold">
                        {metric.value}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Community;
