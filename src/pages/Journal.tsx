
import React, { useState } from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';

const Journal = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: "All Articles", slug: "all", count: 48 },
    { name: "Field Research", slug: "research", count: 12 },
    { name: "Traditional Knowledge", slug: "traditional", count: 8 },
    { name: "Conservation", slug: "conservation", count: 15 },
    { name: "Cultural Heritage", slug: "cultural", count: 10 },
    { name: "Expedition Reports", slug: "expeditions", count: 3 }
  ];

  const articles = [
    {
      id: 1,
      slug: "genetic-diversity-parvati-valley",
      title: "Genetic Diversity Analysis: Parvati Valley Landrace Populations",
      excerpt: "Comprehensive genetic marker analysis reveals unprecedented diversity within traditional cultivation zones of the Parvati Valley region.",
      author: "Dr. Cannabis Research Team",
      date: "2024-10-15",
      readTime: "12 min read",
      category: "Field Research",
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop&crop=center",
      tags: ["Genetics", "Parvati Valley", "Research"]
    },
    {
      id: 2, 
      slug: "traditional-charas-production",
      title: "Traditional Charas Production: Ethnobotanical Documentation",
      excerpt: "Six-month documentation project reveals intricate traditional knowledge systems preserved in remote Himalayan villages.",
      author: "Cultural Heritage Team",
      date: "2024-10-10",
      readTime: "18 min read",
      category: "Traditional Knowledge",
      imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop&crop=center",
      tags: ["Traditional Knowledge", "Charas", "Documentation"]
    },
    {
      id: 3,
      slug: "climate-adaptation-strategies",
      title: "Climate Adaptation in High-Altitude Cannabis Cultivation",
      excerpt: "Traditional cultivation methods demonstrate remarkable climate resilience and adaptation strategies developed over centuries.",
      author: "Environmental Research Division",
      date: "2024-10-05", 
      readTime: "15 min read",
      category: "Conservation",
      imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop&crop=center",
      tags: ["Climate", "Adaptation", "High Altitude"]
    },
    {
      id: 4,
      slug: "malana-village-heritage",
      title: "Sacred Genetics: The Malana Village Cannabis Heritage",
      excerpt: "An in-depth exploration of the world's oldest documented cannabis cultivation site and its unique genetic treasures.",
      author: "Heritage Documentation Team",
      date: "2024-09-28",
      readTime: "20 min read", 
      category: "Cultural Heritage",
      imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop&crop=center",
      tags: ["Malana", "Heritage", "Sacred Sites"]
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category.toLowerCase().includes(selectedCategory);
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ backgroundColor: '#F8F7F4', minHeight: '100vh' }}>
      <SharedHeader />
      
      {/* Hero Section */}
      <section className="py-24" style={{ backgroundColor: '#1a202c' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 
            className="text-5xl font-bold mb-6"
            style={{ color: '#F8F7F4', fontFamily: 'Inter, sans-serif' }}
          >
            Research Journal
          </h1>
          <p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: '#F8F7F4', opacity: 0.9, fontFamily: 'Lora, serif' }}
          >
            Scientific documentation, traditional knowledge preservation, and conservation insights from the field
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search research articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              style={{ backgroundColor: '#FFFFFF', color: '#333333' }}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar - Categories */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg border p-6" style={{ borderColor: '#e2e8f0' }}>
                <div className="flex items-center gap-2 mb-6">
                  <Filter className="h-5 w-5" style={{ color: '#5a6e5a' }} />
                  <h3 className="text-lg font-semibold" style={{ color: '#333333' }}>Categories</h3>
                </div>
                
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.slug}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedCategory === category.slug
                          ? 'border border-emerald-200'
                          : 'hover:bg-slate-100'
                      }`}
                      style={{
                        backgroundColor: selectedCategory === category.slug ? '#f0f9f0' : 'transparent',
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
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2" style={{ color: '#333333' }}>
                Latest Research
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Lora, serif' }}>
                Showing {filteredArticles.length} articles
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
            
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500" style={{ fontFamily: 'Lora, serif' }}>
                  No articles found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Journal;
