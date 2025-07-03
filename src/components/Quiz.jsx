import React, { useState, useEffect } from "react";
import QuizQuestion from "./QuizQuestion";
import ProgressBar from "./ProgressBar";
import LoadingScreen from "./LoadingScreen";
import "./Quiz.css";
import Header from "./Header";
import Footer from "./footer";
const quizQuestions = [
  {
    id: 1,
    type: "choice-list",
    question: "How often do you crave sweets, even when you’re not hungry?",
    multiple: true,
    options: [
      "Constantly — I snack all day",
      "Sometimes — usually when stressed or tired",
      "Rarely — I’m in control of my cravings"
    ]
  },
  {
    id: 2,
    type: "choice-list",
    question: "Do you often feel drained, foggy, or irritable after eating?",
    multiple: true,
    options: [
      "Yes, especially after carbs or sugar",
      "Occasionally, when I skip meals",
      "Not really, I feel stable"
    ]
  },
  {
    id: 3,
    type: "choice-list",
    question: "Which of these digestive issues have you experienced recently?",
    multiple: true,
    options: [
      "Bloating",
      "Constipation or loose stools",
      "Acid reflux",
      "None of these"
    ]
  },
  {
    id: 4,
    type: "choice-list",
    question: "Has your skin been breaking out, dull, or inflamed lately?",
    multiple: true,
    options: [
      "Yes, it's frustrating",
      "Slightly, off and on",
      "No, it’s clear"
    ]
  },
  {
    id: 5,
    type: "choice-list",
    question: "Have you tried cutting sugar before?",
    multiple: true,
    options: [
      "Yes, but I couldn’t stick with it",
      "Yes, but I didn’t notice any change",
      "No, I’ve never seriously tried"
    ]
  },
  {
    id: 6,
    type: "choice-list",
    question: "What would you want to improve most if you could balance your sugar & gut health?",
    multiple: true,
    options: [
      "More energy & mental focus",
      "Clearer skin & less bloating",
      "Weight loss & fewer cravings",
      "All of the above"
    ]
  }
];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = quizQuestions[step];

  useEffect(() => {
    window.scrollTo({top: document.documentElement.scrollHeight * 0.1});
  }, [step]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "quiz_progress",
        step: step + 1,
      });
    }
  }, [step]);

  const handleAnswer = (answer) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));
    if (step + 1 < quizQuestions.length) {
      setStep(step + 1);
    } else {
      setIsCompleted(true); // Show loading screen
      console.log("Quiz completed with answers:", { ...answers, [currentQuestion.id]: answer });
    }
  };

  return isCompleted ? (
    <LoadingScreen />
  ) : (
    <div className="page-container">
        <Header />

      <div className="landing-wrappe">
        <div className="landing-content">
          <ProgressBar currentStep={step + 1} totalSteps={quizQuestions.length} />
          <QuizQuestion
            question={currentQuestion}
            currentStep={step + 1}
            totalSteps={quizQuestions.length}
            onAnswer={handleAnswer}
          />
          <Footer />
        </div>
      </div>
     
    </div>
  );
};

export default Quiz;