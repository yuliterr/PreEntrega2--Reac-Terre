import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { NavLink, Link, useNavigate } from "react-router-dom";

import "./navbar.css"

const NavBar = () => {

  const navigate = useNavigate () 


  return (
    <nav className='navbar'>

        <div className='brand'>
        <button onClick={ () => navigate(-1)}>Atras</button>
        <p className="title-brand">PICUDITOS</p>
        </div>  

        

        <ul className= "categories">
            <NavLink to= "/category/verano" className={ ( {isActive} ) => isActive ? "category-active" : "category" }> Verano </NavLink>
            <NavLink to= "/category/invierno" className={ ( {isActive} ) => isActive ? "category-active" : "category" }>Invierno</NavLink>
            <NavLink to= "/category/liquidacion" className={ ( {isActive} ) => isActive ? "category-active" : "category" }>Liquidación</NavLink>
            <NavLink to= "/category/nuevo" className={ ( {isActive} ) => isActive ? "category-active" : "category" }>¡Nuevo!</NavLink>
        </ul>

        <Link to="/" className="primary-font-color">
            <img className="logo" src="../public/img/logo.jpeg" alt="" />
    
        </Link>
      
        <CartWidget />
    </nav>
  )
}

export default NavBar
