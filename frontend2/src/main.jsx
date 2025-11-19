import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Farm from './farm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {
    /*
    <Farm animal='Cow' type='human' crops='hhh' />
    <Myname />
     */}

    <App />
  </StrictMode>,
)
