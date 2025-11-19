import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Add from './Add.jsx'
import Baka from './Myname.jsx'
import Class1 from './Form.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Baka />
    <Class1 FirstName="John" LastName="Doe" Age={30} Address="123 Main St" />
    {/*
    <App />
    <Add />*/}
  </StrictMode>,
)
