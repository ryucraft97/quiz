import React from "react";
import Header from "./Header";
import Footer from "./footer";

const pageStyle = {
  backgroundColor: '#ffffff',
  color: '#000000',
  padding: '2rem',
  fontFamily: 'Arial, sans-serif',
  lineHeight: '1.6',
  textAlign: 'center',
};

const headingStyle = {
  color: '#000000',
  marginBottom: '1rem',
};

const sectionHeading = {
  color: '#000000',
  marginTop: '2rem',
};

const TermsOfService = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="content-wrapper" style={pageStyle}>
        <h1 style={headingStyle}>Terms of Service</h1>
        <p>
          Welcome to our application. These Terms of Service (“Terms”) govern your use of our website and digital products. By accessing or using any part of our services, you agree to be bound by these Terms. If you do not agree, you must not access or use the service.
        </p>
        <h2 style={sectionHeading}>1. Eligibility</h2>
        <p>
          You must be at least 18 years old to use this service. By using it, you represent and warrant that you meet this requirement.
        </p>
        <h2 style={sectionHeading}>2. Use of Services</h2>
        <p>
          You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use the services in any way that violates any applicable law or regulation.
        </p>
        <h2 style={sectionHeading}>3. Intellectual Property</h2>
        <p>
          All content, trademarks, and data on this website are the property of their respective owners and are protected by copyright and other intellectual property laws.
        </p>
        <h2 style={sectionHeading}>4. Payment and Refunds</h2>
        <p>
          All purchases are final. We do not offer refunds except as required by law. By purchasing a product, you agree to pay the listed price and any applicable taxes.
        </p>
        <h2 style={sectionHeading}>5. Modifications</h2>
        <p>
          We reserve the right to update or modify these Terms at any time without prior notice. Continued use of the service constitutes acceptance of the modified Terms.
        </p>
        <h2 style={sectionHeading}>6. Contact</h2>
        <p>
          If you have any questions about these Terms, please contact us at support@mediadoor.io.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;