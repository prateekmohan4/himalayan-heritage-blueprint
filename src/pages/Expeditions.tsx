
import React from 'react';
import { Calendar, Users, MapPin, BookOpen, Heart, ArrowRight, Play, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';

const Expeditions = () => {
  const activeExpeditions = [
    {
      id: 1,
      title: "Parvati Valley Genetic Documentation Project",
      image: "https://images.unsplash.com/photo-1464822759844-d150ad6d1dff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "21 Days",
      type: "Research Documentation",
      status: "In Progress - October 2024",
      focus: "Comprehensive genetic mapping of traditional charas cultivation zones",
      objectives: [
        "Document 15-20 unique landrace populations",
        "Interview traditional hash makers and cultivators", 
        "Collect genetic samples for preservation",
        "Create detailed cultivation methodology records"
      ],
      partnership: "Local Farmer Cooperatives",
      funding: "Patreon Community Supported"
    },
    {
      id: 2,
      title: "Garhwal Traditional Cultivation Survey",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      duration: "18 Days", 
      type: "Ethnobotanical Research",
      status: "Planned - Spring 2025",
      focus: "Traditional high-altitude cultivation techniques preservation",
      objectives: [
        "Document seasonal cultivation calendars",
        "Map traditional seed selection methods",
        "Record indigenous knowledge systems", 
        "Establish community seed banks"
      ],
      partnership: "Uttarakhand Agricultural Universities",
      funding: "Grant-Supported Research"
    }
  ];

  const researchPrograms = [
    {
      id: 1,
      title: "Patreon Seed Hunting Missions",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      accessLevel: "Patron Exclusive",
      frequency: "Quarterly",
      status: "Active - 156 Supporters",
      benefits: [
        "Early access to expedition-collected seeds",
        "Detailed field reports and photos",
        "Direct video updates from field",
        "Genetic analysis reports"
      ],
      supportTier: "From $15/month",
      cta: "Become a Research Patron"
    },
    {
      id: 2,
      title: "Traditional Knowledge Documentation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      accessLevel: "Research Tier",
      frequency: "Ongoing",
      status: "Phase 2 Active",
      benefits: [
        "Access to cultural documentation videos",
        "Traditional technique preservation records",
        "Historical cultivation methodology studies",
        "Community impact reports"
      ],
      supportTier: "From $25/month",
      cta: "Support Documentation"
    },
    {
      id: 3,
      title: "Conservation Genetics Project",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      accessLevel: "Research Partner",
      frequency: "Annual",
      status: "Year 3 - Expanding",
      benefits: [
        "Detailed genetic analysis reports",
        "Conservation strategy development",
        "Academic publication collaboration",
        "Research methodology access"
      ],
      supportTier: "From $50/month",
      cta: "Research Partnership"
    }
  ];

  const professionalServices = [
    {
      id: 1,
      title: "Academic Research Partnerships",
      description: "Custom ethnobotanical research projects, genetic diversity studies, traditional knowledge documentation, and publication collaboration support.",
      pricing: "Starting from $10,000",
      features: [
        "Custom ethnobotanical research projects",
        "Genetic diversity studies", 
        "Traditional knowledge documentation",
        "Publication collaboration support"
      ]
    },
    {
      id: 2,
      title: "Institutional Conservation Projects",
      description: "Comprehensive regional genetic surveys, community-based conservation programs, and long-term monitoring documentation.",
      pricing: "Custom pricing based on scope and duration",
      features: [
        "Comprehensive regional genetic surveys",
        "Community-based conservation programs",
        "Traditional cultivation methodology studies",
        "Long-term monitoring and documentation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1464822759844-d150ad6d1dff?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-800/70"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Himalayan Landrace Conservation
            <span className="block text-emerald-400">Expeditions</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light">
            Research-driven seed hunting missions preserving traditional cannabis genetics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4">
              <Heart className="mr-2 h-5 w-5" />
              Support Our Research
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4">
              <Play className="mr-2 h-5 w-5" />
              Join Expedition Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Active Research Expeditions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              CURRENT & UPCOMING RESEARCH MISSIONS
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional documentation and conservation efforts in traditional cannabis regions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {activeExpeditions.map((expedition) => (
              <Card key={expedition.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img 
                    src={expedition.image} 
                    alt={expedition.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-emerald-600 text-white">{expedition.type}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {expedition.duration}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {expedition.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {expedition.title}
                  </h3>
                  
                  <p className="text-slate-700 mb-4 font-medium">
                    {expedition.focus}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-2">Research Objectives:</h4>
                    <ul className="space-y-1">
                      {expedition.objectives.map((objective, index) => (
                        <li key={index} className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-2 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-600">Partnership: </span>
                      <span className="font-medium text-slate-900">{expedition.partnership}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-600">Funding: </span>
                      <span className="font-medium text-slate-900">{expedition.funding}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                      Follow Progress
                    </Button>
                    <Button size="sm" variant="outline">
                      Support Mission
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community-Supported Research Programs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              COMMUNITY-FUNDED RESEARCH INITIATIVES
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Patreon-supported projects with exclusive access and documentation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {researchPrograms.map((program) => (
              <Card key={program.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="relative h-48">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-blue-600 text-white">{program.accessLevel}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                    <span className="font-medium">{program.frequency}</span>
                    <Badge variant="outline" className="text-xs">
                      {program.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {program.title}
                  </h3>
                  
                  <div className="mb-6 flex-grow">
                    <h4 className="font-semibold text-slate-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {program.benefits.map((benefit, index) => (
                        <li key={index} className="text-slate-600 text-sm flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-slate-600 text-sm">Support Tiers:</span>
                      <span className="font-bold text-emerald-600">{program.supportTier}</span>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      {program.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Research Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              ACADEMIC & INSTITUTIONAL COLLABORATIONS
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional research partnerships and custom documentation projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {professionalServices.map((service) => (
              <Card key={service.id} className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </CardTitle>
                  <p className="text-slate-700 leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                
                <CardContent className="p-0">
                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-slate-600 flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-slate-600">Pricing:</span>
                      <span className="font-bold text-emerald-600">{service.pricing}</span>
                    </div>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800">
                      <FileText className="mr-2 h-4 w-4" />
                      Request Proposal
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Expeditions;
