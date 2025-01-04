import React, { createContext, useContext, useState } from 'react';
import { TreeData } from '../types';

interface TreeContextType {
  treeData: TreeData;
  updateTree: (newData: TreeData) => void;
  score: number;
  updateScore: (points: number) => void;
  progress: Record<string, boolean>;
  updateProgress: (sectionId: string) => void;
}

const TreeContext = createContext<TreeContextType | undefined>(undefined);

export const TreeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [treeData, setTreeData] = useState<TreeData>({ 
    nodes: [],
    connections: [] 
  });
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState<Record<string, boolean>>({});

  const updateTree = (newData: TreeData) => {
    setTreeData(newData);
  };

  const updateScore = (points: number) => {
    setScore(prev => prev + points);
  };

  const updateProgress = (sectionId: string) => {
    setProgress(prev => ({ ...prev, [sectionId]: true }));
  };

  return (
    <TreeContext.Provider value={{
      treeData,
      updateTree,
      score,
      updateScore,
      progress,
      updateProgress
    }}>
      {children}
    </TreeContext.Provider>
  );
};

export const useTree = () => {
  const context = useContext(TreeContext);
  if (!context) {
    throw new Error('useTree must be used within a TreeProvider');
  }
  return context;
}; 