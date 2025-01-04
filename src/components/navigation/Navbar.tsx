import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: '🏠 Home', color: 'bg-blue-500' },
    { path: '/learn', label: '📚 Learn', color: 'bg-green-500' },
    { path: '/playground', label: '🎮 Build Trees', color: 'bg-purple-500' },
    { path: '/games', label: '🎲 Games', color: 'bg-yellow-500' },
    { path: '/about', label: '❓ About', color: 'bg-pink-500' }
  ];

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🌳 Decision Tree Fun!
        </Link>
        <div className="flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative"
            >
              <motion.div
                className={`px-4 py-2 rounded-full text-white ${item.color} hover:opacity-90`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.div>
              {location.pathname === item.path && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-current"
                  layoutId="underline"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 