import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const percent = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-container">
      <div className="progress-fill" style={{ width: `${percent}%` }} />
    </div>
  );
};

export default ProgressBar;
