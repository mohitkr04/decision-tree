import { motion } from 'framer-motion';
import { useState } from 'react';

export const ExploreMode: React.FC = () => {
  const [_unused] = useState<string | null>(null);

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Explore Decision Trees</h2>
        {/* Add explore mode content */}
      </div>
    </motion.div>
  );
}; 