import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Pets from './Components/Pets/Pets'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
      <div>
        <Navbar/>
        <Hero/>
        <Title/>
        <Pets />
        <About />
        <Contact />
      </div>
  )
}

export default App
