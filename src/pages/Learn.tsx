
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Video, FileText, Award, Clock, Users, Download, ExternalLink } from 'lucide-react';

const Learn = () => {
  const learningPaths = [
    {
      title: "Cannabis Genetics Fundamentals",
      description: "Understanding genetic diversity and inheritance patterns in traditional landraces",
      modules: 8,
      duration: "6-8 weeks",
      level: "Beginner",
      image: "/placeholder.svg",
      topics: ["Basic genetics principles", "Landrace characteristics", "Phenotype analysis", "Selection methods"]
    },
    {
      title: "Traditional Cultivation Methods",
      description: "Historical and cultural practices of Himalayan cannabis cultivation",
      modules: 12,
      duration: "8-10 weeks",
      level: "Intermediate",
      image: "/placeholder.svg",
      topics: ["Cultural history", "Traditional techniques", "Seasonal cycles", "Community practices"]
    },
    {
      title: "Research Methodology",
      description: "Scientific approaches to cannabis research and documentation",
      modules: 10,
      duration: "10-12 weeks",
      level: "Advanced",
      image: "/placeholder.svg",
      topics: ["Field research methods", "Data collection", "Analysis techniques", "Publication standards"]
    }
  ];

  const resources = [
    {
      category: "Research Papers",
      items: [
        {
          title: "Genetic Diversity in Himalayan Cannabis Populations",
          type: "peer-reviewed",
          format: "PDF",
          pages: 24,
          downloads: 1200,
          description: "Comprehensive analysis of genetic markers across traditional cultivation regions"
        },
        {
          title: "Traditional Knowledge Systems in Cannabis Cultivation",
          type: "ethnobotanical study",
          format: "PDF",
          pages: 18,
          downloads: 890,
          description: "Documentation of indigenous cultivation practices and cultural significance"
        },
        {
          title: "Climate Adaptation Strategies in High-Altitude Cultivation",
          type: "environmental study",
          format: "PDF",
          pages: 32,
          downloads: 756,
          description: "Analysis of traditional adaptation methods for extreme climate conditions"
        }
      ]
    },
    {
      category: "Field Guides",
      items: [
        {
          title: "Himalayan Cannabis Identification Guide",
          type: "field manual",
          format: "PDF",
          pages: 45,
          downloads: 2100,
          description: "Visual guide for identifying landrace varieties in their natural habitat"
        },
        {
          title: "Traditional Cultivation Calendar",
          type: "practical guide",
          format: "PDF",
          pages: 12,
          downloads: 1800,
          description: "Seasonal timing and practices based on traditional knowledge"
        },
        {
          title: "Genetic Sampling Protocols",
          type: "methodology",
          format: "PDF",
          pages: 16,
          downloads: 670,
          description: "Standardized procedures for collecting and preserving genetic material"
        }
      ]
    },
    {
      category: "Video Documentation",
      items: [
        {
          title: "Parvati Valley Expedition Documentary",
          type: "documentary",
          format: "Video",
          pages: "45 min",
          downloads: 3400,
          description: "Full expedition documentation including interviews with traditional cultivators"
        },
        {
          title: "Traditional Hash Making Techniques",
          type: "educational",
          format: "Video",
          pages: "28 min",
          downloads: 2800,
          description: "Step-by-step documentation of traditional charas production methods"
        },
        {
          title: "Research Methodology Workshop Series",
          type: "tutorial",
          format: "Video",
          pages: "6 episodes",
          downloads: 1900,
          description: "Comprehensive training in cannabis research methodologies"
        }
      ]
    }
  ];

  const webinars = [
    {
      title: "Introduction to Cannabis Genetics",
      date: "November 15, 2024",
      time: "14:00 UTC",
      duration: "90 minutes",
      presenter: "Dr. Sarah Genetics",
      registered: 245,
      maxCapacity: 500,
      description: "Fundamentals of cannabis genetics with focus on landrace populations",
      status: "upcoming"
    },
    {
      title: "Traditional Knowledge Documentation Methods",
      date: "November 22, 2024",
      time: "15:00 UTC",
      duration: "60 minutes",
      presenter: "Cultural Research Team",
      registered: 180,
      maxCapacity: 300,
      description: "Ethical approaches to documenting indigenous cultivation practices",
      status: "upcoming"
    },
    {
      title: "Field Research Best Practices",
      date: "November 8, 2024",
      time: "14:00 UTC",
      duration: "120 minutes",
      presenter: "Expedition Team",
      registered: 420,
      maxCapacity: 500,
      description: "Practical guidance for conducting research in remote locations",
      status: "completed"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SharedHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-slate-800 to-emerald-900 text-white py-24">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Research Education Hub
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            Comprehensive educational resources for cannabis research, traditional knowledge, and conservation methods
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Browse Resources
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Learning Paths */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Learning Paths</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Structured educational programs designed for different experience levels and research interests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-slate-200 rounded-t-lg overflow-hidden">
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={path.level === 'Beginner' ? 'secondary' : path.level === 'Intermediate' ? 'default' : 'destructive'}>
                      {path.level}
                    </Badge>
                    <div className="text-right text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {path.modules} modules
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {path.duration}
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl">{path.title}</CardTitle>
                  <p className="text-slate-600">{path.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {path.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-sm text-slate-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full">
                    Start Learning Path
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources Library */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Research Resources</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive library of research papers, field guides, and educational materials
            </p>
          </div>
          
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                {category.category === 'Research Papers' && <FileText className="h-6 w-6 text-emerald-600" />}
                {category.category === 'Field Guides' && <BookOpen className="h-6 w-6 text-emerald-600" />}
                {category.category === 'Video Documentation' && <Video className="h-6 w-6 text-emerald-600" />}
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{item.type}</Badge>
                        <div className="text-sm text-slate-600 flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          {item.downloads}
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <p className="text-slate-600 text-sm">{item.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-sm text-slate-600">
                          <span className="font-medium">{item.format}</span>
                          {item.format === 'PDF' && <span> • {item.pages} pages</span>}
                          {item.format === 'Video' && <span> • {item.pages}</span>}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Upcoming Webinars */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Educational Webinars</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Live educational sessions with researchers and experts in cannabis science
            </p>
          </div>
          
          <div className="space-y-6">
            {webinars.map((webinar, index) => (
              <Card key={index} className={`p-6 ${webinar.status === 'upcoming' ? 'border-emerald-200 bg-emerald-50/30' : 'bg-slate-50'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={webinar.status === 'upcoming' ? 'default' : 'secondary'}>
                        {webinar.status}
                      </Badge>
                      <span className="text-sm text-slate-600">{webinar.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{webinar.title}</h3>
                    <p className="text-slate-600 mb-3">{webinar.description}</p>
                    <p className="text-sm text-slate-700">Presenter: {webinar.presenter}</p>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-slate-500" />
                        <span>{webinar.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-slate-500" />
                        <span>{webinar.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-slate-500" />
                        <span>{webinar.registered}/{webinar.maxCapacity} registered</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <Button 
                      className="w-full" 
                      variant={webinar.status === 'upcoming' ? 'default' : 'outline'}
                      disabled={webinar.status === 'completed'}
                    >
                      {webinar.status === 'upcoming' ? 'Register' : 'View Recording'}
                    </Button>
                  </div>
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

export default Learn;
