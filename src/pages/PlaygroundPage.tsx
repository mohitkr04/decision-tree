import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BuildMode } from '../components/modes/BuildMode';

const PlaygroundPage = () => {
  const [showTutorial, setShowTutorial] = useState(true);

  const tutorials = [
    {
      title: "What is a Decision Tree? 🌳",
      content: "A decision tree helps you make choices by asking questions and following the answers!"
    },
    {
      title: "How to Build? 🏗️",
      content: "Start with a question, add possible answers, and keep building from there."
    },
    {
      title: "Example Trees 📚",
      content: "Try building a tree about 'What to eat for lunch?' or 'Which pet to choose?'"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header Section */}
      <motion.div
        className="bg-white shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-purple-600 text-center">
            Build Your Decision Tree! 🌳
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Create your own decision tree and learn while having fun!
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-6">
        {/* Tutorial Section */}
        {showTutorial && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-purple-600">
                  Quick Start Guide 🚀
                </h2>
                <button
                  onClick={() => setShowTutorial(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {tutorials.map((tutorial, index) => (
                  <motion.div
                    key={tutorial.title}
                    className="bg-purple-50 rounded-lg p-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: index * 0.2 }
                    }}
                  >
                    <h3 className="text-xl font-bold text-purple-700 mb-2">
                      {tutorial.title}
                    </h3>
                    <p className="text-purple-600">
                      {tutorial.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6 } }}
              >
                <button
                  onClick={() => setShowTutorial(false)}
                  className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                >
                  Let's Start Building! 🎨
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Main Building Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: showTutorial ? 0.8 : 0 } }}
        >
          <div className="bg-white rounded-xl shadow-lg">
            {/* Tool Bar */}
            <div className="border-b border-gray-200 p-4">
              <div className="flex gap-4">
                {!showTutorial && (
                  <button
                    onClick={() => setShowTutorial(true)}
                    className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                  >
                    Show Tutorial 📚
                  </button>
                )}
                <a
                  href="/examples"
                  className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                >
                  View Examples 👀
                </a>
                <button
                  className="px-4 py-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                  onClick={() => window.print()}
                >
                  Save Tree 💾
                </button>
              </div>
            </div>

            {/* Build Mode Component */}
            <BuildMode />
          </div>

          {/* Help Section */}
          <motion.div
            className="mt-8 grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-600 mb-4">
                Need Help? 🤔
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Double-click any node to edit its text</li>
                <li>• Drag nodes to move them around</li>
                <li>• Connect nodes by dragging between them</li>
                <li>• Use the delete button to remove nodes</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-purple-600 mb-4">
                Pro Tips! 💡
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Start with a simple question</li>
                <li>• Keep your tree balanced</li>
                <li>• Use clear and short questions</li>
                <li>• Add fun emojis to make it colorful! 🎨</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PlaygroundPage; 