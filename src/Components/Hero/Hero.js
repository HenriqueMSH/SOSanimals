import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Adote o amor! Adote um amigo peludo.</h1>
        <p>O abandono de cães e gatos na cidade do Recife, em Pernambuco, é um problema alarmente que clama por atenção e ação imediata! É preciso incentivar a adoção responsável e o cuidado com os animais de estimação, promovendo uma cultura de respeito e compaixão pelos seres vivos que compartilham conosco o espaço urbano.</p>
        <button className='btn'>Explore mais <img src={dark_arrow} alt=""></img></button>
      </div>
    </div>
  )
}

export default Hero

