// src/App.js

import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import Score from "./components/Score";
import './App.css';

const App = () => {
  const triviaData = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    // Add at least 18 more questions to meet the requirement
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < triviaData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    handleNext(); // Move to the next question automatically after answering
  };

  return (
    <div className="App">
      <div className="score-container">
        <Score score={score} />
      </div>
      <QuestionCard
        question={triviaData[currentQuestionIndex].question}
        answer={triviaData[currentQuestionIndex].answer}
        onAnswer={handleAnswer}
      />
      <div>
        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestionIndex === triviaData.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
