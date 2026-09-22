import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Rendered in Node at build time (via Vite SSR) and inlined into #root.
// Must produce the same markup as the client's first render so hydrateRoot
// can adopt it without a mismatch.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
