// Analytics BORA LÁ - Helper de Global Window
window.trackWhatsApp = window.trackWhatsApp || function(d) {};
window.trackCalculadora = window.trackCalculadora || function() {};
window.trackParceria = window.trackParceria || function() {};
import React from 'react';
import { createRoot } from 'react-dom/client';
import './App.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);