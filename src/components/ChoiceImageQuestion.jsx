import React from "react";

const ChoiceImageQuestion = ({ question, onAnswer }) => {
  const handleSelect = (option) => {
    onAnswer(option.label);
  };

  return (
    <div className="choice-image-grid">
      {question.options.map((option) => (
        <div
          key={option.label}
          className="image-option"
          onClick={() => handleSelect(option)}
        >
          <img src={option.image} alt={option.label} className="option-img" />
          <p>{option.label}</p>
        </div>
      ))}
    </div>
  );
};

export default ChoiceImageQuestion;
