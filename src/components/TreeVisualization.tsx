import React from 'react';
import { TreeNode } from './TreeNode';
import { Node, TreeData, Position } from '../types';
import Xarrow from 'react-xarrows';

interface TreeVisualizationProps {
  data: TreeData;
  selectedNode: string | null;
  editingNode: string | null;
  onNodeMove: (nodeId: string, position: Position) => void;
  onNodeSelect: (nodeId: string) => void;
  onNodeDelete: (nodeId: string) => void;
  onNodeEdit: (nodeId: string, content: string) => void;
  onStartEdit: (nodeId: string) => void;
  onEndEdit: () => void;
}

export const TreeVisualization: React.FC<TreeVisualizationProps> = ({
  data,
  selectedNode,
  editingNode,
  onNodeMove,
  onNodeSelect,
  onNodeDelete,
  onNodeEdit,
  onStartEdit,
  onEndEdit
}) => {
  return (
    <div className="relative w-full h-[600px] border border-gray-200 rounded-lg overflow-hidden">
      {data.nodes.map((node: Node) => (
        <TreeNode
          key={node.id}
          node={node}
          isSelected={selectedNode === node.id}
          isEditing={editingNode === node.id}
          onMove={(position) => onNodeMove(node.id, position)}
          onSelect={() => onNodeSelect(node.id)}
          onDelete={() => onNodeDelete(node.id)}
          onEdit={(content) => onNodeEdit(node.id, content)}
          onStartEdit={() => onStartEdit(node.id)}
          onEndEdit={onEndEdit}
        />
      ))}
      {data.connections.map((connection) => (
        <Xarrow
          key={`${connection.sourceId}-${connection.targetId}`}
          start={connection.sourceId}
          end={connection.targetId}
          color="#666"
          strokeWidth={2}
          path="straight"
        />
      ))}
    </div>
  );
}; 