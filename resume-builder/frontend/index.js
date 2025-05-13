import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // ✅ corrected path
import './styles/index.css'; // ✅ make sure this file exists

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
