import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));
root.render(<StrictApp />);
