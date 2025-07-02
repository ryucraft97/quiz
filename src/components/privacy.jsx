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

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <Header />
      <main className="content-wrapper" style={pageStyle}>
        <h1 style={headingStyle}>Privacy Policy</h1>
        <p>
          We respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we handle your information.
        </p>

        <h2 style={sectionHeading}>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as your name and email address, as well as data collected automatically through cookies and analytics tools.
        </p>

        <h2 style={sectionHeading}>2. How We Use Your Information</h2>
        <p>
          We use your data to deliver personalized products, communicate with you, and improve our services. We never sell your information.
        </p>

        <h2 style={sectionHeading}>3. Data Retention</h2>
        <p>
          We retain your information for as long as necessary to provide our services and comply with legal obligations.
        </p>

        <h2 style={sectionHeading}>4. Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal data. Contact us at support@mediadoor.io to exercise these rights.
        </p>

        <h2 style={sectionHeading}>5. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The most current version will be posted on this page.
        </p>

        <h2 style={sectionHeading}>6. Contact</h2>
        <p>
          If you have questions or concerns, please email us at support@mediadoor.io.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;