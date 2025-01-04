import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">
          About Decision Tree Fun! 🌟
        </h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              What is Decision Tree Fun? 🤔
            </h2>
            <p className="text-lg text-gray-700">
              Decision Tree Fun is a website made just for kids like you! Here, you can learn 
              how to make better decisions through fun games and activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              What Can You Do Here? 🎮
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Learn about decision trees through fun videos</li>
              <li>Build your own decision trees</li>
              <li>Play exciting games</li>
              <li>Test your knowledge with quizzes</li>
              <li>Earn points and achievements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">
              Why Learn About Decision Trees? 🌳
            </h2>
            <p className="text-lg text-gray-700">
              Decision trees help you make better choices! They're like a map that guides 
              you to the best decision. Learning about decision trees can help you:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mt-2 space-y-2">
              <li>Make better choices</li>
              <li>Solve problems</li>
              <li>Think logically</li>
              <li>Plan ahead</li>
            </ul>
          </section>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
        >
          <p className="text-lg text-purple-600 font-bold">
            Ready to start your adventure? 🚀
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage; 