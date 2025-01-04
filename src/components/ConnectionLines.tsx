import React from 'react';
import { Node, Connection } from '../types';

interface ConnectionLinesProps {
  connections: Connection[];
  nodes: Node[];
}

const ConnectionLines: React.FC<ConnectionLinesProps> = ({ connections, nodes }) => {
  const getNodeCenter = (node: Node) => ({
    x: node.position.x + 100, // Half of node width
    y: node.position.y + 30,  // Half of node height
  });

  return (
    <svg className="absolute inset-0 pointer-events-none">
      {connections.map(connection => {
        const sourceNode = nodes.find(n => n.id === connection.sourceId);
        const targetNode = nodes.find(n => n.id === connection.targetId);

        if (!sourceNode || !targetNode) return null;

        const source = getNodeCenter(sourceNode);
        const target = getNodeCenter(targetNode);

        return (
          <g key={connection.id}>
            <line
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              stroke="#2563eb"
              strokeWidth={2}
              markerEnd="url(#arrowhead)"
            />
          </g>
        );
      })}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="#2563eb"
          />
        </marker>
      </defs>
    </svg>
  );
};

export default ConnectionLines; 