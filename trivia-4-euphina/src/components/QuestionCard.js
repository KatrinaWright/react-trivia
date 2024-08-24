// src/components/QuestionCard.js

import React, { useState } from "react";
//import "./QuestionCard.css";

const QuestionCard = ({ question, answer, onAnswer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAnswer = (isCorrect) => {
    setIsFlipped(false); // Reset the card flip
    onAnswer(isCorrect);
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? "is-flipped" : ""}`} onClick={handleFlip}>
        <div className="card-face card-front">
          {question}
        </div>
        <div className="card-face card-back">
          {answer}
          <div>
            <button onClick={() => handleAnswer(true)}>Correct</button>
            <button onClick={() => handleAnswer(false)}>Incorrect</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
