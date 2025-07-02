import React, { useState } from "react";

const ChoiceListQuestion = ({ question, onAnswer }) => {
  const [selected, setSelected] = useState([]);

  const handleSelect = (option) => {
    let updated;
    if (question.multiple) {
      updated = selected.includes(option)
        ? selected.filter((o) => o !== option)
        : [...selected, option];
      setSelected(updated);
    } else {
      updated = [option];
      setSelected(updated);
      onAnswer(option); // Immediate submit for single choice
    }
  };

  return (
    <div className="choice-list">
      {question.options.map((option) => (
        <label key={option} className={`choice-item ${selected.includes(option) ? "selected" : ""}`}>
          <input
            type={question.multiple ? "checkbox" : "radio"}
            name="choice"
            value={option}
            checked={selected.includes(option)}
            onChange={() => handleSelect(option)}
          />
          {option}
        </label>
      ))}
      {question.multiple && (
        <div className="sticky-next">
          <button
            className="next-button"
            onClick={() => onAnswer(selected)}
            disabled={selected.length === 0}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ChoiceListQuestion;