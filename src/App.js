import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./components/LandingPage";
import Quiz from "./components/Quiz";
import ResultPage from "./components/ResultPage";
import SubmitLead from "./components/SubmitLead";
import ThankYou from "./components/ThankYou";
import ProductPage from "./components/ProductPage";
import TermsOfService from "./components/tos";
import PrivacyPolicy from "./components/privacy";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/submit" element={<SubmitLead />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/tos" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
