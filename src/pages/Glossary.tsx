
import React from 'react';
import SharedHeader from '@/components/SharedHeader';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Glossary = () => {
  const glossaryTerms = [
    {
      letter: 'C',
      terms: [
        {
          term: 'Charas',
          definition: 'A traditional hand-rolled hashish made from live cannabis plants, particularly famous in the Himalayan regions. The resin is collected by rubbing fresh plants between the palms.'
        },
        {
          term: 'Cannabinoids',
          definition: 'Chemical compounds found in cannabis plants that interact with receptors in the human body. THC and CBD are the most well-known cannabinoids.'
        }
      ]
    },
    {
      letter: 'H',
      terms: [
        {
          term: 'Heirloom',
          definition: 'Cannabis varieties that have been passed down through generations within specific families or communities, maintaining their genetic integrity through careful selection.'
        },
        {
          term: 'Hemp',
          definition: 'Cannabis varieties bred specifically for industrial uses, containing less than 0.3% THC. Used for fiber, seeds, and CBD production.'
        }
      ]
    },
    {
      letter: 'L',
      terms: [
        {
          term: 'Landrace',
          definition: 'Indigenous cannabis varieties that have adapted to their local environment over thousands of years. These pure genetic lines form the foundation of modern cannabis breeding.'
        }
      ]
    },
    {
      letter: 'P',
      terms: [
        {
          term: 'Phenotype',
          definition: 'The observable characteristics of a cannabis plant, including its appearance, aroma, and effects, resulting from both genetics and environmental factors.'
        }
      ]
    },
    {
      letter: 'T',
      terms: [
        {
          term: 'Terpenes',
          definition: 'Aromatic compounds found in many plants, including cannabis. They contribute to the distinctive smell and flavor of different strains and may influence their effects.'
        },
        {
          term: 'Trichomes',
          definition: 'Tiny, crystal-like structures on cannabis flowers that contain cannabinoids and terpenes. They appear as a frosty coating on mature buds.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cannabis Glossary
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your comprehensive guide to understanding cannabis terminology, cultivation practices, 
              and the rich heritage of Himalayan cannabis culture.
            </p>
          </div>

          <div className="space-y-8">
            {glossaryTerms.map((section) => (
              <div key={section.letter}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-500">
                  {section.letter}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {section.terms.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${section.letter}-${index}`}
                      className="border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-green-600">
                        {item.term}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pt-2">
                        {item.definition}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-green-50 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 mb-6">
              Our glossary is constantly growing. If you have a term you'd like us to define, 
              please reach out to our team.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Glossary;
