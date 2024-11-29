import CartWidget from "./CartWidget"
import "./navbar.css"

import React from 'react'

const NavBar = () => {
  return (
    <nav className='navbar'>

        <div className='brand'>
          <img className="logo" src="../src/assets/imagenes/logo.jpeg" alt="" />
            <p className="texto">PICUDITOS</p>
        </div>  

        <ul className='categorias'>
            <li className="li">Verano</li>
            <li className="li">Invierno</li>
            <li className="li">Liquidación</li>
            <li className="li">¡Nuevo!</li>
        </ul>
      
        <CartWidget />
    </nav>
  )
}

export default NavBar
