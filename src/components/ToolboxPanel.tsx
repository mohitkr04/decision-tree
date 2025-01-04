import React from 'react';
import { motion } from 'framer-motion';

interface ToolboxPanelProps {
  onAddNode: (nodeType: string) => void;
}

const ToolboxPanel: React.FC<ToolboxPanelProps> = ({ onAddNode }) => {
  const nodeTypes = ['Decision', 'Condition', 'Action', 'Output'];

  return (
    <div className="w-64 bg-gray-100 p-4 rounded-lg mr-4">
      <h3 className="text-lg font-semibold mb-4">Available Nodes</h3>
      <div className="space-y-3">
        {nodeTypes.map((type) => (
          <motion.button
            key={type}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-200"
            onClick={() => onAddNode(type)}
          >
            {type}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ToolboxPanel; 