
import React, { useState } from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import ArticleCardSkeleton from '@/components/ArticleCardSkeleton';

const Journal = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Sample articles data - ready for API integration
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
      slug: "traditional-cultivation-methods",
      title: "Traditional Cultivation Methods of the Himalayas",
      excerpt: "Documenting ancient agricultural practices that have preserved landrace genetics for over a millennium in remote mountain villages.",
      author: "Anthropology Research Collective",
      date: "2024-10-10",
      readTime: "8 min read",
      category: "Cultural Studies",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      tags: ["Traditional Methods", "Culture", "Agriculture"]
    },
    {
      id: 3,
      slug: "climate-adaptation-high-altitude",
      title: "Climate Adaptation in High-Altitude Cannabis Populations",
      excerpt: "Understanding how extreme mountain environments have shaped unique genetic adaptations in traditional cannabis varieties.",
      author: "Mountain Ecology Institute",
      date: "2024-10-05",
      readTime: "15 min read",
      category: "Environmental Science",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center",
      tags: ["Climate", "Adaptation", "High Altitude"]
    },
    {
      id: 4,
      slug: "preservation-efforts-malana",
      title: "Conservation Efforts in Sacred Malana Village",
      excerpt: "A deep dive into community-led preservation initiatives protecting ancient cannabis genetics in one of India's most remote villages.",
      author: "Conservation Biology Network",
      date: "2024-09-28",
      readTime: "10 min read",
      category: "Conservation",
      imageUrl: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop&crop=center",
      tags: ["Conservation", "Malana", "Community"]
    }
  ];

  // Simulate loading state
  React.useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundColor: '#F8F7F4', minHeight: '100vh' }}>
      <SharedHeader />
      
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: '#333333',
                letterSpacing: '-0.025em'
              }}
            >
              Research Journal
            </h1>
            <p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: 'Lora, serif', lineHeight: '1.6' }}
            >
              Documenting the genetic heritage, traditional cultivation methods, and conservation efforts 
              surrounding Himalayan cannabis populations through field research and scientific analysis.
            </p>
          </div>
          
          {/* Articles Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <ArticleCardSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
          
          {/* Load More Section */}
          {!isLoading && (
            <div className="text-center mt-16">
              <button 
                className="px-8 py-3 bg-white border rounded-lg hover:shadow-md transition-all"
                style={{ borderColor: '#5a6e5a', color: '#5a6e5a' }}
              >
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Journal;
