import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TreeVisualization } from '../TreeVisualization';
import { Node, Position, TreeData } from '../../types';
import { sampleTreeData } from '../../data/sampleData';

export const BuildMode: React.FC = () => {
  const [treeData, setTreeData] = useState<TreeData>(sampleTreeData);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [editingNode, setEditingNode] = useState<string | null>(null);

  const handleAddNode = (type: 'question' | 'answer') => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      type,
      position: { x: Math.random() * 600 + 100, y: Math.random() * 400 + 100 },
      content: type === 'question' ? 'New Question' : 'New Answer',
      children: [],
      options: type === 'question' ? [{ text: 'Option 1' }] : undefined
    };

    setTreeData({
      ...treeData,
      nodes: [...treeData.nodes, newNode]
    });
  };

  const handleNodeMove = (nodeId: string, position: Position) => {
    setTreeData({
      ...treeData,
      nodes: treeData.nodes.map(node =>
        node.id === nodeId ? { ...node, position } : node
      )
    });
  };

  const handleNodeDelete = (nodeId: string) => {
    setTreeData({
      nodes: treeData.nodes.filter(node => node.id !== nodeId),
      connections: treeData.connections.filter(
        conn => conn.sourceId !== nodeId && conn.targetId !== nodeId
      )
    });
  };

  const handleNodeContentEdit = (nodeId: string, content: string) => {
    setTreeData({
      ...treeData,
      nodes: treeData.nodes.map(node =>
        node.id === nodeId ? { ...node, content } : node
      )
    });
  };

  const handleConnect = (sourceId: string, targetId: string) => {
    if (sourceId === targetId) return;
    
    const connectionExists = treeData.connections.some(
      conn => conn.sourceId === sourceId && conn.targetId === targetId
    );

    if (!connectionExists) {
      setTreeData({
        ...treeData,
        connections: [
          ...treeData.connections,
          { id: `${sourceId}-${targetId}`, sourceId, targetId }
        ]
      });
    }
  };

  return (
    <div className="p-6">
      {/* Tool Panel */}
      <motion.div
        className="mb-6 p-4 bg-white rounded-xl shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-bold mb-4 text-purple-600">Building Tools 🛠️</h2>
        <div className="flex gap-4">
          <motion.button
            onClick={() => handleAddNode('question')}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>➕</span> Add Question Node
          </motion.button>
          <motion.button
            onClick={() => handleAddNode('answer')}
            className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>➕</span> Add Answer Node
          </motion.button>
        </div>
      </motion.div>

      {/* Instructions Panel */}
      <motion.div
        className="mb-6 p-4 bg-white rounded-xl shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      >
        <h3 className="text-lg font-bold mb-2 text-purple-600">How to Build 📝</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Click "Add Question Node" to add a new question</li>
          <li>Click "Add Answer Node" to add possible answers</li>
          <li>Drag nodes to move them around</li>
          <li>Double-click a node to edit its text</li>
          <li>Click the ❌ to delete a node</li>
        </ul>
      </motion.div>

      {/* Tree Visualization Area */}
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4 } }}
      >
        <div className="border-b border-gray-200 p-4">
          <h3 className="text-lg font-bold text-purple-600">Your Decision Tree 🌳</h3>
        </div>
        <div className="p-4" style={{ height: '600px' }}>
          <TreeVisualization
            data={treeData}
            selectedNode={selectedNode}
            editingNode={editingNode}
            onNodeMove={handleNodeMove}
            onNodeSelect={setSelectedNode}
            onNodeDelete={handleNodeDelete}
            onNodeEdit={handleNodeContentEdit}
            onStartEdit={setEditingNode}
            onEndEdit={() => setEditingNode(null)}
          />
        </div>
      </motion.div>

      {/* Help Tips */}
      <motion.div
        className="mt-6 p-4 bg-yellow-50 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
      >
        <h3 className="text-lg font-bold mb-2 text-yellow-700">Tips 💡</h3>
        <ul className="list-disc list-inside space-y-2 text-yellow-800">
          <li>Start with a main question at the top</li>
          <li>Add answer options below each question</li>
          <li>Keep your questions simple and clear</li>
          <li>Try to balance your tree on both sides</li>
        </ul>
      </motion.div>
    </div>
  );
}; 