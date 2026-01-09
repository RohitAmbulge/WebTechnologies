import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>Main start</div>
    <App />
    <div>main ends</div>
  </StrictMode>,
)


