import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import '@repo/styles/tailwind/theme.css';
import '@repo/shadcn-ui/globals.css';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
