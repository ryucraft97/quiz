import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/product");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loading-screen">
      <div className="loader"></div>
      <p className="loading-text">We are building the best solution for you...</p>
    </div>
  );
};

export default LoadingScreen;