import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./footer";
import "./ProductPage.css";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.ttq) {
      window.ttq.track("ViewContent", {
        content_id: "sugar-detox-ebook",
        content_type: "product",
        quantity: 1,
        price: 19.99
      });
    }
  }, []);

  return (
    <div className="product-page">
      <Header />
      <div className="product-content">
        <h1 className="product-title">🎯 Your Symptoms Suggest You’re a Great Fit for a 7-Day Sugar Detox.</h1>
        <p className="product-intro">
          Based on your answers, you’re likely dealing with sugar cravings, low energy, or bloating. That’s not your fault — sugar dependency is real, and you’re not alone. This 7-day plan is designed to reset your gut, balance your energy, and put you back in control — fast.
        </p>
        <div className="product-grid">
          <div className="product-card most-picked">
            <div className="badge">TOP MATCH</div>
            <img src="/bart.jpg" alt="Essential" className="product-image" />
            <div className="product-info">
              <h2><strong className="product-name">7-Day Sugar Detox</strong></h2>
              <p className="product-price">
                $19.99 <span className="compare-price" style={{ textDecoration: "line-through", color: "#aaa", marginLeft: "0.5rem" }}>$29.99</span>
              </p>
              <p className="urgency-note">🔥 Intro price ending soon — don’t miss this chance to reboot your health.</p>
              <p className="product-subtext">Money-back Guaranteed. Download instantly.</p>
              <ul className="feature-list">
                <li><strong>✅ Meal Plan:</strong> Done-for-you 7-day detox meals</li>
                <li><strong>✅ Gut Health:</strong> Food guide to beat bloating & fatigue</li>
                <li><strong>✅ Habit Help:</strong> Daily routine + cravings control cheat sheet</li>
                <li><strong>✅ Long-term Results:</strong> Bounce-back strategy so sugar doesn't creep back</li>
                <li><strong>✅ Real Results:</strong> Shed excess weight without starving</li>
              </ul>
              <p className="testimonial">
                “I felt the difference in just 2 days — no crashes, no cravings. Best $20 I’ve spent.” – Lisa M.
              </p>
              <a
                href="https://sugardelete.myshopify.com/checkouts/cn/Z2NwLWV1cm9wZS13ZXN0MTowMUpaOFNLUFY0RTUzTU5aSjc4RVlQM1IzMw?preview_theme_id=180813726019"
                className="product-button"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                👉 RESET MY CRAVINGS & ENERGY NOW – Just $19.99
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