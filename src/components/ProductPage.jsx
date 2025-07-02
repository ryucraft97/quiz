import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./footer";
import "./ProductPage.css";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product-page">
      <Header />
      <div className="product-content">
        <h1 className="product-title">🎯 Your Symptoms Suggest You’re a Great Fit for a 7-Day Sugar Detox.</h1>
        <div className="product-grid">
          <div className="product-card most-picked">
            <div className="badge">TOP MATCH</div>
            <img src="/bart.jpg" alt="Essential" className="product-image" />
            <div className="product-info">
              <h2><strong className="product-name">7-Day Sugar Detox</strong></h2>
              <p className="product-price">
                $19.99 <span className="compare-price" style={{ textDecoration: "line-through", color: "#aaa", marginLeft: "0.5rem" }}>$29.99</span>
              </p>
              <p className="product-subtext">Money-back Guaranteed. Download instantly.</p>
              <ul className="feature-list">
                <li>7-Day Sugar Detox Meal Plan</li>
                <li>Gut-Friendly Food Guide</li>
                <li>Cravings Reset Cheatsheet</li>
                <li>Daily Step-by-Step Routine</li>
                <li>“Bounce Back” Strategy for Sugar Relapse</li>
                <li><strong>Shed Excess Weight Naturally Without Starving</strong></li>
              </ul>
              <a
                href="https://ybgskz-i7.myshopify.com/checkouts/cn/hWN08OYSiURfCVAvLYJKXKzL?preview_theme_id=180813726019"
                className="product-button"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                👉 START MY 7-DAY RESET (Only $19.99)
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;