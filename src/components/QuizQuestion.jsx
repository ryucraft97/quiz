

import React from "react";
import ChoiceListQuestion from "./ChoiceListQuestion";
import ChoiceImageQuestion from "./ChoiceImageQuestion";

const QuizQuestion = ({ question, currentStep, totalSteps, onAnswer }) => {
  return (
    <div className="quiz-question">
      <h2>{question.question}</h2>
      {question.type === "choice-list" && (
        <ChoiceListQuestion question={question} onAnswer={onAnswer} />
      )}
      {question.type === "choice-image" && (
        <ChoiceImageQuestion question={question} onAnswer={onAnswer} />
      )}
    </div>
  );
};

export default QuizQuestion;