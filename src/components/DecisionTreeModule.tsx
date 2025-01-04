import { motion } from 'framer-motion';
import { useState } from 'react';
import { LearningMode } from './modes/LearningMode';
import { BuildMode } from './modes/BuildMode';
import { QuizMode } from './modes/QuizMode';
import { ExploreMode } from './modes/ExploreMode';

type ModeType = 'learn' | 'build' | 'quiz' | 'explore';

export const DecisionTreeModule = () => {
  const [currentMode, setCurrentMode] = useState<ModeType>('learn');
  const [score, setScore] = useState(0);

  const modeIcons: Record<ModeType, string> = {
    learn: '📚',
    build: '🏗️',
    quiz: '❓',
    explore: '🔍'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <motion.div 
        className="flex gap-6 mb-8 justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {(Object.keys(modeIcons) as ModeType[]).map((mode) => (
          <button
            key={mode}
            onClick={() => setCurrentMode(mode)}
            className={`px-6 py-3 rounded-xl flex flex-col items-center ${
              currentMode === mode 
                ? 'bg-blue-500 text-white transform scale-110' 
                : 'bg-white text-blue-500 hover:bg-blue-50'
            } transition-all shadow-md hover:shadow-lg`}
          >
            <span className="text-2xl mb-1">{modeIcons[mode]}</span>
            <span className="text-lg font-bold">
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </span>
          </button>
        ))}
      </motion.div>

      {/* Fun Score Display */}
      <motion.div 
        className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <span className="text-xl">🌟 Stars: {score}</span>
      </motion.div>

      {/* Content Area */}
      <div className="container mx-auto">
        {renderContent()}
      </div>
    </div>
  );

  function renderContent() {
    switch (currentMode) {
      case 'learn':
        return <LearningMode />;
      case 'build':
        return <BuildMode />;
      case 'quiz':
        return <QuizMode onScoreUpdate={handleScoreUpdate} />;
      case 'explore':
        return <ExploreMode />;
      default:
        return null;
    }
  }

  function handleScoreUpdate(points: number) {
    setScore(prev => prev + points);
  }
}; 