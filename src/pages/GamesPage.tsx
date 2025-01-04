import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SnakeGame } from '../components/games/SnakeGame';

const GamesPage = () => {
  const [currentGame, setCurrentGame] = useState<string | null>(null);

  const games = [
    {
      id: 'decision-adventure',
      title: '🎯 Decision Adventure',
      description: 'Help the character make the right choices!',
      difficulty: 'Easy'
    },
    {
      id: 'tree-builder',
      title: '🌳 Tree Builder Challenge',
      description: 'Build the perfect decision tree as fast as you can!',
      difficulty: 'Medium'
    },
    {
      id: 'decision-quiz',
      title: '❓ Decision Quiz',
      description: 'Test your knowledge about decision trees!',
      difficulty: 'Hard'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold text-center mb-8 text-purple-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Fun Games to Play! 🎮
      </motion.h1>

      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Snake Game 🐍</h2>
        {currentGame === 'snake-game' && <SnakeGame />}
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              transition: { delay: index * 0.2 }
            }}
          >
            <button
              onClick={() => setCurrentGame(game.id)}
              className="w-full text-left"
            >
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h2 className="text-2xl font-bold mb-2">{game.title}</h2>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  game.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                  game.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {game.difficulty}
                </span>
              </motion.div>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GamesPage; 