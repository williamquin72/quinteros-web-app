import React from "react";
import './Navbar.css'
import logo from '../../assets/QUINTEROS2.png'

const Navbar = () => {
   return (
   <nav className="NavbarCont">
<img src={logo} alt=""  className="logo" />
<ul>
    <li><button className="btn" >Inicio</button></li>
    <li><button className="btn">Nosotros</button></li>
    <li><button className='btn'>Acerca de</button></li>
    <li><button className="btn">Testimonios</button></li>
    <li><button className='btn'>Contactanos</button></li>
</ul>


    </nav>   
    )
}
export default Navbar