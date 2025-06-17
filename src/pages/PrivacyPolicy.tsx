
import React from 'react';
import SimpleTextPageTemplate from '@/components/SimpleTextPageTemplate';

const PrivacyPolicy = () => {
  return (
    <SimpleTextPageTemplate title="Privacy Policy">
      <div>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          Effective Date: December 17, 2024
        </p>
        
        <p style={{ marginBottom: '2rem' }}>
          At Himalayan Heritage Botanical Archive, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
        </p>

        <h2 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          color: '#333333',
          marginTop: '3rem',
          marginBottom: '1rem'
        }}>
          1. Information We Collect
        </h2>
        
        <p style={{ marginBottom: '1.5rem' }}>
          We may collect the following types of information:
        </p>
        
        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Personal information you provide voluntarily (name, email address, contact details)</li>
          <li style={{ marginBottom: '0.5rem' }}>Information collected automatically through cookies and similar technologies</li>
          <li style={{ marginBottom: '0.5rem' }}>Usage data and analytics to improve our services</li>
        </ul>

        <h2 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          color: '#333333',
          marginTop: '3rem',
          marginBottom: '1rem'
        }}>
          2. How We Use Your Information
        </h2>
        
        <p style={{ marginBottom: '1.5rem' }}>
          We use the information we collect to:
        </p>
        
        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Provide and improve our educational services</li>
          <li style={{ marginBottom: '0.5rem' }}>Communicate with you about our research and programs</li>
          <li style={{ marginBottom: '0.5rem' }}>Analyze website usage to enhance user experience</li>
          <li style={{ marginBottom: '0.5rem' }}>Comply with legal obligations and protect our rights</li>
        </ul>

        <h2 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          color: '#333333',
          marginTop: '3rem',
          marginBottom: '1rem'
        }}>
          3. Information Sharing
        </h2>
        
        <p style={{ marginBottom: '2rem' }}>
          We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances: with your explicit consent, to comply with legal requirements, or to protect our rights and the safety of our users.
        </p>

        <h2 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          color: '#333333',
          marginTop: '3rem',
          marginBottom: '1rem'
        }}>
          4. Data Security
        </h2>
        
        <p style={{ marginBottom: '2rem' }}>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          color: '#333333',
          marginTop: '3rem',
          marginBottom: '1rem'
        }}>
          5. Your Rights
        </h2>
        
        <p style={{ marginBottom: '2rem' }}>
          You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us at any time.
        </p>

        <h2 style={{ 
          fontFamily: 'Inter, sans-serif', 
          fontSize: '1.5rem', 
          fontWeight: '600', 
          color: '#333333',
          marginTop: '3rem',
          marginBottom: '1rem'
        }}>
          6. Contact Us
        </h2>
        
        <p style={{ marginBottom: '1rem' }}>
          If you have any questions about this Privacy Policy or our data practices, please contact us at:
        </p>
        
        <p style={{ 
          color: '#5a6e5a',
          fontWeight: '500'
        }}>
          himalayaseeds@protonmail.com
        </p>

        <p style={{ 
          marginTop: '3rem',
          fontSize: '0.9rem',
          color: '#666666'
        }}>
          This Privacy Policy may be updated from time to time. We will notify you of any material changes by posting the new policy on this page.
        </p>
      </div>
    </SimpleTextPageTemplate>
  );
};

export default PrivacyPolicy;
