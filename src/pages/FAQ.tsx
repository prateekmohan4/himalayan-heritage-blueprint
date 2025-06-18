
import React from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqSections = [
    {
      title: "About Our Seeds",
      questions: [
        {
          question: "What makes Himalayan heritage seeds special?",
          answer: "Our seeds represent thousands of years of traditional cultivation in the unique microclimates of the Himalayas. These landrace genetics have been naturally selected and preserved by traditional cultivators, offering unique terpene profiles and genetic characteristics not found in modern commercial varieties."
        },
        {
          question: "Are these seeds legal?",
          answer: "Our seeds are sold for educational, research, and collection purposes only. Laws vary by jurisdiction, and it is the customer's responsibility to understand and comply with local regulations regarding cannabis seeds."
        },
        {
          question: "What is the difference between landrace and hybrid strains?",
          answer: "Landrace strains are indigenous varieties that have developed naturally in specific geographic regions over centuries. They represent pure genetics adapted to their native environment, while hybrids are crosses between different strains created by breeders."
        }
      ]
    },
    {
      title: "Shipping & Orders",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Domestic orders typically arrive within 3-7 business days. International shipping can take 7-21 business days depending on customs processing and local postal services."
        },
        {
          question: "Do you ship internationally?",
          answer: "We ship to many countries worldwide, but restrictions apply. Please check our shipping policy for a list of countries we serve. International customers are responsible for understanding their local import regulations."
        },
        {
          question: "How are orders packaged?",
          answer: "All orders are packaged discreetly in unmarked packaging to ensure privacy. Seeds are stored in appropriate conditions to maintain viability during transit."
        }
      ]
    },
    {
      title: "Payments",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards, bank transfers, and cryptocurrency payments. All transactions are processed securely through encrypted payment systems."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, we use industry-standard SSL encryption and work with trusted payment processors to ensure your financial information is protected."
        },
        {
          question: "Can I get a refund?",
          answer: "Due to the nature of our products, we generally cannot accept returns. However, if you receive damaged or incorrect items, please contact us within 48 hours of delivery for resolution."
        }
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: '#F8F7F4', minHeight: '100vh' }}>
      <SharedHeader />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 
            className="text-4xl font-bold mb-12 text-center"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#333333',
              letterSpacing: '-0.025em'
            }}
          >
            Frequently Asked Questions
          </h1>
          
          <div className="space-y-12">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 
                  className="text-2xl font-semibold mb-6"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#333333'
                  }}
                >
                  {section.title}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {section.questions.map((item, questionIndex) => (
                    <AccordionItem 
                      key={questionIndex} 
                      value={`${sectionIndex}-${questionIndex}`}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger 
                        className="text-left"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent 
                        className="text-gray-700 leading-relaxed"
                        style={{ fontFamily: 'Lora, serif' }}
                      >
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Still have questions?
            </h3>
            <p 
              className="text-gray-600 mb-6"
              style={{ fontFamily: 'Lora, serif' }}
            >
              We're here to help. Reach out to our team for personalized assistance.
            </p>
            <a 
              href="mailto:himalayaseeds@protonmail.com"
              className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
