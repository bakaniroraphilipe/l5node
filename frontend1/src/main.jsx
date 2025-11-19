import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Myname from'./Name.jsx'
import ClassNames from './Classl5sod.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App />
    {/*
      
      
      <Myname />
      
      <ClassNames firstname="John" lastname="Doe" age={30} sex="Male" country="USA" city="New York" zip="10001" phone="123-456-7890" email="john.doe@example.com" address="123 Main St" nationality="American" maritalStatus="Single" occupation="Software Engineer"  />
  */}
  </StrictMode>,
)
