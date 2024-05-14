import React from "react";
import './Navbar.css'
import logo from '../../assets/QUINTEROS2.png'

const Navbar = () => {
   return (
   <nav className="NavbarCont">
<img src={logo} alt=""  className="logo" />
<ul>
    <li>Inicio</li>
    <li>Nosotros</li>
    <li>Acerca de</li>
    <li><button className="btn">Testimonios</button></li>
    <li><button className='btn'>Contactanos</button></li>
</ul>


    </nav>   
    )
}
export default Navbar