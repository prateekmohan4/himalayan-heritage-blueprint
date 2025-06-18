
import React from 'react';
import SimpleTextPageTemplate from '@/components/SimpleTextPageTemplate';

const TermsOfService = () => {
  return (
    <SimpleTextPageTemplate title="Terms of Service">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Himalayan Heritage website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Educational Purpose</h2>
          <p>
            All products and information provided on this website are for educational, research, and preservation purposes only. We are committed to the documentation and conservation of traditional cannabis genetics from the Himalayan region.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Legal Compliance</h2>
          <p>
            It is the customer's responsibility to understand and comply with all local, state, and federal laws regarding cannabis seeds in their jurisdiction. We do not encourage or condone any illegal activities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Product Information</h2>
          <p>
            While we strive to provide accurate information about our genetic preservation materials, we make no guarantees about viability, characteristics, or outcomes. All materials are provided "as is" for research purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Privacy Policy</h2>
          <p>
            We are committed to protecting your privacy. All personal information collected is used solely for order processing and communication purposes. We do not share customer information with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p>
            Himalayan Heritage shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the service constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p>
            For questions regarding these terms, please contact us at: 
            <a href="mailto:himalayaseeds@protonmail.com" className="text-emerald-600 hover:underline ml-1">
              himalayaseeds@protonmail.com
            </a>
          </p>
        </section>
      </div>
    </SimpleTextPageTemplate>
  );
};

export default TermsOfService;
