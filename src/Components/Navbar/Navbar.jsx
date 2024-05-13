import React from "react";
import './Navbar.css'
import logo from '../../assets/QUINTEROS2.png'

const Navbar = () => {
   return (
   <nav className="ContainerNav">
<img src={logo} alt=""  className="logo" />
<ul>
    <li>Inicio</li>
    <li>Nosotros</li>
    <li>Acerca de</li>
    <li>Testimonios</li>
    <li>Contactanos</li>
</ul>


    </nav>   
    )
}
export default Navbar