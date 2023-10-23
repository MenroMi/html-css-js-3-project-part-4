import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import CountriesProvider from './provider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <CountriesProvider>
    <App />
  </CountriesProvider>,
  // </React.StrictMode>,
);