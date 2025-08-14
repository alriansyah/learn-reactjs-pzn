import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HelloWorld from './components/1-hello-world/HelloWorld.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelloWorld />
  </StrictMode>,
)
