import { motion } from 'framer-motion';
import { useState } from 'react';

interface QuizModeProps {
  onScoreUpdate: (points: number) => void;
}

export const QuizMode: React.FC<QuizModeProps> = ({ onScoreUpdate }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What's a decision tree like? 🤔",
      options: [
        "A game of questions and answers",
        "A regular tree in the park",
        "A type of computer",
        "A book about decisions"
      ],
      correct: 0
    },
    {
      question: "When making a decision tree about lunch, what's a good first question? 🍽️",
      options: [
        "What's your favorite color?",
        "Are you hungry?",
        "What's the weather like?",
        "Do you like movies?"
      ],
      correct: 1
    },
    {
      question: "What happens after you answer a question in a decision tree? 🌟",
      options: [
        "The game ends",
        "You get another question or an answer",
        "You have to start over",
        "Nothing happens"
      ],
      correct: 1
    }
  ];

  const handleAnswer = (selectedIndex: number) => {
    if (selectedIndex === questions[currentQuestion].correct) {
      onScoreUpdate(10);
      setShowResult(true);
      setTimeout(() => {
        setShowResult(false);
        setCurrentQuestion(c => c + 1);
      }, 1500);
    }
  };

  return (
    <motion.div 
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {currentQuestion < questions.length ? (
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-6">
            Question {currentQuestion + 1}:
          </h2>
          <p className="text-xl mb-6">
            {questions[currentQuestion].question}
          </p>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full p-4 text-left rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors text-lg"
              >
                {option}
              </button>
            ))}
          </div>
          {showResult && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <span className="text-6xl">🌟</span>
            </motion.div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Great job! 🎉</h2>
          <p className="text-xl">You've completed all the questions!</p>
          <button
            onClick={() => setCurrentQuestion(0)}
            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      )}
    </motion.div>
  );
}; 