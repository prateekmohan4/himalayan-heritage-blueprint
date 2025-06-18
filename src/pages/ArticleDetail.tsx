
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

const ArticleDetail = () => {
  const { slug } = useParams();

  // Sample article data - ready for API integration
  const article = {
    title: "Genetic Diversity Analysis: Parvati Valley Landrace Populations",
    subtitle: "Comprehensive genetic marker analysis reveals unprecedented diversity within traditional cultivation zones",
    author: "Dr. Cannabis Research Team",
    date: "2024-10-15",
    readTime: "12 min read",
    category: "Field Research",
    tags: ["Genetics", "Parvati Valley", "Research", "Conservation"],
    featureImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&h=600&fit=crop&crop=center",
    content: `
# Introduction

The Parvati Valley in Himachal Pradesh represents one of the most genetically diverse cannabis cultivation regions in the world. Our comprehensive study, conducted over 18 months, utilized advanced genetic marker analysis to document the extraordinary diversity within traditional landrace populations.

## Methodology

Our research team collected samples from 47 distinct cultivation sites across the valley, ranging from 1,800 to 3,200 meters in elevation. Each sample underwent extensive genetic analysis using SNP (Single Nucleotide Polymorphism) markers to identify unique genetic signatures.

### Sample Collection Protocol

- **Geographic Coverage**: 47 sites across 15 villages
- **Elevation Range**: 1,800m to 3,200m
- **Sample Size**: 235 individual plants
- **Collection Period**: March 2023 to September 2024

## Key Findings

Our analysis revealed remarkable genetic diversity that exceeds previous estimates by 340%. The high-altitude populations showed particularly unique adaptations that have developed over centuries of selective cultivation.

> "The genetic diversity we discovered in the Parvati Valley surpasses what we've documented in any other cannabis region globally. This represents an invaluable genetic treasury that must be preserved for future generations." - Lead Researcher

### Genetic Markers

The study identified 1,247 unique genetic markers across the population, with several previously unknown alleles that appear to be endemic to specific micro-regions within the valley.

## Conservation Implications

These findings have profound implications for conservation efforts. The genetic diversity documented represents thousands of years of selective breeding and natural adaptation that cannot be replicated in laboratory conditions.

### Immediate Conservation Priorities

1. **In-situ Conservation**: Protecting traditional cultivation practices
2. **Genetic Banking**: Establishing seed preservation protocols
3. **Community Partnership**: Working with local cultivators
4. **Documentation**: Recording traditional knowledge systems

## Traditional Knowledge Integration

Local cultivators possess intricate knowledge about plant selection, cultivation timing, and environmental factors that have shaped these genetic lineages. Our research validates many traditional practices that modern science is only beginning to understand.

## Conclusion

The Parvati Valley cannabis populations represent a genetic treasure trove of global significance. Immediate action is needed to preserve both the genetic resources and the traditional knowledge systems that have maintained this diversity for millennia.

Further research is planned to expand our understanding of the genetic mechanisms underlying the unique adaptations we've documented.`
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Journal", href: "/journal" },
    { label: article.title }
  ];

  return (
    <div style={{ backgroundColor: '#F8F7F4', minHeight: '100vh' }}>
      <SharedHeader />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link 
              to="/journal" 
              className="inline-flex items-center text-sm hover:text-emerald-600 transition-colors"
              style={{ color: '#5a6e5a' }}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Journal
            </Link>
          </div>
          
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge 
                variant="outline" 
                className="text-xs"
                style={{ borderColor: '#5a6e5a', color: '#5a6e5a' }}
              >
                {article.category}
              </Badge>
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: '#333333',
                letterSpacing: '-0.025em',
                lineHeight: '1.1'
              }}
            >
              {article.title}
            </h1>
            
            <p 
              className="text-xl text-gray-600 mb-6"
              style={{ fontFamily: 'Lora, serif', lineHeight: '1.6' }}
            >
              {article.subtitle}
            </p>
            
            {/* Article Meta */}
            <div className="flex items-center gap-6 text-sm text-gray-500 pb-6 border-b" style={{ borderColor: '#e2e8f0' }}>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </header>
          
          {/* Feature Image */}
          <div className="mb-12">
            <div className="aspect-[2/1] bg-slate-200 rounded-lg overflow-hidden">
              <img
                src={article.featureImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Article Content */}
          <article 
            className="prose prose-lg max-w-none"
            style={{
              fontFamily: 'Lora, serif',
              lineHeight: '1.7',
              color: '#333333'
            }}
          >
            {article.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return (
                  <h1 key={index} className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {line.substring(2)}
                  </h1>
                );
              } else if (line.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-semibold mt-10 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {line.substring(3)}
                  </h2>
                );
              } else if (line.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-medium mt-8 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {line.substring(4)}
                  </h3>
                );
              } else if (line.startsWith('> ')) {
                return (
                  <blockquote key={index} className="border-l-4 border-emerald-200 pl-6 my-6 italic text-lg">
                    {line.substring(2)}
                  </blockquote>
                );
              } else if (line.startsWith('- ')) {
                return (
                  <li key={index} className="mb-2">
                    {line.substring(2)}
                  </li>
                );
              } else if (line.match(/^\d+\. /)) {
                return (
                  <li key={index} className="mb-2">
                    {line.replace(/^\d+\. /, '')}
                  </li>
                );
              } else if (line.trim() === '') {
                return <br key={index} />;
              } else {
                return (
                  <p key={index} className="mb-4">
                    {line}
                  </p>
                );
              }
            })}
          </article>
          
          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t" style={{ borderColor: '#e2e8f0' }}>
            <div className="text-center">
              <Link 
                to="/journal" 
                className="inline-flex items-center px-6 py-3 bg-white border rounded-lg hover:shadow-md transition-all"
                style={{ borderColor: '#5a6e5a', color: '#5a6e5a' }}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Articles
              </Link>
            </div>
          </footer>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
