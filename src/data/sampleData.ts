import { Node } from '../types';

export const sampleNodes: Node[] = [
  {
    id: '1',
    type: 'question',
    content: 'Choose a Pet',
    children: ['2', '3', '4'],
    question: "What kind of pet would you like?",
    isRoot: true,
    position: { x: 300, y: 50 },
    options: [
      { text: "Dog", nextNodeId: '2' },
      { text: "Cat", nextNodeId: '3' },
      { text: "Bird", nextNodeId: '4' }
    ]
  },
  {
    id: '2',
    type: 'question',
    content: 'Dog Size',
    children: [],
    question: "What size dog would you prefer?",
    position: { x: 150, y: 200 },
    options: [
      { 
        text: "Small", 
        isLeaf: true, 
        outcome: "A Chihuahua might be perfect!" 
      },
      { 
        text: "Medium", 
        isLeaf: true, 
        outcome: "Consider a Border Collie!" 
      },
      { 
        text: "Large", 
        isLeaf: true, 
        outcome: "How about a Golden Retriever?" 
      }
    ]
  },
  {
    id: '3',
    type: 'question',
    content: 'Cat Personality',
    children: [],
    question: "What personality type do you prefer?",
    position: { x: 450, y: 200 },
    options: [
      { 
        text: "Very active", 
        isLeaf: true, 
        outcome: "A Siamese cat would be perfect!" 
      },
      { 
        text: "Calm and quiet", 
        isLeaf: true, 
        outcome: "Consider a Persian cat!" 
      },
      { 
        text: "Balanced", 
        isLeaf: true, 
        outcome: "An American Shorthair might be ideal!" 
      }
    ]
  },
  {
    id: '4',
    type: 'question',
    content: 'Bird Size',
    children: [],
    question: "What size bird would you prefer?",
    position: { x: 750, y: 200 },
    options: [
      { 
        text: "Small", 
        isLeaf: true, 
        outcome: "A Budgie would be great!" 
      },
      { 
        text: "Medium", 
        isLeaf: true, 
        outcome: "Consider a Cockatiel!" 
      },
      { 
        text: "Large", 
        isLeaf: true, 
        outcome: "A Macaw might be perfect!" 
      }
    ]
  }
];

export const sampleConnections = [
  { id: '1-2', sourceId: '1', targetId: '2' },
  { id: '1-3', sourceId: '1', targetId: '3' },
  { id: '1-4', sourceId: '1', targetId: '4' }
];

export const sampleTreeData = {
  nodes: sampleNodes,
  connections: sampleConnections
};

export const quizQuestions = [
  {
    id: 'q1',
    question: "What is the main purpose of a decision tree?",
    options: [
      "To make random choices",
      "To help make structured decisions",
      "To draw pretty diagrams",
      "To confuse people"
    ],
    correct: 1
  }
];

export const learningSteps = [
  {
    id: 'intro',
    title: "What is a Decision Tree?",
    content: "A decision tree is a flowchart-like structure that helps you make decisions. Each internal node represents a question, and each branch represents a possible answer.",
    animation: "tree-grow"
  },
  {
    id: 'components',
    title: "Components of a Decision Tree",
    content: "Decision trees have three main parts: nodes (questions), branches (possible answers), and leaves (final outcomes).",
    animation: "components-highlight"
  },
  {
    id: 'usage',
    title: "How to Use Decision Trees",
    content: "Start at the top (root) node and answer each question. Follow the branches based on your answers until you reach a final outcome.",
    animation: "tree-traverse"
  }
];