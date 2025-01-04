import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TreeProvider } from './context/TreeContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import PlaygroundPage from './pages/PlaygroundPage';
import GamesPage from './pages/GamesPage';
import AboutPage from './pages/AboutPage';
import ExamplesPage from './pages/ExamplesPage';

function App() {
  return (
    <BrowserRouter>
      <TreeProvider>
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/playground" element={<PlaygroundPage />} />
            <Route path="/examples" element={<ExamplesPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </TreeProvider>
    </BrowserRouter>
  );
}

export default App;
