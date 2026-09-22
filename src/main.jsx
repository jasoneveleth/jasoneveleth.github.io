import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// The HTML in #root is prerendered at build time (see prerender.js), so we
// hydrate — adopt the existing DOM — instead of creating a fresh root.
hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <App />
  </StrictMode>,
)
