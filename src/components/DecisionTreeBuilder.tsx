import React, { useState } from 'react';
import { TreeVisualization } from './TreeVisualization';
import { Node, TreeData } from '../types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const DecisionTreeBuilder: React.FC = () => {
  const [treeData, setTreeData] = useState<TreeData>({
    nodes: [],
    connections: []
  });
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [editingNode, setEditingNode] = useState<string | null>(null);

  const handleAddNode = (type: string) => {
    const newNode: Node = {
      id: `node-${Date.now()}`,
      type,
      position: { x: Math.random() * 400 + 100, y: Math.random() * 400 + 100 },
      content: `New ${type}`,
      children: [],
      question: '',
      options: []
    };

    setTreeData({
      ...treeData,
      nodes: [...treeData.nodes, newNode]
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4">
        <div className="mb-4">
          <button
            onClick={() => handleAddNode('question')}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Add Question Node
          </button>
          <button
            onClick={() => handleAddNode('answer')}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Answer Node
          </button>
        </div>
        <TreeVisualization
          data={treeData}
          selectedNode={selectedNode}
          editingNode={editingNode}
          onNodeMove={(nodeId, position) => {
            setTreeData({
              ...treeData,
              nodes: treeData.nodes.map(node =>
                node.id === nodeId ? { ...node, position } : node
              )
            });
          }}
          onNodeSelect={setSelectedNode}
          onNodeDelete={(nodeId) => {
            setTreeData({
              nodes: treeData.nodes.filter(node => node.id !== nodeId),
              connections: treeData.connections.filter(
                conn => conn.sourceId !== nodeId && conn.targetId !== nodeId
              )
            });
          }}
          onNodeEdit={(nodeId, content) => {
            setTreeData({
              ...treeData,
              nodes: treeData.nodes.map(node =>
                node.id === nodeId ? { ...node, content } : node
              )
            });
          }}
          onStartEdit={setEditingNode}
          onEndEdit={() => setEditingNode(null)}
        />
      </div>
    </DndProvider>
  );
}; 