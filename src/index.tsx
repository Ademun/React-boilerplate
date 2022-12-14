import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Suspense fallback='Loading localisation...'>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);

reportWebVitals();
