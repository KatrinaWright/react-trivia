// src/components/QuestionCard.js

import React, { useState } from "react";
import "./QuestionCard.css";

const QuestionCard = ({ question, answer, onAnswer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAnswer = (isCorrect) => {
    setIsFlipped(false); // Flip the card back to the front

    // Wait for the flip animation to complete before moving to the next question
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 600); // The duration matches the CSS transition duration (0.6s)
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? "is-flipped" : ""}`} onClick={handleFlip}>
        <div className="card-face card-front">
          {question}
        </div>
        <div className="card-face card-back">
          <div className="answer">
            {answer}
          </div>
          <div className="buttons-container">
            <button className="btn-correct" onClick={() => handleAnswer(true)}>Correct</button>
            <button className="btn-incorrect" onClick={() => handleAnswer(false)}>Incorrect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
