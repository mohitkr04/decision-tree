import { motion } from 'framer-motion';
import { useState } from 'react';

export const LearningMode: React.FC = () => {
  const [step, setStep] = useState(0);

  const lessons = [
    {
      title: "What is a Decision Tree? 🌳",
      content: "A decision tree is like a game where you answer questions to make choices! Just like choosing what to wear based on the weather.",
      example: "Is it raining? → Yes → Take an umbrella! | No → Wear sunglasses!"
    },
    {
      title: "How to Make Choices? 🤔",
      content: "Each question helps you make a better choice. Think of it like a treasure map where each answer leads you to the next clue!",
      example: "Do you want a pet? → Yes → Dog or Cat? → Dog → Big or Small?"
    },
    {
      title: "Let's Practice! 🎮",
      content: "Now it's your turn to create a simple decision tree. Think about choosing what to eat for lunch!",
      example: "Are you hungry? → Yes → Do you want hot or cold food? → Hot → Pizza or Pasta?"
    }
  ];

  return (
    <motion.div 
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white rounded-2xl p-8 shadow-xl">
        <motion.div
          key={step}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-600">
            {lessons[step].title}
          </h2>
          <p className="text-xl mb-6 leading-relaxed">
            {lessons[step].content}
          </p>
          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <p className="text-lg font-medium">Example:</p>
            <p className="text-xl mt-2">{lessons[step].example}</p>
          </div>
        </motion.div>

        <div className="flex justify-between mt-8">
          <button
            onClick={() => setStep(s => Math.max(0, s - 1))}
            disabled={step === 0}
            className={`px-6 py-3 rounded-xl text-lg font-bold ${
              step === 0 ? 'bg-gray-200' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            ⬅️ Previous
          </button>
          <button
            onClick={() => setStep(s => Math.min(lessons.length - 1, s + 1))}
            disabled={step === lessons.length - 1}
            className={`px-6 py-3 rounded-xl text-lg font-bold ${
              step === lessons.length - 1 ? 'bg-gray-200' : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Next ➡️
          </button>
        </div>
      </div>
    </motion.div>
  );
}; 