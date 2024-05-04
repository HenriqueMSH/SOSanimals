import React from 'react'
import './Pets.css'
import pet_1 from '../../assets/pet-1.jpg'
import pet_2 from '../../assets/pet-2.jpg'
import pet_3 from '../../assets/pet-3.jpg'
import icon_location from '../../assets/icon-location.png'

const Pets = () => {
  return (
    <div className='pets'>
      
      <div className="pet">
        <img src={pet_1} alt="" />
        <div className='caption'>
          <img src={icon_location} alt=""></img>
        </div>
        <div className='text'>
          <h2>Luna</h2>
          <h4>Vista pela última vez em frente a praça do Derby</h4>
        </div>
      </div>

      <div className="pet">
        <img src={pet_2} alt="" />
        <div className='caption'>
          <img src={icon_location} alt=""></img>
        </div>
        <div className='text'>
          <h2>Fred</h2>
          <h4>Se encontra na casa amarela de número 1</h4>
        </div>
      </div>

      <div className="pet">
        <img src={pet_3} alt="" />
        <div className='caption'>
          <img src={icon_location} alt=""></img>
        </div>
        <div className='text'>
          <h2>Gatos(filhotes)</h2>
          <h4>Em frente ao Bloco A da UNINASSAU</h4>
        </div>
      </div>

    </div>
  )
}

export default Pets
