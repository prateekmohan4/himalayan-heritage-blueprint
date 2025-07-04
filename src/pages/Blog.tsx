
import { useState } from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Calendar, User, Clock, Filter } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const featuredArticles = [
    {
      id: 1,
      title: "Genetic Diversity Analysis: Parvati Valley Landrace Populations",
      excerpt: "Comprehensive genetic marker analysis reveals unprecedented diversity within traditional cultivation zones...",
      author: "Dr. Cannabis Genetics Research Team",
      date: "October 15, 2024",
      type: "Peer-Reviewed Research",
      readTime: "18 min read",
      tags: ["Genetic Analysis", "Parvati Valley", "Landrace Conservation"],
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "Traditional Charas Production: Ethnobotanical Documentation Project",
      excerpt: "Six-month documentation project reveals intricate traditional knowledge systems...",
      author: "Cultural Preservation Team",
      date: "October 10, 2024",
      type: "Field Research Report",
      readTime: "12 min read",
      tags: ["Traditional Knowledge", "Charas", "Cultural Preservation"],
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&crop=center",
      featured: true
    },
    {
      id: 3,
      title: "Climate Adaptation Strategies in Himalayan Cannabis Cultivation",
      excerpt: "Traditional cultivation methods demonstrate remarkable climate resilience...",
      author: "Agricultural Research Division",
      date: "October 5, 2024",
      type: "Environmental Study",
      readTime: "15 min read",
      tags: ["Climate Adaptation", "High-Altitude Cultivation", "Sustainability"],
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop&crop=center",
      featured: true
    }
  ];

  const categories = [
    { name: "All Articles", slug: "all", count: 133 },
    { name: "Genetic Analysis & Conservation", slug: "genetics", count: 28 },
    { name: "Traditional Knowledge Documentation", slug: "traditional", count: 22 },
    { name: "Expedition Field Reports", slug: "expeditions", count: 15 },
    { name: "Cultural Preservation Studies", slug: "cultural", count: 19 },
    { name: "Agricultural Research", slug: "agriculture", count: 24 },
    { name: "Community Impact Studies", slug: "community", count: 11 },
    { name: "Policy & Legal Framework", slug: "policy", count: 8 },
    { name: "Academic Collaborations", slug: "academic", count: 6 }
  ];

  return (
    <div style={{ backgroundColor: '#F8F7F4', minHeight: '100vh' }}>
      <SharedHeader />
      
      {/* Hero Section */}
      <section className="relative py-24" style={{ backgroundColor: '#1a202c', color: '#F8F7F4' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#F8F7F4' }}>
              Himalayan Cannabis Research Journal
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: '#F8F7F4', opacity: 0.9 }}>
              Scientific documentation, traditional knowledge, and conservation insights
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: '#737373' }} />
              <input
                type="text"
                placeholder="Search research articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-green-500"
                style={{ 
                  backgroundColor: '#FFFFFF',
                  color: '#333333',
                  borderColor: '#e2e8f0'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg border p-6" style={{ borderColor: '#e2e8f0' }}>
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5" style={{ color: '#5a6e5a' }} />
                  <h3 className="text-lg font-semibold" style={{ color: '#333333' }}>Research Categories</h3>
                </div>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.slug
                          ? 'border border-green-200'
                          : 'hover:bg-slate-100'
                      }`}
                      style={{
                        backgroundColor: selectedCategory === category.slug ? '#f0f4f0' : 'transparent',
                        color: selectedCategory === category.slug ? '#5a6e5a' : '#333333'
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Featured Articles Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#333333' }}>Featured Research Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg border cursor-pointer hover:shadow-lg transition-all duration-300" style={{ borderColor: '#e2e8f0' }}>
                    <div className="aspect-[4/3] bg-slate-200 rounded-t-lg overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="text-xs" style={{ borderColor: '#5a6e5a', color: '#5a6e5a' }}>
                          {article.type}
                        </Badge>
                        {article.tags.slice(0, 2).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#333333' }}>
                        {article.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{article.author.split(' ')[0]}...</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Articles */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold" style={{ color: '#333333' }}>Recent Research</h2>
                <Button 
                  variant="outline" 
                  className="border-2 text-white hover:text-white"
                  style={{ 
                    backgroundColor: '#5a6e5a',
                    borderColor: '#5a6e5a'
                  }}
                >
                  View All Articles
                </Button>
              </div>
              
              <div className="space-y-6">
                {featuredArticles.map((article) => (
                  <div key={`recent-${article.id}`} className="bg-white rounded-lg border p-6 hover:shadow-lg transition-shadow cursor-pointer" style={{ borderColor: '#e2e8f0' }}>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="md:col-span-1">
                        <div className="aspect-[4/3] bg-slate-200 rounded-lg overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="md:col-span-3">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="text-xs" style={{ borderColor: '#5a6e5a', color: '#5a6e5a' }}>
                            {article.type}
                          </Badge>
                          {article.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-3 hover:text-green-600 transition-colors" style={{ color: '#333333' }}>
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{article.date}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
