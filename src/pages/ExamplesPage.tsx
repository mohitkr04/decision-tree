import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ExamplesPage = () => {
  const [selectedExample, setSelectedExample] = useState<number | null>(null);

  const examples = [
    {
      id: 1,
      title: "What Should I Eat? 🍽️",
      description: "Help decide what to eat based on your mood and time!",
      image: "/images/food-tree.png", // You'll need to add these images
      tree: {
        root: "Are you very hungry?",
        branches: [
          "Yes → Do you have time to cook? → Yes → Make pasta! | No → Order pizza!",
          "No → Want something sweet? → Yes → Fruit salad! | No → Small sandwich!"
        ]
      }
    },
    {
      id: 2,
      title: "Choose Your Pet! 🐾",
      description: "Find the perfect pet for your lifestyle!",
      image: "/images/pet-tree.png",
      tree: {
        root: "Do you have a big house?",
        branches: [
          "Yes → Like outdoor activities? → Yes → Get a dog! | No → Get a cat!",
          "No → Want a quiet pet? → Yes → Get a fish! | No → Get a hamster!"
        ]
      }
    },
    {
      id: 3,
      title: "Weekend Activity! 🎮",
      description: "Decide what to do on your weekend!",
      image: "/images/weekend-tree.png",
      tree: {
        root: "Is it sunny outside?",
        branches: [
          "Yes → Like sports? → Yes → Play in the park! | No → Have a picnic!",
          "No → Stay indoors? → Yes → Play video games! | No → Visit a museum!"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            Fun Decision Tree Examples! 🌳
          </h1>
          <p className="text-xl text-gray-600">
            Click on any example to see how it works!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.2 }
              }}
            >
              <div 
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedExample(example.id)}
              >
                <div className="h-48 bg-purple-100 flex items-center justify-center">
                  <span className="text-6xl">{example.title.split(' ')[0] === "What" ? "❓" : example.title.match(/[^\w\s]/g)?.[0]}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-600 mb-2">
                    {example.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {example.description}
                  </p>
                  <button
                    className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    View Example
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Example Detail Modal */}
        {selectedExample && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-purple-600">
                    {examples.find(e => e.id === selectedExample)?.title}
                  </h2>
                  <button
                    onClick={() => setSelectedExample(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Tree Visualization */}
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-600 mb-4">
                      How it works:
                    </h3>
                    <div className="space-y-4">
                      <p className="font-bold">Start: {examples.find(e => e.id === selectedExample)?.tree.root}</p>
                      {examples.find(e => e.id === selectedExample)?.tree.branches.map((branch, index) => (
                        <p key={index} className="ml-6">
                          ↳ {branch}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Try it yourself button */}
                  <div className="text-center">
                    <Link
                      to="/playground"
                      className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
                    >
                      Try Building This! 🎨
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Help Section */}
        <motion.div
          className="mt-12 bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
        >
          <h2 className="text-2xl font-bold text-purple-600 mb-4">
            How to Use These Examples 💡
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>1. Click on any example to see how it works</li>
            <li>2. Study the questions and answers in each tree</li>
            <li>3. Try to build something similar in the playground</li>
            <li>4. Use these as inspiration for your own trees!</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default ExamplesPage; 