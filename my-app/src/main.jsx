import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Never Touch main.jsx
createRoot(document.getElementById('root')).render(
  // Elements below are referred to as "Functional Components"
  <StrictMode>
    <App />
  </StrictMode>,
)
