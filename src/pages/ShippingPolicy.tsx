
import React from 'react';
import SimpleTextPageTemplate from '@/components/SimpleTextPageTemplate';

const ShippingPolicy = () => {
  return (
    <SimpleTextPageTemplate title="Shipping & Returns Policy">
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <p className="mb-4">
            We ship worldwide with discrete packaging to ensure your privacy. All orders are processed within 1-2 business days.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Domestic shipping (US): 3-7 business days</li>
            <li>International shipping: 7-21 business days</li>
            <li>Express shipping available for domestic orders</li>
            <li>All packages include tracking information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Shipping Costs</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Destination</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Standard</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Express</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">United States</td>
                  <td className="border border-gray-300 px-4 py-2">$15</td>
                  <td className="border border-gray-300 px-4 py-2">$35</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Canada</td>
                  <td className="border border-gray-300 px-4 py-2">$25</td>
                  <td className="border border-gray-300 px-4 py-2">$45</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Europe</td>
                  <td className="border border-gray-300 px-4 py-2">$30</td>
                  <td className="border border-gray-300 px-4 py-2">$55</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Rest of World</td>
                  <td className="border border-gray-300 px-4 py-2">$35</td>
                  <td className="border border-gray-300 px-4 py-2">$65</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Returns Policy</h2>
          <p className="mb-4">
            Due to the nature of our products, we generally cannot accept returns. However, we stand behind the quality of our genetic preservation materials.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Damaged or incorrect items: Contact us within 48 hours of delivery</li>
            <li>Quality issues: We'll work with you to resolve any concerns</li>
            <li>Customs seizures: We offer one free replacement for seized packages</li>
            <li>Non-delivery: Full refund if package is confirmed lost</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
          <p className="mb-4">
            We ship to most countries worldwide, but customers are responsible for understanding their local import regulations.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Important:</strong> Some countries have restrictions on importing cannabis seeds. 
              Please verify local laws before ordering. We are not responsible for packages seized by customs.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Packaging</h2>
          <p>
            All orders are packaged discreetly with no external indication of contents. Seeds are stored in 
            appropriate conditions to maintain viability during transit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            For shipping questions or concerns, contact us at: 
            <a href="mailto:himalayaseeds@protonmail.com" className="text-emerald-600 hover:underline ml-1">
              himalayaseeds@protonmail.com
            </a>
          </p>
        </section>
      </div>
    </SimpleTextPageTemplate>
  );
};

export default ShippingPolicy;
