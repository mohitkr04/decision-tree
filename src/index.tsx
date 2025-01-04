import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './config/firebase';
import { ErrorBoundary } from './components/ErrorBoundary';

// Add error boundary
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
); 