import { TreeData } from '../types';

export const generateUniqueId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const validateTree = (tree: TreeData): boolean => {
  // Add validation logic
  return true;
};

export const calculateScore = (answers: number[], correctAnswers: number[]): number => {
  return answers.reduce((score, answer, index) => {
    return score + (answer === correctAnswers[index] ? 10 : 0);
  }, 0);
}; 