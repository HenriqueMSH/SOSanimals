import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Pets">Pets</Link></li>
            <li><Link to="/About">Sobre nós</Link></li>
            <li><Link to="/Contact">Contate-nos</Link></li>
            <li><Link to="/Login">Login/Cadastro</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
