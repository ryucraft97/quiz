import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          By continuing, you agree to our <a href="/terms-of-service">Terms of Service</a> and{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
        <div className="footer-menu">
          <a href="/">Home</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/tos">Terms of Service</a>
        </div>
        <div className="footer-branding">© MEDIADOOR 2025</div>
      </div>
    </footer>
  );
};

export default Footer;