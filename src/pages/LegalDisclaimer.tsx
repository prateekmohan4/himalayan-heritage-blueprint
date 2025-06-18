
import React from 'react';
import SimpleTextPageTemplate from '@/components/SimpleTextPageTemplate';

const LegalDisclaimer = () => {
  return (
    <SimpleTextPageTemplate title="Legal Disclaimer">
      <div className="space-y-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-red-800">Important Legal Notice</h2>
          <p className="text-red-700">
            The information and products on this website are for educational, research, and preservation purposes only. 
            Please read this disclaimer carefully before using our services.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Educational Purpose Only</h2>
          <p>
            Himalayan Heritage is dedicated to the preservation and documentation of traditional cannabis genetics 
            from the Himalayan region. All materials are provided for educational research, genetic preservation, 
            and historical documentation purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Legal Compliance</h2>
          <p className="mb-4">
            Cannabis laws vary significantly by jurisdiction. It is entirely the customer's responsibility to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Research and understand local, state, and federal laws</li>
            <li>Ensure compliance with all applicable regulations</li>
            <li>Use products only in accordance with local laws</li>
            <li>Seek legal counsel if uncertain about regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">No Cultivation Encouragement</h2>
          <p>
            We do not encourage, promote, or condone the cultivation of cannabis in jurisdictions where it is illegal. 
            Our materials are intended for collection, research, and preservation purposes only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Research and Academic Use</h2>
          <p>
            Our genetic materials are suitable for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Academic research into plant genetics</li>
            <li>Documentation of traditional cultivars</li>
            <li>Preservation of biodiversity</li>
            <li>Historical and anthropological studies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">No Medical Claims</h2>
          <p>
            We make no medical claims about our products. Nothing on this website should be considered medical advice. 
            Consult healthcare professionals for medical guidance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p>
            Himalayan Heritage disclaims all liability for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Misuse of products contrary to applicable laws</li>
            <li>Consequences of illegal cultivation or possession</li>
            <li>Customs seizures or legal issues arising from purchases</li>
            <li>Any damages resulting from use of our materials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Age Restrictions</h2>
          <p>
            Our website and products are intended for adults aged 18 or older (21+ where required by law). 
            By using our services, you confirm you meet the minimum age requirements in your jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">International Customers</h2>
          <p>
            International customers are solely responsible for understanding import regulations in their country. 
            We are not liable for packages seized by customs or legal issues arising from international shipments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact for Legal Questions</h2>
          <p>
            For legal questions or concerns, please contact: 
            <a href="mailto:himalayaseeds@protonmail.com" className="text-emerald-600 hover:underline ml-1">
              himalayaseeds@protonmail.com
            </a>
          </p>
        </section>
      </div>
    </SimpleTextPageTemplate>
  );
};

export default LegalDisclaimer;
