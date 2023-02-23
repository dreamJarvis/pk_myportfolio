import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//The app component is going to be rendered inside root which is just one div present in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
