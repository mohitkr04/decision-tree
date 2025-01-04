import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const INITIAL_FOOD = { x: 15, y: 10 };

export const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
    setFood(newFood);
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    generateFood();
    setIsGameOver(false);
    setScore(0);
    setGameStarted(false);
  };

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (!gameStarted) return;

    const keyDirections: { [key: string]: { x: number; y: number } } = {
      ArrowUp: { x: 0, y: -1 },
      ArrowDown: { x: 0, y: 1 },
      ArrowLeft: { x: -1, y: 0 },
      ArrowRight: { x: 1, y: 0 }
    };

    if (keyDirections[event.key]) {
      const newDirection = keyDirections[event.key];
      if (direction.x !== -newDirection.x && direction.y !== -newDirection.y) {
        setDirection(newDirection);
      }
    }
  }, [direction, gameStarted]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (!gameStarted || isGameOver) return;

    const gameLoop = setInterval(() => {
      setSnake(currentSnake => {
        const head = currentSnake[0];
        const newHead = {
          x: (head.x + direction.x + GRID_SIZE) % GRID_SIZE,
          y: (head.y + direction.y + GRID_SIZE) % GRID_SIZE
        };

        // Check if snake hits itself
        if (currentSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
          setIsGameOver(true);
          return currentSnake;
        }

        const newSnake = [newHead, ...currentSnake];

        // Check if snake eats food
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore(s => s + 10);
          generateFood();
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(gameLoop);
  }, [direction, food, generateFood, gameStarted, isGameOver]);

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="mb-4 text-2xl font-bold">Score: {score}</div>
      <div 
        className="relative bg-green-100 rounded-lg overflow-hidden"
        style={{ 
          width: GRID_SIZE * CELL_SIZE,
          height: GRID_SIZE * CELL_SIZE 
        }}
      >
        {snake.map((segment, index) => (
          <motion.div
            key={index}
            className="absolute bg-green-500 rounded"
            style={{
              width: CELL_SIZE - 2,
              height: CELL_SIZE - 2,
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        ))}
        <motion.div
          className="absolute bg-red-500 rounded"
          style={{
            width: CELL_SIZE - 2,
            height: CELL_SIZE - 2,
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        />
      </div>
      {!gameStarted ? (
        <motion.button
          className="mt-4 px-6 py-3 bg-green-500 text-white rounded-full font-bold"
          onClick={() => setGameStarted(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Game! 🎮
        </motion.button>
      ) : isGameOver && (
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-bold text-red-500 mb-4">Game Over! 😢</h2>
          <button
            className="px-6 py-3 bg-green-500 text-white rounded-full font-bold"
            onClick={resetGame}
          >
            Play Again! 🔄
          </button>
        </motion.div>
      )}
      <div className="mt-4 text-center text-gray-600">
        <p>Use arrow keys to control the snake! 🐍</p>
        <p>Collect the red dots to grow and earn points! 🔴</p>
      </div>
    </motion.div>
  );
}; 