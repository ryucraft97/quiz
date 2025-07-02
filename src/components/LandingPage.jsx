import React from "react";
import Header from "./Header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // separate for clean styles

const ageOptions = [
  { label: "Age: 18–29", value: "18-29", image: "18.png" },
  { label: "Age: 30–39", value: "30-39", image: "30.png" },
  { label: "Age: 40–49", value: "40-49", image: "40.png" },
  { label: "Age: 50+", value: "50+", image: "50.png" },
];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSelectAge = (ageRange) => {
    localStorage.setItem("ageRange", ageRange);
    navigate("/quiz"); // or show loading animation first
  };

  
  return (
    <div className="page-container">
      <Header />
      <div className="landing-wrapper">
        <div className="landing-content">
          <h1>Sugar Detox & Gut Health Reset</h1>
          <p className="subtext">Take the 45-second quiz to see if your symptoms are related to sugar sensitivity and gut imbalance</p>

          <div className="age-grid">
            {ageOptions.map((option) => (
              <div
                key={option.value}
                className="age-card"
                onClick={() => handleSelectAge(option.value)}
              >
                <img src={option.image} alt={option.label} className="age-image" />
                <p>{option.label}</p>
                <span>➔</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;