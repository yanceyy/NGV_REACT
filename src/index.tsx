import './index.css';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Router from './router';
import { worker } from './mocks/browser';

worker.start();

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
