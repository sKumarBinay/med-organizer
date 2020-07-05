import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Make sure sw are supported
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker
          .register('service-worker.js', { scope: '/' })
          .catch(err => console.log(`Service Worker: Error: ${err}`));
  });
}