export interface TreeNode {
  id: string;
  question: string;
  options: TreeOption[];
  isRoot?: boolean;
  position?: {
    x: number;
    y: number;
  };
}

export interface TreeOption {
  text: string;
  nextNodeId?: string;
  isLeaf?: boolean;
  outcome?: string;
}

export interface TreeData {
  nodes: TreeNode[];
} 