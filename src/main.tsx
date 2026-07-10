import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ErrorBoundary } from './components/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#030303] text-zinc-900 dark:text-white p-8 text-center">
          <div>
            <h1 className="text-2xl font-bold mb-2">KickoTech</h1>
            <p className="text-zinc-500">Something went wrong loading the site. Please refresh the page.</p>
          </div>
        </div>
      }
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
