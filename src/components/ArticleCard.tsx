
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, Clock } from 'lucide-react';

interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link to={`/journal/${article.slug}`} className="group">
      <div className="bg-white rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300" style={{ borderColor: '#e2e8f0' }}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge 
              variant="outline" 
              className="text-xs"
              style={{ borderColor: '#5a6e5a', color: '#5a6e5a' }}
            >
              {article.category}
            </Badge>
            {article.tags.slice(0, 2).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h3 
            className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2"
            style={{ color: '#333333', fontFamily: 'Inter, sans-serif' }}
          >
            {article.title}
          </h3>
          
          <p 
            className="text-gray-600 mb-4 line-clamp-3"
            style={{ fontFamily: 'Lora, serif' }}
          >
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span className="text-xs">{article.author.split(' ')[0]}...</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span className="text-xs">{new Date(article.date).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span className="text-xs">{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
