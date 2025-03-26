import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const queryParamLang = new URLSearchParams(document.location.search).get('lang') ?? 'en';
document.cookie = `language=${queryParamLang}; path=/`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
