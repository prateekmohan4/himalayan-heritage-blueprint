
import React from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';

interface SimpleTextPageTemplateProps {
  title: string;
  children: React.ReactNode;
}

const SimpleTextPageTemplate: React.FC<SimpleTextPageTemplateProps> = ({ title, children }) => {
  return (
    <div style={{ backgroundColor: '#F8F7F4', minHeight: '100vh' }}>
      <SharedHeader />
      
      <main className="py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h1 
            className="text-4xl font-bold mb-12 text-center"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#333333',
              letterSpacing: '-0.025em'
            }}
          >
            {title}
          </h1>
          
          <div 
            className="prose prose-lg max-w-none"
            style={{
              fontFamily: 'Lora, serif',
              lineHeight: '1.7',
              color: '#333333'
            }}
          >
            {children}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SimpleTextPageTemplate;
