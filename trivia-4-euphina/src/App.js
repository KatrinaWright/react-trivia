import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import Score from "./components/Score";
import './App.css';

const App = () => {
  const triviaData = [
    { question: "What is the keyword used to define a function in Python?", answer: "def" },
    { question: "What is the output of print(2 ** 3) in Python?", answer: "8" },
    { question: "Which data type is used to store text in Python?", answer: "str" },
    { question: "What is the correct way to create a dictionary in Python?", answer: "{key: value}" },
    { question: "What is the output of len('Hello') in Python?", answer: "5" },
    { question: "Which keyword is used to handle exceptions in Python?", answer: "try" },
    { question: "How do you create a list in Python?", answer: "[] or list()" },
    { question: "What is the output of 3 == 3.0 in Python?", answer: "True" },
    { question: "What is the Python keyword for defining an anonymous function?", answer: "lambda" },
    { question: "Which function is used to convert a string to an integer in Python?", answer: "int()" },
    { question: "What is the output of bool([]) in Python?", answer: "False" },
    { question: "Which built-in Python function can be used to sort a list?", answer: "sorted() or list.sort()" },
    { question: "What is the difference between append() and extend() in Python lists?", answer: "append() adds a single element, extend() adds elements from an iterable" },
    { question: "How do you create a set in Python?", answer: "{} or set()" },
    { question: "What is the result of 5 // 2 in Python?", answer: "2" },
    { question: "What is a Python decorator?", answer: "A function that modifies the behavior of another function" },
    { question: "Which Python module is used to generate random numbers?", answer: "random" },
    { question: "How do you comment multiple lines in Python?", answer: "''' or \"\"\" for multi-line comments" },
    { question: "What is the method used to add an item to a set in Python?", answer: "add()" },
    { question: "What is the output of list(range(3)) in Python?", answer: "[0, 1, 2]" }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

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
    setAttempts((prevAttempts) => prevAttempts + 1);
    if (currentQuestionIndex < triviaData.length - 1) {
      handleNext();
    } else {
      setQuizCompleted(true); // Quiz is completed after the last question
    }
  };

  const handleEnd = () => {
    setQuizCompleted(true);
  };

  const accuracy = ((score / attempts) * 100).toFixed(2);

  return (
    <div className="App">
      <h1 className="app-title">React Trivia Game</h1>
      <div className="score-container">
        <Score score={score} />
        <p>{`Question ${currentQuestionIndex + 1} of ${triviaData.length}`}</p>
        {!quizCompleted && (
          <p>{`Attempts: ${attempts}`}</p>
        )}
      </div>
      {!quizCompleted ? (
        <>
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
          {currentQuestionIndex === triviaData.length - 1 && (
            <button onClick={handleEnd}>End</button>
          )}
        </>
      ) : (
        <div className="results">
          <h2>Quiz Completed!</h2>
          <p>{`Your Score: ${score}`}</p>
          <p>{`Total Attempts: ${attempts}`}</p>
          <p>{`Accuracy: ${accuracy}%`}</p>
        </div>
      )}
    </div>
  );
};

export default App;
