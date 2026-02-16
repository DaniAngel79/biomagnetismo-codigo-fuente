import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './ErrorBoundary'; // 1. Agrega esta importación

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary> {/* 2. Envuelve tu App */}
        <App />
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);