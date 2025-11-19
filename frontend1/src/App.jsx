import React from 'react'
import { BrowserRouter as Router, Routes, route } from 'react-router-dom';
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import NotFound from './Components/NotFound.jsx'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
