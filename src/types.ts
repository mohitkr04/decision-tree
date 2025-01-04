export interface Position {
  x: number;
  y: number;
}

export interface NodeOption {
  text: string;
  nextNodeId?: string;
  isLeaf?: boolean;
  outcome?: string;
}

export interface Node {
  id: string;
  type: string;
  position: Position;
  content: string;
  children: string[];
  question?: string;
  options?: NodeOption[];
  isRoot?: boolean;
}

export interface Connection {
  id: string;
  sourceId: string;
  targetId: string;
}

export interface TreeData {
  nodes: Node[];
  connections: Connection[];
} 