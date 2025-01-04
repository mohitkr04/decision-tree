import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    {
      title: "Learn About Decision Trees",
      description: "Start your adventure and learn how decisions work! 🎓",
      path: "/learn",
      color: "bg-blue-500"
    },
    {
      title: "Build Your Own Trees",
      description: "Create fun decision trees for your daily choices! 🌳",
      path: "/playground",
      color: "bg-green-500"
    },
    {
      title: "Play Fun Games",
      description: "Test your knowledge with exciting games! 🎮",
      path: "/games",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Decision Tree Fun! 🌟
        </h1>
        <p className="text-xl text-gray-600">
          Learn how to make better decisions through fun activities!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.2 }
            }}
          >
            <Link to={feature.path}>
              <motion.div
                className={`${feature.color} rounded-xl p-6 text-white h-full`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                <p className="text-lg">{feature.description}</p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6 } }}
      >
        <Link
          to="/about"
          className="inline-block bg-purple-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-purple-600 transition-colors"
        >
          Learn More About Us! 🤗
        </Link>
      </motion.div>
    </div>
  );
};

export default HomePage; 