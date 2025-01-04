# 🌳 Decision Tree Learning for Kids

An interactive web application designed to help children aged 10-12 learn about decision-making through fun and engaging decision trees.

## 🚀 Features

- **Interactive Decision Tree Builder**: Create and customize decision trees with drag-and-drop functionality
- **Learning Modules**: Kid-friendly tutorials and examples
- **Fun Games**: Educational games including Snake and decision-making challenges
- **Visual Examples**: Pre-built decision trees for common scenarios
- **Responsive Design**: Works on computers, tablets, and mobile devices
- **Animated Interface**: Engaging animations using Framer Motion
- **Save & Share**: Export and share your decision trees

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.x with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Drag & Drop**: React DnD
- **Tree Visualization**: React Xarrows
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Dependencies

```json
{
  "dependencies": {
    "@types/node": "^16.18.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "@types/react-router-dom": "^5.3.3",
    "framer-motion": "^10.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.0.0",
    "react-xarrows": "^2.0.2",
    "react-dnd": "^16.0.1",
    "react-dnd-html5-backend": "^16.0.1",
    "tailwindcss": "^3.0.0",
    "typescript": "^4.9.0"
  }
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mohitkr04/decision-tree.git
cd decision-tree
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser

## 📁 Project Structure

```
src/
├── components/
│   ├── navigation/
│   │   └── Navbar.tsx
│   ├── games/
│   │   └── SnakeGame.tsx
│   ├── modes/
│   │   ├── BuildMode.tsx
│   │   ├── LearnMode.tsx
│   │   └── QuizMode.tsx
│   └── TreeVisualization.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── LearnPage.tsx
│   ├── PlaygroundPage.tsx
│   ├── ExamplesPage.tsx
│   ├── GamesPage.tsx
│   └── AboutPage.tsx
├── context/
│   └── TreeContext.tsx
├── types/
│   └── index.ts
└── App.tsx
```

## 🎨 Features in Detail

### 1. Decision Tree Builder
- Drag and drop interface
- Node editing and connection
- Real-time visualization
- Undo/Redo functionality
- Save and load trees

### 2. Learning Mode
- Interactive tutorials
- Step-by-step guides
- Video explanations
- Progress tracking

### 3. Games
- Snake game integration
- Decision-making challenges
- Quiz mode
- Achievement system

### 4. Examples
- Pre-built decision trees
- Real-world scenarios
- Interactive demonstrations
- Customizable templates

## 🎯 Educational Goals

- Teach logical thinking
- Improve decision-making skills
- Enhance problem-solving abilities
- Develop analytical thinking
- Foster creativity

## 🔒 Security

- No personal data collection
- Safe for children
- COPPA compliant
- Secure data storage

## 🎨 Animations

The application uses Framer Motion for smooth animations:
- Page transitions
- Component mounting/unmounting
- Interactive elements
- Drag and drop feedback
- Modal transitions

## 🔄 Future Enhancements

1. **Multiplayer Features**
   - Collaborative tree building
   - Real-time sharing
   - Classroom integration

2. **Advanced Features**
   - AI-powered suggestions
   - More game modes
   - Advanced visualizations
   - Mobile app version

3. **Educational Integration**
   - Teacher dashboard
   - Progress tracking
   - Curriculum alignment
   - Certificate system

## 🐛 Known Issues

- Tree connections may flicker during animation
- Mobile drag and drop needs optimization
- Safari browser specific styling issues

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👥 Authors

- Mohit Kumar - Initial work - [mohitkr04](https://github.com/mohitkr04)

## 🙏 Acknowledgments

- React Team for the amazing framework
- Framer Motion for beautiful animations
- All contributors and supporters
