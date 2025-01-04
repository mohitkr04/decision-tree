import React from 'react';
import { motion } from 'framer-motion';
import { Node, Position } from '../types';

interface TreeNodeProps {
  node: Node;
  isSelected: boolean;
  isEditing: boolean;
  onMove: (position: Position) => void;
  onSelect: () => void;
  onDelete: () => void;
  onEdit: (content: string) => void;
  onStartEdit: () => void;
  onEndEdit: () => void;
}

export const TreeNode: React.FC<TreeNodeProps> = ({
  node,
  isSelected,
  isEditing,
  onMove,
  onSelect,
  onDelete,
  onEdit,
  onStartEdit,
  onEndEdit
}) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragEnd={(_, info) => {
        onMove({
          x: node.position.x + info.offset.x,
          y: node.position.y + info.offset.y
        });
      }}
      onClick={onSelect}
      style={{
        position: 'absolute',
        left: node.position.x,
        top: node.position.y,
        zIndex: isSelected ? 2 : 1
      }}
      className={`p-4 rounded-lg shadow-md ${
        isSelected ? 'bg-blue-500 text-white' : 'bg-white'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isEditing ? (
        <input
          autoFocus
          defaultValue={node.content}
          className="w-full bg-white text-black p-1 rounded"
          onBlur={(e) => {
            onEdit(e.target.value);
            onEndEdit();
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onEdit(e.currentTarget.value);
              onEndEdit();
            }
          }}
        />
      ) : (
        <>
          <div onDoubleClick={onStartEdit}>{node.content}</div>
          {node.question && (
            <div className="text-sm mt-2 opacity-75">{node.question}</div>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            ×
          </button>
        </>
      )}
    </motion.div>
  );
};

export default TreeNode; 