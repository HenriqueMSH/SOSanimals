import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'

const Navbar = () => {
  
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
      })
    },[])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Pets</li>
            <li>Sobre nós</li>
            <li>Contate-nos</li>
            <li>Login/Cadastro</li>
        </ul>
    </nav>
  )
}

export default Navbar
