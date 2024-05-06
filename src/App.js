import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Hero from './Components/Hero/Hero'
import Pets from './Components/Pets/Pets'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> 
          <Route path="/" element={<div><Hero /><Title /><Pets /><About /><Contact /></div>} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/pets" element={<Pets />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Hero />} />
        </Routes> 
      </div>
    </Router>
  )
}

export default App
